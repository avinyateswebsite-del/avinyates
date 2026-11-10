import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import GulpitClientPage from "./GulpitClientPage";

export const metadata: Metadata = {
  title: "Gulpit | 100% Cold-Pressed Fruit Spreads & Chutneys",
  description:
    "Explore Gulpit by Avinyates India. 10 bold natural flavours with cold-pressed goodness, zero preservatives, and clean label nutrition.",
  alternates: {
    canonical: `${SITE_URL}/gulpit`,
  },
  openGraph: {
    title: "Gulpit | Real Ingredients. Pure Taste. No Compromises.",
    description:
      "Cold-pressed fruit spreads, savoury chutneys, and dips crafted with real ingredients and zero artificial preservatives.",
    url: `${SITE_URL}/gulpit`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brands/gulpit/tropical_pina_colada.png",
        width: 800,
        height: 800,
        alt: "Gulpit Fruit Spreads and Dips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulpit by Avinyates | Pure Taste, No Compromises",
    description:
      "100% natural cold-pressed fruit spreads and savoury chutneys. 0 preservatives, clean label nutrition.",
    images: ["/brands/gulpit/tropical_pina_colada.png"],
  },
};

export default function GulpitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Gulpit Cold-Pressed Spreads & Chutneys",
    image: `${SITE_URL}/brands/gulpit/tropical_pina_colada.png`,
    description:
      "100% natural, clean-label cold-pressed fruit spreads and chutneys by Avinyates India.",
    brand: {
      "@type": "Brand",
      name: "Gulpit",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Avinyates India",
      url: SITE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      offerCount: "10",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Gulpit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gulpit is a clean-label food brand by Avinyates India offering 100% cold-pressed fruit spreads, chutneys, and dips made with real ingredients and zero preservatives.",
        },
      },
      {
        "@type": "Question",
        name: "Does Gulpit contain artificial preservatives or colors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gulpit adheres to a strict clean-label promise with zero artificial preservatives, zero synthetic colors, and zero artificial flavors.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GulpitClientPage />
    </>
  );
}
