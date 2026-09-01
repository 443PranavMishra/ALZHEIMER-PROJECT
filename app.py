"""
Smriti — memory care platform. All backend Python logic lives in this one file:
Flask routes/API, Supabase data access, and the FaceNet face-recognition pipeline.

============================== Database: Supabase ==============================
A managed Postgres instance plus a Storage service (S3-like buckets), reached
over its REST API via the `supabase` Python client -- no local database server
or driver setup to manage.
- Structured data (patients, caretakers) lives in Postgres tables. See
  supabase_schema.sql -- run that once in the Supabase SQL editor before
  starting the app.
- Face images are stored in two private Storage buckets (patient-faces,
  caretaker-faces) instead of local disk, so they survive redeploys.
- Face embeddings (512 floats from FaceNet) are stored as jsonb. At the scale
  of a single family/clinic (tens to low hundreds of faces), fetching all
  rows and comparing in Python via cosine similarity is fast (<10ms) and
  needs no vector index. If this ever needs to scale to thousands of
  patients, enable the `pgvector` extension in Supabase and switch that
  column to `vector(512)`.
Auth: uses the Supabase *service_role* key (server-side only, never expose it
to the browser) so the backend can read/write regardless of row-level
security policies. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env
(see .env.example).

=========================== Face recognition: FaceNet ===========================
`facenet_model.pt` is expected to be a FaceNet-style network (e.g.
facenet-pytorch's InceptionResnetV1) that takes a 160x160 RGB face crop
normalized to [-1, 1] and returns a 512-d embedding. Two faces belong to the
same person when the cosine similarity between their embeddings is above
FACE_MATCH_THRESHOLD. Face detection, cropping, alignment, resizing, and
normalization are all handled by facenet-pytorch's own MTCNN -- the exact
preprocessing InceptionResnetV1 checkpoints are trained against, and pure
PyTorch (no OpenCV dependency).
"""

import os
import json
import re
import requests
from urllib.parse import quote
import io
import base64
import uuid
import random
from datetime import datetime, timezone, timedelta

import numpy as np
import torch
from PIL import Image

from dotenv import load_dotenv
load_dotenv()

from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from supabase import create_client, Client


# ============================================================================
# Supabase client + data access
# ============================================================================

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")  # AI assistant -- see .env.example for setup

PATIENT_BUCKET = "patient-faces"
CARETAKER_BUCKET = "caretaker-faces"
PROFILE_PHOTO_BUCKET = "profile-photos"  # display-only pictures -- never used for face-scan matching
KNOWN_PEOPLE_BUCKET = "known-people-photos"  # photos of people the patient has registered to recognize
OBJECT_PHOTOS_BUCKET = "object-photos"  # photos for "Find My Things"

_supabase_client = None


def get_client() -> Client:
    global _supabase_client
    if _supabase_client is None:
        if not SUPABASE_URL or not SUPABASE_KEY:
            raise RuntimeError(
                "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set as environment "
                "variables. Copy .env.example to .env and fill in your project's values "
                "(Supabase dashboard -> Project settings -> API)."
            )
        _supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
    return _supabase_client


def insert_patient(patient_data: dict) -> int:
    """patient_data keys match the `patients` table columns. Returns new patient id."""
    res = get_client().table("patients").insert(patient_data).execute()
    return res.data[0]["id"]


def get_patient(patient_id: int):
    res = get_client().table("patients").select("*").eq("id", patient_id).limit(1).execute()
    return res.data[0] if res.data else None


def insert_caretaker(caretaker_data: dict) -> int:
    res = get_client().table("caretakers").insert(caretaker_data).execute()
    return res.data[0]["id"]


def get_caretaker(patient_id: int):
    res = get_client().table("caretakers").select("*").eq("patient_id", patient_id).limit(1).execute()
    return res.data[0] if res.data else None


def update_patient(patient_id: int, fields: dict) -> None:
    get_client().table("patients").update(fields).eq("id", patient_id).execute()


def update_caretaker(patient_id: int, fields: dict) -> None:
    get_client().table("caretakers").update(fields).eq("patient_id", patient_id).execute()


# ---------- Emergency alerts ----------

def insert_emergency_alert(patient_id: int, sent_to_phone: str, message: str) -> dict:
    res = get_client().table("emergency_alerts").insert({
        "patient_id": patient_id, "sent_to_phone": sent_to_phone, "message": message,
    }).execute()
    return res.data[0]


def fetch_emergency_alerts_since(patient_id: int, since_iso: str):
    res = (
        get_client().table("emergency_alerts")
        .select("id, triggered_at")
        .eq("patient_id", patient_id)
        .gte("triggered_at", since_iso)
        .execute()
    )
    return res.data


def delete_face_embeddings_by_role(patient_id: int, role: str) -> None:
    get_client().table("face_embeddings").delete().eq("patient_id", patient_id).eq("role", role).execute()


def insert_face_embedding(patient_id: int, embedding: list, role: str = "patient") -> None:
    get_client().table("face_embeddings").insert({
        "patient_id": patient_id,
        "role": role,
        "embedding": embedding,
    }).execute()


def fetch_face_embeddings(role: str = None):
    """
    Returns a list of {"patient_id": int, "embedding": list[float]} for
    registered faces. Pass role="patient" or role="caretaker" to only match
    against that pool (patient login vs caretaker login); omit for both.
    """
    query = get_client().table("face_embeddings").select("patient_id, embedding")
    if role:
        query = query.eq("role", role)
    res = query.execute()
    return res.data


def upload_face_image(bucket: str, path: str, image_bytes: bytes) -> str:
    """
    Uploads image_bytes to the given bucket/path (buckets: 'patient-faces' or
    'caretaker-faces', created by supabase_schema.sql). Returns the storage
    path, which is what gets saved in the patients/caretakers table --
    fetch a real (time-limited) URL later with get_signed_url() since the
    buckets are private.
    """
    get_client().storage.from_(bucket).upload(
        path,
        image_bytes,
        file_options={"content-type": "image/jpeg", "upsert": "true"},
    )
    return path


def get_signed_url(bucket: str, path: str, expires_in: int = 3600) -> str:
    res = get_client().storage.from_(bucket).create_signed_url(path, expires_in)
    return res.get("signedURL") or res.get("signed_url")


# ---------- "Recognize a person" data access ----------

def insert_known_person(patient_id: int, fields: dict, embedding: list) -> dict:
    row = dict(fields)
    row["patient_id"] = patient_id
    row["embedding"] = embedding
    res = get_client().table("known_people").insert(row).execute()
    return res.data[0]


def fetch_known_people(patient_id: int):
    """Everyone this patient has registered, each with their embedding, for face matching."""
    res = (
        get_client().table("known_people")
        .select("id, name, relation, known_since, memory_type, memory_note, photo_path, embedding")
        .eq("patient_id", patient_id)
        .execute()
    )
    return res.data


# ---------- "Find My Things" data access ----------

def insert_stored_object(patient_id: int, name: str, location_note: str, photo_path: str) -> dict:
    res = get_client().table("stored_objects").insert({
        "patient_id": patient_id, "name": name, "location_note": location_note, "photo_path": photo_path,
    }).execute()
    return res.data[0]


def fetch_stored_objects(patient_id: int):
    res = (
        get_client().table("stored_objects")
        .select("id, name, location_note, photo_path, created_at")
        .eq("patient_id", patient_id)
        .order("created_at", desc=True)
        .execute()
    )
    return res.data


def get_stored_object(object_id: int, patient_id: int):
    res = (
        get_client().table("stored_objects").select("*")
        .eq("id", object_id).eq("patient_id", patient_id).limit(1).execute()
    )
    return res.data[0] if res.data else None


def delete_stored_object(object_id: int, patient_id: int) -> None:
    get_client().table("stored_objects").delete().eq("id", object_id).eq("patient_id", patient_id).execute()


# ---------- Daily timetable data access ----------

def insert_task(patient_id: int, name: str, start_time: str, end_time: str) -> dict:
    res = get_client().table("daily_tasks").insert({
        "patient_id": patient_id, "name": name, "start_time": start_time, "end_time": end_time,
    }).execute()
    return res.data[0]


def update_task(task_id: int, patient_id: int, fields: dict) -> None:
    get_client().table("daily_tasks").update(fields).eq("id", task_id).eq("patient_id", patient_id).execute()


def delete_task(task_id: int, patient_id: int) -> None:
    get_client().table("daily_tasks").delete().eq("id", task_id).eq("patient_id", patient_id).execute()


def fetch_tasks(patient_id: int):
    res = (
        get_client().table("daily_tasks")
        .select("id, name, start_time, end_time")
        .eq("patient_id", patient_id)
        .order("start_time")
        .execute()
    )
    return res.data


def get_task(task_id: int, patient_id: int):
    res = (
        get_client().table("daily_tasks").select("*")
        .eq("id", task_id).eq("patient_id", patient_id).limit(1).execute()
    )
    return res.data[0] if res.data else None


def fetch_task_logs_for_date(patient_id: int, log_date: str):
    """Returns {task_id: log_row} for every logged task on the given date."""
    res = (
        get_client().table("task_logs")
        .select("*")
        .eq("patient_id", patient_id)
        .eq("log_date", log_date)
        .execute()
    )
    return {row["task_id"]: row for row in res.data}


def upsert_task_log(task_id: int, patient_id: int, log_date: str, fields: dict) -> dict:
    row = dict(fields)
    row.update({"task_id": task_id, "patient_id": patient_id, "log_date": log_date})
    res = (
        get_client().table("task_logs")
        .upsert(row, on_conflict="task_id,log_date")
        .execute()
    )
    return res.data[0] if res.data else row


# ---------- Important events data access ----------

def insert_event(patient_id: int, title: str, event_date: str, event_time: str) -> dict:
    res = get_client().table("important_events").insert({
        "patient_id": patient_id, "title": title, "event_date": event_date, "event_time": event_time,
    }).execute()
    return res.data[0]


def update_event(event_id: int, patient_id: int, fields: dict) -> None:
    get_client().table("important_events").update(fields).eq("id", event_id).eq("patient_id", patient_id).execute()


def delete_event(event_id: int, patient_id: int) -> None:
    get_client().table("important_events").delete().eq("id", event_id).eq("patient_id", patient_id).execute()


def get_event(event_id: int, patient_id: int):
    res = (
        get_client().table("important_events").select("*")
        .eq("id", event_id).eq("patient_id", patient_id).limit(1).execute()
    )
    return res.data[0] if res.data else None


def fetch_events(patient_id: int):
    res = (
        get_client().table("important_events")
        .select("id, title, event_date, event_time")
        .eq("patient_id", patient_id)
        .order("event_date").order("event_time")
        .execute()
    )
    return res.data


# ---------- Quiz data access ----------

def fetch_quiz_attempts(patient_id: int, period_type: str, period_key: str):
    """Returns {question_index: attempt_row} for one quiz period (a specific day or week)."""
    res = (
        get_client().table("quiz_attempts")
        .select("*")
        .eq("patient_id", patient_id)
        .eq("period_type", period_type)
        .eq("period_key", period_key)
        .execute()
    )
    return {row["question_index"]: row for row in res.data}


def insert_quiz_attempt(patient_id: int, period_type: str, period_key: str, question_index: int,
                         category: str, difficulty: str, is_correct: bool, points_earned: int,
                         response_time_ms: int = None) -> dict:
    res = get_client().table("quiz_attempts").insert({
        "patient_id": patient_id, "period_type": period_type, "period_key": period_key,
        "question_index": question_index, "category": category, "difficulty": difficulty,
        "is_correct": is_correct, "points_earned": points_earned, "response_time_ms": response_time_ms,
    }).execute()
    return res.data[0]


def fetch_quiz_attempts_since(patient_id: int, since_iso: str):
    """All attempts (any period) answered on/after the given ISO timestamp -- used for the weekly accuracy stat."""
    res = (
        get_client().table("quiz_attempts")
        .select("is_correct, points_earned, answered_at")
        .eq("patient_id", patient_id)
        .gte("answered_at", since_iso)
        .execute()
    )
    return res.data


def fetch_game_attempts_since(patient_id: int, since_iso: str):
    """All game attempts (any game type) answered on/after the given ISO timestamp -- for the weekly stats box."""
    res = (
        get_client().table("game_attempts")
        .select("is_correct, points_earned, answered_at")
        .eq("patient_id", patient_id)
        .gte("answered_at", since_iso)
        .execute()
    )
    return res.data


def fetch_all_quiz_attempts(patient_id: int):
    """
    Every attempt this patient has ever made, any period. Used to compute
    their all-time points (for difficulty-phase placement), the 3-day
    demotion streak check, and the growth-over-time charts -- all of which
    need the full history, not just one period's worth.
    """
    res = (
        get_client().table("quiz_attempts")
        .select("period_type, period_key, question_index, is_correct, points_earned, response_time_ms, answered_at")
        .eq("patient_id", patient_id)
        .execute()
    )
    return res.data


def fetch_wrong_attempts_since(patient_id: int, since_iso: str):
    """Incorrect attempts in the last N days, for the 'Analyze' review feature."""
    res = (
        get_client().table("quiz_attempts")
        .select("period_type, period_key, question_index, category, difficulty, answered_at")
        .eq("patient_id", patient_id)
        .eq("is_correct", False)
        .gte("answered_at", since_iso)
        .order("answered_at", desc=True)
        .execute()
    )
    return res.data


# ---------- Weekly Challenge mini-games data access ----------

def fetch_game_attempts(patient_id: int, game_type: str, period_key: str):
    """Returns {round_index: attempt_row} for one game's one weekly period."""
    res = (
        get_client().table("game_attempts")
        .select("*")
        .eq("patient_id", patient_id)
        .eq("game_type", game_type)
        .eq("period_key", period_key)
        .execute()
    )
    return {row["round_index"]: row for row in res.data}


def fetch_all_game_attempts(patient_id: int, game_type: str):
    """Every attempt this patient has made at this specific game, any week -- used for phase/demotion."""
    res = (
        get_client().table("game_attempts")
        .select("period_key, round_index, is_correct, points_earned, response_time_ms, answered_at")
        .eq("patient_id", patient_id)
        .eq("game_type", game_type)
        .execute()
    )
    return res.data


def insert_game_attempt(patient_id: int, game_type: str, period_key: str, round_index: int,
                         difficulty: str, is_correct: bool, points_earned: int, response_time_ms: int = None) -> dict:
    res = get_client().table("game_attempts").insert({
        "patient_id": patient_id, "game_type": game_type, "period_key": period_key,
        "round_index": round_index, "difficulty": difficulty,
        "is_correct": is_correct, "points_earned": points_earned, "response_time_ms": response_time_ms,
    }).execute()
    return res.data[0]


# ============================================================================
# FaceNet face recognition
# ============================================================================

MODEL_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "model", "facenet_model.pt")

_torch_device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
_facenet_model = None
_mtcnn = None


