"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { Leaf, FlaskConical, Heart, ArrowRight } from "lucide-react";

export default function FMCGPage() {
  // Official Gulpit Flavours from Avinyates Corporate Brochure
  const gulpitSavouryFlavours = [
    {
      name: "Coconut Chilli Chutney",
      tag: "INDIAN-INSPIRED",
      ingredients: "Coconut, Green Chilli, Curry Leaf, Cold-Pressed Oil",
      pairings: "Dosa, idli, wraps, savoury rolls and dipping platters",
      accent: "#00BFFF",
    },
    {
      name: "Smoky Tomato Relish",
      tag: "WESTERN-INSPIRED",
      ingredients: "Tomato, Shallots, Smoked Paprika, Herbs",
      pairings: "Burgers, toasties, sourdough toast and grilled meals",
      accent: "#ef4444",
    },
    {
      name: "Miso Ginger Garlic",
      tag: "JAPANESE-INSPIRED",
      ingredients: "Ginger, Garlic, Curry Leaf, Fermented Miso",
      pairings: "Noodles, rice bowls, stir-fries, dim sum and grilled vegetables",
      accent: "#eab308",
    },
    {
      name: "Mint & Thulasi Chutney",
      tag: "INDIAN HERBS",
      ingredients: "Mint, Coriander, Sacred Thulasi, Lemon",
      pairings: "Savoury bites, samosas, grain bowls and sharing platters",
      accent: "#22c55e",
    },
    {
      name: "Gochujang Onion",
      tag: "KOREAN-INSPIRED",
      ingredients: "Roasted Onion, Bird's Eye Chilli, Fermented Gochujang",
      pairings: "Bowls, sandwiches, dipping, wraps and pan-fried bites",
      accent: "#f97316",
    },
  ];

  const gulpitFruitFlavours = [
    {
      name: "Tropical Pina Colada",
      tag: "BREAKFAST & DESSERT",
      ingredients: "Sun-ripened Pineapple, Creamy Coconut Nectar",
      pairings: "Toast, waffles, breakfast grain bowls, pancakes",
      accent: "#fbbf24",
    },
    {
      name: "Tender Coconut Chilli",
      tag: "SWEET & HEAT",
      ingredients: "Tender Coconut Pulp, Mild Green Chilli Warmth",
      pairings: "Savoury platters, cheese boards, sourdough toasts",
      accent: "#38bdf8",
    },
    {
      name: "Tandoori BBQ Jackfruit",
      tag: "SMOKY FUSION",
      ingredients: "Raw Jackfruit, Tandoori Spices, Smoked Molasses",
      pairings: "Wraps, vegan sliders, burgers and flame-grilled skewers",
      accent: "#f87171",
    },
    {
      name: "Schezwan Mango",
      tag: "SWEET MEETS HEAT",
      ingredients: "Alphonso Mango Nectar, Sichuan Pepper, Garlic, Ginger",
      pairings: "Noodles, savoury appetizers, bao buns and dim sums",
      accent: "#fb923c",
    },
    {
      name: "Gochujang Banana",
      tag: "KOREAN FUSION",
      ingredients: "Caramelized Banana, Fermented Red Chilli Paste",
      pairings: "Grain bowls, grilled sandwiches and sweet-heat dipping",
      accent: "#facc15",
    },
  ];

  // Official Snacky's Flavours from Avinyates Corporate Brochure
  const snackysFlavours = [
    {
      name: "Sweet Potato Chips",
      seasoning: "Himalayan Pink Salt",
      desc: "Artisanal root chips with subtle mineral salt bringing out natural earthiness. A familiar savoury profile for everyday healthy snacking.",
      lid: "#ea580c",
      ingredient: "Farm-Fresh Orange Sweet Potato",
    },
    {
      name: "Taro Chips",
      seasoning: "Pudina & Lime",
      desc: "Delicate sliced taro root infused with cooling mint and zesty citrus. A fresh, refreshing direction crafted for sharing.",
      lid: "#0284c7",
      ingredient: "Upland Organic Taro Root",
    },
    {
      name: "Pineapple Chips",
      seasoning: "Tangy & Sweet",
      desc: "Crisp tropical fruit chips balancing natural tartness with natural sweetness. An exotic, crunchy fruit sensation.",
      lid: "#eab308",
      ingredient: "Queen Pineapple Slices",
    },
    {
      name: "Banana Chips",
      seasoning: "Sea Salt",
      desc: "Thin-sliced heritage Kerala bananas prepared via vacuum frying for lighter crunch and pure sea-salt balance.",
      lid: "#d97706",
      ingredient: "Nendran Kerala Banana",
    },
    {
      name: "Jackfruit Chips",
      seasoning: "Desi Masala",
      desc: "Golden vacuum-fried tender jackfruit crisps tossed in traditional aromatic Indian spices for authentic warmth.",
      lid: "#16a34a",
      ingredient: "Raw Village Jackfruit Pods",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white select-none">
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
              FMCG / FOOD REVOLUTION
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Food{" "}
            <span className="text-[#00BFFF] font-normal drop-shadow-[0_0_35px_rgba(0,191,255,0.6)]">
              Revolution
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Re-engineering the global nutritional paradigm through uncompromised purity, advanced clean-label preservation, and whole-body vitality.
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
                VACUUM COLD PRESSED FRUIT &amp; HERB SPREAD
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                GULPIT<span className="text-xl sm:text-2xl font-light align-super">™</span>
              </h2>

              <p
                className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mt-2 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Spread Happiness
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Vacuum cold pressed fruit spreads and herb spreads crafted from real fruits and botanicals, clean label and complete vitality.
              </p>

              {/* Pill Button with Cyan Border - Links to dedicated Gulpit Page */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/gulpit"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-light tracking-wide transition-all duration-300 group shadow-lg shadow-black/80 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>Explore Gulpit</span>
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
                ARTISANAL ROASTED SUPERFOOD SNACKS
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                SNACKYS<span className="text-xl sm:text-2xl font-light align-super">™</span>
              </h2>

              <p
                className="text-sm sm:text-base text-[#00BFFF] font-normal tracking-wide mt-2 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                It&apos;s Yummy
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Made from tropical fruits and healthy nutrient-rich roots with clean seasonings. Wholesome indulgence for everyday living.
              </p>

              {/* Pill Button with Cyan Border - Links to dedicated Snacky's Page */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/snackys"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#00BFFF]/70 hover:border-[#00BFFF] bg-black/40 hover:bg-[#00BFFF]/10 text-xs sm:text-sm text-white font-light tracking-wide transition-all duration-300 group shadow-lg shadow-black/80 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>Explore Snackys</span>
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
        <section id="pillars" className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 mb-20 sm:mb-24">
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
        </section>
      </main>

      {/* FOOTER: Matching Exact Design in Template */}
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
          <Link href="/businesses/aerospace-defence" className="text-neutral-300 hover:text-white transition-colors">
            Aerospace &amp; Defence
          </Link>
          <Link href="/businesses/energy" className="text-neutral-300 hover:text-white transition-colors">
            Energy
          </Link>
          <span className="text-[#00BFFF] relative font-medium">
            Food Revolution
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#00BFFF] rounded-full" />
          </span>
        </div>

        {/* Right Socials & Copyright */}
        <div className="flex items-center gap-5 text-xs text-neutral-400">
          {/* Social Icons */}
          <div className="flex items-center gap-3.5 text-neutral-300">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00BFFF] transition-colors">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-[#00BFFF] transition-colors">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* YouTube */}
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

    </div>
  );
}
