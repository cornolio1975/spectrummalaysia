"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getSnapshotSettings() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("public_snapshot_settings")
    .select("*")
    .order("metric_key");
  
  if (error) {
    return { error: error.message };
  }
  return { data };
}

export async function updateSnapshotSetting(metricKey: string, status: "draft" | "published" | "archived") {
  const supabase = await createClient();
  
  const { data: user } = await supabase.auth.getUser();
  if (!user.user) return { error: "Unauthorized" };

  // Get previous state for audit log
  const { data: prev } = await supabase
    .from("public_snapshot_settings")
    .select("status")
    .eq("metric_key", metricKey)
    .single();

  const { error: updateError } = await supabase
    .from("public_snapshot_settings")
    .upsert({ 
      metric_key: metricKey, 
      status, 
      updated_at: new Date().toISOString(),
      updated_by: user.user.id
    });

  if (updateError) {
    return { error: updateError.message };
  }

  // Record audit log
  await supabase.from("public_snapshot_audit_log").insert({
    user_id: user.user.id,
    metric_key: metricKey,
    previous_state: prev?.status || "draft",
    new_state: status
  });

  revalidatePath("/admin/snapshot");
  return { success: true };
}