def _load_facenet_model():
    global _facenet_model
    if _facenet_model is not None:
        return _facenet_model

    loaded = torch.load(MODEL_PATH, map_location=_torch_device)

    # torch.load can return either a full nn.Module or a state_dict, depending
    # on how the .pt file was saved -- handle both.
    if hasattr(loaded, "eval"):
        model = loaded
        model.classify = False  # always want raw 512-d embeddings, not classification logits
    else:
        from facenet_pytorch import InceptionResnetV1

        # Some checkpoints (e.g. the standard VGGFace2-pretrained release)
        # include a classification head ("logits.weight" / "logits.bias")
        # on top of the embedding backbone. If the model is built without
        # that head, those keys show up as "unexpected" and loading fails.
        # Building the model with a matching-size head first avoids that,
        # then classify is turned off afterwards since we only ever need
        # the 512-d embedding, not the classification output.
        if "logits.weight" in loaded:
            num_classes = loaded["logits.weight"].shape[0]
            model = InceptionResnetV1(pretrained=None, classify=True, num_classes=num_classes)
        else:
            model = InceptionResnetV1(pretrained=None)

        missing, unexpected = model.load_state_dict(loaded, strict=False)
        if missing or unexpected:
            print(f"[facenet] warning: missing keys={missing}, unexpected keys={unexpected}")

        model.classify = False

    model.eval()
    model.to(_torch_device)
    _facenet_model = model
    return _facenet_model


def _load_mtcnn():
    """
    MTCNN detects, crops, aligns, resizes to 160x160, and normalizes the face
    in one call -- this is the exact preprocessing InceptionResnetV1/FaceNet
    checkpoints are trained against (facenet-pytorch's own training pipeline
    uses this same pairing), so it gives materially better embeddings than a
    plain crop-and-resize. It's also pure PyTorch, so it drops the OpenCV
    dependency the old Haar-cascade approach needed.
    """
    global _mtcnn
    if _mtcnn is None:
        from facenet_pytorch import MTCNN
        _mtcnn = MTCNN(image_size=160, margin=0, device=_torch_device)
    return _mtcnn


def get_embedding_from_base64(b64_string):
    """Full pipeline: base64 image -> detect+align face (MTCNN) -> FaceNet embedding (numpy array)."""
    model = _load_facenet_model()
    mtcnn = _load_mtcnn()

    if "," in b64_string:
        b64_string = b64_string.split(",", 1)[1]
    img_bytes = base64.b64decode(b64_string)
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")

    face_tensor = mtcnn(img)
    if face_tensor is None:
        raise ValueError("No face detected in the image. Please center your face and try again.")

    face_tensor = face_tensor.unsqueeze(0).to(_torch_device)
    with torch.no_grad():
        embedding = model(face_tensor)

    return embedding.squeeze(0).cpu().numpy()


def cosine_similarity(a, b):
    a = np.asarray(a, dtype=np.float32)
    b = np.asarray(b, dtype=np.float32)
    denom = (np.linalg.norm(a) * np.linalg.norm(b))
    if denom == 0:
        return 0.0
    return float(np.dot(a, b) / denom)


def find_best_match(query_embedding, face_embedding_rows):
    """
    query_embedding: numpy array
    face_embedding_rows: list of dicts from Supabase, each shaped like
        {"patient_id": int, "embedding": list[float]}
    Returns (patient_id, score) of the best match, or (None, 0.0) if no rows given.
    """
    best_id, best_score = None, -1.0
    for row in face_embedding_rows:
        score = cosine_similarity(query_embedding, row["embedding"])
        if score > best_score:
            best_id, best_score = row["patient_id"], score
    return best_id, max(best_score, 0.0)


def find_best_matching_known_person(query_embedding, known_people_rows):
    """
    Same idea as find_best_match, but for known_people rows (keyed by "id"
    rather than "patient_id"). Returns (matched_row_or_None, score).
    """
    best_row, best_score = None, -1.0
    for row in known_people_rows:
        score = cosine_similarity(query_embedding, row["embedding"])
        if score > best_score:
            best_row, best_score = row, score
    return best_row, max(best_score, 0.0)


# Match threshold for facenet cosine similarity (tune based on real-world testing)
FACE_MATCH_THRESHOLD = 0.65


# ============================================================================
# Flask app
# ============================================================================

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret-change-me")

# Sessions stay valid for a week of inactivity rather than dying when the
# browser closes or the tab reloads -- the person is only logged out when
# they explicitly click "Log out" (or a week passes with no visits).
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days=7)


# ---------- Page routes ----------

def _get_authenticated_patient():
    """Returns the logged-in patient's row if the session is valid, else None."""
    patient_id = session.get("patient_id")
    if not patient_id:
        return None
    return get_patient(patient_id)


def _is_logged_in():
    return _get_authenticated_patient() is not None


@app.route("/")
def landing():
    if _is_logged_in():
        return redirect(url_for("dashboard"))
    return render_template("index.html", initial_view="landing", logged_in=False)


@app.route("/register")
def register_page():
    if _is_logged_in():
        return redirect(url_for("dashboard"))
    return render_template("index.html", initial_view="register", logged_in=False)


@app.route("/login")
def login_page():
    if _is_logged_in():
        return redirect(url_for("dashboard"))
    return render_template("index.html", initial_view="login", logged_in=False)


@app.route("/dashboard")
def dashboard():
    if not _get_authenticated_patient():
        return redirect(url_for("login_page"))
    return render_template("index.html", initial_view="dashboard", logged_in=True)


@app.route("/profile")
def profile_page():
    if not _get_authenticated_patient():
        return redirect(url_for("login_page"))
    return render_template("index.html", initial_view="profile", logged_in=True)


@app.route("/logout")
def logout():
    session.clear()
    return jsonify({"ok": True})


# ---------- Validation helpers ----------

def is_valid_phone(phone):
    return bool(re.fullmatch(r"\d{10}", phone or ""))


def is_valid_email(email):
    if not email:
        return True  # optional field
    return bool(re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email))


def is_valid_age(value, min_age=7, max_age=120):
    try:
        age = int(value)
    except (TypeError, ValueError):
        return False
    return min_age <= age <= max_age


def parse_onset_date(value):
    """Parses an ISO date string (yyyy-mm-dd, what <input type=date> sends). Returns a date or None."""
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except (TypeError, ValueError):
        return None


def summarize_onset(onset_date_str):
    """Turns a stored onset date into a friendly 'X years, Y months ago' string for display."""
    onset = parse_onset_date(onset_date_str)
    if not onset:
        return None
    today = datetime.now(timezone.utc).date()
    months = (today.year - onset.year) * 12 + (today.month - onset.month)
    if today.day < onset.day:
        months -= 1
    months = max(months, 0)
    years, rem_months = divmod(months, 12)
    parts = []
    if years:
        parts.append(f"{years} year{'s' if years != 1 else ''}")
    if rem_months or not years:
        parts.append(f"{rem_months} month{'s' if rem_months != 1 else ''}")
    return ", ".join(parts) + " ago"


def require_login():
    """Returns the logged-in patient_id, or None if not logged in (caller should return 401)."""
    return session.get("patient_id")


def _b64_to_bytes(b64_string):
    if "," in b64_string:
        b64_string = b64_string.split(",", 1)[1]
    return base64.b64decode(b64_string)


# ---------- API: registration ----------

@app.route("/api/register", methods=["POST"])
def api_register():
    data = request.get_json(force=True)

    patient = data.get("patient", {})
    caretaker = data.get("caretaker", {})
    patient_face_b64 = data.get("patient_face")
    caretaker_face_b64 = data.get("caretaker_face")

    errors = {}

    # ---- Patient validation ----
    if not patient.get("name", "").strip():
        errors["patient.name"] = "Enter the patient's name."
    if not is_valid_age(patient.get("age")):
        errors["patient.age"] = "Enter an age between 7 and 120."
    if patient.get("gender") not in ("male", "female", "other"):
        errors["patient.gender"] = "Select a gender."
    if not patient.get("address", "").strip():
        errors["patient.address"] = "Enter the home address."
    onset_date = parse_onset_date(patient.get("onset_date"))
    if not onset_date:
        errors["patient.onset_date"] = "Select the date the disease started."
    elif onset_date > datetime.now(timezone.utc).date():
        errors["patient.onset_date"] = "That date is in the future."
    if patient.get("memory_loss_type") not in ("short_term", "long_term", "both"):
        errors["patient.memory_loss_type"] = "Select the type of memory loss."

    # ---- Caretaker validation ----
    if not caretaker.get("full_name", "").strip():
        errors["caretaker.full_name"] = "Enter the caretaker's full name."
    if not is_valid_phone(caretaker.get("phone")):
        errors["caretaker.phone"] = "Enter a valid 10-digit phone number."
    emergency_phone = caretaker.get("emergency_phone", "").strip()
    if emergency_phone:
        if not is_valid_phone(emergency_phone):
            errors["caretaker.emergency_phone"] = "Enter a valid 10-digit number."
        elif emergency_phone == caretaker.get("phone"):
            errors["caretaker.emergency_phone"] = "Emergency number must differ from the primary number."
    if not is_valid_age(caretaker.get("age")):
        errors["caretaker.age"] = "Enter an age between 7 and 120."
    if caretaker.get("gender") not in ("male", "female", "other"):
        errors["caretaker.gender"] = "Select a gender."
    if caretaker.get("relation") not in ("family", "friend", "relative", "other"):
        errors["caretaker.relation"] = "Select the relation to the patient."
    if caretaker.get("relation") == "other" and not caretaker.get("relation_other", "").strip():
        errors["caretaker.relation_other"] = "Specify the relation."
    if not is_valid_email(caretaker.get("email")):
        errors["caretaker.email"] = "Enter a valid email address."
    if caretaker.get("availability_hours") in (None, ""):
        errors["caretaker.availability_hours"] = "Enter hours available in a day."
    else:
        try:
            hours_value = float(caretaker.get("availability_hours"))
            if not (1 <= hours_value <= 24):
                errors["caretaker.availability_hours"] = "Enter a value between 1 and 24 hours."
        except (TypeError, ValueError):
            errors["caretaker.availability_hours"] = "Enter a valid number of hours."
    if caretaker.get("under_observation") not in ("yes", "no"):
        errors["caretaker.under_observation"] = "Select yes or no."
    if caretaker.get("under_observation") == "yes" and not caretaker.get("facility_location", "").strip():
        errors["caretaker.facility_location"] = "Specify the hospital or facility location."

    if not patient_face_b64:
        errors["patient_face"] = "Capture the patient's face before submitting."
    if not caretaker_face_b64:
        errors["caretaker_face"] = "Capture the caretaker's face before submitting."

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    # ---- Extract face embeddings ----
    try:
        patient_embedding = get_embedding_from_base64(patient_face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "errors": {"patient_face": f"Could not read patient face: {exc}"}}), 400

    try:
        caretaker_embedding = get_embedding_from_base64(caretaker_face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "errors": {"caretaker_face": f"Could not read caretaker face: {exc}"}}), 400

    # The patient and caretaker must be two different people -- catches the
    # common mistake of accidentally capturing/uploading the same photo twice.
    same_person_score = cosine_similarity(patient_embedding, caretaker_embedding)
    if same_person_score >= FACE_MATCH_THRESHOLD:
        return jsonify({
            "ok": False,
            "errors": {
                "caretaker_face": "The patient and caretaker photos look like the same person. "
                                   "Please capture a photo of the caretaker instead.",
            },
        }), 400

    # Reject if this patient's face is already registered (avoid duplicate accounts)
    existing_patients = fetch_face_embeddings(role="patient")
    match_id, score = find_best_match(patient_embedding, existing_patients)
    if match_id is not None and score >= FACE_MATCH_THRESHOLD:
        return jsonify({"ok": False, "errors": {"patient_face": "This face already appears to be registered."}}), 400

    # ---- Persist patient row first (need its id for storage paths / foreign keys) ----
    patient_row = {
        "name": patient.get("name").strip(),
        "age": int(patient.get("age")),
        "gender": patient.get("gender"),
        "address": patient.get("address").strip(),
        "onset_date": patient.get("onset_date"),
        "memory_loss_type": patient.get("memory_loss_type"),
        "extra_conditions": ",".join(patient.get("extra_conditions", []) or []),
        "extra_conditions_other": patient.get("extra_conditions_other", "").strip(),
        "unusual_activities": patient.get("unusual_activities", "").strip() or "None",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    patient_id = insert_patient(patient_row)

    # ---- Upload face images to Supabase Storage ----
    patient_img_path = f"{patient_id}/{uuid.uuid4()}.jpg"
    caretaker_img_path = f"{patient_id}/{uuid.uuid4()}.jpg"
    upload_face_image(PATIENT_BUCKET, patient_img_path, _b64_to_bytes(patient_face_b64))
    upload_face_image(CARETAKER_BUCKET, caretaker_img_path, _b64_to_bytes(caretaker_face_b64))

    # ---- Caretaker row ----
    caretaker_row = {
        "patient_id": patient_id,
        "full_name": caretaker.get("full_name").strip(),
        "phone": caretaker.get("phone").strip(),
        "emergency_phone": emergency_phone or None,
        "age": int(caretaker.get("age")),
        "gender": caretaker.get("gender"),
        "relation": caretaker.get("relation"),
        "relation_other": caretaker.get("relation_other", "").strip(),
        "email": caretaker.get("email", "").strip() or None,
        "address_same_as_patient": bool(caretaker.get("address_same_as_patient")),
        "address": caretaker.get("address", "").strip(),
        "availability_hours": float(caretaker.get("availability_hours")),
        "under_observation": (caretaker.get("under_observation") == "yes"),
        "facility_location": caretaker.get("facility_location", "").strip(),
        "face_image_path": caretaker_img_path,
    }
    insert_caretaker(caretaker_row)

    # Automatically register the caretaker as a "known person" too, so the
    # patient can recognize them via Recognize a Person right away, without
    # a separate manual step. Uses the same photo/embedding already captured
    # during registration -- just stored under a different bucket/table.
    caretaker_known_photo_path = f"{patient_id}/{uuid.uuid4()}.jpg"
    upload_face_image(KNOWN_PEOPLE_BUCKET, caretaker_known_photo_path, _b64_to_bytes(caretaker_face_b64))
    caretaker_memory_type = {"family": "family", "friend": "friend"}.get(caretaker.get("relation"), "other")
    insert_known_person(patient_id, {
        "name": caretaker.get("full_name").strip(),
        "relation": caretaker.get("relation"),
        "known_since": "Registered as your caretaker",
        "memory_type": caretaker_memory_type,
        "memory_note": "Your caretaker.",
        "photo_path": caretaker_known_photo_path,
    }, caretaker_embedding.tolist())

    # ---- Face embedding rows (used for future patient / caretaker logins) ----
    insert_face_embedding(patient_id, patient_embedding.tolist(), role="patient")
    insert_face_embedding(patient_id, caretaker_embedding.tolist(), role="caretaker")

    session.permanent = True
    session["patient_id"] = patient_id
    return jsonify({"ok": True, "patient_id": patient_id, "redirect": url_for("dashboard")})


# ---------- API: face login ----------

@app.route("/api/login", methods=["POST"])
def api_login():
    data = request.get_json(force=True)
    face_b64 = data.get("face")
    role = data.get("role", "patient")

    if role not in ("patient", "caretaker"):
        return jsonify({"ok": False, "error": "Invalid login role."}), 400
    if not face_b64:
        return jsonify({"ok": False, "error": "No image received."}), 400

    try:
        embedding = get_embedding_from_base64(face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "error": f"Could not read the image: {exc}"}), 400

    candidates = fetch_face_embeddings(role=role)
    match_id, score = find_best_match(embedding, candidates)

    if match_id is None or score < FACE_MATCH_THRESHOLD:
        not_found_msg = (
            "Face not recognized. Please register first, or try again in better lighting."
            if role == "patient" else
            "Caretaker face not recognized. Please try again in better lighting."
        )
        return jsonify({"ok": False, "error": not_found_msg}), 401

    patient = get_patient(match_id)
    session.permanent = True
    session["patient_id"] = match_id
    session["login_role"] = role
    return jsonify({
        "ok": True,
        "redirect": url_for("dashboard"),
        "confidence": round(float(score), 3),
        "role": role,
        "patient_name": patient.get("name") if patient else None,
    })


