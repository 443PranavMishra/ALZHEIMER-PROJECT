"""
Data access layer for Smriti, backed by Supabase (hosted Postgres + Storage).

DB choice: Supabase.
- It's a managed Postgres instance plus a Storage service (S3-like buckets),
  reachable over a REST API via the `supabase` Python client -- no local
  database server, connection pooling, or driver setup to manage.
- Structured data (patients, caretakers) lives in Postgres tables (see
  supabase_schema.sql -- run that once in the Supabase SQL editor before
  starting the app).
- Face images are stored in two private Storage buckets (patient-faces,
  caretaker-faces) instead of local disk, so they survive redeploys and
  aren't lost if the app runs somewhere with an ephemeral filesystem.
- Face embeddings (512 floats from FaceNet) are stored as jsonb in the
  face_embeddings table. At the scale of a single family/clinic (tens to
  low hundreds of faces), fetching all rows and comparing in Python via
  cosine similarity is fast (<10ms) and needs no vector index. If this
  ever needs to scale to thousands of patients, enable the `pgvector`
  extension in Supabase and switch that column to `vector(512)` -- the
  rest of this file barely changes.

Auth: uses the Supabase *service_role* key (server-side only, never expose
it to the browser) so the backend can read/write regardless of row-level
security policies. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY as
environment variables (see .env.example).
"""
import os

from supabase import create_client, Client

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

_client = None


def get_client() -> Client:
    global _client
    if _client is None:
        if not SUPABASE_URL or not SUPABASE_KEY:
            raise RuntimeError(
                "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set as environment "
                "variables. Copy .env.example to .env and fill in your project's values "
                "(Supabase dashboard -> Project settings -> API)."
            )
        _client = create_client(SUPABASE_URL, SUPABASE_KEY)
    return _client


# ---------- Patients ----------

def insert_patient(patient_data: dict) -> int:
    """patient_data keys match the `patients` table columns. Returns new patient id."""
    res = get_client().table("patients").insert(patient_data).execute()
    return res.data[0]["id"]


def get_patient(patient_id: int):
    res = get_client().table("patients").select("*").eq("id", patient_id).limit(1).execute()
    return res.data[0] if res.data else None


# ---------- Caretakers ----------

def insert_caretaker(caretaker_data: dict) -> int:
    res = get_client().table("caretakers").insert(caretaker_data).execute()
    return res.data[0]["id"]


# ---------- Face embeddings ----------

def insert_face_embedding(patient_id: int, embedding: list) -> None:
    get_client().table("face_embeddings").insert({
        "patient_id": patient_id,
        "embedding": embedding,
    }).execute()


def fetch_all_face_embeddings():
    """Returns a list of {"patient_id": int, "embedding": list[float]} for every registered face."""
    res = get_client().table("face_embeddings").select("patient_id, embedding").execute()
    return res.data


# ---------- Face image storage (Supabase Storage buckets) ----------

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
