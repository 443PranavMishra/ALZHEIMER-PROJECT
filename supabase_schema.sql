-- Run this once in the Supabase SQL editor (Project -> SQL Editor -> New query)
-- before starting the Flask app. This creates the three tables the app needs.

create table if not exists patients (
  id                       bigint generated always as identity primary key,
  name                     text not null,
  age                      int not null,
  gender                   text not null check (gender in ('male', 'female', 'other')),
  address                  text not null,
  onset_duration           text not null,
  memory_loss_type         text not null check (memory_loss_type in ('short_term', 'long_term', 'both')),
  extra_conditions         text default '',
  extra_conditions_other   text default '',
  unusual_activities       text default '',
  face_image_path          text,
  created_at               timestamptz default now()
);

create table if not exists caretakers (
  id                        bigint generated always as identity primary key,
  patient_id                bigint not null references patients (id) on delete cascade,
  full_name                 text not null,
  phone                     text not null,
  emergency_phone           text,
  age                       int not null,
  gender                    text not null check (gender in ('male', 'female', 'other')),
  relation                  text not null check (relation in ('family', 'friend', 'relative', 'other')),
  relation_other            text default '',
  email                     text,
  address_same_as_patient   boolean default true,
  address                   text,
  availability_hours        float not null,
  under_observation         boolean default false,
  facility_location         text default '',
  face_image_path           text
);

create table if not exists face_embeddings (
  id           bigint generated always as identity primary key,
  patient_id   bigint not null references patients (id) on delete cascade,
  embedding    jsonb not null,
  created_at   timestamptz default now()
);

create index if not exists idx_caretakers_patient_id on caretakers (patient_id);
create index if not exists idx_face_embeddings_patient_id on face_embeddings (patient_id);

-- Storage buckets for face images (run these once too, or create via
-- Supabase Dashboard -> Storage -> New bucket). Keep them private; the
-- backend uses the service_role key so it can read/write regardless.
insert into storage.buckets (id, name, public)
values ('patient-faces', 'patient-faces', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('caretaker-faces', 'caretaker-faces', false)
on conflict (id) do nothing;
