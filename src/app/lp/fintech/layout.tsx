import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech Engineering for NBFCs & Lending Startups | BeOnline.club",
  description:
    "We've built end-to-end loan origination, KYC, and management systems for live NBFCs. Personal loans, education loans, MSME — compliant and production-ready.",
  robots: { index: false }, // Don't index ad landing pages
};

export default function FintechLPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── META PIXEL PLACEHOLDER ───────────────────────────────────────
          Replace PIXEL_ID_HERE with your actual Meta Pixel ID
          Get it from: Meta Business Manager → Events Manager → Pixels
      ──────────────────────────────────────────────────────────────────── */}
      {/*
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID_HERE');
          fbq('track', 'PageView');
        `}
      </Script>
      */}
      {children}
    </>
  );
}
