import { Check } from "lucide-react";
import { included, plans, waLink } from "@/lib/express";
import { MoreLink, SectionHeading } from "./ui";

export default function Pricing({ moreHref }: { moreHref?: string }) {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Simple pricing"
          title="From a 5-person shop to a 500-person factory."
          sub="Software worth ₹10 thousand to ₹10 crore. A small one-time setup fee, then a monthly fee you can cancel anytime."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-6 sm:p-7 ${
                p.highlight ? "bg-ex-ink text-white shadow-[0_8px_0_#F8CB46]" : "border border-ex-line bg-white text-ex-ink"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold text-ex-ink">
                  Most popular
                </span>
              )}
              <div className="font-grotesk text-2xl font-bold">{p.name}</div>
              <div className={`text-sm ${p.highlight ? "text-white/70" : "text-ex-muted"}`}>{p.tag}</div>
              <div className="mt-6 font-grotesk text-4xl font-bold">{p.setup}</div>
              <div className={`text-sm ${p.highlight ? "text-white/70" : "text-ex-muted"}`}>one-time, then {p.monthly}</div>
              <div
                className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${
                  p.highlight ? "bg-ex-green text-white" : "bg-ex-green-soft text-ex-green"
                }`}
              >
                ⚡ {p.live}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <Check size={18} className={p.highlight ? "text-ex-yellow" : "text-ex-green"} strokeWidth={3} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi BeOnline! I'm interested in the ${p.name} plan. Can I get a free demo?`)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={`plan-${p.name}`}
                className={`mt-8 rounded-2xl py-3.5 text-center font-grotesk font-bold transition-transform hover:-translate-y-0.5 ${
                  p.highlight ? "bg-ex-yellow text-ex-ink" : "bg-ex-ink text-white"
                }`}
              >
                Start with a free demo
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-ex-line bg-white p-6">
          <div className="mb-4 font-grotesk font-bold text-ex-ink">Included in every plan. No surprises.</div>
          <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-6">
            {included.map((i) => (
              <li key={i} className="flex items-center gap-2 text-ex-ink">
                <Check size={16} className="text-ex-green" strokeWidth={3} /> {i}
              </li>
            ))}
          </ul>
        </div>
        {moreHref && <MoreLink href={moreHref} label="Full pricing details" />}
      </div>
    </section>
  );
}
