import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { inr, kits, waLink } from "@/lib/express";
import { MoreLink, SectionHeading } from "./ui";

export default function SoftwareMenu({ showHeading = true, moreHref }: { showHeading?: boolean; moreHref?: string }) {
  return (
    <section id="menu" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeading && (
          <SectionHeading
            kicker="Software Menu"
            title="Pick your business. We already have the building blocks ready."
            sub="Every kit is a starting point. We shape it around exactly how you work, and that's why 7 days is possible."
          />
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kits.map((k) => (
            <div
              key={k.name}
              className="group relative flex flex-col rounded-2xl border border-ex-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-ex-ink hover:shadow-[0_6px_0_#111]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ex-yellow-soft text-2xl" aria-hidden>
                  {k.emoji}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ex-green-soft px-2 py-1 text-[11px] font-bold text-ex-green">
                  <Clock size={12} /> 7 days
                </span>
              </div>
              <h3 className="mt-4 font-grotesk text-lg font-bold leading-snug text-ex-ink">
                {k.slug ? (
                  <Link href={`/software/${k.slug}`} className="hover:underline">
                    {k.name}
                  </Link>
                ) : (
                  k.name
                )}
              </h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-sm text-ex-muted">
                {k.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-ex-green">✓</span>
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-ex-line pt-4">
                <span className="text-sm text-ex-muted">
                  from <strong className="font-grotesk text-lg text-ex-ink">{inr(k.from)}</strong>
                </span>
                <div className="mt-3 flex items-center justify-between gap-2 text-sm font-bold">
                  {k.slug ? (
                    <Link href={`/software/${k.slug}`} className="inline-flex items-center gap-1 text-ex-muted hover:text-ex-ink">
                      Details <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span />
                  )}
                  <a
                    href={waLink(`Hi BeOnline! I'm interested in the "${k.name}" software kit. Can I get a free demo?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`kit-${k.slug ?? "other"}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-ex-yellow px-3 py-1.5 text-ex-ink"
                  >
                    I want this <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {moreHref && <MoreLink href={moreHref} label="Explore every industry" />}
      </div>
    </section>
  );
}
