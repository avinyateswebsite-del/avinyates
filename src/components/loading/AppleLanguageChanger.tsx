"use client";

import React, { useState, useEffect, useRef } from "react";
import { APPLE_LANGUAGES, AppleLanguageItem } from "@/data/languages";

interface AppleLanguageChangerProps {
  onAllLanguagesComplete?: () => void;
}

export default function AppleLanguageChanger({ onAllLanguagesComplete }: AppleLanguageChangerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    // 680ms display per language, transition 250ms for smooth 13-language sequence
    const interval = setInterval(() => {
      setCurrentIndex((curr) => {
        if (curr >= APPLE_LANGUAGES.length - 1) {
          // Finished all 13 languages!
          clearInterval(interval);
          if (!completedRef.current) {
            completedRef.current = true;
            setTimeout(() => {
              onAllLanguagesComplete?.();
            }, 800);
          }
          return curr;
        }

        setPrevIndex(curr);
        return curr + 1;
      });

      const timeout = setTimeout(() => {
        setPrevIndex(null);
      }, 260);

      return () => clearTimeout(timeout);
    }, 680);

    return () => clearInterval(interval);
  }, [onAllLanguagesComplete]);

  const current = APPLE_LANGUAGES[currentIndex];
  const previous = prevIndex !== null ? APPLE_LANGUAGES[prevIndex] : null;

  const renderWord = (item: AppleLanguageItem) => {
    const isLatin = item.id === "en" || item.id === "fr" || item.id === "es";

    return (
      <div className="flex flex-col items-center justify-center">
        {/* Main Brand Name in Local Script */}
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white whitespace-nowrap leading-none drop-shadow-[0_4px_24px_rgba(255,255,255,0.35)]"
          style={{
            fontFamily: isLatin ? "'Montserrat', sans-serif" : item.fontFamily,
            fontWeight: isLatin ? 650 : item.fontWeight || 550,
            letterSpacing: isLatin ? "0.18em" : item.letterSpacing || "normal",
          }}
        >
          {item.text}
        </h1>

        {/* Tagline translated in harmony */}
        <div className="mt-2 sm:mt-2.5">
          <span
            className="text-xs xs:text-sm sm:text-base md:text-lg text-neutral-300 font-normal whitespace-nowrap block drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{
              fontFamily: isLatin ? "'Montserrat', sans-serif" : item.fontFamily,
              fontWeight: 400,
              letterSpacing: "0.22em",
            }}
          >
            {item.tagline}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full max-w-sm sm:max-w-md md:max-w-2xl px-4 -mt-12 xs:-mt-14 sm:-mt-18 md:-mt-22 lg:-mt-26 xl:-mt-28 z-20">
      {/* Dynamic Word Stage with Overlapping Crossfade */}
      <div className="relative w-full h-16 xs:h-18 sm:h-20 md:h-24 flex items-center justify-center overflow-visible">
        {/* Previous Word (fading out smoothly) */}
        {previous && (
          <div
            key={`prev-${previous.id}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-[280ms] ease-out opacity-0 -translate-y-2 scale-[0.98] blur-[2px]"
          >
            {renderWord(previous)}
          </div>
        )}

        {/* Current Word (fading in smoothly) */}
        <div
          key={`curr-${current.id}`}
          className="absolute inset-0 flex items-center justify-center transition-all duration-[280ms] ease-out opacity-100 translate-y-0 scale-100 blur-0"
        >
          {renderWord(current)}
        </div>
      </div>
    </div>
  );
}