# ---------- API: profile ----------

def _validate_caretaker_contact_fields(caretaker, current_phone_for_emergency_check=None):
    """
    Shared validation for the caretaker fields editable from the profile page
    (and reused by the full change-caretaker flow): phone, emergency phone,
    email, availability hours, under-observation / facility location.
    Returns an errors dict (empty if everything's valid).
    """
    errors = {}
    phone = caretaker.get("phone", "").strip()
    if not is_valid_phone(phone):
        errors["caretaker.phone"] = "Enter a valid 10-digit phone number."

    emergency_phone = caretaker.get("emergency_phone", "").strip()
    if emergency_phone:
        if not is_valid_phone(emergency_phone):
            errors["caretaker.emergency_phone"] = "Enter a valid 10-digit number."
        elif emergency_phone == phone:
            errors["caretaker.emergency_phone"] = "Emergency number must differ from the primary number."

    if not is_valid_email(caretaker.get("email")):
        errors["caretaker.email"] = "Enter a valid email address."

    if caretaker.get("availability_hours") in (None, ""):
        errors["caretaker.availability_hours"] = "Enter hours available in a day."
    else:
        try:
            hours_value = float(caretaker.get("availability_hours"))
            if not (1 <= hours_value <= 24):
                errors["caretaker.availability_hours"] = "Enter a value between 1 and 24 hours."
        except (TypeError, ValueError):
            errors["caretaker.availability_hours"] = "Enter a valid number of hours."

    if caretaker.get("under_observation") not in ("yes", "no"):
        errors["caretaker.under_observation"] = "Select yes or no."
    if caretaker.get("under_observation") == "yes" and not caretaker.get("facility_location", "").strip():
        errors["caretaker.facility_location"] = "Specify the hospital or facility location."

    return errors


@app.route("/api/profile", methods=["GET"])
def api_get_profile():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    patient = get_patient(patient_id)
    caretaker = get_caretaker(patient_id)
    if not patient:
        return jsonify({"ok": False, "error": "Patient not found."}), 404

    patient_out = dict(patient)
    patient_out["onset_summary"] = summarize_onset(patient.get("onset_date"))
    patient_out["extra_conditions_list"] = [c for c in (patient.get("extra_conditions") or "").split(",") if c]
    patient_out["profile_photo_url"] = _signed_url_or_none(PROFILE_PHOTO_BUCKET, patient.get("profile_photo_path"))

    caretaker_out = dict(caretaker) if caretaker else None
    if caretaker_out:
        caretaker_out["profile_photo_url"] = _signed_url_or_none(PROFILE_PHOTO_BUCKET, caretaker.get("profile_photo_path"))

    return jsonify({"ok": True, "patient": patient_out, "caretaker": caretaker_out})


def _signed_url_or_none(bucket, path):
    if not path:
        return None
    try:
        return get_signed_url(bucket, path, expires_in=3600)
    except Exception:
        return None


@app.route("/api/profile/photo", methods=["POST"])
def api_update_profile_photo():
    """
    Sets/replaces a display-only profile picture for the patient or the
    caretaker. This is NOT used for face-scan login -- it's purely a photo
    shown on the dashboard, uploaded separately from the registration face
    scan and stored in its own bucket.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    role = data.get("role")
    image_b64 = data.get("image")

    if role not in ("patient", "caretaker"):
        return jsonify({"ok": False, "error": "Invalid role."}), 400
    if not image_b64:
        return jsonify({"ok": False, "error": "No image received."}), 400

    try:
        image_bytes = _b64_to_bytes(image_b64)
    except Exception:
        return jsonify({"ok": False, "error": "Could not read the image."}), 400

    photo_path = f"{role}/{patient_id}/{uuid.uuid4()}.jpg"
    upload_face_image(PROFILE_PHOTO_BUCKET, photo_path, image_bytes)

    if role == "patient":
        update_patient(patient_id, {"profile_photo_path": photo_path})
    else:
        update_caretaker(patient_id, {"profile_photo_path": photo_path})

    return jsonify({"ok": True, "profile_photo_url": _signed_url_or_none(PROFILE_PHOTO_BUCKET, photo_path)})


@app.route("/api/profile/patient", methods=["POST"])
def api_update_patient_profile():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    errors = {}

    address = data.get("address", "").strip()
    if not address:
        errors["patient.address"] = "Enter the home address."

    neighbour_phone = data.get("neighbour_phone", "").strip()
    if neighbour_phone and not re.fullmatch(r"\d{10}", neighbour_phone):
        errors["patient.neighbour_phone"] = "Enter a valid 10-digit phone number, or leave it blank."

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    fields = {
        "address": address,
        "extra_conditions": ",".join(data.get("extra_conditions", []) or []),
        "extra_conditions_other": data.get("extra_conditions_other", "").strip(),
        "unusual_activities": data.get("unusual_activities", "").strip() or "None",
        "neighbour_phone": neighbour_phone or None,
    }
    update_patient(patient_id, fields)
    return jsonify({"ok": True})


@app.route("/api/profile/caretaker", methods=["POST"])
def api_update_caretaker_profile():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    errors = _validate_caretaker_contact_fields(data)
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    address_same = bool(data.get("address_same_as_patient"))
    fields = {
        "phone": data.get("phone", "").strip(),
        "emergency_phone": data.get("emergency_phone", "").strip() or None,
        "email": data.get("email", "").strip() or None,
        "availability_hours": float(data.get("availability_hours")),
        "address_same_as_patient": address_same,
        "address": "" if address_same else data.get("address", "").strip(),
        "under_observation": data.get("under_observation") == "yes",
        "facility_location": data.get("facility_location", "").strip(),
    }
    update_caretaker(patient_id, fields)
    return jsonify({"ok": True})


@app.route("/api/profile/change-caretaker", methods=["POST"])
def api_change_caretaker():
    """
    Fully replaces the current caretaker: new details + a fresh face scan.
    Used when the person actually caring for the patient has changed, rather
    than just an editable detail like phone number.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    caretaker = data.get("caretaker", {})
    caretaker_face_b64 = data.get("caretaker_face")

    errors = {}
    if not caretaker.get("full_name", "").strip():
        errors["caretaker.full_name"] = "Enter the new caretaker's full name."
    if not is_valid_age(caretaker.get("age")):
        errors["caretaker.age"] = "Enter an age between 7 and 120."
    if caretaker.get("gender") not in ("male", "female", "other"):
        errors["caretaker.gender"] = "Select a gender."
    if caretaker.get("relation") not in ("family", "friend", "relative", "other"):
        errors["caretaker.relation"] = "Select the relation to the patient."
    if caretaker.get("relation") == "other" and not caretaker.get("relation_other", "").strip():
        errors["caretaker.relation_other"] = "Specify the relation."
    errors.update(_validate_caretaker_contact_fields(caretaker))
    if not caretaker_face_b64:
        errors["caretaker_face"] = "Scan the new caretaker's face before submitting."

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    try:
        caretaker_embedding = get_embedding_from_base64(caretaker_face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "errors": {"caretaker_face": f"Could not read the face: {exc}"}}), 400

    # Replace the stored face image and embedding
    caretaker_img_path = f"{patient_id}/{uuid.uuid4()}.jpg"
    upload_face_image(CARETAKER_BUCKET, caretaker_img_path, _b64_to_bytes(caretaker_face_b64))
    delete_face_embeddings_by_role(patient_id, role="caretaker")
    insert_face_embedding(patient_id, caretaker_embedding.tolist(), role="caretaker")

    address_same = bool(caretaker.get("address_same_as_patient"))
    fields = {
        "full_name": caretaker.get("full_name").strip(),
        "phone": caretaker.get("phone", "").strip(),
        "emergency_phone": caretaker.get("emergency_phone", "").strip() or None,
        "age": int(caretaker.get("age")),
        "gender": caretaker.get("gender"),
        "relation": caretaker.get("relation"),
        "relation_other": caretaker.get("relation_other", "").strip(),
        "email": caretaker.get("email", "").strip() or None,
        "address_same_as_patient": address_same,
        "address": "" if address_same else caretaker.get("address", "").strip(),
        "availability_hours": float(caretaker.get("availability_hours")),
        "under_observation": caretaker.get("under_observation") == "yes",
        "facility_location": caretaker.get("facility_location", "").strip(),
        "face_image_path": caretaker_img_path,
    }
    update_caretaker(patient_id, fields)

    return jsonify({"ok": True})


# ---------- API: "Recognize a person" ----------
# Lives entirely inside the dashboard (no separate page). The patient points
# the camera at whoever is in front of them; we check that face against only
# this patient's own list of registered people. If there's no match, the
# frontend offers to register the person on the spot using the same face
# scan, so a rescan isn't needed.

KNOWN_MEMORY_TYPES = ("love", "family", "friend", "enemy", "student", "teacher", "colleague", "neighbor", "other")


@app.route("/api/recognize", methods=["POST"])
def api_recognize_person():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    face_b64 = data.get("face")
    if not face_b64:
        return jsonify({"ok": False, "error": "No image received."}), 400

    try:
        embedding = get_embedding_from_base64(face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "error": f"Could not read the image: {exc}"}), 400

    known_people = fetch_known_people(patient_id)
    match, score = find_best_matching_known_person(embedding, known_people)

    if not match or score < FACE_MATCH_THRESHOLD:
        return jsonify({"ok": True, "found": False})

    return jsonify({
        "ok": True,
        "found": True,
        "person": {
            "name": match.get("name"),
            "relation": match.get("relation"),
            "known_since": match.get("known_since"),
            "memory_type": match.get("memory_type"),
            "memory_note": match.get("memory_note"),
            "photo_url": _signed_url_or_none(KNOWN_PEOPLE_BUCKET, match.get("photo_path")),
        },
        "confidence": round(float(score), 3),
    })


@app.route("/api/recognize/register", methods=["POST"])
def api_recognize_register():
    """Registers a new person to recognize, using the face already scanned by /api/recognize."""
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    face_b64 = data.get("face")

    errors = {}
    name = data.get("name", "").strip()
    relation = data.get("relation", "").strip()
    known_since = data.get("known_since", "").strip()
    memory_type = data.get("memory_type")

    if not name:
        errors["name"] = "Enter their name."
    if not relation:
        errors["relation"] = "Enter how they're related to the patient."
    if not known_since:
        errors["known_since"] = "Enter how long the patient has known them."
    if memory_type not in KNOWN_MEMORY_TYPES:
        errors["memory_type"] = "Select what best describes the connection."
    if not face_b64:
        errors["face"] = "Scan their face before submitting."

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    try:
        embedding = get_embedding_from_base64(face_b64)
    except Exception as exc:
        return jsonify({"ok": False, "errors": {"face": f"Could not read the face: {exc}"}}), 400

    # Avoid registering the same person twice under this patient
    existing = fetch_known_people(patient_id)
    dup_match, dup_score = find_best_matching_known_person(embedding, existing)
    if dup_match and dup_score >= FACE_MATCH_THRESHOLD:
        return jsonify({"ok": False, "errors": {"face": f"{dup_match.get('name')} is already registered."}}), 400

    photo_path = f"{patient_id}/{uuid.uuid4()}.jpg"
    upload_face_image(KNOWN_PEOPLE_BUCKET, photo_path, _b64_to_bytes(face_b64))

    fields = {
        "name": name,
        "relation": relation,
        "known_since": known_since,
        "memory_type": memory_type,
        "memory_note": data.get("memory_note", "").strip(),
        "photo_path": photo_path,
    }
    person = insert_known_person(patient_id, fields, embedding.tolist())

    return jsonify({
        "ok": True,
        "person": {
            "name": person.get("name"),
            "relation": person.get("relation"),
            "known_since": person.get("known_since"),
            "memory_type": person.get("memory_type"),
            "memory_note": person.get("memory_note"),
            "photo_url": _signed_url_or_none(KNOWN_PEOPLE_BUCKET, photo_path),
        },
    })


@app.route("/api/known-people", methods=["GET"])
def api_list_known_people():
    """
    Everyone the patient has registered to recognize, for the "Search people"
    list in the dashboard. Never includes the raw face embedding -- that's
    only ever used server-side for matching.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    people = fetch_known_people(patient_id)
    out = [
        {
            "id": p.get("id"),
            "name": p.get("name"),
            "relation": p.get("relation"),
            "known_since": p.get("known_since"),
            "memory_type": p.get("memory_type"),
            "memory_note": p.get("memory_note"),
            "photo_url": _signed_url_or_none(KNOWN_PEOPLE_BUCKET, p.get("photo_path")),
        }
        for p in people
    ]
    out.sort(key=lambda x: (x["name"] or "").lower())
    return jsonify({"ok": True, "people": out})


# ---------- API: daily timetable ----------

IST_OFFSET = timedelta(hours=5, minutes=30)


def _ist_now():
    """Current time shifted to IST (UTC+5:30) -- used so 'today' for the
    timetable resets at midnight IST specifically, not midnight UTC."""
    return datetime.now(timezone.utc) + IST_OFFSET


def _ist_today_str():
    return _ist_now().date().isoformat()


def _parse_time_str(value):
    if not value:
        return None
    for fmt in ("%H:%M:%S", "%H:%M"):
        try:
            return datetime.strptime(value, fmt).time()
        except ValueError:
            continue
    return None


@app.route("/api/tasks", methods=["GET"])
def api_list_tasks():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    now = _ist_now()
    today_str = now.date().isoformat()

    tasks = fetch_tasks(patient_id)
    logs = fetch_task_logs_for_date(patient_id, today_str)

    out = []
    for t in tasks:
        log = logs.get(t["id"])
        if log:
            status = log["status"]
            completed_at = log.get("completed_at")
        else:
            end_t = _parse_time_str(t["end_time"])
            status = "missed" if (end_t and now.time() >= end_t) else "pending"
            completed_at = None
        out.append({
            "id": t["id"],
            "name": t["name"],
            "start_time": (t["start_time"] or "")[:5],
            "end_time": (t["end_time"] or "")[:5],
            "status": status,
            "completed_at": completed_at,
        })

    return jsonify({"ok": True, "tasks": out, "server_time": now.isoformat()})


@app.route("/api/tasks", methods=["POST"])
def api_create_task():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    name = data.get("name", "").strip()
    start_time = data.get("start_time", "").strip()
    end_time = data.get("end_time", "").strip()

    errors = {}
    if not name:
        errors["name"] = "Enter a task name."
    start_t = _parse_time_str(start_time)
    end_t = _parse_time_str(end_time)
    if not start_t:
        errors["start_time"] = "Enter a valid start time."
    if not end_t:
        errors["end_time"] = "Enter a valid end time."
    if start_t and end_t and end_t <= start_t:
        errors["end_time"] = "End time must be after start time."
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    task = insert_task(patient_id, name, start_time, end_time)
    return jsonify({"ok": True, "task": {
        "id": task["id"], "name": name, "start_time": start_time, "end_time": end_time,
    }})


@app.route("/api/tasks/<int:task_id>", methods=["PUT"])
def api_update_task(task_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_task(task_id, patient_id):
        return jsonify({"ok": False, "error": "Task not found."}), 404

    data = request.get_json(force=True)
    name = data.get("name", "").strip()
    start_time = data.get("start_time", "").strip()
    end_time = data.get("end_time", "").strip()

    errors = {}
    if not name:
        errors["name"] = "Enter a task name."
    start_t = _parse_time_str(start_time)
    end_t = _parse_time_str(end_time)
    if not start_t:
        errors["start_time"] = "Enter a valid start time."
    if not end_t:
        errors["end_time"] = "Enter a valid end time."
    if start_t and end_t and end_t <= start_t:
        errors["end_time"] = "End time must be after start time."
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    update_task(task_id, patient_id, {"name": name, "start_time": start_time, "end_time": end_time})
    return jsonify({"ok": True})


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def api_delete_task(task_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_task(task_id, patient_id):
        return jsonify({"ok": False, "error": "Task not found."}), 404

    delete_task(task_id, patient_id)
    return jsonify({"ok": True})


@app.route("/api/tasks/<int:task_id>/confirm", methods=["POST"])
def api_confirm_task(task_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_task(task_id, patient_id):
        return jsonify({"ok": False, "error": "Task not found."}), 404

    today_str = _ist_today_str()
    upsert_task_log(task_id, patient_id, today_str, {
        "status": "completed",
        "completed_at": datetime.now(timezone.utc).isoformat(),
    })
    return jsonify({"ok": True})


@app.route("/api/tasks/<int:task_id>/alert-caretaker", methods=["POST"])
def api_alert_caretaker_task(task_id):
    """
    Called by the frontend once a task's confirmation deadline passes
    unconfirmed. Marks today's log as missed and records that an alert was
    triggered -- see the module-level note above for why this doesn't send
    a real SMS yet.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    task = get_task(task_id, patient_id)
    if not task:
        return jsonify({"ok": False, "error": "Task not found."}), 404

    today_str = _ist_today_str()
    existing = fetch_task_logs_for_date(patient_id, today_str).get(task_id)
    if existing and existing.get("status") == "completed":
        return jsonify({"ok": True, "already_completed": True})
    if existing and existing.get("caretaker_alert_sent"):
        return jsonify({"ok": True, "already_sent": True})

    caretaker = get_caretaker(patient_id)
    upsert_task_log(task_id, patient_id, today_str, {
        "status": "missed",
        "caretaker_alert_sent": True,
    })

    # ---- Real SMS/call integration point ----
    caretaker_phone = caretaker.get("phone") if caretaker else None
    print(f"[caretaker alert -- not actually sent, no SMS provider configured] "
          f"Task '{task['name']}' was missed for patient {patient_id}. "
          f"Would notify caretaker at {caretaker_phone or 'unknown number'}.")

    return jsonify({"ok": True, "caretaker_phone": caretaker_phone})


