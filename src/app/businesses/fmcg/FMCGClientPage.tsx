"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { useTranslation } from "@/i18n/LanguageContext";
import { Leaf, FlaskConical, ArrowRight, ShieldCheck, Heart, Sparkles, Droplets, Flame, CheckCircle2 } from "lucide-react";

export default function FMCGPage() {
  const { t, languageConfig, dir } = useTranslation();

  return (
    <div
      dir={dir}
      className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none"
      style={languageConfig.fontFamily ? { fontFamily: languageConfig.fontFamily } : undefined}
    >
      {/* Fixed Diagonal Milky Way Starfield Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          src="/starfield.png"
          alt="Diagonal Milky Way Starfield"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Ambient Dark Overlay to elevate typography and product contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Global Fixed Navbar */}
      <Navbar currentPath="/businesses/fmcg" />

      {/* Main Container */}
      <main className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-16 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 max-w-[1680px] mx-auto w-full">
        {/* Top Header / Eyebrow & Hero Title */}
        <section className="mb-14 sm:mb-18 lg:mb-20 max-w-4xl">
          {/* Eyebrow with Cyan Dash */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-5 sm:w-6 h-[2px] bg-[#00BFFF] rounded-full shadow-[0_0_10px_#00BFFF]" />
            <span
              className="text-[11px] sm:text-xs tracking-[0.28em] text-[#00BFFF] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.fmcg.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.fmcg.title}
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.fmcg.subtitle}
          </p>
        </section>

        {/* BRANDS SHOWCASE: Side-by-Side 2-Column Grid Matching Template Exactly */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 2xl:gap-14 items-end mb-20 sm:mb-28 lg:mb-32">
          {/* BRAND 1: GULPIT™ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-6 items-center">
            {/* Left Sub-column: Text & CTA */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <span
                className="text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-[#00BFFF] uppercase block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.gulpit.eyebrow}
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.gulpitTitle}
              </h2>

              <p
                className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mt-2 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.gulpitSubtitle}
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                {t.fmcg.gulpitDesc}
              </p>

              {/* Pill Button with Cyan Border - Links to dedicated Gulpit Page */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/gulpit"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-light tracking-wide transition-all duration-300 group shadow-lg shadow-black/80 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>{t.fmcg.exploreGulpit}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Sub-column: 5-Bottle Collection Image with Glossy Reflection */}
            <div className="md:col-span-7 relative flex flex-col items-center justify-end">
              {/* Soft floor glow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-[#00BFFF]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Main Product Lineup */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5]">
                <Image
                  src="/brands/gulpit/gulpit_tropical_collection.png"
                  alt="Gulpit Tropical Collection - 5 Bottles"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                  className="object-contain object-bottom drop-shadow-[0_18px_35px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Glossy Floor Reflection */}
              <div className="relative w-full h-12 sm:h-16 -mt-1 overflow-hidden opacity-30 scale-y-[-1] pointer-events-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)] blur-[0.6px]">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5]">
                  <Image
                    src="/brands/gulpit/gulpit_tropical_collection.png"
                    alt="Gulpit Floor Reflection"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BRAND 2: SNACKY'S™ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-6 items-center">
            {/* Left Sub-column: Text & CTA */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <span
                className="text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-[#00BFFF] uppercase block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.eyebrow}
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.snackysTitle}
              </h2>

              <p
                className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mt-2 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.snackysSubtitle}
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                {t.fmcg.snackysDesc}
              </p>

              {/* Pill Button with Cyan Border - Links to dedicated Snacky's Page */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/snackys"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-light tracking-wide transition-all duration-300 group shadow-lg shadow-black/80 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>{t.fmcg.exploreSnackys}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Sub-column: 5-Can Flavor Lineup with Glossy Reflection */}
            <div className="md:col-span-7 relative flex flex-col items-center justify-end">
              {/* Soft floor glow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-[#00BFFF]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Main Product Lineup */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5]">
                <Image
                  src="/brands/snackys/snackys_v_collection.png"
                  alt="Snacky's V-Shaped Gourmet Chip Can Collection - 5 Canisters"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                  className="object-contain object-bottom drop-shadow-[0_18px_35px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Glossy Floor Reflection */}
              <div className="relative w-full h-12 sm:h-16 -mt-1 overflow-hidden opacity-30 scale-y-[-1] pointer-events-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)] blur-[0.6px]">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5]">
                  <Image
                    src="/brands/snackys/snackys_v_collection.png"
                    alt="Snacky's Floor Reflection"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE 3 CORE PILLARS: Horizontal 3-Column Layout Matching Template */}
        <section id="pillars" className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14 pt-8 mb-20 sm:mb-24">
          {/* Pillar 1: Smart Frying */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
              <svg className="w-12 h-12 text-[#00BFFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                <path d="M12 9v6m-2.5-2.5l2.5 2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span
                className="text-xs font-mono tracking-[0.25em] text-[#00BFFF] uppercase block mb-1.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[0]?.tag || "01 / SMART FRYING"}
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[0]?.titleLine1}<br />{t.snackys.pillars[0]?.titleLine2}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
                {t.snackys.pillars[0]?.desc}
              </p>
            </div>
          </div>

          {/* Pillar 2: Natural Character */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
              <Leaf className="w-12 h-12 stroke-[1.6] text-[#00BFFF]" />
            </div>
            <div>
              <span
                className="text-xs font-mono tracking-[0.25em] text-[#00BFFF] uppercase block mb-1.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[1]?.tag || "02 / NATURAL CHARACTER"}
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[1]?.titleLine1}<br />{t.snackys.pillars[1]?.titleLine2}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
                {t.snackys.pillars[1]?.desc}
              </p>
            </div>
          </div>

          {/* Pillar 3: Innovation */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
              <FlaskConical className="w-12 h-12 stroke-[1.6] text-[#00BFFF]" />
            </div>
            <div>
              <span
                className="text-xs font-mono tracking-[0.25em] text-[#00BFFF] uppercase block mb-1.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[2]?.tag || "03 / INNOVATION"}
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.snackys.pillars[2]?.titleLine1}<br />{t.snackys.pillars[2]?.titleLine2}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
                {t.snackys.pillars[2]?.desc}
              </p>
            </div>
          </div>

          {/* Disclaimer Footnote */}
          <div className="md:col-span-3 pt-6">
            <p className="text-xs text-neutral-400 font-light tracking-wide">
              {t.snackys.footnote}
            </p>
          </div>
        </section>

        {/* WHY VACUUM FRYING & RICE BRAN OIL SECTION */}
        {t.fmcg.vacuumRiceBran && (
          <section className="border-t border-white/10 pt-16 sm:pt-20 pb-12 mb-16 sm:mb-20">
            {/* Section Eyebrow & Headline */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00BFFF]/40 bg-[#00BFFF]/10 mb-4 shadow-[0_0_15px_rgba(0,191,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
                <span
                  className="text-[11px] sm:text-xs tracking-[0.24em] text-[#00BFFF] uppercase font-mono"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  THE SCIENCE OF PURITY
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.vacuumRiceBran.questionTitle}
              </h2>

              <p className="mt-3.5 sm:mt-4 text-base sm:text-lg md:text-xl text-[#00BFFF] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-[0_0_16px_rgba(0,191,255,0.3)]">
                {t.fmcg.vacuumRiceBran.questionSubtitle}
              </p>

              <div className="mt-4 inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 font-mono tracking-wide">
                {t.fmcg.vacuumRiceBran.formulaBadge}
              </div>
            </div>

            {/* Dual Column Infographic Grid: Vacuum Tech (Left) vs Rice Bran Oil (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-16">
              {/* Card 1: Benefits of Vacuum Technology */}
              <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-neutral-900/60 border border-[#00BFFF]/30 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-[#00BFFF]/60 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00BFFF]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] shrink-0 shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                    <Droplets className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.24em] uppercase text-[#00BFFF] font-mono block">
                      ADVANCED PROCESS
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.fmcg.vacuumRiceBran.vacuumHeading}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {t.fmcg.vacuumRiceBran.vacuumItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00BFFF]/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-[#00BFFF]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#00BFFF]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Benefits of Rice Bran Oil */}
              <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-neutral-900/60 border border-amber-400/30 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-amber-400/60 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                    <Heart className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.24em] uppercase text-amber-400 font-mono block">
                      GOLDEN HEART OIL
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {t.fmcg.vacuumRiceBran.riceBranHeading}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {t.fmcg.vacuumRiceBran.riceBranItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Avinyates Advantage Ribbon with Infographic Backdrop */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-neutral-900/80 to-cyan-950/40 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center">
              <span
                className="text-xs font-mono tracking-[0.28em] text-emerald-400 uppercase mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.fmcg.vacuumRiceBran.advantageHeading}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
                {t.fmcg.vacuumRiceBran.advantageTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/50 text-xs sm:text-sm text-neutral-200 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full py-10 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 border-t border-white/10 max-w-[1680px] mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-6">
        {/* Brand Emblem + Typography Lockup */}
        <Link href="/" className="flex items-center gap-3.5 select-none group">
          <div className="relative w-12 h-7 shrink-0">
            <Image
              src="/chrome_emblem.png"
              alt="Avinyates Emblem"
              fill
              sizes="48px"
              className="object-contain object-left"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-white text-sm font-semibold tracking-[0.16em] uppercase leading-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.common.brandName}
            </span>
            <span
              className="text-neutral-400 text-[9px] font-normal tracking-[0.24em] leading-none mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.common.tagline}
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div
          className="flex items-center flex-wrap justify-center gap-6 sm:gap-8 text-xs font-normal"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <Link href="/team" className="text-neutral-300 hover:text-white transition-colors">
            {t.nav.ourTeam}
          </Link>
          <Link href="/businesses/aerospace-defence" className="text-neutral-300 hover:text-white transition-colors">
            {t.nav.aerospace}
          </Link>
          <Link href="/businesses/energy" className="text-neutral-300 hover:text-white transition-colors">
            {t.nav.energy}
          </Link>
          <span className="text-[#00BFFF] relative font-medium">
            {t.nav.fmcg}
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#00BFFF] rounded-full" />
          </span>
        </div>

        {/* Right Socials & Copyright */}
        <div className="flex items-center gap-5 text-xs text-neutral-400">
          <span className="text-[11px] text-neutral-400 whitespace-nowrap">
            © 2026 AVINYATES INDIA. FMCG Division.
          </span>
        </div>
      </footer>
    </div>
  );
}
