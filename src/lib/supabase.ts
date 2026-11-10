import { createClient } from "@supabase/supabase-js";

// Client-safe placeholders so build succeeds without throwing if env vars are missing during CI prerendering
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://preqldcywrmtqodvmgpj.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "placeholder-anon-key-set-in-env";

const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
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


