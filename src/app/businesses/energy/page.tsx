import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import EnergyClientPage from "./EnergyClientPage";

export const metadata: Metadata = {
  title: "Energy Division | Hydrogen, Thorium SMR & Nuclear Fuel Cells",
  description:
    "Avinyates Energy division pioneers next-generation clean energy solutions: Green Hydrogen production, Thorium-based Small Modular Reactors (SMRs), and Nuclear Fuel Cells.",
  alternates: {
    canonical: `${SITE_URL}/businesses/energy`,
  },
  openGraph: {
    title: "Avinyates Energy | Hydrogen & Thorium SMR • Nuclear Fuel Cells",
    description:
      "Future-defining clean energy architectures designed to power mankind's next era of sustainable growth.",
    url: `${SITE_URL}/businesses/energy`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brand_logo_full.png",
        width: 1200,
        height: 630,
        alt: "Avinyates Energy Division",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinyates Energy Division | Next-Gen Clean Energy",
    description: "Hydrogen, Thorium SMRs, and Nuclear Fuel Cells.",
    images: ["/brand_logo_full.png"],
  },
};

export default function EnergyPage() {
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
        name: "Energy",
        item: `${SITE_URL}/businesses/energy`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Avinyates Energy's core research pillars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avinyates Energy focuses on three breakthrough pillars: 1) Next-generation Green Hydrogen production and industrial decarbonization, 2) Thorium-based Small Modular Reactors (SMRs) for safe, continuous clean power, and 3) Nuclear Fuel Cells for ultra-reliable compact energy architectures.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EnergyClientPage />
    </>
  );
}