# ---------- API: important events ----------
# One-off dated reminders (appointments, birthdays, etc). Unlike daily_tasks
# these are deleted entirely once acknowledged -- see api_acknowledge_event.

@app.route("/api/events", methods=["GET"])
def api_list_events():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    events = fetch_events(patient_id)
    out = [{
        "id": e["id"],
        "title": e["title"],
        "event_date": e["event_date"],
        "event_time": (e["event_time"] or "")[:5],
    } for e in events]
    return jsonify({"ok": True, "events": out})


@app.route("/api/events", methods=["POST"])
def api_create_event():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    title = data.get("title", "").strip()
    event_date = data.get("event_date", "").strip()
    event_time = data.get("event_time", "").strip()

    errors = {}
    if not title:
        errors["title"] = "Enter what the event is."
    if not event_date:
        errors["event_date"] = "Select a date."
    if not _parse_time_str(event_time):
        errors["event_time"] = "Select a valid time."
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    event = insert_event(patient_id, title, event_date, event_time)
    return jsonify({"ok": True, "event": {
        "id": event["id"], "title": title, "event_date": event_date, "event_time": event_time,
    }})


@app.route("/api/events/<int:event_id>", methods=["PUT"])
def api_update_event(event_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_event(event_id, patient_id):
        return jsonify({"ok": False, "error": "Event not found."}), 404

    data = request.get_json(force=True)
    title = data.get("title", "").strip()
    event_date = data.get("event_date", "").strip()
    event_time = data.get("event_time", "").strip()

    errors = {}
    if not title:
        errors["title"] = "Enter what the event is."
    if not event_date:
        errors["event_date"] = "Select a date."
    if not _parse_time_str(event_time):
        errors["event_time"] = "Select a valid time."
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    update_event(event_id, patient_id, {"title": title, "event_date": event_date, "event_time": event_time})
    return jsonify({"ok": True})


@app.route("/api/events/<int:event_id>", methods=["DELETE"])
def api_delete_event(event_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_event(event_id, patient_id):
        return jsonify({"ok": False, "error": "Event not found."}), 404

    delete_event(event_id, patient_id)
    return jsonify({"ok": True})


@app.route("/api/events/<int:event_id>/acknowledge", methods=["POST"])
def api_acknowledge_event(event_id):
    """Called when the person taps OK on the event alarm -- deletes the event."""
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_event(event_id, patient_id):
        return jsonify({"ok": False, "error": "Event not found."}), 404

    delete_event(event_id, patient_id)
    return jsonify({"ok": True})


# ---------- Quiz & games: question generation ----------
# Questions are generated deterministically from a seed of (patient_id,
# period_key) -- the same seed always regenerates the identical question
# set, so nothing about question *content* needs to be stored. This also
# means we can regenerate any PAST quiz on demand too (see the Analyze
# feature below), since it's a pure function of the seed plus whatever
# difficulty phase the patient was in at that time.

QUIZ_DAILY_COUNT = 5
QUIZ_WEEKLY_COUNT = 10
QUIZ_POINTS_PER_QUESTION_DAILY = 1   # 1 correct answer = 1 point (so "35 points/week" = 5 questions x 7 days)
QUIZ_POINTS_PER_QUESTION_WEEKLY = 2  # weekly-challenge quiz questions are worth more
# Game points are tiered by difficulty now -- see GAME_POINTS_BY_DIFFICULTY below.

# Difficulty-phase thresholds, based on the patient's all-time quiz points
# (excluding the period currently being generated, so a day's own answers
# never shift that same day's difficulty mid-way through).
PHASE_THRESHOLDS = [(50, "easy"), (100, "medium"), (130, "hard")]  # below this many points -> this phase
DEMOTION_LOOKBACK_DAYS = 3
DEMOTION_ACCURACY_THRESHOLD = 0.5

WEEKDAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July",
               "August", "September", "October", "November", "December"]

# The question library lives in quiz_questions_i18n.json (not here, and not
# in Supabase) so adding more questions/translations later is just editing
# that JSON file -- no code changes, no migration, no LLM involved. Every
# answer in it is fixed and hand-verified, which matters since these scores
# feed into tracking the patient's progress. Each entry also carries a
# "difficulty" tag (easy/medium/hard) used by the adaptive-difficulty system
# below.
#
# Multi-language: "prompt", "options", and "answer" are each a dict keyed by
# language code (e.g. {"en": "...", "hi": "..."}). Not every question has
# every language translated yet -- _localize_question() below falls back to
# English for any language a given question doesn't have, so the quiz never
# breaks or shows a blank question; it just shows English for that one
# question until someone adds the translation.
QUESTION_BANK_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "quiz_questions_i18n.json")


def _localize_question(q, language):
    """Flattens a multi-language question entry down to one language, falling back to English per-field."""
    def pick(field):
        return q[field].get(language) or q[field].get("en")
    return {
        "category": q["category"], "difficulty": q["difficulty"],
        "prompt": pick("prompt"), "options": pick("options"), "answer": pick("answer"),
    }


def _load_question_bank():
    try:
        with open(QUESTION_BANK_PATH, encoding="utf-8") as f:
            bank = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as exc:
        raise RuntimeError(
            f"Could not load {QUESTION_BANK_PATH}: {exc}. "
            "The quiz question library must be a JSON file: a list of "
            '{"category", "difficulty", "prompt", "options", "answer"} objects, '
            'where prompt/options/answer are each {"en": ..., "hi": ..., ...}.'
        ) from exc

    for i, q in enumerate(bank):
        en = _localize_question(q, "en")
        if len(en["options"]) != 4 or en["answer"] not in en["options"]:
            raise RuntimeError(f"quiz_questions_i18n.json entry {i} is malformed (English fallback check): {q}")
        if q.get("difficulty") not in ("easy", "medium", "hard"):
            raise RuntimeError(f"quiz_questions_i18n.json entry {i} has an invalid/missing difficulty: {q}")
        # Any language present must itself be internally consistent (answer
        # actually appears in that language's own options) -- catches a
        # mistranslated question before it ever reaches a patient.
        for lang in q["prompt"]:
            loc = _localize_question(q, lang)
            if loc["answer"] not in loc["options"]:
                raise RuntimeError(f"quiz_questions_i18n.json entry {i}, language '{lang}': answer not in options.")
    return bank


QUESTION_BANK = _load_question_bank()

QUESTION_BANK_BY_DIFFICULTY = {"easy": [], "medium": [], "hard": []}
for _q in QUESTION_BANK:
    QUESTION_BANK_BY_DIFFICULTY[_q["difficulty"]].append(_q)


# ---------- Weekly Challenge mini-games: content ----------
GAME_DATA_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "game_data.json")


def _load_game_data():
    try:
        with open(GAME_DATA_PATH, encoding="utf-8") as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as exc:
        raise RuntimeError(f"Could not load {GAME_DATA_PATH}: {exc}") from exc

    for i, w in enumerate(data.get("word_association", [])):
        if w.get("difficulty") not in ("easy", "medium", "hard") or len(w.get("distractors", [])) < 2:
            raise RuntimeError(f"game_data.json word_association entry {i} is malformed: {w}")
    for level in ("easy", "medium", "hard"):
        if len(data.get("memory_match_symbols", {}).get(level, [])) < 2:
            raise RuntimeError(f"game_data.json memory_match_symbols['{level}'] needs at least 2 symbols")
        if len(data.get("connect_dots_shapes", {}).get(level, [])) < 1:
            raise RuntimeError(f"game_data.json connect_dots_shapes['{level}'] needs at least 1 shape")
    for i, w in enumerate(data.get("where_is_this", [])):
        if w.get("difficulty") not in ("easy", "medium", "hard") or len(w.get("distractors", [])) < 2:
            raise RuntimeError(f"game_data.json where_is_this entry {i} is malformed: {w}")
    return data


GAME_DATA = _load_game_data()
WORD_ASSOCIATION_BY_DIFFICULTY = {"easy": [], "medium": [], "hard": []}
for _w in GAME_DATA["word_association"]:
    WORD_ASSOCIATION_BY_DIFFICULTY[_w["difficulty"]].append(_w)

WHERE_IS_THIS_BY_DIFFICULTY = {"easy": [], "medium": [], "hard": []}
for _p in GAME_DATA["where_is_this"]:
    WHERE_IS_THIS_BY_DIFFICULTY[_p["difficulty"]].append(_p)


def _quiz_rng(patient_id, period_key):
    return random.Random(f"quiz:{patient_id}:{period_key}")


def _period_key(period_type):
    now = _ist_now()
    if period_type == "daily":
        return now.date().isoformat()
    iso_year, iso_week, _ = now.isocalendar()
    return f"{iso_year}-W{iso_week:02d}"


def _gen_orientation_question(rng, today):
    kind = rng.choice(["weekday", "month"])
    if kind == "weekday":
        correct = WEEKDAY_NAMES[today.weekday()]
        options = rng.sample([d for d in WEEKDAY_NAMES if d != correct], 3) + [correct]
        prompt = "What day of the week is it today?"
    else:
        correct = MONTH_NAMES[today.month - 1]
        options = rng.sample([m for m in MONTH_NAMES if m != correct], 3) + [correct]
        prompt = "What month is it right now?"
    rng.shuffle(options)
    return {"category": "orientation", "difficulty": "easy", "prompt": prompt, "options": options, "answer": correct}


def _build_bank_question(rng, entry, language="en"):
    """Returns a copy of a QUESTION_BANK entry (localized to `language`, falling back to
    English per-field) with its options re-shuffled (so the correct answer isn't always
    in the same position each time it's served)."""
    localized = _localize_question(entry, language)
    options = list(localized["options"])
    rng.shuffle(options)
    return {
        "category": localized["category"], "difficulty": localized["difficulty"],
        "prompt": localized["prompt"], "options": options, "answer": localized["answer"],
    }


def _gen_personal_question(rng, patient_id):
    """Personalized recall question using the patient's own registered known_people, if any exist."""
    people = fetch_known_people(patient_id)
    if not people:
        return None
    person = rng.choice(people)
    correct = person["relation"]
    generic_distractors = ["Neighbor", "Colleague", "Family doctor", "Old classmate"]
    wrong_pool = [p["relation"] for p in people if p["relation"] != correct]
    wrong = [w for w in dict.fromkeys(wrong_pool + generic_distractors) if w != correct][:3]
    while len(wrong) < 3:
        wrong.append(rng.choice(generic_distractors))
    options = wrong[:3] + [correct]
    rng.shuffle(options)
    return {
        "category": "personal", "difficulty": "easy",
        "prompt": f"How is {person['name']} related to you?", "options": options, "answer": correct,
    }


# ---------- Adaptive difficulty ----------

def _phase_from_points(points):
    for threshold, phase in PHASE_THRESHOLDS:
        if points < threshold:
            return phase
    return "mixed"


def _phase_composition(phase, count):
    """How many easy/medium/hard questions make up one quiz of this phase."""
    if phase == "mixed":
        # 2 easy : 2 medium : 1 hard out of every 5 -- scaled to whatever count is requested (e.g. doubled for weekly)
        base = count / 5.0
        easy = round(2 * base)
        medium = round(2 * base)
        hard = max(count - easy - medium, 0)
        return {"easy": easy, "medium": medium, "hard": hard}
    comp = {"easy": 0, "medium": 0, "hard": 0}
    comp[phase] = count
    return comp


def _should_demote(patient_id, before_date):
    """
    True if the patient's daily accuracy was below 50% on each of the 3
    calendar days immediately before `before_date` (a date object). Any day
    with no attempts at all breaks the streak (we don't demote on missing
    data, only on demonstrated poor performance).
    """
    all_attempts = fetch_all_quiz_attempts(patient_id)
    daily = [a for a in all_attempts if a["period_type"] == "daily"]

    for i in range(1, DEMOTION_LOOKBACK_DAYS + 1):
        day_key = (before_date - timedelta(days=i)).isoformat()
        day_attempts = [a for a in daily if a["period_key"] == day_key]
        if not day_attempts:
            return False
        correct = sum(1 for a in day_attempts if a["is_correct"])
        if (correct / len(day_attempts)) >= DEMOTION_ACCURACY_THRESHOLD:
            return False
    return True


def _compute_current_phase(patient_id, period_type, period_key):
    """
    The difficulty phase for this specific period. Based on all-time points
    EXCLUDING this period's own attempts (so a day's phase can't shift while
    the day is still in progress), advanced through easy -> medium -> hard ->
    mixed as points accumulate. For daily quizzes only, a demotion check can
    knock medium/hard back down a level (see requirement: mixed never demotes).
    """
    all_attempts = fetch_all_quiz_attempts(patient_id)
    points_before = sum(
        a["points_earned"] for a in all_attempts
        if not (a["period_type"] == period_type and a["period_key"] == period_key)
    )
    phase = _phase_from_points(points_before)

    if period_type == "daily" and phase in ("medium", "hard"):
        try:
            today = datetime.strptime(period_key, "%Y-%m-%d").date()
        except ValueError:
            today = _ist_now().date()
        if _should_demote(patient_id, today):
            phase = "easy" if phase == "medium" else "medium"

    return phase


