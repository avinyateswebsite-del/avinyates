"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function TeamPage() {
  const leadership = [
    {
      name: "Executive Leadership",
      role: "Strategic Direction & Governance",
      desc: "Guiding Avinyates India's global trajectory across high-growth frontier sectors with bold vision and uncompromising ethical standards.",
      tag: "VISION",
    },
    {
      name: "Frontier Aerospace & Defence",
      role: "Aeronautics & Autonomous Systems",
      desc: "Distinguished propulsion engineers and defense technology veterans pioneering next-generation aerospace capabilities.",
      tag: "DEFENCE",
    },
    {
      name: "Food Revolution & Nutrition",
      role: "Clean Food Science & Formulation",
      desc: "Pioneering bio-chemists and food technologists dedicated to 100% preservative-free, zero-chemical, zero-added-sugar FMCG excellence.",
      tag: "FMCG",
    },
    {
      name: "Next-Generation Energy",
      role: "Green Hydrogen • Advanced Nuclear Research",
      desc: "Exploring green hydrogen, compact hydrogen fuel cells and thorium-based nuclear energy for a resilient energy future.",
      tag: "ENERGY",
      subItems: [
        {
          title: "Green Hydrogen",
          desc: "Renewable-powered hydrogen production and storage.",
        },
        {
          title: "Compact Hydrogen Fuel Cells",
          desc: "Exploring modular power for mobility, backup and distributed energy.",
        },
        {
          title: "Thorium & Nuclear Batteries",
          desc: "Future research interests in thorium fuel cycles and radioisotope power systems.",
        },
      ],
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <Navbar currentPath="/team" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] pt-32 sm:pt-40 md:pt-48 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
            <span
              className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PEOPLE &amp; PURPOSE
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our{" "}
            <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              Team
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The visionaries, engineers, and scientists united by a single purpose: inspiring radical innovation and elevating human potential across India and the globe.
          </p>
        </div>
      </section>

      {/* Leadership & Divisions Showcase - Boxless Pure Typography */}
      <section className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {leadership.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase block mb-3">
                      0{index + 1} / {item.tag}
                    </span>

                    <h2
                      className="text-2xl sm:text-3xl text-white font-light tracking-wide mb-2 group-hover:text-cyan-400 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.name}
                    </h2>
                    <p className="text-sm text-cyan-400/90 font-light mb-3">
                      {item.role}
                    </p>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                      {item.desc}
                    </p>

                    {item.subItems && (
                      <div className="mt-8 space-y-6 pt-2">
                        {item.subItems.map((sub, sIdx) => (
                          <div key={sIdx} className="border-t border-white/10 pt-4">
                            <div className="w-8 h-[2px] bg-[#00BFFF] mb-3" />
                            <h3
                              className="text-base sm:text-lg text-white font-normal mb-1.5"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {sub.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                              {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Boxless */}
      <footer className="relative z-10 w-full py-14 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>© 2026 AVINYATES INDIA. All Rights Reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/fmcg" className="text-neutral-400 hover:text-white transition-colors">FMCG</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/aerospace-defence" className="text-neutral-400 hover:text-white transition-colors">Aerospace &amp; Defence</Link>
          <span className="text-neutral-600">•</span>
          <Link href="/businesses/energy" className="text-neutral-400 hover:text-white transition-colors">Energy</Link>
        </div>
      </footer>
    </div>
  );
}
