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

> 📽️ **Live demo:** hosting wasn't feasible for this project (see [Deployment Note](#deployment-note)
> below) — a full walkthrough demo video is available: **[add your link here]**

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
├── requirements-facenet.txt      facenet-pytorch, installed separately (see Setup, step 5)
└── .env.example                  Template for your local .env file
```

---

## Setup

### 1. Create a Supabase project
Free tier is enough. Sign up at [supabase.com](https://supabase.com) and create a new project.

### 2. Create the database tables and storage buckets
Open your project's **SQL Editor**, paste in the entire contents of
[`supabase_schema.sql`](./supabase_schema.sql), and run it. Every statement uses
`if not exists`/`on conflict do nothing`, so it's always safe to re-run later.

### 3. Get your Supabase credentials
**Project settings → API** — you need the **Project URL** and the **service_role key** (not the
anon/public key).

### 4. Set up your environment
```bash
cd alzheimer_platform
cp .env.example .env
```
Fill in `.env`:

| Variable | Where to get it |
|---|---|
| `SUPABASE_URL` | Step 3 |
| `SUPABASE_SERVICE_ROLE_KEY` | Step 3 |
| `SECRET_KEY` | Any random string |
| `GEMINI_API_KEY` | Optional — free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |

If `GEMINI_API_KEY` is left blank, everything else still works — the AI assistant just shows a
clear "not available" message.

### 5. Install dependencies and run
```bash
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
pip install --no-deps -r requirements-facenet.txt
python app.py
```
`facenet-pytorch` is installed separately with `--no-deps` because it pins an outdated `numpy`
version that conflicts with the one this project actually needs — everything it needs at runtime
is already covered by `requirements.txt`.

Open **http://127.0.0.1:5000**.

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