def generate_quiz_questions(patient_id, period_key, count, composition, language="en"):
    """
    Deterministically builds `count` questions for this patient + period,
    drawn according to `composition` (a {"easy": n, "medium": n, "hard": n}
    dict summing to `count`). Same inputs -> same output, always.

    `language` controls which language the prompt/options/answer are
    localized to (falling back to English per-field for any question that
    doesn't have that language translated yet -- see _localize_question).

    The live orientation question and the personalized known-people question
    are folded into the "easy" quota when there is one (they're inherently
    gentle); if the phase has no easy slots that period, they're skipped.
    """
    rng = _quiz_rng(patient_id, period_key)
    today = _ist_now().date()

    easy_quota = composition.get("easy", 0)
    medium_quota = composition.get("medium", 0)
    hard_quota = composition.get("hard", 0)

    questions = []
    if easy_quota > 0:
        questions.append(_gen_orientation_question(rng, today))
        easy_quota -= 1
    if easy_quota > 0:
        personal_q = _gen_personal_question(rng, patient_id)
        if personal_q:
            questions.append(personal_q)
            easy_quota -= 1

    def fill_from_bank(difficulty, n):
        if n <= 0:
            return []
        pool = QUESTION_BANK_BY_DIFFICULTY.get(difficulty, [])
        indices = list(range(len(pool)))
        rng.shuffle(indices)
        return [_build_bank_question(rng, pool[i], language) for i in indices[:n]]

    questions += fill_from_bank("easy", easy_quota)
    questions += fill_from_bank("medium", medium_quota)
    questions += fill_from_bank("hard", hard_quota)

    # Safety net: if a difficulty tier runs short on unique questions some
    # day, backfill from easy rather than shipping a shorter-than-expected quiz.
    while len(questions) < count:
        extra = fill_from_bank("easy", 1)
        if not extra:
            break
        questions += extra

    questions = questions[:count]
    rng.shuffle(questions)  # so orientation/personal aren't always first
    for idx, q in enumerate(questions):
        q["index"] = idx
    return questions


def _classify_trend(series, higher_is_better=True):
    """
    Compares the first half of a numeric series to the second half and
    returns 'green' (clearly improving), 'red' (clearly declining), or
    'yellow' (roughly flat / not enough data yet).
    """
    values = [v for v in series if v is not None]
    if len(values) < 2:
        return "yellow"
    mid = len(values) // 2
    first_half = values[:mid] or values[:1]
    second_half = values[mid:] or values[-1:]
    avg_first = sum(first_half) / len(first_half)
    avg_second = sum(second_half) / len(second_half)
    diff_pct = 100.0 if avg_second > 0 else 0.0
    if avg_first != 0:
        diff_pct = (avg_second - avg_first) / avg_first * 100
    if not higher_is_better:
        diff_pct = -diff_pct
    if diff_pct > 10:
        return "green"
    if diff_pct < -10:
        return "red"
    return "yellow"


# ---------- Daily mini-games ----------
# Now runs every day, same cadence as the quiz (previously Sunday-only).
# Each game type still tracks its own easy/medium/hard phase independently,
# with a 3-day demotion check just like the quiz.

GAME_ROUNDS_PER_DAY_COUNT = 3  # every game type now gets exactly 3 rounds/day
GAME_ROUNDS_PER_DAY = {gt: GAME_ROUNDS_PER_DAY_COUNT for gt in
                        ["memory_match", "connect_dots", "math", "word_association", "color_hunt", "where_is_this", "picture_memory"]}
GAME_DEMOTION_LOOKBACK_DAYS = 3

# Points per round now depend on that round's own difficulty, not a flat
# rate: easy = 1, medium/hard = 2. In the mixed phase (3 rounds: one each of
# easy/medium/hard) that totals to exactly 1 + 2 + 2 = 5 points for 3 rounds.
GAME_POINTS_BY_DIFFICULTY = {"easy": 1, "medium": 2, "hard": 2}

# One game per day, rotating through all 7 in a fixed order so the same game
# never repeats until the full 7-day cycle has played out. The order is
# shuffled once per patient (seeded, so it's stable) so different patients
# don't all get the same game on the same day.
DAILY_GAME_TYPES = ["memory_match", "word_association", "color_hunt", "math", "connect_dots", "where_is_this", "picture_memory"]
GAME_ROTATION_EPOCH = datetime(2020, 1, 1).date()

# How far back catch-up play and history are allowed to reach, and how long
# attempt records are kept before being cleaned up (see _cleanup_old_attempts).
HISTORY_RETENTION_DAYS = 30
HISTORY_DISPLAY_DAYS = 15  # the History view shows a rolling window this wide


def _daily_game_rotation(patient_id):
    rng = random.Random(f"daily_game_rotation:{patient_id}")
    rotation = DAILY_GAME_TYPES.copy()
    rng.shuffle(rotation)
    return rotation


def _daily_game_type_for(patient_id, date_key):
    """Which of the 7 games is featured on this date, for this patient."""
    rotation = _daily_game_rotation(patient_id)
    day_num = (datetime.strptime(date_key, "%Y-%m-%d").date() - GAME_ROTATION_EPOCH).days
    return rotation[day_num % len(rotation)]


def _resolve_date_key(requested_date_str):
    """
    Validates an optional ?date=/date= override used for catch-up play (going
    back to complete a past day's quiz or game). Returns (date_key, error).
    Defaults to today (IST) when no date is given; rejects future dates and
    anything older than the retention window.
    """
    today = _ist_now().date()
    if not requested_date_str:
        return today.isoformat(), None
    try:
        requested = datetime.strptime(requested_date_str, "%Y-%m-%d").date()
    except ValueError:
        return None, "Invalid date."
    if requested > today:
        return None, "Can't play a future date."
    if (today - requested).days > HISTORY_RETENTION_DAYS:
        return None, f"That date is more than {HISTORY_RETENTION_DAYS} days ago."
    return requested.isoformat(), None


def _game_rng(patient_id, game_type, period_key):
    return random.Random(f"game:{game_type}:{patient_id}:{period_key}")


def _should_demote_game(patient_id, game_type, before_date_key):
    """
    True if this game's accuracy was below 50% on each of the 3 most recent
    days strictly before `before_date_key`. A gap in play (no attempts that
    day) breaks the streak, same rule as the daily quiz's demotion check.
    """
    attempts = fetch_all_game_attempts(patient_id, game_type)
    days_played = sorted({a["period_key"] for a in attempts if a["period_key"] < before_date_key}, reverse=True)
    recent_days = days_played[:GAME_DEMOTION_LOOKBACK_DAYS]
    if len(recent_days) < GAME_DEMOTION_LOOKBACK_DAYS:
        return False

    for dk in recent_days:
        day_attempts = [a for a in attempts if a["period_key"] == dk]
        correct = sum(1 for a in day_attempts if a["is_correct"])
        if (correct / len(day_attempts)) >= DEMOTION_ACCURACY_THRESHOLD:
            return False
    return True


def _compute_game_phase(patient_id, game_type, period_key):
    all_attempts = fetch_all_game_attempts(patient_id, game_type)
    points_before = sum(a["points_earned"] for a in all_attempts if a["period_key"] != period_key)
    phase = _phase_from_points(points_before)

    if phase in ("medium", "hard") and _should_demote_game(patient_id, game_type, period_key):
        phase = "easy" if phase == "medium" else "medium"
    return phase


def _game_round_difficulties(phase, count):
    """
    Which difficulty each of today's `count` game rounds should be. In the
    mixed phase this gives one round each of easy/medium/hard (so 3 rounds =
    1 + 2 + 2 = 5 points if all correct); in a single phase, every round is
    that same difficulty.
    """
    if phase == "mixed":
        base = ["easy", "medium", "hard"]
        return [base[i % len(base)] for i in range(count)]
    return [phase] * count


# -- Memory Match: card-pairs game. Difficulty controls how many pairs. --
def generate_memory_match_round(rng, difficulty):
    symbols = GAME_DATA["memory_match_symbols"][difficulty]
    cards = symbols + symbols  # two of each -- the pairs to match
    order = list(range(len(cards)))
    rng.shuffle(order)
    shuffled = [cards[i] for i in order]
    return {"pairs": len(symbols), "cards": shuffled}


# -- Basic Math: addition/subtraction/multiplication, sized by difficulty. --


