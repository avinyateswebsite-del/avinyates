export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

export const SITE_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "zh-CN", name: "Chinese", nativeName: "中文" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
];

export function getStoredLanguage(): string {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("avinyates_lang");
    if (saved) return saved;

    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) return match[1];
  } catch {
    // Ignore error
  }
  return "en";
}

export function setSiteLanguage(targetLang: string) {
  if (typeof window === "undefined") return;

  const cookieVal = `/en/${targetLang}`;

  // Clear previous cookies across domain boundaries
  const host = window.location.hostname;
  document.cookie = `googtrans=${cookieVal}; path=/; max-age=31536000`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${host}; max-age=31536000`;
  if (host.includes(".")) {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host}; max-age=31536000`;
  }

  try {
    localStorage.setItem("avinyates_lang", targetLang);
  } catch {
    // Ignore error
  }

  // Set RTL / text direction
  if (targetLang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = targetLang;
  }

  window.dispatchEvent(new CustomEvent("languageChange", { detail: targetLang }));

  // If Google Translate select is present, trigger change directly without reload
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (combo) {
    combo.value = targetLang;
    combo.dispatchEvent(new Event("change"));
  } else {
    // Otherwise reload to apply cookie
    window.location.reload();
  }
}
