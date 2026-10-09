import type { Metadata } from "next";

export const SITE_URL = "https://www.beonline.club";

// Per-page metadata with a canonical URL and matching Open Graph/Twitter tags.
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: `${SITE_URL}${path}`, title, description, siteName: "BeOnline.club" },
    twitter: { card: "summary_large_image", title, description },
  };
}
