"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import {
  Play,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Shield,
  Droplets,
  CheckCircle2,
  Sparkles,
  Utensils,
  Eye
} from "lucide-react";

interface FlavourItem {
  id: string;
  name: string;
  tag: string;
  category: "savoury" | "fruit";
  desc: string;
  image: string;
  ingredients: string;
  pairings: string;
  accent: string;
}

export default function GulpitPage() {
  const [selectedFlavour, setSelectedFlavour] = useState<FlavourItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // All 10 Official Gulpit Flavours matching template exactly
  const flavours: FlavourItem[] = [
    // Row 1: Savoury Collection
    {
      id: "coconut-chilli",
      name: "Coconut Chilli Chutney",
      tag: "INDIAN-INSPIRED",
      category: "savoury",
      desc: "A refreshing blend of grated coconut, green chilli and curry leaf.",
      image: "/brands/gulpit/coconut_chilli_chutney.png",
      ingredients: "Fresh Coconut, Green Chilli, Curry Leaf, Cold-Pressed Oil",
      pairings: "Dosa, idli, wraps, savoury rolls and dipping platters",
      accent: "#00BFFF",
    },
    {
      id: "smoky-tomato",
      name: "Smoky Tomato Relish",
      tag: "WESTERN-INSPIRED",
      category: "savoury",
      desc: "Rich tomatoes, shallots and a hint of smoked paprika.",
      image: "/brands/gulpit/smoky_tomato_relish.png",
      ingredients: "Vine Tomatoes, Shallots, Smoked Paprika, Crushed Herbs",
      pairings: "Burgers, toasties, grilled sandwiches and barbecue skewers",
      accent: "#ef4444",
    },
    {
      id: "miso-garlic",
      name: "Miso Ginger Garlic",
      tag: "JAPANESE-INSPIRED",
      category: "savoury",
      desc: "A bold umami blend with ginger, garlic and miso.",
      image: "/brands/gulpit/miso_ginger_garlic.png",
      ingredients: "Ginger, Garlic, Curry Leaf, Fermented Miso, Roasted Seeds",
      pairings: "Noodles, rice bowls, stir-fries, dim sums and dumplings",
      accent: "#eab308",
    },
    {
      id: "mint-thulasi",
      name: "Mint & Thulasi Chutney",
      tag: "INDIAN HERBS",
      category: "savoury",
      desc: "A fresh, herby classic with mint and thulasi.",
      image: "/brands/gulpit/mint_thulasi_chutney.png",
      ingredients: "Fresh Mint, Coriander, Sacred Thulasi, Lemon Extract",
      pairings: "Savoury bites, samosas, grain bowls and sharing platters",
      accent: "#22c55e",
    },
    {
      id: "gochujang-onion",
      name: "Gochujang Onion",
      tag: "KOREAN-INSPIRED",
      category: "savoury",
      desc: "Spicy Korean-inspired roasted onion spread.",
      image: "/brands/gulpit/gochujang_onion.png",
      ingredients: "Roasted Onion, Bird's Eye Chilli, Fermented Gochujang",
      pairings: "Bibimbap, bowls, grilled sandwiches and pan-fried bites",
      accent: "#f97316",
    },

    // Row 2: Fruit Fusion & Exotic Collection
    {
      id: "schezwan-mango",
      name: "Schezwan Mango",
      tag: "SWEET MEETS HEAT",
      category: "fruit",
      desc: "Sweet mango with a fiery kick of garlic and ginger.",
      image: "/brands/gulpit/schezwan_mango.png",
      ingredients: "Alphonso Mango Nectar, Sichuan Pepper, Garlic, Fresh Ginger",
      pairings: "Noodles, wraps, savoury spring rolls and dipping platters",
      accent: "#fb923c",
    },
    {
      id: "pina-colada",
      name: "Tropical Pina Colada",
      tag: "TROPICAL BLISS",
      category: "fruit",
      desc: "Sun-ripened pineapple & creamy coconut bliss.",
      image: "/brands/gulpit/tropical_pina_colada.png",
      ingredients: "Queen Pineapple Pulp, Tender Coconut Nectar, Citrus",
      pairings: "Toast, waffles, breakfast grain bowls and fruit pancakes",
      accent: "#facc15",
    },
    {
      id: "tender-coconut-chilli",
      name: "Tender Coconut Chilli",
      tag: "CREAMY WARMTH",
      category: "fruit",
      desc: "Creamy coconut pulp touched with mild green chilli warmth.",
      image: "/brands/gulpit/tender_coconut_chilli.png",
      ingredients: "Tender Coconut Pulp, Mild Green Chilli, Rock Salt",
      pairings: "Savoury platters, artisan crackers, cheese and warm sourdough",
      accent: "#38bdf8",
    },
    {
      id: "tandoori-jackfruit",
      name: "Tandoori BBQ Jackfruit",
      tag: "SMOKY FUSION",
      category: "fruit",
      desc: "Smoky tandoori spices with tender jackfruit.",
      image: "/brands/gulpit/tandoori_jackfruit.png",
      ingredients: "Raw Village Jackfruit, Tandoori BBQ Spices, Smoked Herbs",
      pairings: "Wraps, vegan sliders, burgers and flame-grilled skewers",
      accent: "#f87171",
    },
    {
      id: "gochujang-banana",
      name: "Korean Gochujang Banana",
      tag: "KOREAN FUSION",
      category: "fruit",
      desc: "Caramelized banana with fermented Korean red chilli.",
      image: "/brands/gulpit/gochujang_banana.png",
      ingredients: "Caramelized Banana, Fermented Red Chilli Paste, Sesame",
      pairings: "Grain bowls, savory waffles and sweet-heat dipping",
      accent: "#fbbf24",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none overflow-x-hidden">
      {/* Fixed Diagonal Milky Way Starfield Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          src="/starfield.png"
          alt="Diagonal Milky Way Starfield"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      </div>

      {/* Global Navbar */}
      <Navbar currentPath="/gulpit" />

      {/* Main Container */}
      <main className="relative z-10 pt-28 sm:pt-36 lg:pt-40 max-w-[1580px] mx-auto w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (Pure Flavour. No Compromise.) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[75vh] mb-24 sm:mb-32">
          {/* Left Column: Headline, Subtext, Badges & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
              <span
                className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-neutral-300 uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                GULPIT
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Spread Happiness
            </p>

            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.05] drop-shadow-[0_2px_25px_rgba(0,0,0,0.95)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Pure<br />
              Flavour.<br />
              <span className="text-[#00BFFF] drop-shadow-[0_0_35px_rgba(0,191,255,0.6)]">
                No Compromise.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base md:text-[17px] text-neutral-300 font-light max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Cold-pressed natural hydration and fruit spreads crafted from real fruits and botanicals. Clean labels, bold flavours, complete vitality.
            </p>

            {/* 3 Value Pillars Badges matching template */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 my-8 text-xs sm:text-sm text-neutral-300 font-light">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <span>100% Natural Ingredients</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>Zero Preservatives</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Droplets className="w-3.5 h-3.5" />
                </div>
                <span>Clean Label Nutrition</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#flavours"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-medium tracking-wide transition-all duration-300 group shadow-xl shadow-black/80"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Explore Flavours</span>
                <ArrowRight className="w-4 h-4 text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Gulpit Tropical Collection Hero Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end">
            {/* Ambient Cyan Base Glow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-[#00BFFF]/20 rounded-full blur-3xl pointer-events-none" />

            {/* High-res 5-Bottle Collection (Seamless Transparent PNG, Box-less) */}
            <div className="relative w-full aspect-[16/9] max-w-[680px]">
              <Image
                src="/brands/gulpit/gulpit_tropical_collection.png"
                alt="Gulpit Tropical Sauce Collection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Glossy Floor Reflection for Seamless Depth */}
            <div className="relative w-full h-12 sm:h-16 -mt-1 overflow-hidden opacity-25 scale-y-[-1] pointer-events-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)] blur-[0.6px]">
              <div className="relative w-full aspect-[16/9] max-w-[680px] mx-auto">
                <Image
                  src="/brands/gulpit/gulpit_tropical_collection.png"
                  alt="Gulpit Floor Reflection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: OUR PROCESS & VIDEO SHOWCASE */}
        {/* (Dummy video space with play icon as explicitly requested by user) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-28 sm:mb-36">
          {/* Left Column: Process Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
              <span
                className="text-xs font-semibold tracking-[0.28em] text-neutral-300 uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                OUR PROCESS
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              From Nature<br />
              to <span className="text-[#00BFFF]">Nourishment.</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              We source real ingredients, preserve their natural goodness, and craft every spread with care &mdash; no artificial additives, no shortcuts.
            </p>

            {/* Process Checklist */}
            <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-200 font-light">
              {[
                "Real Ingredients",
                "Cold-Pressed Goodness",
                "Hygienic & Modern Production",
                "Quality Checked",
                "Clean Label, Always",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF] shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Showcase with Dedicated MP4 */}
          <div className="lg:col-span-7 relative">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full aspect-video sm:aspect-[16/10] rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group cursor-pointer"
            >
              {/* Dedicated Gulpit Background Video (Autoplay loop muted) */}
              <video
                src="/brands/gulpit/gulpit_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />

              {/* Dark Overlay with Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:via-black/10 transition-colors" />

              {/* Central Play Icon Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-black/60 border border-white/40 group-hover:border-[#00BFFF] backdrop-blur-md flex items-center justify-center text-white group-hover:text-[#00BFFF] group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,191,255,0.4)]">
                  <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-current ml-1" />
                  {/* Subtle Pulse Ring */}
                  <span className="absolute inset-0 rounded-full border border-[#00BFFF]/50 animate-ping pointer-events-none" />
                </div>

                {/* Video Caption & Duration */}
                <div className="mt-4">
                  <span
                    className="text-base sm:text-lg font-medium text-white tracking-wide block drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Watch Our Process
                  </span>
                  <span className="text-xs text-neutral-400 font-mono tracking-wider mt-1 block">
                    Cinematic Brand Film
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 10 BOLD FLAVOURS. ONE CLEAN PROMISE. */}
        {/* ========================================================================= */}
        <section id="flavours" className="mb-28 sm:mb-36">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
                <span
                  className="text-xs font-semibold tracking-[0.28em] text-neutral-300 uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  OUR FLAVOURS
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                10 Bold Flavours.<br />
                <span className="text-[#00BFFF]">One Clean Promise.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-md leading-relaxed">
              A flavour for every mood. Made from real ingredients, inspired by global cuisines, and crafted for a cleaner, healthier you.
            </p>
          </div>

          {/* 10 Flavours Grid: 2 Rows of 5 Bottles exactly like template */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
            {flavours.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setSelectedFlavour(item)}
              >
                {/* Bottle Showcase with Glossy Surface Shadow */}
                <div className="relative w-full aspect-[9/16] max-h-[360px] flex items-center justify-center mb-4">
                  {/* Subtle Floor Glow */}
                  <div
                    className="absolute bottom-2 w-3/4 h-8 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Bottle PNG */}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base font-semibold text-white tracking-tight mb-1.5 group-hover:text-[#00BFFF] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4 line-clamp-2 px-1">
                  {item.desc}
                </p>

                {/* View Details Pill Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFlavour(item);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-[11px] sm:text-xs text-neutral-300 hover:text-white font-light tracking-wide transition-all duration-300 mt-auto"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 text-[#00BFFF]" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: REAL INGREDIENTS (Goodness You Can See.) */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-24 sm:mb-32">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
              <span
                className="text-xs font-semibold tracking-[0.28em] text-neutral-300 uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                REAL INGREDIENTS
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Goodness<br />
              You Can <span className="text-[#00BFFF]">See.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              We use real fruits, herbs, spices and superfoods to create spreads that are rich in flavour and natural nutrition. No artificial additives. No unnecessary fillers. Just clean, honest ingredients &mdash; the way it should be.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => setSelectedFlavour(flavours[0])}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-medium tracking-wide transition-all duration-300 group shadow-xl shadow-black/80 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Our Ingredients</span>
                <ArrowRight className="w-4 h-4 text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Ingredients Splash Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-w-[720px] rounded-3xl overflow-hidden">
              <Image
                src="/brands/gulpit/ingredients_splash.png"
                alt="Goodness You Can See - Fresh Ingredients Splash"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER: Matching Exact Design in Template */}
      <footer className="relative z-10 w-full py-10 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 border-t border-white/10 max-w-[1580px] mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-6">
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
              AVINYATES INDIA
            </span>
            <span
              className="text-neutral-400 text-[9px] font-normal tracking-[0.24em] leading-none mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Inspiring Innovation
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div
          className="flex items-center flex-wrap justify-center gap-6 sm:gap-8 text-xs font-normal"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <Link href="/team" className="text-neutral-300 hover:text-white transition-colors">
            Our Team
          </Link>
          <span className="text-[#00BFFF] relative font-medium">
            Gulpit
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#00BFFF] rounded-full" />
          </span>
          <Link href="/snackys" className="text-neutral-300 hover:text-white transition-colors">
            SNACKYS
          </Link>
          <Link href="/businesses/aerospace-defence" className="text-neutral-300 hover:text-white transition-colors">
            Innovation
          </Link>
          <Link href="/businesses/energy" className="text-neutral-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Socials & Copyright */}
        <div className="flex items-center gap-5 text-xs text-neutral-400">
          <div className="flex items-center gap-3.5 text-neutral-300">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00BFFF] transition-colors">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#00BFFF] transition-colors">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#00BFFF] transition-colors">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <span className="text-neutral-600">|</span>
          <span className="text-[11px] text-neutral-400 whitespace-nowrap">
            © 2026 AVINYATES INDIA. FMCG Division.
          </span>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* FLAVOUR DETAILS MODAL */}
      {/* ========================================================================= */}
      {selectedFlavour && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedFlavour(null)}
        >
          <div
            className="relative w-full max-w-xl bg-neutral-950/95 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <button
              onClick={() => setSelectedFlavour(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="relative w-32 h-52 shrink-0">
                <Image
                  src={selectedFlavour.image}
                  alt={selectedFlavour.name}
                  fill
                  sizes="128px"
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              <div>
                <span
                  className="text-xs font-mono tracking-widest uppercase font-semibold block mb-1"
                  style={{ color: selectedFlavour.accent }}
                >
                  {selectedFlavour.tag} &bull; 310 g
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedFlavour.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {selectedFlavour.desc}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-400 font-normal">Ingredients: </span>
                <span className="text-white font-light">{selectedFlavour.ingredients}</span>
              </div>
              <div>
                <span className="text-neutral-400 font-normal">Suggested Pairings: </span>
                <span className="text-[#00BFFF] font-light">{selectedFlavour.pairings}</span>
              </div>
              <div>
                <span className="text-neutral-400 font-normal">Technology: </span>
                <span className="text-white font-light">Vacuum concentration &bull; Zero added preservatives &bull; Zero added sugar</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FULLSCREEN VIDEO MODAL (Plays the dedicated Gulpit video with audio & controls) */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/20 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/20 backdrop-blur-md"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src="/brands/gulpit/gulpit_video.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
