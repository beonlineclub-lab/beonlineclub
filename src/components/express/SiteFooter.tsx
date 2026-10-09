import Link from "next/link";
import { Zap } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, kits } from "@/lib/express";

const company = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Software Menu", href: "/software" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Startups", href: "/startups" },
  { label: "Why BeOnline", href: "/why-beonline" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-ex-line bg-white pb-28 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.3fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-grotesk text-xl font-bold text-ex-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ex-yellow">
              <Zap size={18} strokeWidth={2.75} />
            </span>
            <span>
              BeOnline<span className="text-ex-green">.club</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-ex-muted">
            Affordable custom software, delivered express. From ₹49,999, live in 7 days, and with you till the end.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <a href={PHONE_LINK} className="block font-semibold text-ex-ink hover:underline">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="block text-ex-muted hover:text-ex-ink">{EMAIL}</a>
          </div>
        </div>

        <nav aria-label="Company">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-muted">BeOnline</div>
          <ul className="space-y-2 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ex-ink hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Software by industry">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-ex-muted">Software by industry</div>
          <ul className="space-y-2 text-sm">
            {kits.filter((k) => k.slug).map((k) => (
              <li key={k.slug}>
                <Link href={`/software/${k.slug}`} className="text-ex-ink hover:underline">{k.seoTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-ex-line px-4 pt-6 text-sm text-ex-muted sm:flex-row sm:px-6">
        <span>© {new Date().getFullYear()} BeOnline.club</span>
        <span className="flex gap-5">
          <a href="https://www.instagram.com/beonline.club/" target="_blank" rel="noopener noreferrer" className="hover:text-ex-ink">Instagram</a>
          <a href="https://www.linkedin.com/in/beonline-club-5a617640b/" target="_blank" rel="noopener noreferrer" className="hover:text-ex-ink">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
