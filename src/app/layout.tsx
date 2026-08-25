import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
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
  title: "BeOnline.club — Full-Stack Software Studio for Startups",
  description:
    "Full-stack engineering for startups — web & mobile apps, AI automation, cloud infrastructure, and design. One team. No agency juggling. Ship fast.",
  keywords: [
    "full stack development agency for startups",
    "MVP development company",
    "startup app development",
    "web app development company India",
    "AI automation for startups",
    "SaaS development company",
    "hire full stack developers",
    "software development studio",
  ],
  metadataBase: new URL("https://www.beonline.club"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.beonline.club/",
    title: "BeOnline.club — Full-Stack Software Studio for Startups",
    description:
      "One team. Full stack. No agency juggling. We design, build, and launch your startup's product — from idea to live, in weeks.",
    siteName: "BeOnline.club",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BeOnline.club — Full-Stack Software Studio for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeOnline.club — Full-Stack Software Studio for Startups",
    description:
      "One team. Full stack. No agency juggling. We design, build, and launch your startup's product — from idea to live, in weeks.",
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
              logo: "https://invite.theweddingmanual.com/favicon.ico",
              description:
                "Full-stack software studio for startups — web & mobile apps, AI automation, cloud infrastructure, and design.",
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
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