def _gen_math_question(rng, difficulty):
    if difficulty == "easy":
        op = rng.choice(["+", "-"])
        a, b = rng.randint(1, 10), rng.randint(1, 10)
    elif difficulty == "medium":
        op = rng.choice(["+", "-", "\u00d7"])
        if op == "\u00d7":
            a, b = rng.randint(2, 9), rng.randint(2, 5)
        else:
            a, b = rng.randint(10, 50), rng.randint(1, 30)
    else:  # hard
        op = rng.choice(["+", "-", "\u00d7"])
        if op == "\u00d7":
            a, b = rng.randint(3, 12), rng.randint(3, 12)
        else:
            a, b = rng.randint(50, 200), rng.randint(10, 100)

    if op == "-" and b > a:
        a, b = b, a  # keep subtraction non-negative
    correct = a + b if op == "+" else (a - b if op == "-" else a * b)

    wrong = set()
    while len(wrong) < 2:
        delta = rng.choice([-5, -3, -2, -1, 1, 2, 3, 5]) * (max(1, correct // 20) if correct > 20 else 1)
        candidate = correct + delta
        if candidate != correct and candidate >= 0:
            wrong.add(candidate)
    options = [str(v) for v in wrong] + [str(correct)]
    rng.shuffle(options)
    return {"prompt": f"What is {a} {op} {b}?", "options": options, "answer": str(correct)}


def generate_game_round(patient_id, game_type, period_key, difficulty, round_index):
    """Deterministically builds one round of a given game for this patient/week/round. Same inputs -> same output."""
    rng = _game_rng(patient_id, game_type, period_key + f":{round_index}")

    if game_type == "memory_match":
        return generate_memory_match_round(rng, difficulty)

    if game_type == "math":
        return _gen_math_question(rng, difficulty)

    if game_type == "word_association":
        pool = WORD_ASSOCIATION_BY_DIFFICULTY[difficulty]
        entry = rng.choice(pool)
        options = list(entry["distractors"]) + [entry["answer"]]
        rng.shuffle(options)
        return {"prompt": entry["prompt"], "options": options, "answer": entry["answer"]}

    if game_type == "color_hunt":
        return _gen_color_hunt_round(rng, difficulty)

    if game_type == "connect_dots":
        return _gen_connect_dots_round(rng, difficulty)

    if game_type == "where_is_this":
        return _gen_where_is_this_round(rng, difficulty)

    if game_type == "picture_memory":
        return _gen_picture_memory_round(rng, patient_id, difficulty)

    raise ValueError(f"Unknown or not-yet-implemented game_type: {game_type}")


# -- Color Hunt: count how many boxes of a target color are shown. --
COLOR_PALETTE = [
    {"name": "Red", "hex": "#E8735D"},
    {"name": "Blue", "hex": "#4A90D9"},
    {"name": "Green", "hex": "#6B9E78"},
    {"name": "Yellow", "hex": "#E8A33D"},
    {"name": "Purple", "hex": "#6C63A6"},
    {"name": "Orange", "hex": "#E8935D"},
]


def _gen_color_hunt_round(rng, difficulty):
    box_count, color_count = {"easy": (6, 2), "medium": (12, 4), "hard": (18, 5)}[difficulty]
    palette = COLOR_PALETTE[:color_count]
    boxes = [rng.choice(palette) for _ in range(box_count)]
    target = rng.choice(palette)
    correct = sum(1 for b in boxes if b["name"] == target["name"])

    wrong = set()
    while len(wrong) < 2:
        candidate = correct + rng.choice([-3, -2, -1, 1, 2, 3])
        if candidate != correct and 0 <= candidate <= box_count:
            wrong.add(candidate)
    options = [str(v) for v in wrong] + [str(correct)]
    rng.shuffle(options)

    return {
        "boxes": boxes, "target_color": target,
        "prompt": f"How many {target['name']} boxes do you see?",
        "options": options, "answer": str(correct),
    }


# -- Connect the Dots: click numbered dots in order to trace a shape. --
def _gen_connect_dots_round(rng, difficulty):
    shapes = GAME_DATA["connect_dots_shapes"][difficulty]
    shape = rng.choice(shapes)
    return {"shape_name": shape["name"], "points": shape["points"]}


# -- Where Is This: identify a place from a symbolic scene (see the frontend for
# the actual emoji-based rendering -- kept as plain identifiers here so the
# question bank never has to deal with emoji/encoding at all). --
def _gen_where_is_this_round(rng, difficulty):
    pool = WHERE_IS_THIS_BY_DIFFICULTY[difficulty]
    entry = rng.choice(pool)
    options = list(entry["distractors"]) + [entry["answer"]]
    rng.shuffle(options)
    return {"scene": entry["scene"], "options": options, "answer": entry["answer"]}


# -- Picture Memory: uses the patient's OWN registered known_people photos
# (from the Recognize a Person feature) -- real, personalized images, not an
# external source. Needs at least 2 registered people for meaningful
# multiple-choice options; returns None if there aren't enough yet. --
PICTURE_MEMORY_QUESTION_BY_DIFFICULTY = {"easy": "name", "medium": "relation", "hard": "known_since"}


def _gen_picture_memory_round(rng, patient_id, difficulty):
    people = fetch_known_people(patient_id)
    if len(people) < 2:
        return None

    person = rng.choice(people)
    qtype = PICTURE_MEMORY_QUESTION_BY_DIFFICULTY[difficulty]

    if qtype == "name":
        correct, prompt = person["name"], "What is this person's name?"
        wrong_pool = [p["name"] for p in people if p["name"] != correct]
        fallback = ["Someone else", "Not sure"]
    elif qtype == "relation":
        correct, prompt = person["relation"], "How is this person related to you?"
        wrong_pool = [p["relation"] for p in people if p["relation"] != correct]
        fallback = ["Neighbor", "Colleague"]
    else:
        correct, prompt = person["known_since"], "How long have you known this person?"
        wrong_pool = [p["known_since"] for p in people if p["known_since"] != correct]
        fallback = ["A few days", "Just met"]

    wrong = [w for w in dict.fromkeys(wrong_pool) if w][:2]
    while len(wrong) < 2:
        wrong.append(rng.choice(fallback))
    options = wrong[:2] + [correct]
    rng.shuffle(options)

    return {
        "prompt": prompt, "options": options, "answer": correct,
        "photo_url": _signed_url_or_none(KNOWN_PEOPLE_BUCKET, person.get("photo_path")),
    }


# ---------- API: quiz & games ----------

@app.route("/api/quiz/<period_type>", methods=["GET"])
def api_get_quiz(period_type):
    if period_type not in ("daily", "weekly"):
        return jsonify({"ok": False, "error": "Invalid quiz type."}), 400
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    if period_type == "daily":
        period_key, err = _resolve_date_key(request.args.get("date"))
        if err:
            return jsonify({"ok": False, "error": err}), 400
    else:
        period_key = _period_key(period_type)

    count = QUIZ_DAILY_COUNT if period_type == "daily" else QUIZ_WEEKLY_COUNT
    phase = _compute_current_phase(patient_id, period_type, period_key)
    composition = _phase_composition(phase, count)
    try:
        lang = fetch_ip_language(_get_client_ip()) or "en"
    except Exception as exc:
        print(f"[quiz-lang] Could not fetch language preference, falling back to English: {type(exc).__name__}: {exc}")
        lang = "en"
    questions = generate_quiz_questions(patient_id, period_key, count, composition, lang)
    attempts = fetch_quiz_attempts(patient_id, period_type, period_key)

    out = []
    total_points = 0
    correct_count = 0
    for q in questions:
        attempt = attempts.get(q["index"])
        item = {
            "index": q["index"], "category": q["category"], "difficulty": q["difficulty"],
            "prompt": q["prompt"], "options": q["options"],
        }
        if attempt:
            item.update({
                "answered": True,
                "is_correct": attempt["is_correct"],
                "points_earned": attempt["points_earned"],
                "correct_answer": q["answer"],
            })
            total_points += attempt["points_earned"]
            if attempt["is_correct"]:
                correct_count += 1
        else:
            item["answered"] = False
        out.append(item)

    return jsonify({
        "ok": True, "period_type": period_type, "period_key": period_key, "questions": out,
        "answered_count": len(attempts), "total_count": count,
        "total_points": total_points, "correct_count": correct_count, "phase": phase,
    })


@app.route("/api/quiz/<period_type>/answer", methods=["POST"])
def api_answer_quiz(period_type):
    if period_type not in ("daily", "weekly"):
        return jsonify({"ok": False, "error": "Invalid quiz type."}), 400
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    question_index = data.get("question_index")
    selected = data.get("selected_option", "")
    response_time_ms = data.get("response_time_ms")
    if not isinstance(response_time_ms, int) or response_time_ms < 0:
        response_time_ms = None

    count = QUIZ_DAILY_COUNT if period_type == "daily" else QUIZ_WEEKLY_COUNT
    if not isinstance(question_index, int) or not (0 <= question_index < count):
        return jsonify({"ok": False, "error": "Invalid question index."}), 400

    if period_type == "daily":
        period_key, err = _resolve_date_key(data.get("date"))
        if err:
            return jsonify({"ok": False, "error": err}), 400
    else:
        period_key = _period_key(period_type)

    existing = fetch_quiz_attempts(patient_id, period_type, period_key)
    if question_index in existing:
        att = existing[question_index]
        return jsonify({
            "ok": True, "already_answered": True,
            "is_correct": att["is_correct"], "points_earned": att["points_earned"],
        })

    phase = _compute_current_phase(patient_id, period_type, period_key)
    composition = _phase_composition(phase, count)
    try:
        lang = fetch_ip_language(_get_client_ip()) or "en"
    except Exception as exc:
        print(f"[quiz-lang] Could not fetch language preference, falling back to English: {type(exc).__name__}: {exc}")
        lang = "en"
    questions = generate_quiz_questions(patient_id, period_key, count, composition, lang)
    question = questions[question_index]
    is_correct = (selected == question["answer"])  # a timed-out submission sends "" -> always counts as wrong
    points_per_question = QUIZ_POINTS_PER_QUESTION_DAILY if period_type == "daily" else QUIZ_POINTS_PER_QUESTION_WEEKLY
    points = points_per_question if is_correct else 0

    insert_quiz_attempt(
        patient_id, period_type, period_key, question_index,
        question["category"], question["difficulty"], is_correct, points, response_time_ms,
    )

    return jsonify({"ok": True, "is_correct": is_correct, "correct_answer": question["answer"], "points_earned": points})


@app.route("/api/quiz/stats", methods=["GET"])
def api_quiz_stats():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    # Real UTC timestamp -- quiz_attempts.answered_at is stored as true UTC
    # (Postgres `default now()`), so the comparison window must be real UTC
    # too, not the IST-shifted value used elsewhere for calendar-day bucketing.
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    attempts = fetch_quiz_attempts_since(patient_id, week_ago)

    total = len(attempts)
    correct = sum(1 for a in attempts if a["is_correct"])
    accuracy = round((correct / total) * 100) if total else None
    points_this_week = sum(a["points_earned"] for a in attempts)
    points_max_this_week = QUIZ_DAILY_COUNT * 7  # 5 questions/day x 7 days x 1 point each = 35

    # Games: same 7-day window, across all 7 game types. Max possible points
    # per day varies with phase (3-9 depending on difficulty mix), so rather
    # than promise an exact weekly max, we just report points earned + accuracy.
    game_attempts = fetch_game_attempts_since(patient_id, week_ago)
    game_total = len(game_attempts)
    game_correct = sum(1 for a in game_attempts if a["is_correct"])
    game_accuracy = round((game_correct / game_total) * 100) if game_total else None
    game_points_this_week = sum(a["points_earned"] for a in game_attempts)

    return jsonify({
        "ok": True,
        "answered_this_week": total,
        "correct_this_week": correct,
        "accuracy_this_week": accuracy,
        "points_this_week": points_this_week,
        "points_max_this_week": points_max_this_week,
        "games_answered_this_week": game_total,
        "games_correct_this_week": game_correct,
        "games_accuracy_this_week": game_accuracy,
        "games_points_this_week": game_points_this_week,
    })


BRAIN_SCORE_TIME_NORMALIZER_MS = 60000  # matches the 60s per-question timer -- used to turn response time into a 0-100 speed score


def _compute_brain_accuracy_score(correct, total, response_times):
    """
    A 0-100 composite score blending accuracy (how many were answered
    correctly, across quiz + games together) with speed (how quickly,
    relative to the 60-second time limit). Weighted 60% accuracy / 40%
    speed when timing data is available that day; falls back to pure
    accuracy on days where only untimed games (like Memory Match) were
    played, since those don't record a response time.
    """
    if total == 0:
        return None
    accuracy_pct = (correct / total) * 100
    if response_times:
        avg_ms = sum(response_times) / len(response_times)
        speed_score = max(0.0, 100 * (1 - avg_ms / BRAIN_SCORE_TIME_NORMALIZER_MS))
        return round(0.6 * accuracy_pct + 0.4 * speed_score)
    return round(accuracy_pct)


@app.route("/api/quiz/growth", methods=["GET"])
def api_quiz_growth():
    """
    Real data for the dashboard's progress chart, combining BOTH the quiz
    and the daily games (not quiz alone):
      - short-term = total points (quiz + games) per day, last 7 days
      - long-term  = total points (quiz + games) per ISO week, last 8 weeks
      - brain accuracy = a 0-100 composite of accuracy + answer speed per
        day (see _compute_brain_accuracy_score), across quiz + games together
    Each series comes with a red/yellow/green trend classification.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    all_quiz_attempts = fetch_all_quiz_attempts(patient_id)
    daily_quiz_attempts = [a for a in all_quiz_attempts if a["period_type"] == "daily"]
    all_game_attempts = fetch_all_game_attempts_any_type(patient_id)

    today = _ist_now().date()

    # -- Short-term: combined quiz+games points per day, last 7 days --
    day_keys = [(today - timedelta(days=i)).isoformat() for i in range(6, -1, -1)]
    points_by_day = {d: 0 for d in day_keys}
    correct_by_day = {d: 0 for d in day_keys}
    total_by_day = {d: 0 for d in day_keys}
    time_by_day = {d: [] for d in day_keys}

    for a in daily_quiz_attempts + all_game_attempts:
        dk = a["period_key"]
        if dk not in points_by_day:
            continue
        points_by_day[dk] += a["points_earned"]
        total_by_day[dk] += 1
        if a["is_correct"]:
            correct_by_day[dk] += 1
        if a.get("response_time_ms") is not None:
            time_by_day[dk].append(a["response_time_ms"])

    short_term_values = [points_by_day[d] for d in day_keys]
    short_term_trend = _classify_trend(short_term_values, higher_is_better=True)

    brain_values = [
        _compute_brain_accuracy_score(correct_by_day[d], total_by_day[d], time_by_day[d])
        for d in day_keys
    ]
    brain_trend = _classify_trend(brain_values, higher_is_better=True)

    # -- Long-term: combined quiz+games points per ISO week, last 8 weeks --
    week_keys = []
    for i in range(7, -1, -1):
        d = today - timedelta(weeks=i)
        iso_year, iso_week, _ = d.isocalendar()
        week_keys.append(f"{iso_year}-W{iso_week:02d}")
    points_by_week = {wk: 0 for wk in week_keys}

    for a in daily_quiz_attempts + all_game_attempts:
        try:
            d = datetime.strptime(a["period_key"], "%Y-%m-%d").date()
        except ValueError:
            continue
        iso_year, iso_week, _ = d.isocalendar()
        wk = f"{iso_year}-W{iso_week:02d}"
        if wk in points_by_week:
            points_by_week[wk] += a["points_earned"]

    long_term_values = [points_by_week[wk] for wk in week_keys]
    long_term_trend = _classify_trend(long_term_values, higher_is_better=True)

    return jsonify({
        "ok": True,
        "short_term": {"labels": day_keys, "values": short_term_values, "trend": short_term_trend},
        "long_term": {"labels": week_keys, "values": long_term_values, "trend": long_term_trend},
        "brain_accuracy": {"labels": day_keys, "values": brain_values, "trend": brain_trend},
    })


@app.route("/api/quiz/analysis", methods=["GET"])
def api_quiz_analysis():
    """
    Everything the patient answered wrong in the last 7 days, with the
    exact question text -- reconstructed on the fly by regenerating that
    day's/week's question set (deterministic, so this works for any past
    period without ever having stored the question content itself).
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    wrong_attempts = fetch_wrong_attempts_since(patient_id, week_ago)

    regenerated_cache = {}
    out = []
    try:
        analysis_lang = fetch_ip_language(_get_client_ip()) or "en"
    except Exception as exc:
        print(f"[quiz-lang] Could not fetch language preference, falling back to English: {type(exc).__name__}: {exc}")
        analysis_lang = "en"
    for a in wrong_attempts:
        cache_key = (a["period_type"], a["period_key"])
        if cache_key not in regenerated_cache:
            count = QUIZ_DAILY_COUNT if a["period_type"] == "daily" else QUIZ_WEEKLY_COUNT
            phase = _compute_current_phase(patient_id, a["period_type"], a["period_key"])
            composition = _phase_composition(phase, count)
            regenerated_cache[cache_key] = generate_quiz_questions(patient_id, a["period_key"], count, composition, analysis_lang)

        questions = regenerated_cache[cache_key]
        if a["question_index"] < len(questions):
            q = questions[a["question_index"]]
            out.append({
                "period_type": a["period_type"],
                "period_key": a["period_key"],
                "prompt": q["prompt"],
                "correct_answer": q["answer"],
                "category": q["category"],
                "difficulty": a.get("difficulty") or q.get("difficulty", "easy"),
                "answered_at": a["answered_at"],
            })

    return jsonify({"ok": True, "wrong_answers": out})


# ---------- API: Weekly Challenge mini-games ----------

def _build_game_get_response(patient_id, game_type, period_key):
    """Shared by both /api/games/<type> and /api/games/daily."""
    phase = _compute_game_phase(patient_id, game_type, period_key)
    total_count = GAME_ROUNDS_PER_DAY[game_type]
    round_difficulties = _game_round_difficulties(phase, total_count)
    attempts = fetch_game_attempts(patient_id, game_type, period_key)

    rounds = []
    total_points = 0
    correct_count = 0
    for i in range(total_count):
        round_data = generate_game_round(patient_id, game_type, period_key, round_difficulties[i], i)
        if round_data is None:
            # e.g. Picture Memory with fewer than 2 registered people
            return {
                "ok": True, "game_type": game_type, "period_key": period_key, "phase": phase,
                "unavailable": True,
                "unavailable_reason": "Register at least 2 people via Recognize a Person to unlock this game.",
                "rounds": [], "answered_count": 0, "total_count": total_count,
                "total_points": 0, "correct_count": 0,
            }
        attempt = attempts.get(i)
        item = {"index": i, **round_data}
        if attempt:
            item["answered"] = True
            item["is_correct"] = attempt["is_correct"]
            item["points_earned"] = attempt["points_earned"]
            if "answer" in round_data:
                item["correct_answer"] = round_data["answer"]
            total_points += attempt["points_earned"]
            if attempt["is_correct"]:
                correct_count += 1
        else:
            item["answered"] = False
        rounds.append(item)

    return {
        "ok": True, "game_type": game_type, "period_key": period_key, "phase": phase, "unavailable": False,
        "rounds": rounds, "answered_count": len(attempts), "total_count": total_count,
        "total_points": total_points, "correct_count": correct_count,
    }


def _submit_game_answer(patient_id, game_type, period_key, data):
    """Shared by both /api/games/<type>/answer and /api/games/daily/answer."""
    round_index = data.get("round_index", 0)
    total_count = GAME_ROUNDS_PER_DAY[game_type]
    if not isinstance(round_index, int) or not (0 <= round_index < total_count):
        return {"ok": False, "error": "Invalid round index."}, 400

    existing = fetch_game_attempts(patient_id, game_type, period_key)
    if round_index in existing:
        att = existing[round_index]
        return {"ok": True, "already_answered": True, "is_correct": att["is_correct"], "points_earned": att["points_earned"]}, 200

    phase = _compute_game_phase(patient_id, game_type, period_key)
    round_difficulties = _game_round_difficulties(phase, total_count)
    round_difficulty = round_difficulties[round_index]
    response_time_ms = data.get("response_time_ms")
    if not isinstance(response_time_ms, int) or response_time_ms < 0:
        response_time_ms = None

    if game_type == "memory_match":
        pairs = data.get("pairs")
        mismatches = data.get("mismatches")
        if not isinstance(pairs, int) or not isinstance(mismatches, int) or pairs <= 0 or mismatches < 0:
            return {"ok": False, "error": "Invalid game result."}, 400
        is_correct = mismatches <= pairs
        correct_answer = None
    elif game_type == "connect_dots":
        total_dots = data.get("total_dots")
        mistakes = data.get("mistakes")
        if not isinstance(total_dots, int) or not isinstance(mistakes, int) or total_dots <= 0 or mistakes < 0:
            return {"ok": False, "error": "Invalid game result."}, 400
        is_correct = mistakes <= max(2, total_dots // 3)
        correct_answer = None
    else:
        round_data = generate_game_round(patient_id, game_type, period_key, round_difficulty, round_index)
        if round_data is None:
            return {"ok": False, "error": "This game isn't available yet."}, 400
        selected = data.get("selected_option", "")
        is_correct = (selected == round_data["answer"])
        correct_answer = round_data["answer"]

    points = GAME_POINTS_BY_DIFFICULTY[round_difficulty] if is_correct else 0
    insert_game_attempt(patient_id, game_type, period_key, round_index, round_difficulty, is_correct, points, response_time_ms)

    resp = {"ok": True, "is_correct": is_correct, "points_earned": points}
    if correct_answer is not None:
        resp["correct_answer"] = correct_answer
    return resp, 200


@app.route("/api/games/<game_type>", methods=["GET"])
def api_get_game(game_type):
    if game_type not in GAME_ROUNDS_PER_DAY:
        return jsonify({"ok": False, "error": "That game isn't available yet."}), 400
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    period_key = _period_key("daily")
    return jsonify(_build_game_get_response(patient_id, game_type, period_key))


@app.route("/api/games/<game_type>/answer", methods=["POST"])
def api_answer_game(game_type):
    if game_type not in GAME_ROUNDS_PER_DAY:
        return jsonify({"ok": False, "error": "That game isn't available yet."}), 400
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    period_key = _period_key("daily")
    resp, status = _submit_game_answer(patient_id, game_type, period_key, data)
    return jsonify(resp), status


# ---------- API: today's game (or a past date, for catch-up play) ----------
# Runs every day now, same cadence as the quiz -- one game per day, rotating
# through all 7 so the same game never repeats until the full cycle is done
# (see _daily_game_type_for above).

@app.route("/api/games/daily", methods=["GET"])
def api_get_daily_game():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    period_key, err = _resolve_date_key(request.args.get("date"))
    if err:
        return jsonify({"ok": False, "error": err}), 400

    game_type = _daily_game_type_for(patient_id, period_key)
    result = _build_game_get_response(patient_id, game_type, period_key)
    return jsonify(result)


@app.route("/api/games/daily/answer", methods=["POST"])
def api_answer_daily_game():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    period_key, err = _resolve_date_key(data.get("date"))
    if err:
        return jsonify({"ok": False, "error": err}), 400

    game_type = _daily_game_type_for(patient_id, period_key)
    resp, status = _submit_game_answer(patient_id, game_type, period_key, data)
    return jsonify(resp), status


# ---------- API: date-wise completion history (for the History/catch-up view) ----------
# Shows, for each day in a rolling window, whether the quiz and the game were
# completed that day -- separately -- so a missed or forgotten day can be
# spotted and gone back to. Records older than HISTORY_RETENTION_DAYS (30 =
# ~1 month) are actually deleted (see _cleanup_old_attempts), run
# opportunistically whenever history is viewed rather than on a schedule.

def fetch_all_daily_quiz_attempts(patient_id: int):
    res = (
        get_client().table("quiz_attempts")
        .select("period_key, is_correct, points_earned")
        .eq("patient_id", patient_id)
        .eq("period_type", "daily")
        .execute()
    )
    return res.data


def fetch_all_game_attempts_any_type(patient_id: int):
    res = (
        get_client().table("game_attempts")
        .select("period_key, game_type, is_correct, points_earned, response_time_ms")
        .eq("patient_id", patient_id)
        .execute()
    )
    return res.data


def _cleanup_old_attempts(patient_id: int):
    """Deletes quiz/game attempt rows older than the retention window. Best-effort --
    failures here shouldn't block the person from seeing their history."""
    cutoff = (_ist_now().date() - timedelta(days=HISTORY_RETENTION_DAYS)).isoformat()
    try:
        get_client().table("quiz_attempts").delete().eq("patient_id", patient_id).eq("period_type", "daily").lt("period_key", cutoff).execute()
        get_client().table("game_attempts").delete().eq("patient_id", patient_id).lt("period_key", cutoff).execute()
    except Exception:
        pass


@app.route("/api/progress/history", methods=["GET"])
def api_progress_history():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    _cleanup_old_attempts(patient_id)

    try:
        days = min(max(int(request.args.get("days", HISTORY_DISPLAY_DAYS)), 1), HISTORY_RETENTION_DAYS)
    except (TypeError, ValueError):
        days = HISTORY_DISPLAY_DAYS

    today = _ist_now().date()
    date_keys = [(today - timedelta(days=i)).isoformat() for i in range(days)]

    quiz_by_date = {}
    for a in fetch_all_daily_quiz_attempts(patient_id):
        quiz_by_date.setdefault(a["period_key"], []).append(a)

    game_by_date = {}
    for a in fetch_all_game_attempts_any_type(patient_id):
        game_by_date.setdefault(a["period_key"], []).append(a)

    out = []
    for dk in date_keys:
        q_attempts = quiz_by_date.get(dk, [])
        game_type = _daily_game_type_for(patient_id, dk)
        game_total = GAME_ROUNDS_PER_DAY.get(game_type, 1)
        g_attempts = game_by_date.get(dk, [])

        out.append({
            "date": dk,
            "quiz": {
                "completed": len(q_attempts) >= QUIZ_DAILY_COUNT,
                "answered": len(q_attempts), "total": QUIZ_DAILY_COUNT,
            },
            "game": {
                "completed": len(g_attempts) >= game_total,
                "answered": len(g_attempts), "total": game_total, "game_type": game_type,
            },
        })

    return jsonify({"ok": True, "days": out})


@app.route("/api/progress/day-detail", methods=["GET"])
def api_progress_day_detail():
    """
    For the 'Analyze' button on each History row: exactly which quiz
    questions and game rounds were attempted (and correct/incorrect) vs not
    attempted at all, for one specific date. Regenerates that day's content
    deterministically rather than needing it stored.
    """
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    date_key, err = _resolve_date_key(request.args.get("date"))
    if err:
        return jsonify({"ok": False, "error": err}), 400

    # -- Quiz breakdown --
    quiz_phase = _compute_current_phase(patient_id, "daily", date_key)
    quiz_composition = _phase_composition(quiz_phase, QUIZ_DAILY_COUNT)
    try:
        lang = fetch_ip_language(_get_client_ip()) or "en"
    except Exception as exc:
        print(f"[quiz-lang] Could not fetch language preference, falling back to English: {type(exc).__name__}: {exc}")
        lang = "en"
    quiz_questions = generate_quiz_questions(patient_id, date_key, QUIZ_DAILY_COUNT, quiz_composition, lang)
    quiz_attempts = fetch_quiz_attempts(patient_id, "daily", date_key)

    quiz_out = []
    for q in quiz_questions:
        attempt = quiz_attempts.get(q["index"])
        item = {
            "index": q["index"], "prompt": q["prompt"], "category": q["category"],
            "difficulty": q["difficulty"], "correct_answer": q["answer"],
            "attempted": attempt is not None,
        }
        if attempt:
            item["is_correct"] = attempt["is_correct"]
        quiz_out.append(item)

    # -- Game breakdown --
    game_type = _daily_game_type_for(patient_id, date_key)
    game_phase = _compute_game_phase(patient_id, game_type, date_key)
    game_total = GAME_ROUNDS_PER_DAY[game_type]
    round_difficulties = _game_round_difficulties(game_phase, game_total)
    game_attempts = fetch_game_attempts(patient_id, game_type, date_key)

    game_out = []
    for i in range(game_total):
        round_data = generate_game_round(patient_id, game_type, date_key, round_difficulties[i], i)
        attempt = game_attempts.get(i)
        item = {"index": i, "difficulty": round_difficulties[i], "attempted": attempt is not None}
        if round_data:
            item["prompt"] = round_data.get("prompt") or round_data.get("shape_name") or f"{game_type} round"
            if "answer" in round_data:
                item["correct_answer"] = round_data["answer"]
        else:
            item["unavailable"] = True
        if attempt:
            item["is_correct"] = attempt["is_correct"]
        game_out.append(item)

    return jsonify({"ok": True, "date": date_key, "game_type": game_type, "quiz": quiz_out, "game": game_out})


# ---------- API: Emergency SOS ----------

EMERGENCY_NUMBERS = {"police": "100", "medical": "108", "fire": "101"}  # standard India emergency numbers
EMERGENCY_RATE_LIMIT_PER_HOUR = 3


def _build_whatsapp_emergency_url(phone, address):
    """
    A wa.me 'click to chat' link -- opens WhatsApp with the emergency message
    already typed into the box. IMPORTANT: WhatsApp does not allow a link to
    send a message silently/automatically -- the person still has to tap
    Send once inside WhatsApp themselves. That's a deliberate anti-spam
    restriction on WhatsApp's side, not a limitation of this code; there's
    no free/legitimate way around it (fully automated sending needs the
    paid WhatsApp Business API with an approved account). What this DOES
    reliably do: skip all the typing, with the correct date/time/address
    already filled in.
    """
    if not phone:
        return None
    digits = re.sub(r"\D", "", phone)
    if len(digits) == 10:
        digits = "91" + digits  # bare 10-digit numbers are assumed Indian mobile numbers
    now = _ist_now()
    date_str = now.strftime("%d %b %Y")
    time_str = now.strftime("%I:%M %p").lstrip("0")
    address_str = address or "address not set in profile"
    message = f"I need Emergency Help - {date_str}, {time_str} - {address_str}"
    return f"https://wa.me/{digits}?text={quote(message)}"


def _build_emergency_contacts(patient_id):
    caretaker = get_caretaker(patient_id)
    patient = get_patient(patient_id)
    address = patient.get("address") if patient else None

    caretaker_phone = (caretaker.get("emergency_phone") or caretaker.get("phone")) if caretaker else None
    neighbour_phone = patient.get("neighbour_phone") if patient else None

    return {
        "police": EMERGENCY_NUMBERS["police"],
        "medical": EMERGENCY_NUMBERS["medical"],
        "fire": EMERGENCY_NUMBERS["fire"],
        "caretaker": {
            "name": caretaker.get("full_name") if caretaker else None,
            "phone": caretaker_phone,
            "whatsapp_url": _build_whatsapp_emergency_url(caretaker_phone, address),
        },
        "neighbour_phone": neighbour_phone,
        "neighbour_whatsapp_url": _build_whatsapp_emergency_url(neighbour_phone, address),
    }


@app.route("/api/emergency/contacts", methods=["GET"])
def api_emergency_contacts():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    return jsonify({"ok": True, "contacts": _build_emergency_contacts(patient_id)})


@app.route("/api/emergency/trigger", methods=["POST"])
def api_trigger_emergency():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    hour_ago = (datetime.now(timezone.utc) - timedelta(hours=1)).isoformat()
    recent = fetch_emergency_alerts_since(patient_id, hour_ago)
    if len(recent) >= EMERGENCY_RATE_LIMIT_PER_HOUR:
        oldest = min(a["triggered_at"] for a in recent)
        oldest_dt = datetime.fromisoformat(oldest.replace("Z", "+00:00"))
        minutes_left = max(1, round((oldest_dt + timedelta(hours=1) - datetime.now(timezone.utc)).total_seconds() / 60))
        return jsonify({
            "ok": False,
            "error": f"You've already sent {EMERGENCY_RATE_LIMIT_PER_HOUR} emergency alerts in the last hour. "
                     f"Please call for help directly using the numbers below, or try again in about {minutes_left} minutes.",
            "rate_limited": True,
            "retry_after_minutes": minutes_left,
            "contacts": _build_emergency_contacts(patient_id),
        }), 429

    patient = get_patient(patient_id)
    caretaker = get_caretaker(patient_id)
    caretaker_phone = (caretaker.get("emergency_phone") or caretaker.get("phone")) if caretaker else None
    patient_name = (patient.get("name") if patient else None) or "The patient"

    message = f"EMERGENCY: {patient_name} has pressed the SOS button on Smriti and may need help."
    insert_emergency_alert(patient_id, caretaker_phone, message)

    # ---- Real SMS/call integration point ----
    # e.g. with Twilio (requires `pip install twilio` and a paid account):
    #   from twilio.rest import Client
    #   client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    #   if caretaker_phone:
    #       client.messages.create(to=f"+91{caretaker_phone}", from_=TWILIO_FROM_NUMBER, body=message)
    print(f"[emergency alert -- not actually sent, no SMS provider configured] {message} "
          f"Would notify caretaker at {caretaker_phone or 'unknown number'}.")

    return jsonify({
        "ok": True,
        "message": message,
        "caretaker_name": caretaker.get("full_name") if caretaker else None,
        "caretaker_phone": caretaker_phone,
        "remaining_this_hour": max(0, EMERGENCY_RATE_LIMIT_PER_HOUR - len(recent) - 1),
        "contacts": _build_emergency_contacts(patient_id),
    })


# ============================================================================
# AI assistant (Smriti Assistant) -- Google Gemini, free tier
# ============================================================================

GEMINI_MODEL = "gemini-3.6-flash"  # free-tier model. Google renames/retires models over time --
# if this 404s again later, the error message itself tells you the exact replacement to use.
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"
GEMINI_MAX_TOOL_ROUNDS = 5          # safety cap so a confused tool-call loop can't run forever
ASSISTANT_MAX_HISTORY_MESSAGES = 20  # how much prior conversation we resend each turn
ASSISTANT_MAX_MESSAGE_CHARS = 2000

NAV_TARGETS = [
    "dashboard", "recognize_person", "timetable", "events",
    "quiz", "games", "history", "profile", "location",
]

def _build_assistant_system_prompt():
    today_str = _ist_now().strftime("%A, %d %B %Y")
    return f"""You are Smriti Assistant, a warm, patient helper built into the Smriti memory-care app.

Today's date is {today_str} (use this to work out dates like "tomorrow" or "next Monday" when adding events).

You can help with:
- Questions about how to use the app (Recognize a Person, the daily timetable, Quiz & Games, important events, the Emergency button, the Profile page, live location, and so on).
- General, factual information about Alzheimer's disease and dementia care.
- Looking up the CURRENT patient's own information using your tools: today's tasks, the people they've registered to recognize, upcoming events, their caretaker's contact info, and their weekly quiz/game progress.
- Adding a new daily task (like "remind me to take medicine at 8am") or a new one-off event (like "add a doctor's appointment next Tuesday at 10am") directly, using your tools.

Important rules:
- Always prefer exact, real data from your tools over a generic answer. If a question could be about the patient's own information (their tasks, people, events, progress, profile, caretaker), call the relevant tool rather than answering vaguely -- don't just describe what the feature does when you could show real numbers/names instead.
- When asked to add a task or event, use add_task or add_event directly rather than just explaining how to do it manually -- that's the point of being able to do it by voice/chat. After adding it, clearly repeat back exactly what you created (name, time, date) so the person can catch anything wrong, and suggest_navigation to "timetable" or "events" so they can see and edit it if needed.
- A daily task needs a start time and an end time (e.g. 08:00 to 08:30) -- if the person only gives one time, use your judgement for a short, sensible window (like 30 minutes) rather than asking a follow-up question, unless it's genuinely ambiguous.
- An event needs a specific date and time -- if the person gives a relative date ("tomorrow", "next Friday"), work out the actual date yourself using today's date above.
- Whenever you mention a specific app feature or section by name (Recognize a Person, the daily timetable, Quiz & Games, important events, Profile, History, live location, the dashboard), call suggest_navigation with the matching target so the person gets a button to jump straight there. Do this even for a passing mention, not just when they explicitly ask "where is X".
- Never call suggest_navigation with "emergency" or anything emergency-related -- it isn't a valid target. If asked about the SOS/emergency button, describe it in words only.
- You are not a doctor. For any medical decision, new or worsening symptom, medication question, or emergency, clearly and kindly tell the person to contact their caretaker or a real doctor -- never diagnose or recommend treatment.
- Keep answers short, warm, and simple in plain language -- this app is used by memory-care patients and their families, some with limited short-term memory.
- Reply in the same language and style the person just used: if they wrote in Hindi, reply in Hindi; if Hinglish (Hindi-English mixed, written in Latin letters), reply in Hinglish the same way; if English, reply in English. Match their style rather than defaulting to English.
- If a tool returns an error or empty result, say so plainly rather than guessing."""


ASSISTANT_TOOLS = [
    {
        "name": "get_patient_profile",
        "description": "Get the current patient's own profile: name, age, gender, type of memory loss, when it started, and any other conditions.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "get_caretaker_info",
        "description": "Get the current patient's caretaker's name, relation, and phone number.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "get_today_tasks",
        "description": "Get today's daily routine tasks for the patient (meals, medication, bathing, etc) and whether each has been completed yet.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "get_known_people",
        "description": "Get the list of people the patient has registered to recognize (family, friends, etc), with name, relation, and how long known.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "get_upcoming_events",
        "description": "Get the patient's upcoming important events and appointments.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "get_progress_stats",
        "description": "Get the patient's quiz and games accuracy and points for the current week, used to track mental engagement.",
        "parameters": {"type": "object", "properties": {}},
    },
    {
        "name": "add_task",
        "description": "Add a new recurring daily task to the patient's timetable (e.g. medication, meals, bathing). Runs every day at this time until edited or deleted.",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {"type": "string", "description": "What the task is, e.g. 'Morning medication'."},
                "start_time": {"type": "string", "description": "24-hour HH:MM, e.g. '08:00'."},
                "end_time": {"type": "string", "description": "24-hour HH:MM, must be after start_time, e.g. '08:30'."},
            },
            "required": ["name", "start_time", "end_time"],
        },
    },
    {
        "name": "add_event",
        "description": "Add a new one-off important event or appointment on a specific date (e.g. a doctor's visit, a birthday).",
        "parameters": {
            "type": "object",
            "properties": {
                "title": {"type": "string", "description": "What the event is, e.g. 'Dr. Mehta checkup'."},
                "event_date": {"type": "string", "description": "The date in YYYY-MM-DD format, resolved from today's date if the person gave a relative day."},
                "event_time": {"type": "string", "description": "24-hour HH:MM, e.g. '10:00'."},
            },
            "required": ["title", "event_date", "event_time"],
        },
    },
    {
        "name": "suggest_navigation",
        "description": "Offer the person a button to jump directly to a specific section of the app. Call this whenever you mention a named feature or section.",
        "parameters": {
            "type": "object",
            "properties": {
                "target": {
                    "type": "string",
                    "description": "Which section to link to.",
                    "enum": NAV_TARGETS,
                },
            },
            "required": ["target"],
        },
    },
]


def _tool_get_patient_profile(patient_id):
    p = get_patient(patient_id)
    if not p:
        return {"error": "Profile not found."}
    return {
        "name": p.get("name"), "age": p.get("age"), "gender": p.get("gender"),
        "memory_loss_type": p.get("memory_loss_type"),
        "onset_summary": summarize_onset(p.get("onset_date")),
        "extra_conditions": p.get("extra_conditions") or "None recorded",
        "unusual_activities": p.get("unusual_activities") or "None recorded",
    }


def _tool_get_caretaker_info(patient_id):
    c = get_caretaker(patient_id)
    if not c:
        return {"error": "No caretaker is registered for this patient."}
    return {
        "name": c.get("full_name"), "relation": c.get("relation"),
        "phone": c.get("phone"), "emergency_phone": c.get("emergency_phone"),
    }


def _tool_get_today_tasks(patient_id):
    today_str = _ist_today_str()
    tasks = fetch_tasks(patient_id)
    logs = fetch_task_logs_for_date(patient_id, today_str)
    out = []
    for t in tasks:
        log = logs.get(t["id"])
        out.append({
            "name": t["name"], "start_time": t["start_time"], "end_time": t["end_time"],
            "status": log["status"] if log else "pending",
        })
    return {"date": today_str, "tasks": out}


def _tool_get_known_people(patient_id):
    people = fetch_known_people(patient_id)
    return {"people": [
        {
            "name": p["name"], "relation": p["relation"], "known_since": p["known_since"],
            "memory_type": p["memory_type"], "note": p.get("memory_note") or "",
        }
        for p in people
    ]}


def _tool_get_upcoming_events(patient_id):
    events = fetch_events(patient_id)
    return {"events": [
        {"title": e["title"], "date": e["event_date"], "time": (e["event_time"] or "")[:5]}
        for e in events
    ]}


def _tool_get_progress_stats(patient_id):
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    quiz_attempts = fetch_quiz_attempts_since(patient_id, week_ago)
    game_attempts = fetch_game_attempts_since(patient_id, week_ago)
    q_total, q_correct = len(quiz_attempts), sum(1 for a in quiz_attempts if a["is_correct"])
    g_total, g_correct = len(game_attempts), sum(1 for a in game_attempts if a["is_correct"])
    return {
        "quiz_accuracy_pct": round(q_correct / q_total * 100) if q_total else None,
        "quiz_points_this_week": sum(a["points_earned"] for a in quiz_attempts),
        "games_accuracy_pct": round(g_correct / g_total * 100) if g_total else None,
        "games_points_this_week": sum(a["points_earned"] for a in game_attempts),
    }


def _tool_add_task(patient_id, args):
    """Creates a real daily task, same validation as the Timetable's own Add Task form."""
    name = (args.get("name") or "").strip()
    start_time = (args.get("start_time") or "").strip()
    end_time = (args.get("end_time") or "").strip()

    if not name:
        return {"error": "A task needs a name."}
    start_t = _parse_time_str(start_time)
    end_t = _parse_time_str(end_time)
    if not start_t:
        return {"error": f"'{start_time}' isn't a valid time -- use 24-hour HH:MM."}
    if not end_t:
        return {"error": f"'{end_time}' isn't a valid time -- use 24-hour HH:MM."}
    if end_t <= start_t:
        return {"error": "The end time must be after the start time."}

    task = insert_task(patient_id, name, start_time, end_time)
    return {"ok": True, "task": {"id": task["id"], "name": name, "start_time": start_time, "end_time": end_time}}


def _tool_add_event(patient_id, args):
    """Creates a real one-off event, same validation as the Important Events' own Add Event form."""
    title = (args.get("title") or "").strip()
    event_date = (args.get("event_date") or "").strip()
    event_time = (args.get("event_time") or "").strip()

    if not title:
        return {"error": "An event needs a title."}
    try:
        datetime.strptime(event_date, "%Y-%m-%d")
    except ValueError:
        return {"error": f"'{event_date}' isn't a valid date -- use YYYY-MM-DD."}
    if not _parse_time_str(event_time):
        return {"error": f"'{event_time}' isn't a valid time -- use 24-hour HH:MM."}

    event = insert_event(patient_id, title, event_date, event_time)
    return {"ok": True, "event": {"id": event["id"], "title": title, "event_date": event_date, "event_time": event_time}}


ASSISTANT_TOOL_FUNCTIONS = {
    "get_patient_profile": _tool_get_patient_profile,
    "get_caretaker_info": _tool_get_caretaker_info,
    "get_today_tasks": _tool_get_today_tasks,
    "get_known_people": _tool_get_known_people,
    "get_upcoming_events": _tool_get_upcoming_events,
    "get_progress_stats": _tool_get_progress_stats,
}
# Tools that need the model's arguments, not just patient_id (handled separately in _call_gemini)
ASSISTANT_ARG_TOOL_FUNCTIONS = {
    "add_task": _tool_add_task,
    "add_event": _tool_add_event,
}


def _call_gemini(contents, patient_id):
    """
    Runs the Gemini tool-calling loop: sends the conversation, executes any
    tool calls Gemini requests (scoped to this patient_id only), feeds the
    results back, and repeats until Gemini gives a final text reply or the
    safety cap (GEMINI_MAX_TOOL_ROUNDS) is hit.

    Returns (reply_text, nav_targets) -- nav_targets is the list of app
    sections (see NAV_TARGETS) the assistant suggested via suggest_navigation
    this turn, in the order they were suggested, with no duplicates.
    """
    nav_targets = []

    for _ in range(GEMINI_MAX_TOOL_ROUNDS):
        resp = requests.post(
            GEMINI_API_URL,
            params={"key": GEMINI_API_KEY},
            json={
                "system_instruction": {"parts": [{"text": _build_assistant_system_prompt()}]},
                "contents": contents,
                "tools": [{"functionDeclarations": ASSISTANT_TOOLS}],
            },
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        candidates = data.get("candidates", [])
        if not candidates:
            return "Sorry, I couldn't come up with a reply just now. Please try again.", nav_targets

        parts = candidates[0].get("content", {}).get("parts", [])
        function_calls = [p["functionCall"] for p in parts if "functionCall" in p]

        if not function_calls:
            text_parts = [p.get("text", "") for p in parts if "text" in p]
            reply = "".join(text_parts).strip() or "I'm not sure how to answer that."
            return reply, nav_targets

        contents.append({"role": "model", "parts": parts})
        response_parts = []
        for call in function_calls:
            fn_name = call.get("name")
            args = call.get("args") or {}

            if fn_name == "suggest_navigation":
                target = args.get("target")
                if target in NAV_TARGETS:
                    if target not in nav_targets:
                        nav_targets.append(target)
                    result = {"ok": True}
                else:
                    result = {"ok": False, "error": f"'{target}' is not a valid navigation target."}
            elif fn_name in ASSISTANT_ARG_TOOL_FUNCTIONS:
                try:
                    result = ASSISTANT_ARG_TOOL_FUNCTIONS[fn_name](patient_id, args)
                except Exception:
                    result = {"error": "Could not save that right now. Please try again."}
            else:
                fn = ASSISTANT_TOOL_FUNCTIONS.get(fn_name)
                try:
                    result = fn(patient_id) if fn else {"error": f"Unknown tool: {fn_name}"}
                except Exception:
                    result = {"error": "Could not fetch that information right now."}

            response_parts.append({"functionResponse": {"name": fn_name, "response": result}})
        contents.append({"role": "user", "parts": response_parts})

    return "I looked into a few things but couldn't finish in time \u2014 could you ask that a bit more simply?", nav_targets


@app.route("/api/assistant/chat", methods=["POST"])
def api_assistant_chat():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    if not GEMINI_API_KEY:
        return jsonify({
            "ok": False,
            "error": "The AI assistant isn't set up yet. Add a free Gemini API key to your .env file "
                     "(GEMINI_API_KEY) \u2014 see .env.example for how to get one.",
        }), 503

    data = request.get_json(force=True)
    message = (data.get("message") or "").strip()
    history = data.get("history") or []
    if not message:
        return jsonify({"ok": False, "error": "Type a message first."}), 400
    if len(message) > ASSISTANT_MAX_MESSAGE_CHARS:
        return jsonify({"ok": False, "error": "That message is too long."}), 400

    contents = []
    for turn in history[-ASSISTANT_MAX_HISTORY_MESSAGES:]:
        role = "user" if turn.get("role") == "user" else "model"
        text = str(turn.get("text", ""))[:ASSISTANT_MAX_MESSAGE_CHARS]
        if text:
            contents.append({"role": role, "parts": [{"text": text}]})
    contents.append({"role": "user", "parts": [{"text": message}]})

    try:
        reply, nav_targets = _call_gemini(contents, patient_id)
    except requests.exceptions.HTTPError as exc:
        status = exc.response.status_code if exc.response is not None else None
        body = exc.response.text[:500] if exc.response is not None else ""
        print(f"[assistant] Gemini HTTP error (status={status}): {body}")
        if status == 429:
            return jsonify({"ok": False, "error": "The assistant is getting a lot of requests right now (free-tier limit). Please try again in a minute."}), 429
        return jsonify({"ok": False, "error": "The AI service returned an error. Please try again."}), 502
    except requests.exceptions.RequestException as exc:
        print(f"[assistant] Could not reach Gemini: {type(exc).__name__}: {exc}")
        return jsonify({"ok": False, "error": "Could not reach the AI service. Please try again in a moment."}), 502
    except Exception as exc:
        print(f"[assistant] Unexpected error: {type(exc).__name__}: {exc}")
        return jsonify({"ok": False, "error": "Something went wrong. Please try again."}), 500

    return jsonify({"ok": True, "reply": reply, "nav_targets": nav_targets})


# ============================================================================
# "Find My Things" -- photograph an object + note where it's stored, then
# browse/search that list later to remember where something was put.
# NOT automatic image recognition (see the schema note for why) -- finding
# something means looking through the list, ideally aided by seeing the
# actual photo, which is often enough of a memory cue on its own.
# ============================================================================

@app.route("/api/objects", methods=["GET"])
def api_list_objects():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    objects = fetch_stored_objects(patient_id)
    out = [{
        "id": o["id"], "name": o["name"], "location_note": o["location_note"],
        "photo_url": _signed_url_or_none(OBJECT_PHOTOS_BUCKET, o.get("photo_path")),
    } for o in objects]
    return jsonify({"ok": True, "objects": out})


@app.route("/api/objects", methods=["POST"])
def api_add_object():
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401

    data = request.get_json(force=True)
    name = data.get("name", "").strip()
    location_note = data.get("location_note", "").strip()
    image_b64 = data.get("image", "")

    errors = {}
    if not name:
        errors["name"] = "Enter what the object is."
    if not location_note:
        errors["location_note"] = "Enter where you put it."
    if not image_b64:
        errors["image"] = "Take a photo of the object."
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    try:
        photo_path = f"{patient_id}/{uuid.uuid4()}.jpg"
        upload_face_image(OBJECT_PHOTOS_BUCKET, photo_path, _b64_to_bytes(image_b64))
    except Exception:
        return jsonify({"ok": False, "errors": {"image": "Could not save that photo. Please try again."}}), 400

    obj = insert_stored_object(patient_id, name, location_note, photo_path)
    return jsonify({
        "ok": True,
        "object": {
            "id": obj["id"], "name": name, "location_note": location_note,
            "photo_url": _signed_url_or_none(OBJECT_PHOTOS_BUCKET, photo_path),
        },
    })


@app.route("/api/objects/<int:object_id>", methods=["DELETE"])
def api_delete_object(object_id):
    patient_id = require_login()
    if not patient_id:
        return jsonify({"ok": False, "error": "Not logged in."}), 401
    if not get_stored_object(object_id, patient_id):
        return jsonify({"ok": False, "error": "Not found."}), 404

    delete_stored_object(object_id, patient_id)
    return jsonify({"ok": True})


# ============================================================================
# Language preference -- persisted by IP address (see the schema note for
# why that's a real limitation, not a bug). Applies even before login, so
# these two endpoints don't require an authenticated session.
# ============================================================================

SUPPORTED_LANGUAGES = ["en", "hi", "ta", "te", "as", "mr"]


def _get_client_ip():
    # X-Forwarded-For first, in case this ever runs behind a proxy/load
    # balancer -- falls back to the direct connection address otherwise.
    forwarded = request.headers.get("X-Forwarded-For", "")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.remote_addr or "unknown"


def fetch_ip_language(ip_address: str):
    res = (
        get_client().table("ip_language_preferences")
        .select("language_code").eq("ip_address", ip_address).limit(1).execute()
    )
    return res.data[0]["language_code"] if res.data else None


def upsert_ip_language(ip_address: str, language_code: str) -> None:
    get_client().table("ip_language_preferences").upsert({
        "ip_address": ip_address, "language_code": language_code,
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }).execute()


@app.route("/api/language", methods=["GET"])
def api_get_language():
    try:
        lang = fetch_ip_language(_get_client_ip())
    except Exception:
        lang = None
    return jsonify({"ok": True, "language": lang or "en"})


@app.route("/api/language", methods=["POST"])
def api_set_language():
    data = request.get_json(force=True)
    lang = data.get("language")
    if lang not in SUPPORTED_LANGUAGES:
        return jsonify({"ok": False, "error": "Unsupported language."}), 400

    try:
        upsert_ip_language(_get_client_ip(), lang)
    except Exception:
        return jsonify({"ok": False, "error": "Could not save your language preference right now."}), 502
    return jsonify({"ok": True, "language": lang})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000, use_reloader=False)