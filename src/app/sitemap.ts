import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-config";
import { SUPPORTED_LANGUAGES } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // All 13 supported language codes for hreflang alternates
  const languageAlternates: Record<string, string> = {};
  SUPPORTED_LANGUAGES.forEach((lang) => {
    languageAlternates[lang.code] = `${SITE_URL}?lang=${lang.code}`;
  });
  languageAlternates["x-default"] = SITE_URL;

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/team", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gulpit", priority: 0.95, changeFrequency: "weekly" },
    { path: "/snackys", priority: 0.95, changeFrequency: "weekly" },
    { path: "/businesses/fmcg", priority: 0.9, changeFrequency: "weekly" },
    { path: "/businesses/aerospace-defence", priority: 0.85, changeFrequency: "monthly" },
    { path: "/businesses/energy", priority: 0.85, changeFrequency: "monthly" },
  ];

  return routes.map((route) => {
    const routeAlternates: Record<string, string> = {};
    SUPPORTED_LANGUAGES.forEach((lang) => {
      routeAlternates[lang.code] = `${SITE_URL}${route.path}?lang=${lang.code}`;
    });
    routeAlternates["x-default"] = `${SITE_URL}${route.path}`;

    return {
      url: `${SITE_URL}${route.path}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: routeAlternates,
      },
    };
  });
}

