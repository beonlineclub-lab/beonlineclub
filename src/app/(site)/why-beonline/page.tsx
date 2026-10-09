import Trust from "@/components/express/Trust";
import Comparison from "@/components/express/Comparison";
import CaseStudy from "@/components/express/CaseStudy";
import Guarantee from "@/components/express/Guarantee";
import FinalCTA from "@/components/express/FinalCTA";
import { PageHero, WhatsAppButton } from "@/components/express/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/why-beonline",
  "Why BeOnline — Affordable, Reliable Software, With You Till the End",
  "Free demo before you pay, tested building blocks, daily backups, one named contact, and support that never ends at go-live. Why Indian businesses trust BeOnline with their software."
);

export default function WhyBeOnlinePage() {
  return (
    <>
      <PageHero
        kicker="Why BeOnline"
        title="We don't disappear after go-live. We're with you till the end."
        sub="Cheap software that breaks is the most expensive kind. Here's how we make sure yours keeps working for years."
      >
        <WhatsAppButton label="Talk to us on WhatsApp" />
      </PageHero>

      <Trust showHeading={false} />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="mb-4 inline-block rounded-full bg-ex-yellow-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
            Why we exist
          </span>
          <h2 className="font-grotesk font-bold leading-[1.1] text-ex-ink text-[clamp(1.75rem,4.5vw,2.75rem)]">
            Software companies felt out of reach. So we built one that isn&apos;t.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ex-muted">
            <p>
              While building software for a ₹5–6 crore suit manufacturer who ran everything on Excel, we saw the same story again
              and again. Thousands of good, growing businesses need software, but they don&apos;t know where to go. When they ask,
              they hear numbers like ₹50 lakh or ₹1 crore, and a timeline of months.
            </p>
            <p>
              <strong className="text-ex-ink">BeOnline exists to close that gap.</strong> We keep proven building blocks ready so
              we can start at ₹9,999, go live in 7 days, and take care of everything technical for as long as you use the
              software. You run your business, and we run your software.
            </p>
          </div>
        </div>
      </section>

      <Comparison />
      <CaseStudy />
      <Guarantee />
      <FinalCTA />
    </>
  );
}
