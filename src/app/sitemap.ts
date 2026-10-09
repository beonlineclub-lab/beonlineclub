import type { MetadataRoute } from "next";
import { kits } from "@/lib/express";
import { SITE_URL } from "@/lib/seo";

// /lp/* ad landing pages are noindex, so they are intentionally left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number][] = [
    ["/", 1],
    ["/how-it-works", 0.9],
    ["/software", 0.9],
    ["/pricing", 0.9],
    ["/startups", 0.9],
    ["/why-beonline", 0.8],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority })),
    ...kits
      .filter((k) => k.slug)
      .map((k) => ({ url: `${SITE_URL}/software/${k.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
