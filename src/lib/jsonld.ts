import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.alternateName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: 512,
      height: 512,
    },
    image: SITE_CONFIG.ogImage,
    description: SITE_CONFIG.description,
    slogan: SITE_CONFIG.tagline,
    email: SITE_CONFIG.email,
    sameAs: SITE_CONFIG.sameAs,
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    knowsAbout: [
      "FMCG",
      "Clean Nutrition",
      "Fruit Spreads",
      "Vacuum Cooked Snack Chips",
      "Aerospace Engineering",
      "Defence Autonomous Systems",
      "Clean Energy",
      "Hydrogen Technology",
      "Thorium Small Modular Reactors",
      "Nuclear Fuel Cells",
    ],
    department: [
      {
        "@type": "Organization",
        name: "Avinyates FMCG",
        description: "Pure, natural, zero-preservative food brands including Gulpit and Snackys.",
        url: `${SITE_URL}/businesses/fmcg`,
      },
      {
        "@type": "Organization",
        name: "Avinyates Aerospace & Defence",
        description: "Autonomous unmanned systems, advanced propulsion, and precision defence avionics.",
        url: `${SITE_URL}/businesses/aerospace-defence`,
      },
      {
        "@type": "Organization",
        name: "Avinyates Energy",
        description: "Next-generation green hydrogen, thorium SMRs, and nuclear fuel cells.",
        url: `${SITE_URL}/businesses/energy`,
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: [
      "en", "hi", "ar", "ml", "ta", "te", "kn", "mr", "zh-CN", "fr", "es", "ja", "ko"
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// AEO / FAQ Schema (Crucial for Google Knowledge Panels, ChatGPT, Perplexity, Gemini)
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

