import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import FMCGClientPage from "./FMCGClientPage";

export const metadata: Metadata = {
  title: "FMCG Division | Pure, Natural & Clean Food Revolution",
  description:
    "Avinyates FMCG division pioneers clean-label food revolutions with breakthrough brands Gulpit and Snackys — 100% free from harmful chemicals and artificial preservatives.",
  alternates: {
    canonical: `${SITE_URL}/businesses/fmcg`,
  },
  openGraph: {
    title: "Avinyates FMCG | Clean Food Revolution",
    description:
      "Transforming everyday nutrition through real fruit spreads, savoury dips, and gourmet vacuum-cooked chips.",
    url: `${SITE_URL}/businesses/fmcg`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brands/gulpit/tropical_pina_colada.png",
        width: 800,
        height: 800,
        alt: "Avinyates FMCG Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinyates FMCG Division | Clean Food Revolution",
    description: "Pure, natural, and uncompromising nutrition through Gulpit & Snackys.",
    images: ["/brands/gulpit/tropical_pina_colada.png"],
  },
};

export default function FMCGPage() {
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
        name: "FMCG",
        item: `${SITE_URL}/businesses/fmcg`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FMCGClientPage />
    </>
  );
}
