import { CalendarClock, Check, Lock, RefreshCw, ShieldCheck, Timer, X, Zap } from "lucide-react";
import CaseStudy from "@/components/express/CaseStudy";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";
import LossCalculator from "@/components/express/LossCalculator";
import SellerDashboardMock from "@/components/express/SellerDashboardMock";
import { Highlight, SectionHeading, WhatsAppButton } from "@/components/express/ui";
import {
  FOUNDING_SPOTS_LEFT,
  FOUNDING_SPOTS_TOTAL,
  WA_CHECKLIST_MSG,
  WA_SELLER_MSG,
  channels,
  nineAm,
  sellerComparison,
  sellerFaqs,
  sellerModules,
  sellerPains,
  sellerPlans,
  sellerSteps,
  sellerTrust,
} from "@/lib/ecommerce";
import { sellerCase } from "@/lib/caseStudies";
import { waLink } from "@/lib/express";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/ecommerce-sellers",
  "Inventory & Order Software for Amazon, Flipkart, Myntra & Meesho Sellers",
  "One live stock count across every marketplace, a dispatch SLA board, returns and payment reconciliation. Custom-built around your team, live in 7 days. Free demo with your own SKUs."
);

export default function EcommerceSellersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-ex-yellow/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0 text-center lg:text-left">
            <span className="mb-5 inline-block rounded-full bg-ex-yellow-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
              BeOnline for marketplace sellers
            </span>
            <h1 className="font-grotesk font-bold leading-[1.05] tracking-tight text-ex-ink text-[clamp(2.1rem,5.5vw,3.75rem)]">
              Selling on Amazon, Flipkart, Myntra &amp; Meesho? Stop running it on <Highlight>Excel.</Highlight>
            </h1>
            <p className="mt-5 text-lg text-ex-muted sm:text-xl">
              One live stock count across every marketplace, dispatch deadlines you never miss, and returns and payouts that finally
              reconcile. Built around your team, live in 7 days.
            </p>
            <p className="mt-3 font-grotesk font-bold text-ex-green">Sale ke time pe stock ka tension khatam.</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <WhatsAppButton label="WhatsApp your stock sheet" message={WA_SELLER_MSG} />
              <a href="#calculator" className="font-grotesk font-bold text-ex-ink underline-offset-4 hover:underline">
                See what you&apos;re losing →
              </a>
            </div>
            <p className="mt-3 text-sm text-ex-muted">Free demo with your own SKUs in 48 hours. No obligation.</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2 text-sm font-semibold lg:justify-start">
              {[
                { icon: Zap, t: "Live in 7 days" },
                { icon: RefreshCw, t: "All channels, one stock" },
                { icon: Timer, t: "No missed SLAs" },
                { icon: Lock, t: "Your data stays yours" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 ring-1 ring-ex-line">
                  <Icon size={15} className="text-ex-green" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <SellerDashboardMock />
        </div>
        <p className="relative mx-auto mt-12 max-w-6xl px-4 text-center text-sm text-ex-muted sm:px-6">
          Works with order, return and settlement reports from{" "}
          <span className="font-semibold text-ex-ink">{channels.join(" · ")}</span>
        </p>
      </section>

      {/* Pains */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="Sound familiar?"
            title="Every one of these costs you money, and Excel can't stop any of them."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sellerPains.map((p) => (
              <div key={p.title} className="rounded-2xl border border-ex-line bg-white p-6">
                <div className="text-3xl" aria-hidden>{p.emoji}</div>
                <h3 className="mt-3 font-grotesk text-lg font-bold text-ex-ink">{p.title}</h3>
                <p className="mt-2 text-ex-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LossCalculator />

      {/* What you get */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="What you get"
            title="Everything your team does in sheets, in one system."
            sub="Pick what you need now. Add the rest later, in weekly updates."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sellerModules.map((m, i) => (
              <div key={m.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_0_#111] ring-1 ring-ex-line">
                <span className="font-mono text-sm font-bold text-ex-green">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-grotesk text-xl font-bold text-ex-ink">{m.title}</h3>
                <p className="mt-2 text-ex-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after 9 AM */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="Before → After" title="Your 9 AM, with and without BeOnline." />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
              <h3 className="font-grotesk text-xl font-bold text-red-700">With Excel</h3>
              <ul className="mt-5 space-y-3">
                {nineAm.before.map((t) => (
                  <li key={t} className="flex gap-3 text-ex-ink">
                    <X size={20} className="mt-0.5 shrink-0 text-red-600" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-ex-green/30 bg-ex-green-soft p-6 sm:p-8">
              <h3 className="font-grotesk text-xl font-bold text-ex-green">With BeOnline</h3>
              <ul className="mt-5 space-y-3">
                {nineAm.after.map((t) => (
                  <li key={t} className="flex gap-3 font-semibold text-ex-ink">
                    <Check size={20} className="mt-0.5 shrink-0 text-ex-green" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Festive sale readiness */}
      <section className="bg-ex-ink py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
              <CalendarClock size={14} /> Festive sale readiness
            </span>
            <h2 className="font-grotesk font-bold leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">
              Big sale coming? <span className="text-ex-yellow">Go live before it.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              Sale week is when Excel breaks. Start at least 3 weeks before the next big sale: 7 days to go live, then two weeks for your
              team to get comfortable before the orders rush in.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/15">
            <h3 className="font-grotesk text-xl font-bold">Free Festive Sale Readiness Checklist</h3>
            <p className="mt-2 text-white/70">
              Stock, SKU, dispatch and returns checks to run before any big sale. We&apos;ll send it on WhatsApp.
            </p>
            <WhatsAppButton label="Send me the checklist" message={WA_CHECKLIST_MSG} size="md" className="mt-5 w-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading kicker="How it works" title="Stock sheet on Monday. Your own system by next Monday." />
          <ol className="relative space-y-6 border-l-4 border-ex-yellow pl-8">
            {sellerSteps.map((s, i) => (
              <li key={s.day} className="relative">
                <span className="absolute -left-[50px] grid h-9 w-9 place-items-center rounded-full bg-ex-ink text-sm font-bold text-white ring-4 ring-ex-bg">
                  {i + 1}
                </span>
                <div className="text-xs font-bold uppercase tracking-wider text-ex-green">{s.day}</div>
                <h3 className="mt-1 font-grotesk text-xl font-bold text-ex-ink">{s.title}</h3>
                <p className="mt-1 text-ex-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-ex-yellow-soft py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="Honest comparison"
            title="Not another rigid tool. Your own system."
            sub="Big multichannel tools are great if your business fits them. If it doesn't, you end up back on Excel. We build around how you already work."
          />
          <div className="overflow-x-auto rounded-3xl bg-white ring-1 ring-ex-line">
            <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-ex-line">
                  <th className="px-4 py-4 sm:px-6" />
                  {sellerComparison.cols.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`px-4 py-4 font-grotesk font-bold sm:px-6 ${i === 2 ? "bg-ex-ink text-ex-yellow" : "text-ex-ink"}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sellerComparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-ex-line last:border-b-0">
                    <th scope="row" className="px-4 py-4 font-semibold text-ex-ink sm:px-6">{r.label}</th>
                    {r.values.map((val, i) => (
                      <td key={i} className={`px-4 py-4 sm:px-6 ${i === 2 ? "bg-ex-green-soft font-bold text-ex-ink" : "text-ex-muted"}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust + founding sellers */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="Safe by design" title="Your seller account is your business. We treat it that way." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sellerTrust.map((t) => (
              <div key={t.title} className="rounded-2xl border border-ex-line bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ex-green-soft text-ex-green">
                  <ShieldCheck size={22} strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-grotesk text-lg font-bold text-ex-ink">{t.title}</h3>
                <p className="mt-2 text-ex-muted">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 rounded-3xl bg-ex-yellow p-6 text-center sm:p-10 md:flex-row md:text-left">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-ex-ink/70">Founding Seller Program</div>
              <h3 className="mt-2 font-grotesk text-2xl font-bold text-ex-ink sm:text-3xl">
                {FOUNDING_SPOTS_LEFT} of {FOUNDING_SPOTS_TOTAL} spots left
              </h3>
              <p className="mt-2 max-w-2xl text-ex-ink/80">
                We&apos;re taking on our first {FOUNDING_SPOTS_TOTAL} marketplace sellers at a founding price. In return, you share honest
                feedback and let us publish your before-and-after results.
              </p>
              {!sellerCase && (
                <p className="mt-2 max-w-2xl text-sm font-semibold text-ex-ink">
                  Our first seller case study, with real numbers, will be published right here.
                </p>
              )}
            </div>
            <a
              href={waLink("Hi BeOnline! I'd like to apply for the Founding Seller Program. I sell on __, around __ orders a day.")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="seller-founding"
              className="shrink-0 rounded-2xl bg-ex-ink px-6 py-4 font-grotesk font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Apply for a spot
            </a>
          </div>
        </div>
      </section>

      {sellerCase && <CaseStudy study={sellerCase} />}

      {/* Pricing */}
      <section id="pricing" className="bg-ex-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
              Pricing
            </span>
            <h2 className="font-grotesk font-bold leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">Priced by your order volume. Not per user.</h2>
            <p className="mt-4 text-white/70">Hosting, backups, support and weekly updates are included in the monthly fee.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {sellerPlans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-7 ${p.highlight ? "bg-ex-yellow text-ex-ink" : "border border-white/15 bg-white/5"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-ex-green px-3 py-1 text-xs font-bold text-white">Most popular</span>
                )}
                <div className="text-sm font-semibold opacity-70">{p.tag}</div>
                <div className="mt-1 font-grotesk text-2xl font-bold">{p.name}</div>
                <div className="mt-5 font-grotesk text-4xl font-bold">{p.price}</div>
                <div className="mt-1 font-semibold opacity-80">{p.monthly}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <Check size={18} className={`mt-0.5 shrink-0 ${p.highlight ? "text-ex-green" : "text-ex-yellow"}`} strokeWidth={3} /> {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi BeOnline! I'm a marketplace seller interested in the ${p.name} plan. Can I get a free demo?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`seller-${p.name}`}
                  className={`mt-8 rounded-2xl py-3.5 text-center font-grotesk font-bold transition-transform hover:-translate-y-0.5 ${
                    p.highlight ? "bg-ex-ink text-white" : "bg-white text-ex-ink"
                  }`}
                >
                  Get a free demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={sellerFaqs} title="Seller questions" schema />
      <FinalCTA
        lead="Next sale,"
        highlight="no Excel."
        tail=""
        sub="Send your stock sheet and one order report on WhatsApp. See your own SKUs inside your own software in 48 hours, free."
        label="WhatsApp your stock sheet"
        message={WA_SELLER_MSG}
      />
    </>
  );
}
