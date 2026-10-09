import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "BeOnline.club — Custom Business Software in 7 Days, from ₹9,999",
    template: "%s | BeOnline.club",
  },
  description:
    "Still running your business on Excel? Get your own custom software — orders, stock, billing, staff — live in 7 days, from ₹9,999. We do everything.",
  keywords: [
    "custom software for small business India",
    "Excel to software",
    "billing and inventory software for manufacturers",
    "garment manufacturing software",
    "affordable software development company India",
    "business software in 7 days",
    "MSME software",
    "MVP development in 7 days",
  ],
  metadataBase: new URL("https://www.beonline.club"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.beonline.club/",
    title: "BeOnline.club — Custom Business Software in 7 Days, from ₹9,999",
    description:
      "Send us your Excel on WhatsApp. Get a free demo in 48 hours and your own software live in 7 days — from ₹9,999.",
    siteName: "BeOnline.club",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeOnline.club — Custom Business Software in 7 Days, from ₹9,999",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeOnline.club — Custom Business Software in 7 Days, from ₹9,999",
    description:
      "Send us your Excel on WhatsApp. Get a free demo in 48 hours and your own software live in 7 days — from ₹9,999.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BeOnline.club",
              url: "https://www.beonline.club",
              logo: "https://www.beonline.club/favicon.ico",
              description:
                "Affordable custom business software for Indian MSMEs and startups — live in 7 days, from ₹9,999.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@beonline.club",
                contactType: "customer support",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.instagram.com/beonline.club/",
                "https://www.linkedin.com/in/beonline-club-5a617640b/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
