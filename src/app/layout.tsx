import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleTranslator from "@/components/i18n/GoogleTranslator";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/jsonld";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AVINYATES INDIA | Inspiring Innovation",
    template: "%s | AVINYATES INDIA",
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: "Avinyates India", url: SITE_URL }],
  generator: "Next.js",
  keywords: SITE_CONFIG.keywords,
  referrer: "origin-when-cross-origin",
  creator: "Avinyates India Private Limited",
  publisher: "Avinyates India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": `${SITE_URL}?lang=en`,
      "hi": `${SITE_URL}?lang=hi`,
      "ar": `${SITE_URL}?lang=ar`,
      "ml": `${SITE_URL}?lang=ml`,
      "ta": `${SITE_URL}?lang=ta`,
      "te": `${SITE_URL}?lang=te`,
      "kn": `${SITE_URL}?lang=kn`,
      "mr": `${SITE_URL}?lang=mr`,
      "zh-CN": `${SITE_URL}?lang=zh-CN`,
      "fr": `${SITE_URL}?lang=fr`,
      "es": `${SITE_URL}?lang=es`,
      "ja": `${SITE_URL}?lang=ja`,
      "ko": `${SITE_URL}?lang=ko`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "ar_SA", "ml_IN", "ta_IN", "te_IN", "kn_IN", "mr_IN", "zh_CN", "fr_FR", "es_ES", "ja_JP", "ko_KR"],
    url: SITE_URL,
    title: "AVINYATES INDIA | Inspiring Innovation",
    description: SITE_CONFIG.description,
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
  twitter: {
    card: "summary_large_image",
    title: "AVINYATES INDIA | Inspiring Innovation",
    description: SITE_CONFIG.description,
    images: ["/brand_logo_full.png"],
    creator: "@avinyates",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Allows easy placement via env or default verification meta tag
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="dark bg-black text-[#f4f4f6]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Cinzel:wght@600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&family=Noto+Serif+Bengali:wght@400;600;700&family=Noto+Serif+Tamil:wght@400;600;700&family=Noto+Serif+Telugu:wght@400;600;700&family=Noto+Serif+Malayalam:wght@400;600;700&family=Noto+Serif+Kannada:wght@400;600;700&family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+JP:wght@400;600;700&family=Noto+Serif+KR:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Amiri:wght@400;700&display=swap"
        />
        {/* Organization JSON-LD Schema for Google Knowledge Graph, Perplexity & AI engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* WebSite JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-cyan-500/30 selection:text-white overflow-x-hidden m-0 p-0">
        <GoogleTranslator />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
