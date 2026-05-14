import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Got a Tech Idea? We'll Build It. | BeOnline.club",
  description:
    "Stuck on where to start, who to trust, or how to ship fast? We're the tech team that turns your idea into a real product — without the jargon, delays, or agency runaround.",
  robots: { index: false },
};

export default function BuildLPLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ── META PIXEL PLACEHOLDER ───────────────────────────────────────
          1. Get Pixel ID from Meta Business Manager → Events Manager → Pixels
          2. npm install next (already installed)
          3. Uncomment below, add: import Script from "next/script" at top
          4. Replace PIXEL_ID_HERE with your actual ID
      ──────────────────────────────────────────────────────────────────── */}
      {/*
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'PIXEL_ID_HERE');
        fbq('track', 'PageView');
      `}</Script>
      */}
      {children}
    </>
  );
}
