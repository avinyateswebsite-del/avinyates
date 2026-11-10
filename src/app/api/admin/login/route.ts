import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, createAdminSessionHash, verifyAdminSession } from "@/lib/admin-auth";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "avinyates2026!";

// POST /api/admin/login
export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid admin password." }, { status: 401 });
    }

    const cookieStore = await cookies();
    const sessionToken = createAdminSessionHash();

    cookieStore.set(ADMIN_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({ success: true, message: "Admin authenticated." });
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed." }, { status: 500 });
  }
}

// GET /api/admin/login (Check auth status)
export async function GET() {
  const isAuthenticated = await verifyAdminSession();
  return NextResponse.json({ authenticated: isAuthenticated });
}

// DELETE /api/admin/login (Logout)
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true, message: "Logged out." });
}
