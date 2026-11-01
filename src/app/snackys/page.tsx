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
  Sparkles,
  CheckCircle2,
  Utensils,
  Eye,
  Flame,
  Award,
  FlaskConical
} from "lucide-react";

interface SnackyItem {
  id: string;
  name: string;
  seasoning: string;
  tag: string;
  desc: string;
  image: string;
  ingredients: string;
  pairings: string;
  accent: string;
  netVol: string;
}

export default function SnackysPage() {
  const [selectedChip, setSelectedChip] = useState<SnackyItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // All 5 Official Snacky's Cans
  const chips: SnackyItem[] = [
    {
      id: "sweet-potato",
      name: "Sweet Potato Chips",
      seasoning: "Himalayan Pink Salt",
      tag: "ROOT CHIPS",
      desc: "Artisanal root chips with subtle mineral salt bringing out natural earthiness and sweetness.",
      image: "/brands/snackys/sweet_potato_chips.png",
      ingredients: "Farm-Fresh Orange & Purple Sweet Potatoes, Cold-Pressed Oil, Himalayan Pink Salt",
      pairings: "Healthy dipping platters, afternoon tea, guacamole, and guilt-free movie snacking",
      accent: "#ea580c",
      netVol: "125g",
    },
    {
      id: "taro-chips",
      name: "Taro Chips",
      seasoning: "Pudina & Lime",
      tag: "ORGANIC TARO",
      desc: "Delicate sliced taro root infused with cooling fresh mint leaves and zesty sun-kissed lime.",
      image: "/brands/snackys/taro_chips.png",
      ingredients: "Upland Organic Taro Root, Natural Mint Extract, Fresh Lime, Evaporated Sea Salt",
      pairings: "Hummus, Greek yoghurt dips, gourmet cheese boards, and Mediterranean mezze",
      accent: "#0284c7",
      netVol: "125g",
    },
    {
      id: "pineapple-chips",
      name: "Pineapple Chips",
      seasoning: "Tangy & Sweet",
      tag: "TROPICAL CRISP",
      desc: "Crisp tropical fruit chips balancing natural tartness with sun-ripened exotic sweetness.",
      image: "/brands/snackys/pineapple_chips.png",
      ingredients: "Queen Pineapple Pulp Slices, Natural Fruit Sugars, Mild Citrus Seasoning",
      pairings: "Açai breakfast bowls, artisan trail mix, fruit salads, and yogurt parfaits",
      accent: "#eab308",
      netVol: "125g",
    },
    {
      id: "banana-chips",
      name: "Banana Chips",
      seasoning: "Sea Salt",
      tag: "HERITAGE BANANA",
      desc: "Thin-sliced heritage Kerala bananas vacuum-cooked for a lighter crunch and pure sea-salt balance.",
      image: "/brands/snackys/banana_chips.png",
      ingredients: "Nendran Kerala Banana, Pure Cold-Pressed Coconut Oil, Evaporated Sea Salt",
      pairings: "Traditional South Indian feasts, masala chai, evening tea, and savoury dips",
      accent: "#d97706",
      netVol: "125g",
    },
    {
      id: "jackfruit-chips",
      name: "Jackfruit Chips",
      seasoning: "Desi Masala",
      tag: "SUPERFOOD CRISP",
      desc: "Golden vacuum-cooked tender jackfruit crisps tossed in traditional aromatic Indian spices.",
      image: "/brands/snackys/jackfruit_chips.png",
      ingredients: "Raw Village Jackfruit Pods, Roasted Cumin, Kashmiri Chilli, Chaat Masala",
      pairings: "Evening beverages, street-food platters, spiced mint chutney, and sharing boards",
      accent: "#16a34a",
      netVol: "125g",
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
        {/* Ambient Dark Overlay to elevate contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Global Fixed Navbar */}
      <Navbar currentPath="/snackys" />

      {/* Main Container */}
      <main className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-20 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 max-w-[1580px] mx-auto w-full">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-28 sm:mb-36">
          {/* Left Column: Typography & Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow with Cyan/Orange Dot */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] shadow-[0_0_8px_#00BFFF]" />
              <span
                className="text-[11px] sm:text-xs tracking-[0.28em] text-[#00BFFF] uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SNACKYS™ / ARTISANAL CRISPS
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              It&apos;s Yummy
            </p>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Crunch.<br />
              Without{" "}
              <span className="text-[#00BFFF] font-bold drop-shadow-[0_0_35px_rgba(0,191,255,0.6)]">
                Guilt.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base md:text-[17px] text-neutral-300 font-light max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Artisanal vacuum-cooked root crisps and tropical fruit chips crafted from farm-fresh harvest and clean seasonings. Zero trans-fats, pure crunch, complete guilt-free snacking.
            </p>

            {/* 3 Value Pillars Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 my-8 text-xs sm:text-sm text-neutral-300 font-light">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <span>100% Real Roots &amp; Fruits</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>Zero Preservatives</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>Low-Temp Vacuum Cooked</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#flavours"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-medium tracking-wide transition-all duration-300 group shadow-xl shadow-black/80"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Explore Chips</span>
                <ArrowRight className="w-4 h-4 text-[#00BFFF] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Snacky's Collection Hero Visual (Seamless Box-less) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end">
            {/* Ambient Base Glow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-[#00BFFF]/20 rounded-full blur-3xl pointer-events-none" />

            {/* High-res 5-Canister Collection (Seamless Transparent PNG, Box-less) */}
            <div className="relative w-full aspect-[16/9] max-w-[680px]">
              <Image
                src="/brands/snackys/snackys_v_collection.png"
                alt="Snacky's V-Shaped Gourmet Chip Can Collection"
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
                  src="/brands/snackys/snackys_v_collection.png"
                  alt="Snacky's Floor Reflection"
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
        {/* (Dummy video space with play icon as requested) */}
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
                OUR CRAFT
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              From Farm<br />
              to <span className="text-[#00BFFF]">Golden Crunch.</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              We source farm-fresh heritage produce, slice to micron precision, and vacuum-cook at lower temperatures to preserve natural color, essential fiber, and unbeatable crispness &mdash; no excess oil, no shortcuts.
            </p>

            {/* Process Checklist */}
            <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-200 font-light">
              {[
                "Hand-Selected Roots & Fruits",
                "Gentle Low-Temp Vacuum Frying (<120°C)",
                "70% Less Oil Absorption than Traditional Chips",
                "Retains 90%+ Natural Nutrients & Flavor",
                "Clean Label Always — Zero Artificial Additives",
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

          {/* Right Column: Dummy Video Space with Play Icon */}
          <div className="lg:col-span-7 relative">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full aspect-video sm:aspect-[16/10] rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group cursor-pointer"
            >
              {/* Culinary Video Background Preview */}
              <Image
                src="/brands/snackys/video_preview.jpg"
                alt="Watch Our Vacuum Roasting Process"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              {/* Dark Overlay with Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 group-hover:via-black/20 transition-colors" />

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
                    02:15 &bull; 4K Cinematic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 5 ARTISANAL CRUNCHES SHOWCASE */}
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
                  OUR COLLECTION
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                5 Artisanal Crunches.<br />
                <span className="text-[#00BFFF]">Crunch Without Guilt.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-md leading-relaxed">
              Crafted from real roots and tropical fruits. Naturally gluten-free, vegan-friendly, and seasoned with culinary excellence.
            </p>
          </div>

          {/* 5 Chips Grid: 5 Cans matching Gulpit style */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
            {chips.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setSelectedChip(item)}
              >
                {/* Canister Showcase with Glossy Surface Shadow */}
                <div className="relative w-full aspect-[9/16] max-h-[380px] flex items-center justify-center mb-4">
                  {/* Floor Glow matching lid accent */}
                  <div
                    className="absolute bottom-2 w-3/4 h-8 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Canister PNG */}
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
                  className="text-sm sm:text-base font-semibold text-white tracking-tight mb-0.5 group-hover:text-[#00BFFF] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </h3>

                {/* Seasoning */}
                <span
                  className="text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-2 block"
                  style={{ color: item.accent }}
                >
                  {item.seasoning}
                </span>

                {/* Short Description */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4 line-clamp-2 px-1">
                  {item.desc}
                </p>

                {/* View Details Pill Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedChip(item);
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
        {/* SECTION 4: REAL INGREDIENTS */}
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
              In Every <span className="text-[#00BFFF]">Bite.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              We use real sweet potatoes, taro, pineapple, bananas, and jackfruit to create chips that are rich in natural flavor and nutritional integrity. No synthetic MSG. No artificial colors. Just pure, wholesome harvest.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => setSelectedChip(chips[0])}
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
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-w-[720px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              <Image
                src="/brands/snackys/ingredients_splash.jpg"
                alt="Goodness In Every Bite - Fresh Roots and Tropical Fruits Splash"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: 3 CORE CRAFT PILLARS (SMART FRYING, NATURAL CHARACTER, INNOVATION) */}
        {/* ========================================================================= */}
        <section id="pillars" className="border-t border-white/10 pt-16 sm:pt-20 mb-24 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Pillar 1: Smart Frying */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
                <svg className="w-9 h-9 text-[#00BFFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  <path d="M12 9v6m-3-3l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span
                  className="text-[11px] font-mono tracking-[0.24em] text-[#00BFFF] uppercase block mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  01 / SMART FRYING
                </span>
                <h3
                  className="text-xl sm:text-2xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Big Crunch. Less Oil.*
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed">
                  Advanced vacuum frying and effective de-oiling transform pineapple, jackfruit and sweet potato into irresistibly crisp bites with less oil than conventional frying.*
                </p>
              </div>
            </div>

            {/* Pillar 2: Natural Character */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
                <Leaf className="w-9 h-9 stroke-[1.8] text-[#00BFFF]" />
              </div>
              <div>
                <span
                  className="text-[11px] font-mono tracking-[0.24em] text-[#00BFFF] uppercase block mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  02 / NATURAL CHARACTER
                </span>
                <h3
                  className="text-xl sm:text-2xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Lower Heat. Louder Flavour.
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed">
                  Our reduced-pressure process helps preserve the distinctive flavours and vibrant colours of tropical fruits and wholesome roots.
                </p>
              </div>
            </div>

            {/* Pillar 3: Innovation */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-[#00BFFF]">
                <FlaskConical className="w-9 h-9 stroke-[1.8] text-[#00BFFF]" />
              </div>
              <div>
                <span
                  className="text-[11px] font-mono tracking-[0.24em] text-[#00BFFF] uppercase block mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  03 / INNOVATION
                </span>
                <h3
                  className="text-xl sm:text-2xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Nature&apos;s Variety. Reimagined.
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed">
                  Extraordinary fruits and roots meet smarter frying technology&mdash;bringing tropical flavour and an exciting crunch to every Snackys bite.
                </p>
              </div>
            </div>

            {/* Disclaimer Footnote */}
            <div className="md:col-span-3 pt-2">
              <p className="text-[11px] sm:text-xs text-neutral-500 font-light tracking-wide">
                *Less-oil claim subject to comparative finished-product testing.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
            <span className="text-[10px] text-neutral-400 tracking-[0.24em] uppercase font-light mt-0.5">
              INSPIRING INNOVATION
            </span>
          </div>
        </Link>

        {/* Legal Disclaimer */}
        <div className="text-center md:text-left text-neutral-400 max-w-md leading-relaxed text-[11px]">
          &copy; 2026 AVINYATES INDIA PRIVATE LIMITED. SNACKYS&trade; is a registered trademark under the FMCG &amp; Food Revolution Division.
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-neutral-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/businesses/fmcg" className="hover:text-white transition-colors">
            FMCG
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/gulpit" className="hover:text-[#00BFFF] transition-colors">
            Gulpit™
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/team" className="hover:text-white transition-colors">
            Team
          </Link>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL 1: FLAVOUR DETAILS MODAL */}
      {/* ========================================================================= */}
      {selectedChip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedChip(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-neutral-950/95 border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedChip(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Canister Preview */}
              <div className="md:col-span-5 relative flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: selectedChip.accent }}
                />
                <div className="relative w-full aspect-[9/16] max-h-[380px]">
                  <Image
                    src={selectedChip.image}
                    alt={selectedChip.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]"
                  />
                </div>
              </div>

              {/* Right Column: Canister Specs & Information */}
              <div className="md:col-span-7 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5"
                    style={{ color: selectedChip.accent }}
                  >
                    {selectedChip.tag}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Net Wt: {selectedChip.netVol}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedChip.name}
                </h3>

                <p
                  className="text-sm font-mono tracking-wide uppercase mb-4"
                  style={{ color: selectedChip.accent }}
                >
                  {selectedChip.seasoning}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {selectedChip.desc}
                </p>

                {/* Ingredients & Pairings Boxes */}
                <div className="flex flex-col gap-3.5 mb-6 text-xs text-neutral-300">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-white font-medium block mb-1">
                      Key Ingredients:
                    </span>
                    <span className="font-light text-neutral-400">
                      {selectedChip.ingredients}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-white font-medium block mb-1">
                      Culinary Pairings:
                    </span>
                    <span className="font-light text-neutral-400">
                      {selectedChip.pairings}
                    </span>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-light border-t border-white/10 pt-4">
                  <span>✓ 100% Real Produce</span>
                  <span>✓ Vacuum Cooked</span>
                  <span>✓ Zero Preservatives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: DUMMY VIDEO STATUS MODAL */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-8 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF] mx-auto mb-4">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>

            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Vacuum-Cooking Production Video
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
              Our 4K cinematic documentary showing low-temperature vacuum frying, crisping techniques, and precision seasoning will be streamed here shortly.
            </p>

            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="px-6 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 text-xs text-white font-light tracking-wide transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
