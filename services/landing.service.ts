import { createClient } from "@/utils/supabase/server";

export interface LandingStats {
  learningCentres: number;
  activeProgrammes: number;
  trainers: number;
  participants: number;
  resources: number;
  learningHours: number;
}

export interface ProgrammeCardData {
  id: string;
  code: string;
  name: string;
  description: string;
  category: string;
  targetAudience: string;
  modulesCount: number;
  mode: string;
  status: string;
  thumbnail?: string;
  badge?: string;
}

export interface AchievementItem {
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ContactInfo {
  organization: string;
  address: string;
  email: string;
  phone: string;
  hours: string;
}

const DEFAULT_STATS: LandingStats = {
  learningCentres: 20,
  activeProgrammes: 12,
  trainers: 48,
  participants: 2485,
  resources: 350,
  learningHours: 18500,
};

const DEFAULT_PROGRAMMES: ProgrammeCardData[] = [
  {
    id: "5e49b315-b014-4dad-a213-d8f13e7c4416",
    code: "PROG-NADI-GLCP-2027",
    name: "NADI Global Language & Communication Programme",
    description:
      "Practical multilingual curriculum for work, business, tourism, and global opportunities across 15 languages spanning Foundation, Applied, and Advanced communication tracks.",
    category: "Language & Communication",
    targetAudience: "Youth, Community Learners & MSMEs",
    modulesCount: 50,
    mode: "Online Masterclasses & NADI Practical Labs",
    status: "Draft / Pilot",
    badge: "FY2027 Programme",
  },
  {
    id: "66873f1e-6f30-43b9-a38a-6ea8e60a0bc1",
    code: "PROG-NADI-GRADUATE-2027",
    name: "NADI Graduate — Micro-Credentials & Continuous Learning Programme",
    description:
      "Structured micro-credential pathways building practical digital competencies, AI skills, and workplace readiness for lifelong learners, SPM holders, and jobseekers.",
    category: "Digital Micro-Credentials & TVET",
    targetAudience: "Youth, SPM Holders & Working Adults",
    modulesCount: 12,
    mode: "Hybrid (Masterclasses, LMS & Centre Labs)",
    status: "Draft / Pilot",
    badge: "Micro-Credentials",
  },
  {
    id: "b811bbe2-7acb-412e-a43f-586959275155",
    code: "PROG-MAXIS-FP-2027",
    name: "MAXIS Franchise Pro",
    description:
      "Comprehensive blended entrepreneurship programme with the Malaysian Franchise Association (MFA) moving community learners from awareness to practical franchise ownership and operations.",
    category: "Franchise & Digital Entrepreneurship",
    targetAudience: "Aspiring Entrepreneurs, B40 & Micro-SMEs",
    modulesCount: 12,
    mode: "Blended (Webinars, NADI Workshops & Mentoring)",
    status: "Draft / Proposal",
    badge: "Entrepreneurship Track",
  },
];

const DEFAULT_ACHIEVEMENTS: AchievementItem[] = [
  {
    number: 25,
    suffix: "+",
    label: "Years in Education & Training",
    description: "Decades of proven educational delivery across Malaysian institutions.",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Individuals Trained",
    description: "Empowered learners across high school, vocational, and corporate tracks.",
  },
  {
    number: 100,
    suffix: "%",
    label: "Accredited Standards",
    description: "Curriculum aligned with MQA, JPK, HRD Corp, and government benchmarks.",
  },
  {
    number: 20,
    suffix: "+",
    label: "Learning Centres Nationwide",
    description: "Active community centres connecting urban and rural learning hubs.",
  },
];

const DEFAULT_CONTACT: ContactInfo = {
  organization: "SpectrumMalaysia Edu Resources (M) Sdn. Bhd.",
  address: "Suite 3A.18, I-01-05, 5th Floor, Block I, Setiawalk, Persiaran Wawasan, 47160 Puchong, Selangor, Malaysia",
  email: "contact@spectrum-malaysia.com",
  phone: "+60 3-8060 0000",
  hours: "Monday – Friday: 9:00 AM – 6:00 PM (MYT)",
};

export async function getLandingData() {
  let stats = { ...DEFAULT_STATS };
  let programmes = [...DEFAULT_PROGRAMMES];
  let contact = { ...DEFAULT_CONTACT };
  let achievements = [...DEFAULT_ACHIEVEMENTS];

  try {
    const supabase = await createClient();

    // Query active and valid programmes
    const { data: progData } = await supabase
      .from("programmes")
      .select("id, programme_code, programme_name, description, category, target_age_group, status")
      .is("deleted_at", null)
      .order("programme_code", { ascending: true })
      .limit(6);

    if (progData && progData.length > 0) {
      // Map database programmes
      programmes = progData.map((p) => {
        const defaultMatch = DEFAULT_PROGRAMMES.find((dp) => dp.code === p.programme_code || dp.id === p.id);
        const firstSentence = p.description ? p.description.split("\n")[0] : "";
        return {
          id: p.id,
          code: p.programme_code,
          name: p.programme_name,
          description: defaultMatch?.description || firstSentence || "Structured digital learning curriculum.",
          category: defaultMatch?.category || p.category || "General",
          targetAudience: defaultMatch?.targetAudience || (p.target_age_group ? `Ages ${p.target_age_group}` : "All Learners"),
          modulesCount: defaultMatch?.modulesCount || 12,
          mode: defaultMatch?.mode || "Hybrid & Online",
          status: defaultMatch?.status || (p.status === "draft" ? "Draft / Proposal" : p.status),
          badge: defaultMatch?.badge,
        };
      });
    }

    // Query counts
    const [centresRes, trainersRes, participantsRes, kpiRes] = await Promise.all([
      supabase.from("nadi_sites").select("id", { count: "exact", head: true }),
      supabase.from("trainers").select("id", { count: "exact", head: true }),
      supabase.from("participants").select("id", { count: "exact", head: true }),
      supabase.from("kpi_results").select("actual_value, kpis(kpi_code)"),
    ]);

    if (centresRes.count && centresRes.count > 0) stats.learningCentres = centresRes.count;
    if (trainersRes.count && trainersRes.count > 0) stats.trainers = trainersRes.count;
    if (participantsRes.count && participantsRes.count > 0) stats.participants = participantsRes.count;

    // Check system_settings for overrides
    const { data: settings } = await supabase
      .from("system_settings")
      .select("setting_key, setting_value")
      .in("setting_key", [
        "landing_contact_email",
        "landing_contact_phone",
        "landing_contact_address",
        "landing_stats_participants",
      ]);

    if (settings) {
      for (const s of settings) {
        if (s.setting_key === "landing_contact_email" && s.setting_value) contact.email = s.setting_value;
        if (s.setting_key === "landing_contact_phone" && s.setting_value) contact.phone = s.setting_value;
        if (s.setting_key === "landing_contact_address" && s.setting_value) contact.address = s.setting_value;
        if (s.setting_key === "landing_stats_participants" && s.setting_value) {
          const num = parseInt(s.setting_value, 10);
          if (!isNaN(num)) stats.participants = num;
        }
      }
    }
  } catch {
    // Graceful fallback to default values
  }

  return {
    stats,
    programmes,
    achievements,
    contact,
  };
}

export interface PublicSnapshot {
  updatedAt: string;
  courses: number;
  microCredentials: number;
  certificatesIssued: number;
  activeLearners: number;
  completedCourses: number;
  programmes: number;
  trainers: number;
  latestUpdates: {
    id: string;
    title: string;
    description: string;
    date: string;
    category: string;
    link: string;
  }[];
  upcomingProgrammes: any[];
  publicKpis: any[];
}

export async function fetchPublicSnapshot(): Promise<PublicSnapshot | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/public/snapshot`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch public snapshot", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching public snapshot:", error);
    return null;
  }
}

export interface PublicLaunch {
  id: string;
  content_type: string;
  reference_id?: string;
  course_code?: string;
  title: string;
  short_description?: string;
  hero_image?: string;
  thumbnail?: string;
  category?: string;
  credential_type?: string;
  duration?: string;
  delivery_mode?: string;
  badge_text?: string;
  cta_text?: string;
  cta_url?: string;
  launch_status: string;
  public_visible: boolean;
  featured: boolean;
  start_date?: string;
  end_date?: string;
  published_at?: string;
}

export async function fetchLatestLaunch(): Promise<PublicLaunch | null> {
  try {
    const { createClient: createBrowserClient } = await import("@supabase/supabase-js");
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) return null;
    
    const supabase = createBrowserClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from("public_launches")
      .select("*")
      .eq("public_visible", true)
      .eq("launch_status", "PUBLISHED")
      .order("featured", { ascending: false })
      .order("published_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      if (error.code !== "PGRST116") { // PGRST116 is "Results contain 0 rows"
        console.error("Supabase error fetching latest launch:", error.message || error);
      }
      return null;
    }
    
    return data as PublicLaunch;
  } catch (err) {
    console.error("Unexpected error fetching latest launch:", err);
    return null;
  }
}
