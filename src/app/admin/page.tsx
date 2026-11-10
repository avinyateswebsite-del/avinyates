"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  LogOut,
  Save,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  RefreshCw,
  Eye,
} from "lucide-react";
import { CMSProduct } from "@/lib/cms-client";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"gulpit" | "snackys" | "contact" | "inquiries" | "sql">("gulpit");

  // Products Data
  const [gulpitItems, setGulpitItems] = useState<CMSProduct[]>([]);
  const [snackysItems, setSnackysItems] = useState<CMSProduct[]>([]);
  const [editingProduct, setEditingProduct] = useState<CMSProduct | null>(null);

  // Content Data
  const [contactContent, setContactContent] = useState<Record<string, string>>({
    contact_email: "Vineeth@avinyates.com",
    contact_phone: "+91 99619 47458",
    contact_whatsapp: "919961947458",
    contact_address: "Avinyates India Private Limited, Republic of India",
  });

  // Inquiries Data
  const [inquiries, setInquiries] = useState<any[]>([]);

  // Status indicators
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [loadingData, setLoadingData] = useState(false);

  // Check auth on load
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/login");
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        loadAllData();
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsAuthenticated(true);
        loadAllData();
      } else {
        setAuthError(data.error || "Incorrect password.");
      }
    } catch {
      setAuthError("Failed to connect to authentication server.");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    setIsAuthenticated(false);
  };

  const loadAllData = async () => {
    setLoadingData(true);
    try {
      // Load Gulpit
      const gRes = await fetch("/api/admin/products?brand=gulpit");
      const gData = await gRes.json();
      if (gData.products) setGulpitItems(gData.products);

      // Load Snackys
      const sRes = await fetch("/api/admin/products?brand=snackys");
      const sData = await sRes.json();
      if (sData.products) setSnackysItems(sData.products);

      // Load Contact Content
      const cRes = await fetch("/api/admin/content?category=contact");
      const cData = await cRes.json();
      if (cData.content) {
        const map: Record<string, string> = { ...contactContent };
        cData.content.forEach((item: any) => {
          map[item.key] = item.value;
        });
        setContactContent(map);
      }

      // Load Inquiries
      const iRes = await fetch("/api/admin/inquiries");
      const iData = await iRes.json();
      if (iData.inquiries) setInquiries(iData.inquiries);
    } catch (err) {
      console.error("Error loading CMS data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSaveContactContent = async () => {
    setSaveStatus("saving");
    try {
      const payload = Object.entries(contactContent).map(([key, value]) => ({
        key,
        category: "contact",
        value,
      }));

      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSaveStatus("Contact details updated successfully!");
        setTimeout(() => setSaveStatus(""), 4000);
      } else {
        setSaveStatus("Failed to update contact content. Check Supabase schema.");
      }
    } catch {
      setSaveStatus("Error updating contact details.");
    }
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    setSaveStatus("saving");
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProduct),
      });

      if (res.ok) {
        setSaveStatus("Product saved successfully!");
        setEditingProduct(null);
        loadAllData();
        setTimeout(() => setSaveStatus(""), 4000);
      } else {
        setSaveStatus("Error saving product. Please verify database schema.");
      }
    } catch {
      setSaveStatus("Failed to transmit product changes.");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm(`Are you sure you want to delete product "${id}"?`)) return;

    try {
      const res = await fetch("/api/admin/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        loadAllData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Login Screen
  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#00BFFF15,_transparent_50%)] pointer-events-none" />

        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center mb-4 text-[#00BFFF]">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-light tracking-wide uppercase font-mono text-white">
              Avinyates CMS
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Authorized Executive Portal • Supabase Connected
            </p>
          </div>

          {authError && (
            <div className="p-3 mb-6 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Master Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password (default: avinyates2026!)"
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0090ff] hover:from-[#38bdf8] hover:to-[#00BFFF] text-black font-semibold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,191,255,0.4)] cursor-pointer"
            >
              Sign In to CMS
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link href="/" className="text-xs text-neutral-400 hover:text-white transition-colors">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-neutral-400 text-sm font-mono">
          <RefreshCw className="w-4 h-4 animate-spin text-[#00BFFF]" />
          <span>Verifying Avinyates Security Session...</span>
        </div>
      </div>
    );
  }

  // Authenticated CMS Workspace
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 selection:text-white pb-20">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 w-full bg-neutral-950/90 border-b border-white/10 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-widest uppercase font-mono text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BFFF] shadow-[0_0_10px_#00BFFF]" />
            AVINYATES <span className="text-[#00BFFF] font-light">CMS</span>
          </Link>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-neutral-300 font-mono">
            Live Database
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-xs text-red-300 hover:text-red-200 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("gulpit")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "gulpit"
                ? "bg-[#00BFFF] text-black font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Gulpit Spreads ({gulpitItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("snackys")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "snackys"
                ? "bg-[#00BFFF] text-black font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Snackys Cans ({snackysItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "contact"
                ? "bg-[#00BFFF] text-black font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact &amp; Numbers</span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "inquiries"
                ? "bg-[#00BFFF] text-black font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Messages ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("sql")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "sql"
                ? "bg-[#00BFFF] text-black font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Setup SQL Script</span>
          </button>
        </div>

        {/* Global Save Notice */}
        {saveStatus && (
          <div className="mb-6 p-4 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center gap-3 text-sm text-[#00BFFF] animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* ================= GULPIT TAB ================= */}
        {activeTab === "gulpit" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-light">Gulpit Fruit Spreads &amp; Chutneys</h2>
                <p className="text-xs text-neutral-400">Edit flavors, ingredients, tags, or add brand new jars.</p>
              </div>
              <button
                onClick={() =>
                  setEditingProduct({
                    id: `flavour-${Date.now()}`,
                    brand: "gulpit",
                    name: "New Flavour",
                    tag: "NEW RELEASE",
                    category: "savoury",
                    short_desc: "Delicious all-natural spread.",
                    image_url: "/brands/gulpit/coconut_chilli_chutney.png",
                    ingredients: "Fresh real ingredients",
                    pairings: "Toast, snacks and platters",
                    accent_color: "#00BFFF",
                    display_order: gulpitItems.length + 1,
                    is_active: true,
                  })
                }
                className="px-4 py-2 rounded-xl bg-[#00BFFF] text-black text-xs font-semibold flex items-center gap-2 hover:bg-[#38bdf8] transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Gulpit Flavour</span>
              </button>
            </div>

            {/* Flavours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gulpitItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#00BFFF]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#00BFFF] px-2 py-0.5 rounded bg-[#00BFFF]/10">
                        {item.tag || item.category}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">#{item.display_order}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-14 h-14 rounded-xl bg-black/40 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white">{item.name}</h3>
                        <p className="text-xs text-neutral-400 capitalize">{item.category} collection</p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 font-light line-clamp-2 mb-3">
                      {item.short_desc}
                    </p>

                    <div className="text-[11px] text-neutral-400 space-y-1 mb-4 pt-2 border-t border-white/5">
                      <div><strong className="text-neutral-300">Ingredients:</strong> {item.ingredients}</div>
                      <div><strong className="text-neutral-300">Pairings:</strong> {item.pairings}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                    <button
                      onClick={() => setEditingProduct(item)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-300 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SNACKYS TAB ================= */}
        {activeTab === "snackys" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-light">Snackys Vacuum Cooked Chips</h2>
                <p className="text-xs text-neutral-400">Edit gourmet cans, seasonings, net weight, or add new items.</p>
              </div>
              <button
                onClick={() =>
                  setEditingProduct({
                    id: `can-${Date.now()}`,
                    brand: "snackys",
                    name: "New Snackys Can",
                    tag: "GOURMET CRISP",
                    seasoning: "Sea Salt & Herbs",
                    short_desc: "Crispy vacuum cooked artisanal chips.",
                    image_url: "/brands/snackys/sweet_potato_chips.png",
                    ingredients: "Natural vegetable root, oil, seasonings",
                    pairings: "Cocktails, dips, and sharing boards",
                    accent_color: "#f97316",
                    net_vol: "120g Can",
                    display_order: snackysItems.length + 1,
                    is_active: true,
                  })
                }
                className="px-4 py-2 rounded-xl bg-[#00BFFF] text-black text-xs font-semibold flex items-center gap-2 hover:bg-[#38bdf8] transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Snackys Can</span>
              </button>
            </div>

            {/* Snackys Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {snackysItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#00BFFF]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#00BFFF] px-2 py-0.5 rounded bg-[#00BFFF]/10">
                        {item.tag}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">{item.net_vol || "Can"}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-14 h-14 rounded-xl bg-black/40 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white">{item.name}</h3>
                        <p className="text-xs text-[#00BFFF] font-light">{item.seasoning}</p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-300 font-light line-clamp-2 mb-3">
                      {item.short_desc}
                    </p>

                    <div className="text-[11px] text-neutral-400 space-y-1 mb-4 pt-2 border-t border-white/5">
                      <div><strong className="text-neutral-300">Ingredients:</strong> {item.ingredients}</div>
                      <div><strong className="text-neutral-300">Pairings:</strong> {item.pairings}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                    <button
                      onClick={() => setEditingProduct(item)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-300 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= CONTACT CONTENT TAB ================= */}
        {activeTab === "contact" && (
          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="text-xl font-light">Contact Information &amp; Corporate Channels</h2>
              <p className="text-xs text-neutral-400">Updates here sync across the website, contact page, WhatsApp button, and SEO schemas.</p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                  Primary Corporate Email
                </label>
                <input
                  type="email"
                  value={contactContent.contact_email || ""}
                  onChange={(e) =>
                    setContactContent({ ...contactContent, contact_email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                  Corporate Phone Line
                </label>
                <input
                  type="text"
                  value={contactContent.contact_phone || ""}
                  onChange={(e) =>
                    setContactContent({ ...contactContent, contact_phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                  WhatsApp Number (Country code + number, e.g. 919961947458)
                </label>
                <input
                  type="text"
                  value={contactContent.contact_whatsapp || ""}
                  onChange={(e) =>
                    setContactContent({ ...contactContent, contact_whatsapp: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-mono mb-2">
                  Headquarters Physical Address
                </label>
                <textarea
                  rows={3}
                  value={contactContent.contact_address || ""}
                  onChange={(e) =>
                    setContactContent({ ...contactContent, contact_address: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#00BFFF]"
                />
              </div>

              <button
                onClick={handleSaveContactContent}
                className="px-6 py-3 rounded-xl bg-[#00BFFF] text-black font-semibold text-sm flex items-center gap-2 hover:bg-[#38bdf8] transition-all cursor-pointer shadow-[0_0_20px_rgba(0,191,255,0.4)]"
              >
                <Save className="w-4 h-4" />
                <span>Save Contact Settings</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= INQUIRIES TAB ================= */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-light">Client Messages &amp; Leads</h2>
              <p className="text-xs text-neutral-400">Captured inquiries from the website contact form.</p>
            </div>

            {inquiries.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-neutral-900/40 border border-white/10 text-neutral-400">
                <p>No messages received in the database yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white">{inq.name}</span>
                        <span className="text-xs text-[#00BFFF]">{inq.email}</span>
                        {inq.phone && <span className="text-xs text-neutral-400">({inq.phone})</span>}
                      </div>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {new Date(inq.created_at).toLocaleString()}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-300">
                      <strong className="text-neutral-400 font-mono uppercase text-[10px] mr-2">Division:</strong>
                      {inq.division || "General Inquiry"}
                    </div>

                    {inq.subject && (
                      <div className="text-xs font-medium text-white">
                        {inq.subject}
                      </div>
                    )}

                    <p className="text-xs text-neutral-300 bg-black/40 p-3 rounded-xl border border-white/5 whitespace-pre-wrap">
                      {inq.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= SQL SETUP SCRIPT TAB ================= */}
        {activeTab === "sql" && (
          <div className="max-w-4xl space-y-6">
            <div>
              <h2 className="text-xl font-light">Database Setup (One-Time Execution)</h2>
              <p className="text-xs text-neutral-400">
                To enable full Supabase read/write support, paste this script into your Supabase SQL Editor and click <strong>Run</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#00BFFF]">supabase_schema.sql</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`-- 1. SITE CONTENT TABLE
CREATE TABLE IF NOT EXISTS site_content (
  key TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL CHECK (brand IN ('gulpit', 'snackys')),
  name TEXT NOT NULL,
  tag TEXT,
  category TEXT,
  seasoning TEXT,
  short_desc TEXT,
  image_url TEXT NOT NULL,
  ingredients TEXT,
  pairings TEXT,
  accent_color TEXT DEFAULT '#00BFFF',
  net_vol TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  division TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin write site_content" ON site_content FOR ALL USING (true);
CREATE POLICY "Admin write products" ON products FOR ALL USING (true);
CREATE POLICY "Admin manage inquiries" ON inquiries FOR ALL USING (true);`);
                    alert("SQL script copied to clipboard!");
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white"
                >
                  Copy SQL Script
                </button>
              </div>

              <ol className="text-xs text-neutral-300 space-y-2 list-decimal list-inside leading-relaxed">
                <li>Open your Supabase project: <a href="https://supabase.com/dashboard/project/preqldcywrmtqodvmgpj/sql" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] underline">SQL Editor Link</a>.</li>
                <li>Click <strong>+ New query</strong>.</li>
                <li>Paste the script and click <strong>Run</strong>.</li>
                <li>Now you can create, update, and delete products live from this CMS!</li>
              </ol>
            </div>
          </div>
        )}

        {/* ================= EDIT PRODUCT MODAL ================= */}
        {editingProduct && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-white/20 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-lg font-light text-white">
                  Edit {editingProduct.brand === "gulpit" ? "Gulpit Flavour" : "Snackys Can"}
                </h3>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-neutral-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Item ID</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.id}
                      onChange={(e) => setEditingProduct({ ...editingProduct, id: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Tag / Eyebrow</label>
                    <input
                      type="text"
                      value={editingProduct.tag || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, tag: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>

                  {editingProduct.brand === "gulpit" ? (
                    <div>
                      <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Category</label>
                      <select
                        value={editingProduct.category || "savoury"}
                        onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                      >
                        <option value="savoury">Savoury Chutney / Relish</option>
                        <option value="fruit">Fruit Spread / Jam</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Seasoning</label>
                      <input
                        type="text"
                        value={editingProduct.seasoning || ""}
                        onChange={(e) => setEditingProduct({ ...editingProduct, seasoning: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Image URL or Local Path</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.image_url}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image_url: e.target.value })}
                    placeholder="/brands/gulpit/... or https://..."
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={editingProduct.short_desc || ""}
                    onChange={(e) => setEditingProduct({ ...editingProduct, short_desc: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Ingredients</label>
                    <input
                      type="text"
                      value={editingProduct.ingredients || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, ingredients: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Best Pairings</label>
                    <input
                      type="text"
                      value={editingProduct.pairings || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, pairings: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Accent Color Hex</label>
                    <input
                      type="text"
                      value={editingProduct.accent_color || "#00BFFF"}
                      onChange={(e) => setEditingProduct({ ...editingProduct, accent_color: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono text-neutral-400 mb-1">Display Order</label>
                    <input
                      type="number"
                      value={editingProduct.display_order || 1}
                      onChange={(e) => setEditingProduct({ ...editingProduct, display_order: parseInt(e.target.value) || 1 })}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 rounded-xl border border-white/20 text-xs text-neutral-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-[#00BFFF] text-black text-xs font-semibold hover:bg-[#38bdf8]"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
