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
      <section className="relative z-10 min-h-[85vh] pt-28 sm:pt-36 md:pt-44 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        <div className="relative max-w-4xl mx-auto w-full z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              04 / ENERGY
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Next-Generation<br />
            Energy
          </h1>

          {/* Subheading in Cyan */}
          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#38bdf8] font-normal tracking-wide drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Hydrogen &amp; Thorium SMRs • Nuclear Fuel Cells
          </p>

          {/* Main Description */}
          <p
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            We are planning to enter hydrogen and Thorium-based Small Medium Reactors (SMRs) and nuclear fuel cell innovation in the future.
          </p>

          {/* Stacked Pillars with Horizontal Separator Lines */}
          <div className="flex flex-col mt-14 sm:mt-16 space-y-10 sm:space-y-12">
            {/* Pillar 1 */}
            <div className="relative pt-6">
              <div className="w-12 h-[2px] bg-[#38bdf8] mb-6 shadow-[0_0_8px_#38bdf8]" />
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Hydrogen Energy
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                Next-generation green hydrogen generation, storage, and industrial energy solutions.
              </p>
              <div className="w-full h-[1px] bg-white/15 mt-8 sm:mt-10" />
            </div>

            {/* Pillar 2 */}
            <div className="relative pt-2">
              <div className="w-12 h-[2px] bg-[#38bdf8] mb-6 shadow-[0_0_8px_#38bdf8]" />
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Thorium Small Medium Reactors
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                Pioneering safe, proliferation-resistant Thorium-based SMR technology for continuous clean baseload power.
              </p>
              <div className="w-full h-[1px] bg-white/15 mt-8 sm:mt-10" />
            </div>

            {/* Pillar 3 */}
            <div className="relative pt-2">
              <div className="w-12 h-[2px] bg-[#38bdf8] mb-6 shadow-[0_0_8px_#38bdf8]" />
              <h3
                className="text-2xl sm:text-3xl text-white font-normal tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Nuclear Fuel Cells
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                Advanced nuclear fuel cell architectures and compact radioisotope power systems for high-endurance applications.
              </p>
            </div>
          </div>

          {/* Research Vision Tagline */}
          <div className="mt-16 sm:mt-20 flex justify-center">
            <span
              className="text-xs sm:text-sm tracking-[0.35em] text-[#38bdf8] uppercase font-medium drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              OUR RESEARCH VISION
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-10 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© 2026 AVINYATES INDIA. All Rights Reserved.</div>
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
