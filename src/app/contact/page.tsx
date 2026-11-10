import type { Metadata } from "next";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact Us | Avinyates India",
  description:
    "Get in touch with Avinyates India. Connect with our executive leadership, FMCG distribution teams (Gulpit & Snackys), Aerospace & Defence divisions, or Clean Energy researchers.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Avinyates India - Inspiring Innovation",
    description:
      "Partner with Avinyates India. Direct corporate contact channels for FMCG, Aerospace & Defence, and Clean Energy ventures.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/brand_logo_full.png",
        width: 1200,
        height: 630,
        alt: "Contact Avinyates India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Avinyates India",
    description: "Get in touch with Avinyates India executive leadership and business divisions.",
    images: ["/brand_logo_full.png"],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Avinyates India Corporate Contact",
    url: `${SITE_URL}/contact`,
    description:
      "Official corporate contact portal for Avinyates India Private Limited and its operating divisions.",
    mainEntity: {
      "@type": "Organization",
      name: "Avinyates India Private Limited",
      url: SITE_URL,
      email: SITE_CONFIG.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Corporate Inquiries",
          email: SITE_CONFIG.email,
          availableLanguage: [
            "English", "Hindi", "Malayalam", "Tamil", "Telugu", "Kannada", "Marathi"
          ],
        },
      ],
    },
  };

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
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClientPage />
    </>
  );
}

