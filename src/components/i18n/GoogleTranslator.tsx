"use client";

import { useEffect } from "react";
import { getStoredLanguage } from "@/utils/translator";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslator() {
  useEffect(() => {
    // Sync current stored language
    const currentLang = getStoredLanguage();
    if (currentLang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = currentLang;
    }

    // Define the global callback
    window.googleTranslateElementInit = () => {
      try {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,ar,ml,ta,kn,te,mr,zh-CN,fr,es,ja,ko",
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE,
            },
            "google_translate_element"
          );
        }
      } catch (e) {
        // Fallback silently
      }
    };

    // Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden"
      style={{ display: "none", position: "absolute", left: "-9999px", top: "-9999px" }}
      aria-hidden="true"
    />
  );
}
