import { SupportedLanguageCode, SUPPORTED_LANGUAGES } from "@/i18n/config";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

export const SITE_LANGUAGES: LanguageOption[] = SUPPORTED_LANGUAGES.map((l) => ({
  code: l.code,
  name: l.name,
  nativeName: l.nativeName,
}));

export function getStoredLanguage(): SupportedLanguageCode {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("avinyates_lang") as SupportedLanguageCode | null;
    if (saved) return saved;

    const cookieMatch = document.cookie.match(/app_lang=([a-zA-Z-]+)/);
    if (cookieMatch && cookieMatch[1]) return cookieMatch[1] as SupportedLanguageCode;
  } catch {
    // Ignore storage errors
  }
  return "en";
}

export function setSiteLanguage(targetLang: string) {
  if (typeof window === "undefined") return;

  const validLang = SUPPORTED_LANGUAGES.find((l) => l.code === targetLang);
  const langCode = (validLang ? validLang.code : "en") as SupportedLanguageCode;
  const dir = validLang?.dir || "ltr";

  // Clean out any legacy Google Translate cookies completely
  const host = window.location.hostname;
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
  if (host.includes(".")) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`;
  }

  try {
    localStorage.setItem("avinyates_lang", langCode);
    document.cookie = `app_lang=${langCode}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Ignore storage errors
  }

  document.documentElement.dir = dir;
  document.documentElement.lang = langCode;

  window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
}
