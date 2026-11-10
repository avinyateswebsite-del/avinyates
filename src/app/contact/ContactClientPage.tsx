"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import { useTranslation } from "@/i18n/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sparkles,
  ArrowRight,
  Globe2,
} from "lucide-react";

export default function ContactClientPage() {
  const { t, languageConfig, dir } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "General Inquiry",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          division: "General Inquiry",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white"
      style={languageConfig.fontFamily ? { fontFamily: languageConfig.fontFamily } : undefined}
      dir={dir}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      <Navbar currentPath="/contact" />

      {/* Main Content Area */}
      <main className="relative z-10 pt-32 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Eyebrow & Title */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]" />
              <span
                className="text-xs sm:text-sm tracking-[0.32em] text-[#38bdf8] uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONNECT WITH AVINYATES
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.08] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get in{" "}
              <span className="text-[#38bdf8] font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                Touch
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Partner with Avinyates India. Whether inquiring about our FMCG brands (Gulpit &amp; Snackys), Aerospace &amp; Defence initiatives, or Clean Energy investments, our leadership is ready to collaborate.
            </p>
          </div>

          {/* Grid Layout: Contact Info Cards + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info & Corporate Hubs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Corporate Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />
                
                <h2
                  className="text-xl sm:text-2xl font-light text-white mb-2 tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Avinyates India
                </h2>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-6 font-mono">
                  Global Conglomerate Headquarters
                </p>

                <div className="space-y-5 text-sm">
                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center shrink-0 text-[#00BFFF]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-mono">Email Us</span>
                      <a
                        href="mailto:contact@avinyates.com"
                        className="text-neutral-200 hover:text-[#00BFFF] transition-colors font-light"
                      >
                        contact@avinyates.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center shrink-0 text-[#00BFFF]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-mono">Corporate Line</span>
                      <span className="text-neutral-200 font-light">+91 (India) • Global Reach</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center shrink-0 text-[#00BFFF]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-mono">Headquarters</span>
                      <p className="text-neutral-300 font-light text-xs leading-relaxed">
                        Avinyates India Private Limited<br />
                        Republic of India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Division Directory Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-4 h-4 text-[#00BFFF]" />
                  <span className="text-xs uppercase tracking-widest text-[#00BFFF] font-mono">
                    Key Divisions
                  </span>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/gulpit"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div>
                      <span className="text-sm text-white font-medium block">Gulpit</span>
                      <span className="text-[11px] text-neutral-400">Cold-Pressed Spreads &amp; Dips</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/snackys"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div>
                      <span className="text-sm text-white font-medium block">Snackys</span>
                      <span className="text-[11px] text-neutral-400">Gourmet Vacuum Cooked Chips</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/businesses/aerospace-defence"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div>
                      <span className="text-sm text-white font-medium block">Aerospace &amp; Defence</span>
                      <span className="text-[11px] text-neutral-400">Autonomous UAV &amp; Propulsion</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/businesses/energy"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <div>
                      <span className="text-sm text-white font-medium block">Clean Energy</span>
                      <span className="text-[11px] text-neutral-400">Hydrogen &amp; Thorium SMRs</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00BFFF] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />

                <h2
                  className="text-2xl sm:text-3xl font-light text-white mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Send a Message
                </h2>
                <p className="text-sm text-neutral-400 font-light mb-8">
                  Fill in your details below and our team will get back to you within 24 hours.
                </p>

                {status === "success" ? (
                  <div className="p-8 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#00BFFF]/20 flex items-center justify-center mb-4 text-[#00BFFF]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Message Received</h3>
                    <p className="text-sm text-neutral-300 max-w-md leading-relaxed mb-6">
                      Thank you for contacting Avinyates India. Your message has been routed to our corporate relations team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 rounded-full border border-white/20 text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                          Your Name <span className="text-[#00BFFF]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                          Email Address <span className="text-[#00BFFF]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all"
                        />
                      </div>

                      {/* Division / Interest */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                          Division of Interest
                        </label>
                        <select
                          name="division"
                          value={formData.division}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all cursor-pointer"
                        >
                          <option value="General Inquiry" className="bg-neutral-900 text-white">General Inquiry</option>
                          <option value="FMCG - Gulpit Spreads" className="bg-neutral-900 text-white">FMCG: Gulpit Fruit Spreads &amp; Dips</option>
                          <option value="FMCG - Snackys Chips" className="bg-neutral-900 text-white">FMCG: Snackys Vacuum Cooked Chips</option>
                          <option value="Aerospace & Defence" className="bg-neutral-900 text-white">Aerospace &amp; Defence</option>
                          <option value="Clean Energy" className="bg-neutral-900 text-white">Clean Energy &amp; Hydrogen</option>
                          <option value="Careers & Talent" className="bg-neutral-900 text-white">Careers &amp; Talent</option>
                          <option value="Press & Media" className="bg-neutral-900 text-white">Press &amp; Media</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Partnership, distribution, or inquiry topic"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                        Message <span className="text-[#00BFFF]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements or collaboration proposal..."
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0090ff] hover:from-[#38bdf8] hover:to-[#00BFFF] text-black font-semibold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
