import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "avinyates_admin_session";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "avinyates2026!";

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!sessionToken) return false;

  // Simple, robust session hash validation
  const expectedHash = Buffer.from(ADMIN_PASSWORD).toString("base64");
  return sessionToken === expectedHash;
}

export function createAdminSessionHash(): string {
  return Buffer.from(ADMIN_PASSWORD).toString("base64");
}

export { ADMIN_COOKIE_NAME };

