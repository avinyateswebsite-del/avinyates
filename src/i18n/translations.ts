import en, { TranslationKeys } from "./locales/en";
import hi from "./locales/hi";
import ar from "./locales/ar";
import ml from "./locales/ml";
import { SupportedLanguageCode } from "./config";

// Dedicated in-house translations with en fallback
export const translations: Record<SupportedLanguageCode, TranslationKeys> = {
  en,
  hi,
  ar,
  ml,
  ta: en,
  te: en,
  kn: en,
  mr: en,
  "zh-CN": en,
  fr: en,
  es: en,
  ja: en,
  ko: en,
};
