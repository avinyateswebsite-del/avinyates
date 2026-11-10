"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/loading/LoadingScreen";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <main className={`relative min-h-screen bg-black ${showLoading ? "h-screen overflow-hidden" : "overflow-x-hidden"}`}>
      {/* Hero section is always mounted beneath so it is revealed when shutters open */}
      <HeroSection onReplayLoading={() => setShowLoading(true)} />

      {/* Loading Screen shutters layer */}
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
    </main>
  );
}
