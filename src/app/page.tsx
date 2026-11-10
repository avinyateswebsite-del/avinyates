import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import HomeClientPage from "./HomeClientPage";

export const metadata: Metadata = {
  title: "AVINYATES INDIA | Inspiring Innovation",
  description:
    "Avinyates India is a global conglomerate pioneering innovation across FMCG (Gulpit & Snackys), Aerospace & Defence, and Clean Energy (Hydrogen & Thorium SMRs).",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "AVINYATES INDIA | Inspiring Innovation",
    description: SITE_CONFIG.description,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brand_logo_full.png",
        width: 1200,
        height: 630,
        alt: "AVINYATES INDIA - Inspiring Innovation",
      },
    ],
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Avinyates India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avinyates India is a modern Indian global conglomerate pioneering frontier industries including clean FMCG (Gulpit, Snackys), Aerospace & Defence autonomous systems, and next-generation clean energy (Hydrogen and Thorium SMRs).",
        },
      },
      {
        "@type": "Question",
        name: "What brands belong to Avinyates India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avinyates India owns Gulpit (100% natural cold-pressed fruit spreads and chutneys) and Snackys (low-temperature vacuum-cooked root and fruit chips with up to 70% less oil), alongside frontier divisions in Aerospace and Clean Energy.",
        },
      },
      {
        "@type": "Question",
        name: "In which languages is the Avinyates website available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Avinyates website provides genuine in-house translations in 13 languages: English, Hindi, Arabic, Malayalam, Tamil, Telugu, Kannada, Marathi, Simplified Chinese, French, Spanish, Japanese, and Korean.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClientPage />
    </>
  );
}

