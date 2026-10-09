import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import SevenDayTracker from "@/components/express/SevenDayTracker";
import Configurator from "@/components/express/Configurator";
import CaseStudy from "@/components/express/CaseStudy";
import Trust from "@/components/express/Trust";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";
import { PageHero, SectionHeading, WhatsAppButton } from "@/components/express/ui";
import { faqs, inr, kitBySlug, kits, modules } from "@/lib/express";
import { SITE_URL, pageMeta } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return kits.filter((k) => k.slug).map((k) => ({ slug: k.slug! }));
}

export function generateMetadata({ params }: Props) {
  const kit = kitBySlug(params.slug);
  if (!kit) return {};
  return pageMeta(
    `/software/${kit.slug}`,
    `${kit.seoTitle} — Live in 7 Days, from ${inr(kit.from)}`,
    `${kit.blurb} Custom-built for your business by BeOnline, with hosting, backups and support included.`
  );
}

export default function KitPage({ params }: Props) {
  const kit = kitBySlug(params.slug);
  if (!kit) notFound();

  const kitModules = modules.filter((m) => kit.modules?.includes(m.id));
  const message = `Hi BeOnline! I'm interested in ${kit.seoTitle}. Can I get a free demo? I'll share my Excel sheets here.`;
  const others = kits.filter((k) => k.slug && k.slug !== kit.slug);

  return (
    <>
      <PageHero
        kicker={`For ${kit.name.toLowerCase()}`}
        title={
          <>
            {kit.seoTitle}, <span className="text-ex-green">live in 7 days.</span>
          </>
        }
        sub={kit.blurb!}
      >
        <WhatsAppButton label="Get a free demo" message={message} />
        <span className="font-semibold text-ex-muted">
          from <strong className="font-grotesk text-xl text-ex-ink">{inr(kit.from)}</strong>
        </span>
      </PageHero>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="What you get" title="Everything you need, ready on Day 7." />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-3xl bg-ex-yellow-soft p-6 sm:p-8">
              <div className="text-5xl" aria-hidden>{kit.emoji}</div>
              <ul className="mt-6 space-y-3">
                {kit.items.map((it) => (
                  <li key={it} className="flex gap-3 font-semibold text-ex-ink">
                    <Check size={20} className="mt-0.5 shrink-0 text-ex-green" strokeWidth={3} /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {kitModules.map((m) => (
                <li key={m.id} className="rounded-2xl border border-ex-line bg-white p-5">
                  <h3 className="font-grotesk font-bold text-ex-ink">{m.name}</h3>
                  <p className="mt-1 text-sm text-ex-muted">{m.hint}</p>
                </li>
              ))}
              <li className="rounded-2xl border border-dashed border-ex-ink/30 p-5">
                <h3 className="font-grotesk font-bold text-ex-ink">+ Anything unique to you</h3>
                <p className="mt-1 text-sm text-ex-muted">Your own process, reports or rules, built in.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SevenDayTracker moreHref="/how-it-works" />
      {kit.slug === "garment-manufacturing-software" && <CaseStudy />}
      <Configurator initial={kit.modules} title={`Price your ${kit.name.toLowerCase()} software`} />
      <Trust />

      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 font-grotesk text-xl font-bold text-ex-ink">Software for other industries</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((k) => (
              <li key={k.slug}>
                <Link href={`/software/${k.slug}`} className="inline-block rounded-full border border-ex-line bg-white px-4 py-2 text-sm font-semibold text-ex-ink hover:border-ex-ink">
                  {k.emoji} {k.seoTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={faqs.slice(0, 5)} />
      <FinalCTA lead="Send your Excel today." highlight="See your software" tail="in 48 hours." message={message} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: kit.seoTitle,
            description: kit.blurb,
            url: `${SITE_URL}/software/${kit.slug}`,
            areaServed: "IN",
            provider: { "@type": "Organization", name: "BeOnline.club", url: SITE_URL },
            offers: { "@type": "Offer", price: kit.from, priceCurrency: "INR" },
          }),
        }}
      />
    </>
  );
}
