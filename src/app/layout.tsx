import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/express/JsonLd";
import { EMAIL, WA_NUMBER } from "@/lib/express";
import { DEFAULT_OG_IMAGE, ORG_ID, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BeOnline.club — Custom Business Software in 7 Days, from ₹49,999",
    template: "%s | BeOnline.club",
  },
  description:
    "Still running your business on Excel? Get your own custom software — orders, stock, billing, staff — live in 7 days, from ₹49,999. We do everything.",
  keywords: [
    "custom software for small business India",
    "Excel to software",
    "billing and inventory software for manufacturers",
    "garment manufacturing software",
    "affordable software development company India",
    "business software in 7 days",
    "MSME software",
    "MVP development in 7 days",
    "inventory software for amazon flipkart meesho sellers",
  ],
  metadataBase: new URL("https://www.beonline.club"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.beonline.club/",
    title: "BeOnline.club — Custom Business Software in 7 Days, from ₹49,999",
    description:
      "Send us your Excel on WhatsApp. Get a free demo in 48 hours and your own software live in 7 days — from ₹49,999.",
    siteName: "BeOnline.club",
    locale: "en_IN",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeOnline.club — Custom Business Software in 7 Days, from ₹49,999",
    description:
      "Send us your Excel on WhatsApp. Get a free demo in 48 hours and your own software live in 7 days — from ₹49,999.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": ORG_ID,
              name: "BeOnline.club",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description:
                "Affordable custom business software for Indian MSMEs, marketplace sellers and startups, live in 7 days, from ₹49,999.",
              email: EMAIL,
              telephone: `+${WA_NUMBER}`,
              areaServed: { "@type": "Country", name: "India" },
              contactPoint: {
                "@type": "ContactPoint",
                email: EMAIL,
                telephone: `+${WA_NUMBER}`,
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: ["https://www.instagram.com/beonline.club/", "https://www.linkedin.com/in/beonline-club-5a617640b/"],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "BeOnline.club",
              url: SITE_URL,
              inLanguage: "en-IN",
              publisher: { "@id": ORG_ID },
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
