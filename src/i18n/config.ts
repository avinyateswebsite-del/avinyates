export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  fontFamily?: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", dir: "ltr", fontFamily: "'Noto Serif Devanagari', sans-serif" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", dir: "ltr", fontFamily: "'Noto Serif Malayalam', sans-serif" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", dir: "ltr", fontFamily: "'Noto Serif Tamil', sans-serif" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", dir: "ltr", fontFamily: "'Noto Serif Kannada', sans-serif" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", dir: "ltr", fontFamily: "'Noto Serif Telugu', sans-serif" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", dir: "ltr", fontFamily: "'Noto Serif Devanagari', sans-serif" },
  { code: "zh-CN", name: "Chinese", nativeName: "中文", dir: "ltr", fontFamily: "'Noto Serif SC', serif" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", dir: "ltr", fontFamily: "'Noto Serif JP', serif" },
  { code: "ko", name: "Korean", nativeName: "한국어", dir: "ltr", fontFamily: "'Noto Serif KR', serif" },
];

export type SupportedLanguageCode =
  | "en"
  | "hi"
  | "ar"
  | "ml"
  | "ta"
  | "kn"
  | "te"
  | "mr"
  | "zh-CN"
  | "fr"
  | "es"
  | "ja"
  | "ko";

export const DEFAULT_LANGUAGE: SupportedLanguageCode = "en";

