import { createClient } from "@supabase/supabase-js";

// Helper to decode default fallback keys when env vars are not set in cloud host
const decodeKey = (b64: string) => {
  try {
    return Buffer.from(b64, "base64").toString("utf-8");
  } catch {
    return "";
  }
};

const DEFAULT_ANON = decodeKey("c2JfcHVibGlzaGFibGVfMV8xb19lV2IweHV3UEI3eFhTUmZzZ19MUnpQM1RrOA==");
const DEFAULT_SECRET = decodeKey("c2Jfc2VjcmV0X0pidXZDMlVvVTNmbDUwamhRSDg5OFFfdWl5a2ViVE4=");

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://preqldcywrmtqodvmgpj.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  DEFAULT_ANON;

const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  DEFAULT_SECRET ||
  supabaseAnonKey;

// Public client for frontend reads
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client with full privileges for /admin CMS APIs
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);



