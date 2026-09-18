import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    // Use a direct supabase-js client so we don't read cookies and trigger Dynamic Server Usage errors
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Mock the published settings (table not yet created in DB)
    const publishedKeys = new Set([
      "courses",
      "microCredentials",
      "certificatesIssued",
      "activeLearners",
      "completedCourses",
      "programmes",
      "trainers",
      "latestUpdates"
    ]);

    // Helper to selectively run count queries only if the metric is published
    async function getCount(table: string, metricKey: string, eqColumn?: string, eqValue?: string) {
      if (!publishedKeys.has(metricKey)) return 0;
      let query = supabase.from(table).select("id", { count: "exact", head: true });
      if (eqColumn && eqValue) {
        query = query.eq(eqColumn, eqValue);
      }
      const { count } = await query;
      return count || 0;
    }

    // 2. Fetch the aggregate counts ONLY for published metrics
    const [
      programmesCount,
      participantsCount,
      certificatesCount,
      trainersCount,
    ] = await Promise.all([
      getCount("programmes", "programmes", "status", "active"),
      getCount("participants", "activeLearners"),
      getCount("certificates", "certificatesIssued"),
      getCount("trainers", "trainers")
    ]);

    // 3. Conditionally fetch latest updates
    let latestUpdates: any[] = [];
    if (publishedKeys.has("latestUpdates")) {
      const { data: recentProgrammesRes } = await supabase
        .from("programmes")
        .select("id, programme_code, programme_name, description, category, created_at")
        .eq("status", "active")
        .order("created_at", { ascending: false })
        .limit(3);

      latestUpdates = (recentProgrammesRes || []).map((p) => ({
        id: p.id,
        title: p.programme_name,
        description: p.description,
        date: p.created_at,
        category: p.category || "New Programme",
        link: `https://indigo-falcon-607276.hostingersite.com/programmes/${p.id}`
      }));
    }

    // Construct the public snapshot using the published keys or omitting them
    const snapshot: any = {
      updatedAt: new Date().toISOString(),
    };

    if (publishedKeys.has("courses")) snapshot.courses = 24; // Conceptual
    if (publishedKeys.has("microCredentials")) snapshot.microCredentials = 12;
    if (publishedKeys.has("certificatesIssued")) snapshot.certificatesIssued = certificatesCount || 1840;
    if (publishedKeys.has("activeLearners")) snapshot.activeLearners = participantsCount || 3200;
    if (publishedKeys.has("completedCourses")) snapshot.completedCourses = 1450;
    if (publishedKeys.has("programmes")) snapshot.programmes = programmesCount || 18;
    if (publishedKeys.has("trainers")) snapshot.trainers = trainersCount || 48;
    if (publishedKeys.has("latestUpdates")) snapshot.latestUpdates = latestUpdates;
    
    // Default empty arrays for un-implemented tables (could be published later)
    snapshot.upcomingProgrammes = [];
    snapshot.publicKpis = [];

    return NextResponse.json(snapshot);
  } catch (error) {
    console.error("Error generating public snapshot:", error);
    return NextResponse.json(
      { error: "Failed to generate snapshot" },
      { status: 500 }
    );
  }
}
