import en, { TranslationKeys } from "./locales/en";
import hi from "./locales/hi";
import ar from "./locales/ar";
import ml from "./locales/ml";
import ta from "./locales/ta";
import te from "./locales/te";
import kn from "./locales/kn";
import mr from "./locales/mr";
import zhCN from "./locales/zh-CN";
import fr from "./locales/fr";
import es from "./locales/es";
import ja from "./locales/ja";
import ko from "./locales/ko";
import { SupportedLanguageCode } from "./config";

export const translations: Record<SupportedLanguageCode, TranslationKeys> = {
  en,
  hi,
  ar,
  ml,
  ta,
  te,
  kn,
  mr,
  "zh-CN": zhCN,
  fr,
  es,
  ja,
  ko,
};

