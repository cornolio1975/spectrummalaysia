-- ============================================================
-- SpectrumMY Programme & Learning Management System
-- Migration 0010: Public Launches (Dynamic Landing Page)
-- ============================================================

CREATE TYPE launch_content_type AS ENUM (
  'COURSE',
  'PROGRAMME',
  'MICRO_CREDENTIAL',
  'WEBINAR',
  'WORKSHOP',
  'TRAINING',
  'CURRICULUM',
  'OTHER'
);

CREATE TYPE launch_status_type AS ENUM (
  'DRAFT',
  'REVIEW',
  'APPROVED',
  'PUBLISHED',
  'ARCHIVED'
);

CREATE TABLE public_launches (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type     launch_content_type NOT NULL DEFAULT 'OTHER',
  reference_id     UUID, -- Optional reference to programmes.id or events.id
  course_code      TEXT,
  title            TEXT NOT NULL,
  short_description TEXT,
  hero_image       TEXT,
  thumbnail        TEXT,
  category         TEXT,
  credential_type  TEXT,
  duration         TEXT,
  delivery_mode    TEXT,
  badge_text       TEXT,
  cta_text         TEXT DEFAULT 'Explore Course',
  cta_url          TEXT,
  
  -- Visibility & Status
  launch_status    launch_status_type NOT NULL DEFAULT 'DRAFT',
  public_visible   BOOLEAN NOT NULL DEFAULT FALSE,
  featured         BOOLEAN NOT NULL DEFAULT FALSE,
  display_order    INTEGER DEFAULT 0,
  
  -- Dates
  start_date       DATE,
  end_date         DATE,
  published_at     TIMESTAMPTZ,
  created_by       UUID REFERENCES auth.users(id),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indices
CREATE INDEX idx_launches_status ON public_launches(launch_status);
CREATE INDEX idx_launches_visible ON public_launches(public_visible);
CREATE INDEX idx_launches_published ON public_launches(published_at DESC);

-- Enable RLS
ALTER TABLE public_launches ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to published and visible launches
CREATE POLICY "Allow public read access to published launches"
ON public_launches
FOR SELECT
USING (public_visible = true AND launch_status = 'PUBLISHED');

-- Policy: Allow admins/staff to manage launches
CREATE POLICY "Allow authenticated users full access to launches"
ON public_launches
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');
