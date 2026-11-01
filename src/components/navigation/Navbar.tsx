"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Check } from "lucide-react";
import { SITE_LANGUAGES, getStoredLanguage, setSiteLanguage } from "@/utils/translator";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Sync stored language and listen for external changes
  useEffect(() => {
    setCurrentLang(getStoredLanguage());
    const handleLangChange = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail) setCurrentLang(custom.detail);
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = SITE_LANGUAGES.find((l) => l.code === currentLang) || SITE_LANGUAGES[0];

  const handleSelectLanguage = (code: string) => {
    setCurrentLang(code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
    setSiteLanguage(code);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 md:px-14 lg:px-18 xl:px-20 pt-6 sm:pt-7 md:pt-9 lg:pt-10 flex items-center justify-between pointer-events-auto bg-transparent transition-all">
      {/* Brand Logo Lockup: Chrome Emblem + Scaled Montserrat Typography */}
      <Link
        href="/"
        className="flex items-center gap-3 sm:gap-4 md:gap-5 select-none group transition-transform duration-300 hover:scale-[1.02]"
        aria-label="AVINYATES INDIA"
      >
        {/* 3D Chrome Infinity Emblem (A + Infinity + i) */}
        <div className="relative w-14 sm:w-18 md:w-24 lg:w-28 xl:w-32 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 shrink-0">
          <Image
            src="/chrome_emblem.png"
            alt="Avinyates Emblem"
            fill
            priority
            sizes="(max-width: 640px) 72px, (max-width: 1024px) 112px, 128px"
            className="object-contain object-left drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          />
        </div>

        {/* Typography Lockup */}
        <div className="flex flex-col items-center">
          <span
            className="text-white text-sm sm:text-base md:text-xl lg:text-[23px] xl:text-[26px] font-semibold tracking-[0.16em] uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            AVINYATES INDIA
          </span>
          <span
            className="text-neutral-400 text-[8.5px] sm:text-[10px] md:text-xs lg:text-[13px] xl:text-[14.5px] font-normal tracking-[0.26em] leading-none mt-1 sm:mt-1.5 md:mt-2 text-center whitespace-nowrap drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Inspiring Innovation
          </span>
        </div>
      </Link>

      {/* Desktop Nav: Our Team, Businesses & Multi-Language Selector */}
      <nav
        className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 text-sm md:text-[15px] lg:text-[17px] xl:text-[18px] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Our Team Link */}
        <Link
          href="/team"
          className="text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap py-2"
        >
          Our Team
        </Link>

        {/* Businesses Dropdown Menu */}
        <div
          ref={dropdownRef}
          className="relative py-2"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-neutral-200 hover:text-white transition-colors duration-200 tracking-wide whitespace-nowrap focus:outline-none cursor-pointer"
            aria-expanded={dropdownOpen}
          >
            <span>Businesses</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180 text-cyan-400" : "text-neutral-400"
              }`}
            />
          </button>

          {/* Businesses Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-1 duration-200 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-black/85 backdrop-blur-2xl">
              {/* Cyan top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />

              <div className="flex flex-col px-2 py-3 gap-1">
                {/* FMCG */}
                <Link
                  href="/businesses/fmcg"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    FMCG
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                {/* Aerospace and Defence */}
                <Link
                  href="/businesses/aerospace-defence"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    AEROSPACE &amp; DEFENCE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>

                {/* Energy */}
                <Link
                  href="/businesses/energy"
                  onClick={() => setDropdownOpen(false)}
                  className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  <span className="text-neutral-300 group-hover:text-white text-sm font-light tracking-widest uppercase transition-all">
                    ENERGY
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Global Multi-Language Selector Dropdown */}
        <div ref={langDropdownRef} className="relative py-2">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#00BFFF] bg-black/50 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-neutral-200 hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-black/60"
            aria-label="Select website language"
            aria-expanded={langDropdownOpen}
          >
            <Globe className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span className="tracking-wide font-medium">{activeLang.nativeName}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 ${
                langDropdownOpen ? "rotate-180 text-cyan-400" : ""
              }`}
            />
          </button>

          {/* Language Menu */}
          {langDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 max-h-[360px] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-1 duration-200 rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-black/90 backdrop-blur-2xl scrollbar-thin scrollbar-thumb-white/20">
              <div className="sticky top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent z-10" />
              <div className="p-2 space-y-0.5">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00BFFF]/80">
                  Select Language
                </div>
                {SITE_LANGUAGES.map((lang) => {
                  const isSelected = lang.code === currentLang;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-left text-xs transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-[#00BFFF]/15 text-[#00BFFF] font-medium"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-white text-xs">{lang.nativeName}</span>
                        <span className="text-[10px] text-neutral-400 font-light">{lang.name}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00BFFF]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Button: Get in Touch */}
        <Link
          href="/team"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BFFF]/60 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs text-white font-normal tracking-wide transition-all duration-300 group"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span>Get in Touch</span>
          <span className="text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden items-center gap-3">
        {/* Mobile Language Button */}
        <button
          onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/60 text-xs text-neutral-200"
          aria-label="Select website language"
        >
          <Globe className="w-3.5 h-3.5 text-[#00BFFF]" />
          <span>{activeLang.code.toUpperCase()}</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-neutral-300 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Frameless Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 px-8 py-8 bg-black/95 backdrop-blur-3xl flex flex-col gap-6 text-neutral-200 z-50 md:hidden animate-in fade-in duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-light hover:text-white transition-colors"
          >
            Our Team
          </Link>

          <div className="flex flex-col gap-4">
            <span className="text-xs text-neutral-500 tracking-[0.25em] uppercase font-semibold">
              Businesses
            </span>
            <div className="flex flex-col gap-3 pl-3">
              <Link
                href="/businesses/fmcg"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                FMCG
              </Link>
              <Link
                href="/businesses/aerospace-defence"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                AEROSPACE &amp; DEFENCE
              </Link>
              <Link
                href="/businesses/energy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-300 hover:text-white font-light transition-colors"
              >
                ENERGY
              </Link>
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <span className="text-xs text-[#00BFFF] tracking-[0.25em] uppercase font-semibold flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              Language / ഭാഷ / மொழி
            </span>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {SITE_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`px-3 py-2 rounded-xl text-left text-xs transition-colors flex items-center justify-between ${
                    lang.code === currentLang
                      ? "bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/40"
                      : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  {lang.code === currentLang && <Check className="w-3 h-3 text-[#00BFFF]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
