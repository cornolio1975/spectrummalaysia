-- ============================================================
-- SpectrumMY LMS — Public Snapshot Data Layer
-- Migration 0009
-- ============================================================

-- Create ENUM for snapshot statuses if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'snapshot_status') THEN
        CREATE TYPE snapshot_status AS ENUM ('draft', 'published', 'archived');
    END IF;
END$$;

-- Create public_snapshot_settings table
CREATE TABLE IF NOT EXISTS public_snapshot_settings (
    metric_key TEXT PRIMARY KEY,
    status snapshot_status NOT NULL DEFAULT 'draft',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_by UUID REFERENCES auth.users(id)
);

-- Create public_snapshot_audit_log table
CREATE TABLE IF NOT EXISTS public_snapshot_audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    metric_key TEXT NOT NULL,
    previous_state snapshot_status,
    new_state snapshot_status NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert default metrics
INSERT INTO public_snapshot_settings (metric_key, status) VALUES
    ('courses', 'published'),
    ('microCredentials', 'published'),
    ('certificatesIssued', 'published'),
    ('activeLearners', 'published'),
    ('completedCourses', 'published'),
    ('programmes', 'published'),
    ('trainers', 'published'),
    ('latestUpdates', 'published')
ON CONFLICT (metric_key) DO NOTHING;

-- Enable RLS
ALTER TABLE public_snapshot_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_snapshot_audit_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public_snapshot_settings
-- Admins can read and update
CREATE POLICY "snapshot_settings_admin_all" ON public_snapshot_settings
    FOR ALL
    USING ((SELECT auth_role()) IN ('super_admin', 'programme_admin'));

-- Anyone (including anon) can read published settings
CREATE POLICY "snapshot_settings_public_read" ON public_snapshot_settings
    FOR SELECT
    USING (status = 'published');

-- Observers/all authenticated can read all settings (to know what exists)
CREATE POLICY "snapshot_settings_auth_read" ON public_snapshot_settings
    FOR SELECT
    USING (auth.uid() IS NOT NULL);

-- RLS Policies for public_snapshot_audit_log
-- Admins can view and insert
CREATE POLICY "snapshot_audit_admin_all" ON public_snapshot_audit_log
    FOR ALL
    USING ((SELECT auth_role()) IN ('super_admin', 'programme_admin'));
