import type { Metadata } from "next";

export const SITE_URL = "https://www.beonline.club";

// Link preview images live in public/og/ (1200×630). Pages use the home image unless they pass their own.
export const DEFAULT_OG_IMAGE = {
  url: "/og/home.jpg",
  width: 1200,
  height: 630,
  alt: "BeOnline.club: your business has outgrown Excel. Custom software for Indian businesses, live in 7 days, from ₹49,999.",
};

type OgImage = typeof DEFAULT_OG_IMAGE;

// Per-page metadata. Keep titles under ~45 characters: the " | BeOnline.club" suffix is added,
// and Google cuts titles at about 60. Keep descriptions under ~155 characters. with a canonical URL and matching Open Graph/Twitter tags.
export function pageMeta(path: string, title: string, description: string, image: OgImage = DEFAULT_OG_IMAGE): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: `${SITE_URL}${path}`, title, description, siteName: "BeOnline.club", locale: "en_IN", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
export const ORG_ID = `${SITE_URL}/#organization`;

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(o: { path: string; name: string; serviceType: string; description: string; audience?: string; priceFrom?: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: o.name,
    serviceType: o.serviceType,
    description: o.description,
    url: `${SITE_URL}${o.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    ...(o.audience && { audience: { "@type": "BusinessAudience", name: o.audience } }),
    ...(o.priceFrom && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: o.priceFrom,
        priceSpecification: { "@type": "PriceSpecification", minPrice: o.priceFrom, priceCurrency: "INR" },
      },
    }),
  };
}
