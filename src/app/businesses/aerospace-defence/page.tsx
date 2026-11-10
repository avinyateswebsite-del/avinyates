import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import AerospaceClientPage from "./AerospaceClientPage";

export const metadata: Metadata = {
  title: "Aerospace & Defence | Autonomous Systems & Advanced Propulsion",
  description:
    "Avinyates Aerospace & Defence engineers next-generation precision aerial platforms, autonomous UAV systems, advanced propulsion architectures, and defence avionics.",
  alternates: {
    canonical: `${SITE_URL}/businesses/aerospace-defence`,
  },
  openGraph: {
    title: "Avinyates Aerospace & Defence | Autonomous Systems & Propulsion",
    description:
      "Pioneering next-generation aerospace capabilities, unmanned aerodynamic platforms, and sovereign defence technologies.",
    url: `${SITE_URL}/businesses/aerospace-defence`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brand_logo_full.png",
        width: 1200,
        height: 630,
        alt: "Avinyates Aerospace and Defence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinyates Aerospace & Defence",
    description: "Autonomous aerial systems, precision defence, and advanced space propulsion.",
    images: ["/brand_logo_full.png"],
  },
};

export default function AerospaceDefencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Businesses",
        item: `${SITE_URL}/#businesses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Aerospace & Defence",
        item: `${SITE_URL}/businesses/aerospace-defence`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AerospaceClientPage />
    </>
  );
}
