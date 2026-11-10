import { supabase } from "./supabase";

export interface CMSProduct {
  id: string;
  brand: "gulpit" | "snackys";
  name: string;
  tag?: string;
  category?: string;
  seasoning?: string;
  short_desc?: string;
  image_url: string;
  ingredients?: string;
  pairings?: string;
  accent_color?: string;
  net_vol?: string;
  display_order?: number;
  is_active?: boolean;
}

export interface CMSSiteContent {
  key: string;
  category: string;
  value: string;
  description?: string;
}

// Fetch products with automatic local fallback
export async function getCMSProducts(brand: "gulpit" | "snackys"): Promise<CMSProduct[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("brand", brand)
      .eq("is_active", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return [];
    }
    return data as CMSProduct[];
  } catch {
    return [];
  }
}

// Fetch site content with key-value map
export async function getCMSSiteContent(category?: string): Promise<Record<string, string>> {
  try {
    let query = supabase.from("site_content").select("key, value");
    if (category) {
      query = query.eq("category", category);
    }
    const { data, error } = await query;
    if (error || !data) return {};

    const map: Record<string, string> = {};
    data.forEach((item) => {
      map[item.key] = item.value;
    });
    return map;
  } catch {
    return {};
  }
}

