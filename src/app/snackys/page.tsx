import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import SnackysClientPage from "./SnackysClientPage";

export const metadata: Metadata = {
  title: "Snackys | Vacuum Cooked Real Fruit & Root Chips",
  description:
    "Discover Snackys by Avinyates India. Gourmet chips vacuum cooked at low temperature with up to 70% less oil absorption, zero added sugar, and unbeatable crunch.",
  alternates: {
    canonical: `${SITE_URL}/snackys`,
  },
  openGraph: {
    title: "Snackys | Crafted by Nature. Crisped by Science.",
    description:
      "Gourmet fruit and root chips cooked under gentle vacuum pressure for maximum crispness, vibrant natural color, and less oil.",
    url: `${SITE_URL}/snackys`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brands/snackys/sweet_potato_chips.png",
        width: 800,
        height: 800,
        alt: "Snackys Vacuum Cooked Chips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snackys by Avinyates | Pure at Heart, Crisped to Perfection",
    description:
      "Up to 70% less oil, zero added sugar, vacuum cooked artisanal fruit and root chips.",
    images: ["/brands/snackys/sweet_potato_chips.png"],
  },
};

export default function SnackysPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Snackys Gourmet Vacuum Cooked Chips",
    image: `${SITE_URL}/brands/snackys/sweet_potato_chips.png`,
    description:
      "Artisanal vacuum-cooked root and fruit chips with up to 70% less oil absorption, crafted by Avinyates India.",
    brand: {
      "@type": "Brand",
      name: "Snackys",
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
      offerCount: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are Snackys chips prepared?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snackys chips are cooked using low-temperature vacuum technology, which removes moisture while absorbing up to 70% less oil compared to traditional deep frying, preserving natural colors, vital nutrients, and incredible crunch.",
        },
      },
      {
        "@type": "Question",
        name: "Do Snackys chips contain added sugar or palm oil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Snackys chips have zero added sugar, no artificial preservatives, and are seasoned exclusively with natural Himalayan salts and botanical spices.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnackysClientPage />
    </>
  );
}
