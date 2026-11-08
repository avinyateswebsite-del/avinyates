"use client";

import React, { createContext, useContext, useState, useEffect, useTransition } from "react";
import {
  SUPPORTED_LANGUAGES,
  SupportedLanguageCode,
  DEFAULT_LANGUAGE,
  LanguageConfig,
} from "./config";
import { translations } from "./translations";
import { TranslationKeys } from "./locales/en";

interface LanguageContextType {
  language: SupportedLanguageCode;
  languageConfig: LanguageConfig;
  setLanguage: (lang: SupportedLanguageCode) => void;
  t: TranslationKeys;
  languages: LanguageConfig[];
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "avinyates_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguageCode>(DEFAULT_LANGUAGE);
  const [, startTransition] = useTransition();

  // Load initial preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguageCode | null;
      if (saved && translations[saved]) {
        setLanguageState(saved);
        applyDocumentAttributes(saved);
      }
    } catch {
      // Fallback silently if storage unavailable
    }
  }, []);

  const applyDocumentAttributes = (langCode: SupportedLanguageCode) => {
    const config =
      SUPPORTED_LANGUAGES.find((l) => l.code === langCode) || SUPPORTED_LANGUAGES[0];
    document.documentElement.lang = langCode;
    document.documentElement.dir = config.dir;
  };

  const setLanguage = (newLang: SupportedLanguageCode) => {
    if (!translations[newLang]) return;

    startTransition(() => {
      setLanguageState(newLang);
    });

    applyDocumentAttributes(newLang);

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.cookie = `app_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }

    // Broadcast for backward-compatibility if any external listener needs it
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
    }
  };

  const languageConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const currentTranslation: TranslationKeys =
    translations[language] || translations[DEFAULT_LANGUAGE];

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageConfig,
        setLanguage,
        t: currentTranslation,
        languages: SUPPORTED_LANGUAGES,
        dir: languageConfig.dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

