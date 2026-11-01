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
    // Initialize RTL / lang on mount based on saved preference
    const currentLang = getStoredLanguage();
    if (currentLang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }

    // Only inject script once
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,ar,ml,ta,kn,te,mr,zh-CN,fr,es,ja,ko",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="opacity-0 pointer-events-none fixed -left-[9999px] -top-[9999px] w-0 h-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
