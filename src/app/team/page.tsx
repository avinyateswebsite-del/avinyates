import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import TeamClientPage from "./TeamClientPage";

export const metadata: Metadata = {
  title: "Leadership & Pioneers | Avinyates India",
  description:
    "Meet the leadership, aerospace engineers, food scientists, and clean energy pioneers shaping the future of global enterprise at Avinyates India.",
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: "Leadership & Pioneers | Avinyates India",
    description:
      "A united syndicate of innovators, aerospace engineers, food scientists, and clean energy researchers forging the future of global enterprise.",
    url: `${SITE_URL}/team`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brand_logo_full.png",
        width: 1200,
        height: 630,
        alt: "Avinyates Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Pioneers | Avinyates India",
    description: "The pioneers shaping tomorrow across frontier sectors.",
    images: ["/brand_logo_full.png"],
  },
};

export default function TeamPage() {
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
        name: "Our Team",
        item: `${SITE_URL}/team`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TeamClientPage />
    </>
  );
}

