import type { Metadata } from "next";
import "./globals.css";
import GoogleTranslator from "@/components/i18n/GoogleTranslator";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "AVINYATES INDIA | Inspiring Innovation",
  description: "Global conglomerate inspiring innovation across industries. Experience the multilingual brand reveal.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black text-[#f4f4f6]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Cinzel:wght@600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&family=Noto+Serif+Bengali:wght@400;600;700&family=Noto+Serif+Tamil:wght@400;600;700&family=Noto+Serif+Telugu:wght@400;600;700&family=Noto+Serif+Malayalam:wght@400;600;700&family=Noto+Serif+Kannada:wght@400;600;700&family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+JP:wght@400;600;700&family=Noto+Serif+KR:wght@400;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Amiri:wght@400;700&display=swap"
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
