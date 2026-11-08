"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import { SupportedLanguageCode } from "@/i18n/config";
import { setSiteLanguage } from "@/utils/translator";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const { language, setLanguage, languages, t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      // Only close desktop language dropdown if clicking outside desktop ref
      if (
        window.innerWidth >= 768 &&
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const activeLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelectLanguage = (code: string) => {
    setLanguage(code as SupportedLanguageCode);
    setSiteLanguage(code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
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
            {t.common.brandName}
          </span>
          <span
            className="text-neutral-400 text-[8.5px] sm:text-[10px] md:text-xs lg:text-[13px] xl:text-[14.5px] font-normal tracking-[0.26em] leading-none mt-1 sm:mt-1.5 md:mt-2 text-center whitespace-nowrap drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.common.tagline}
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
          {t.nav.ourTeam}
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
            <span>{t.nav.businesses}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180 text-cyan-400" : "text-neutral-400"
              }`}
            />
          </button>

          {/* Businesses Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 min-w-[240px] z-50 animate-in fade-in slide-in-from-top-1 duration-200 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-black/85 backdrop-blur-2xl">
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
                    {t.nav.fmcg}
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
                    {t.nav.aerospace}
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
                    {t.nav.energy}
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
                  {t.nav.selectLanguage}
                </div>
                {languages.map((lang) => {
                  const isSelected = lang.code === language;
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
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "rotate-45 translate-x-1" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "-rotate-45 translate-x-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 flex flex-col px-6 py-8 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-base font-light tracking-wider">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-cyan-400 py-2 border-b border-white/10"
            >
              Home
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-cyan-400 py-2 border-b border-white/10"
            >
              {t.nav.ourTeam}
            </Link>

            <div className="py-2 border-b border-white/10 flex flex-col gap-2">
              <span className="text-neutral-400 text-xs tracking-widest uppercase">
                {t.nav.businesses}
              </span>
              <Link
                href="/businesses/fmcg"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-cyan-400 pl-4 py-1.5 text-sm"
              >
                {t.nav.fmcg}
              </Link>
              <Link
                href="/businesses/aerospace-defence"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-cyan-400 pl-4 py-1.5 text-sm"
              >
                {t.nav.aerospace}
              </Link>
              <Link
                href="/businesses/energy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-cyan-400 pl-4 py-1.5 text-sm"
              >
                {t.nav.energy}
              </Link>
            </div>

            {/* Language Selector in Mobile Menu */}
            <div className="py-2 flex flex-col gap-2">
              <span className="text-neutral-400 text-xs tracking-widest uppercase">
                {t.nav.selectLanguage}
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1 max-h-[220px] overflow-y-auto pr-1">
                {languages.map((lang) => {
                  const isSelected = lang.code === language;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang.code)}
                      className={`flex flex-col items-start px-3 py-2 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-[#00BFFF]/20 border border-[#00BFFF]/50 text-[#00BFFF]"
                          : "bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-xs font-medium text-white">{lang.nativeName}</span>
                      <span className="text-[10px] text-neutral-400">{lang.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Language Picker Modal */}
      {langDropdownOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLangDropdownOpen(false)}
        >
          <div
            className="bg-neutral-900 border border-white/20 rounded-2xl w-full max-w-sm max-h-[80vh] overflow-y-auto p-4 flex flex-col gap-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#00BFFF] font-mono">
                {t.nav.selectLanguage}
              </span>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(false)}
                className="text-neutral-400 hover:text-white text-base px-2 py-1 leading-none"
                aria-label="Close language selector"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {languages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#00BFFF]/20 text-[#00BFFF]"
                        : "text-neutral-200 hover:bg-white/10 active:bg-white/20"
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    <span className="text-xs text-neutral-400">{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
