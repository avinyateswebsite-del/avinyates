"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function EnergyPage() {
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

      <Navbar currentPath="/businesses/energy" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[85vh] pt-32 sm:pt-40 md:pt-48 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              NEXT-GENERATION ENERGY
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Next-Generation{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Energy
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Exploring green hydrogen, compact hydrogen fuel cells and thorium-based nuclear energy for a resilient energy future.
          </p>

          {/* Pillars - Frameless Open Layout (Zero Boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 mt-20">
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                01 / HYDROGEN
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Green Hydrogen
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Renewable-powered hydrogen production and storage.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                02 / FUEL CELLS
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Compact Hydrogen Fuel Cells
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Exploring modular power for mobility, backup and distributed energy.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase mb-3">
                03 / ADVANCED NUCLEAR
              </span>
              <h3
                className="text-2xl sm:text-3xl text-white font-light tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Thorium &amp; Nuclear Batteries
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                Future research interests in thorium fuel cycles and radioisotope power systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Boxless */}
      <footer className="relative z-10 w-full py-14 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© 2026 AVINYATES INDIA. Energy Division.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/team" className="text-neutral-400 hover:text-white transition-colors">Our Team</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/fmcg" className="text-neutral-400 hover:text-white transition-colors">FMCG</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/aerospace-defence" className="text-neutral-400 hover:text-white transition-colors">Aerospace &amp; Defence</Link>
        </div>
      </footer>
    </div>
  );
}
