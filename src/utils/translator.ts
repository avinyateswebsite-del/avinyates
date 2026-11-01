export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
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

    // Check cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) return match[1];
  } catch (e) {
    // Ignore error
  }
  return "en";
}

export function setSiteLanguage(targetLang: string) {
  if (typeof window === "undefined") return;

  const cookieVal = `/en/${targetLang}`;

  // Set cookies for Google Translate across potential scopes
  document.cookie = `googtrans=${cookieVal}; path=/`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname}`;
  if (window.location.hostname.includes(".")) {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${window.location.hostname}`;
  }

  try {
    localStorage.setItem("avinyates_lang", targetLang);
  } catch (e) {
    // Ignore localStorage errors
  }

  // Set text direction for RTL languages like Arabic
  if (targetLang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = targetLang;
  }

  // Notify components
  window.dispatchEvent(new CustomEvent("languageChange", { detail: targetLang }));

  // Trigger Google Translate widget if already mounted
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (combo) {
    combo.value = targetLang;
    combo.dispatchEvent(new Event("change"));
  } else {
    // Reload page to let Google Translate initialize with the updated cookie
    window.location.reload();
  }
}
