# Smriti — A Digital Memory Companion for Alzheimer's Patients and Their Caregivers

**स्मृति** (Smriti) means "memory." This platform helps people living with Alzheimer's stay safe,
independent, and connected — while giving caregivers one place to watch over it all, remotely, in
their own language.

A patient logs in with just a face scan (no password to forget), gets gentle daily routines, can
instantly recognize the people around them, plays adaptive brain-training games, and has
emergency help one tap away. Caretakers get a single dashboard to monitor all of it, without
needing to be physically present.

Built with Flask + Supabase (Postgres & file storage) + a FaceNet model for face recognition, and
a Gemini-powered AI assistant. Plain HTML/CSS/JS on the frontend — no build step, no framework.

VIDEO LINK : https://youtu.be/5LMrTFpUo48

MODEL LINK : https://www.kaggle.com/models/pranavmishra443/facenet-model

KEYS LINK : https://drive.google.com/file/d/1eqAbX0yhOnQrg-dRnamuBG4OxD8Cgwgp/view?usp=drive_link

---

## Table of Contents

- [The Problem](#the-problem)
- [Our Solution](#our-solution)
- [Key Features](#key-features)
- [What Makes This Different](#what-makes-this-different-usp)
- [How It Works](#how-it-works-solution-flow)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Deployment Note](#deployment-note)
- [Future Roadmap](#future-roadmap)

---

## The Problem

Alzheimer's and dementia are one of the fastest-growing health crises globally — **55+ million
people** live with dementia today, projected to nearly double to **78 million by 2030** and reach
**139 million by 2050** (WHO). A new case emerges somewhere in the world **every 3 seconds**, and
up to **75% of cases globally go undiagnosed or unsupported** (Alzheimer's Disease International).

The burden of daily care falls almost entirely on family members. In the US alone, nearly **12
million unpaid caregivers** provide over **19 billion hours of care** every year. Existing tools
are either clinical (hospital-only, not for daily home use) or generic (not designed around
memory loss, safety, or cognitive decline) — leaving a real gap for a *daily-use,
dignity-preserving digital companion* built specifically for this condition.

---

## Our Solution

Smriti is an all-in-one digital companion that keeps Alzheimer's patients safe and independent
through face-recognition and gentle daily support, while giving caregivers a single dashboard to
watch over it all — remotely, in their own language.

Unlike generic reminder apps or clinical-only tools, Smriti is the first platform to combine
**identity, safety, cognition, and caregiver oversight** into one connected, multilingual system —
built specifically around the realities of memory loss, not retrofitted onto them.

---

## Key Features

1. **Face-Scan Login & Recognition** — Password-free login, plus instant recognition of family
   and caregivers with their name, relationship, and personal memory notes. New faces can be
   registered on the spot, and a caretaker is automatically recognizable the moment they register
   — no extra setup step.
2. **Daily Routine Tracker** — Medication, meals, and task reminders with sound alerts and simple
   confirm/miss tracking.
3. **Important Events** — One-off reminders for appointments, birthdays, and more.
4. **Brain-Training Quiz & 7 Daily Games** — A short adaptive quiz plus one of 7 rotating games
   each day (memory match, word association, color hunt, math, connect the dots, "where is
   this?", picture memory). Difficulty adjusts automatically based on real performance, with full
   history and a catch-up option for missed days.
5. **Progress Charts** — Points over time, weekly trends, a combined "brain accuracy" score, and a
   bar chart showing which games the patient performs best at over the last 7 days.
6. **Find My Things** — Photograph an object, note where it was put, and search for it later.
7. **Emergency SOS** — One tap surfaces Police, Medical, Fire, caretaker, and neighbour numbers —
   ready to call or message on WhatsApp instantly. Rate-limited to prevent accidental spam.
8. **Nearby Places** — Quick links to nearby hospitals, pharmacies, and police stations.
9. **Live Location** — A real-time map using the device's GPS.
10. **Ask Smriti (AI Assistant)** — Powered by Gemini; answers questions about the app, looks up
    the patient's real tasks/people/events, and can add new tasks or events on request.
11. **6 Languages** — English, Hindi, Tamil, Telugu, Assamese, and Marathi, including full
    translation of the 100-question quiz bank — not just menu labels.
12. **Light/Dark Theme** and a persistent live date/time display, with consistent color-coding
    (violet = cognitive, amber = daily care, coral = safety, green = places) for quick recognition.

    ---

## What Makes This Different (USP)

- **Built FOR memory loss, not retrofitted onto it** — every design choice assumes forgetting is
  the default: no passwords, face-scan login, big simple actions, sound-based reminders.
- **All-in-one, not four separate apps** — identity recognition + daily routine + cognitive
  training + emergency response + caregiver monitoring, in a single account.
- **Genuinely multilingual** — full localization including quiz content, not just UI labels.
- **An AI assistant that acts, not just chats** — it looks up real data and can take actions.
- **Zero setup friction for safety** — caretaker recognition, emergency contacts, and nearby
  hospitals all work out of the box.
- **Built entirely on free-tier infrastructure** — genuinely deployable for low-income families
  and NGOs, not just paying customers.
- **Scalable beyond one family** — the same system architecture extends naturally to old-age
  homes, NGOs, and community health workers (see [Future Roadmap](#future-roadmap)).

---

## How It Works (Solution Flow)

```
Register (patient + caretaker, faces captured for both)
        │
        ▼
Face-Scan Login (no password)
        │
        ▼
Daily Use Loop
  • Recognize people via camera
  • Follow daily routine with reminders
  • Play adaptive quiz/games
  • Locate misplaced items (Find My Things)
        │
        ├──▶ Emergency (any time) → SOS → live location + nearby hospital → caretaker alerted on WhatsApp
        │
        ▼
Caretaker Dashboard (ongoing, parallel)
  Routine adherence · quiz/game progress · live location — no need to be physically present
        │
        ▼
Ask Smriti — AI support available anytime, in the patient's own language
```

---

## Tech Stack

**Frontend**
- HTML5, CSS3, JavaScript (ES6+) — vanilla, no framework or build step
- Jinja2 — server-side templating (built into Flask)
- Leaflet.js v1.9.4 + OpenStreetMap — interactive maps
- Tabler Icons (self-hosted, not CDN-dependent) — icon set
- Google Fonts — Fraunces (display) + Sora (body)

**Backend**
- Python 3, Flask 3.0.3
- python-dotenv — environment variable management

**Database & Storage**
- Supabase (PostgreSQL + private file storage)

**AI / Machine Learning**
- PyTorch + Torchvision
- facenet-pytorch — FaceNet (InceptionResnetV1) for recognition, MTCNN for face detection
- Google Gemini API — the "Ask Smriti" assistant
- NumPy — embedding similarity scoring
- Pillow (PIL) — image processing

**Integrations**
- WhatsApp Click-to-Chat API (`wa.me`) — one-tap emergency messaging
- Google Maps — nearby hospital/pharmacy/police search
- Browser APIs — WebRTC (camera), Geolocation, Web Speech API (voice input), LocalStorage (theme)

---

## Project Structure

```
alzheimer_platform/
├── app.py                       Flask backend — routes, Supabase queries, face recognition,
│                                 quiz/game generation, the AI assistant tool-calling loop
├── templates/
│   └── index.html                All page markup (single-page app, view-switched by JS)
├── static/
│   ├── style.css                  All CSS
│   ├── app.js                     All JavaScript
│   ├── tabler-icons.min.css       Self-hosted icon font (no external CDN dependency)
│   └── fonts/                     Icon font files
├── model/
│   └── facenet_model.pt          Pretrained FaceNet weights (InceptionResnetV1)
├── quiz_questions_i18n.json      100 quiz questions, each translated into all 6 languages
├── game_data.json                Content for the daily games
├── supabase_schema.sql           Run once in the Supabase SQL editor — creates every table/bucket
├── requirements.txt              Main Python dependencies
├── requirements-facenet.txt      facenet-pytorch, installed separately (see Setup, step 6)
└── .env                  Template for your local .env file
```

---

## Setup

**Step 1 — Download and extract the project**
Download the project ZIP from the github repo, and extract it into a folder named
`Alzheimer_Project`.

**Step 2 — Download the FaceNet model**
Download `facenet_model.pt` from the link provided, and place it inside `Alzheimer_Project/model/`
(create the `model` folder if it isn't already there — this file is too large to include in the
main ZIP).

**Step 3 — Open the project in VS Code**
Open the `Alzheimer_Project` folder in VS Code (`File → Open Folder…`).

**Step 4 — Confirm the folder structure**
Check everything matches the [Project Structure](#project-structure) section above — especially
that `facenet_model.pt` is inside `model/`, and `app.py` sits at the root, not nested inside
another folder.

**Step 5 — Create your `.env` file**
In the project's root folder (same level as `app.py`), create a new file named `.env` and paste in
the keys from the shared folder link (see the caution above). It should look like:
```
SUPABASE_URL=your-supabase-project-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SECRET_KEY=any-random-string
GEMINI_API_KEY=your-gemini-key
```

**Step 6 — Open a terminal in VS Code and set up your environment**
```bash
python -m venv venv
```
Activate it — on Windows:
```bash
venv\Scripts\activate
```
On Mac/Linux:
```bash
source venv/bin/activate
```
Then install the dependencies:
```bash
pip install -r requirements.txt
```
(`--no-deps` is required for the second command — `facenet-pytorch` pins an outdated `numpy`
version that conflicts with the one this project actually needs; `--no-deps` skips that, and
everything it needs at runtime is already covered by `requirements.txt`.)

**Step 7 — Run the app**
```bash
python app.py
```
Leave this terminal running — closing it stops the server.

**Step 8 — Open it in your browser**
Go to:
```
http://127.0.0.1:5000
```

If the page doesn't load, check the terminal for errors — the most common cause is Step 5 (missing
or incorrect `.env` values) or Step 2 (model file not placed correctly).

<details>
<summary><strong>Want to run your own independent copy instead of the shared demo keys?</strong></summary>

If you'd rather use your own Supabase project (recommended for anything beyond a quick demo):

1. Sign up at [supabase.com](https://supabase.com) and create a new project (free tier is enough)
2. Open the **SQL Editor** in your project, paste in the entire contents of
   [`supabase_schema.sql`](./supabase_schema.sql), and run it — this creates every table and
   storage bucket the app needs
3. Go to **Project settings → API** and copy your **Project URL** and **service_role key** (not
   the anon/public key) into your own `.env` in place of the shared ones
4. Optionally get your own free Gemini key at
   [aistudio.google.com/apikey](https://aistudio.google.com/apikey) — if left blank, everything
   else still works, the AI assistant just shows a clear "not available" message

</details>

---

## Deployment Note

This project is **fully built and functioning end-to-end**. Public hosting was not completed:
our FaceNet model + PyTorch dependencies (~110MB+) exceed what free hosting tiers can
accommodate, and premium hosting was outside our budget as a student project. Rather than strip
down the real AI model just to fit a free tier, we kept the full working implementation. A demo
video is available — see the link at the top of this README.

---

## Future Roadmap

- **Shareable QR Code** — view-only tracking link for family/doctors, no login needed
- **Multi-Patient Caregiver Mode** — one login to manage multiple patients (old-age homes)
- **Geofencing & Safe-Zone Alerts** — automatic alert if a patient wanders outside a set radius
- **AI-Powered Early Decline Detection** — flag cognitive decline trends before they're obvious
- **Wearable Integration** — automatic fall-detection SOS triggers
- **Doctor/Clinician Portal** — share progress reports directly with a physician
- **Online Doctor Appointment Booking**
- **Report Reader & Summary Generator** — plain-language summaries of medical reports
- **Offline Mode** — core features usable without internet, syncing once reconnected
- **Music Therapy Player** — calming, familiar music shown to reduce agitation in dementia patients
- **Voice-First Mode** — simplified voice-only interaction for later disease stages

---

*Because everyone deserves to be remembered — even when they can't remember themselves.*
