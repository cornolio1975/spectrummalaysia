import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Basic security to ensure random bots can't trigger revalidations
  // In production, ensure you set REVALIDATE_SECRET in your environment variables
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  // Support Webhook payloads (e.g. from Supabase)
  // Even if the body isn't used right now, POST is standard for webhooks.
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path, now: Date.now() });
}
