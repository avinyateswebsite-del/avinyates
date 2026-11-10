"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function AerospaceDefencePage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <Navbar currentPath="/businesses/aerospace-defence" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[85vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BUSINESS DIVISIONS
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Aerospace &amp;{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Defence
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Engineering autonomous aeronautical platforms, next-generation avionics, and resilient defense systems engineered for national security and sovereign space exploration.
          </p>

          {/* Pillars - Frameless Open Layout (Zero Boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 mt-20">
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                01 / PROPULSION
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Advanced Propulsion
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                High-efficiency hybrid aerospace propulsion, hypersonic aerothermodynamics, and atmospheric dynamics.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                02 / DEFENCE
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Defense Shield Systems
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Tactical perimeter surveillance, autonomous counter-drone electronic defense, and sovereign protection.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                03 / ORBIT
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Satellite Ecosystems
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Low-earth orbit constellations for secure intelligence, telecommunications, and sovereign space monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Boxless */}
      <footer className="relative z-10 w-full py-14 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© 2026 AVINYATES INDIA. Aerospace &amp; Defence Division.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/team" className="text-neutral-400 hover:text-white transition-colors">Our Team</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/fmcg" className="text-neutral-400 hover:text-white transition-colors">FMCG</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/energy" className="text-neutral-400 hover:text-white transition-colors">Energy</Link>
        </div>
      </footer>
    </div>
  );
}
