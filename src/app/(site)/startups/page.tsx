import { Check, Code2, Eye, Rocket } from "lucide-react";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";
import { SectionHeading, WhatsAppButton } from "@/components/express/ui";
import {
  WA_STARTUP_MSG,
  startupFaqs,
  startupFor,
  startupPackages,
  startupSteps,
  startupUsps,
} from "@/lib/startups";
import { waLink } from "@/lib/express";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/startups",
  "MVP Development in 7 Days — For Startups & Founders",
  "Get a working, deployed MVP in 7 days for your investor demo or first users. Daily preview links, a fixed price per sprint, and 100% code ownership. From ₹9,999."
);

export default function StartupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ex-ink pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-ex-yellow/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-yellow">
            <Rocket size={14} /> BeOnline for Startups
          </span>
          <h1 className="font-grotesk font-bold leading-[1.02] tracking-tight text-[clamp(2.5rem,7vw,4.5rem)]">
            Your MVP, <span className="text-ex-yellow">live in 7 days.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
            A working product for your investor demo or first users. Not slides, and not a 6-month roadmap. You own every line of code.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton label="Book a free idea call" message={WA_STARTUP_MSG} />
            <a href="#packages" className="font-grotesk font-bold text-white underline-offset-4 hover:underline">
              See packages →
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-2 text-sm font-semibold">
            {[
              { icon: Rocket, t: "Deployed MVP in 7 days" },
              { icon: Eye, t: "Daily preview links" },
              { icon: Code2, t: "100% code & IP ownership" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                <Icon size={15} className="text-ex-yellow" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="Who it's for" title="Built for founders who need to move this week." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {startupFor.map((f) => (
              <div key={f.title} className="rounded-2xl border border-ex-line bg-white p-6">
                <div className="text-3xl" aria-hidden>{f.emoji}</div>
                <h3 className="mt-3 font-grotesk text-lg font-bold text-ex-ink">{f.title}</h3>
                <p className="mt-2 text-ex-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-ex-yellow-soft py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            kicker="Why founders choose BeOnline"
            title="Agency quality. Freelancer speed. Neither of their problems."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {startupUsps.map((u, i) => (
              <div key={u.title} className="rounded-2xl bg-white p-6 shadow-[0_4px_0_#111]">
                <span className="font-mono text-sm font-bold text-ex-green">0{i + 1}</span>
                <h3 className="mt-2 font-grotesk text-xl font-bold text-ex-ink">{u.title}</h3>
                <p className="mt-2 text-ex-muted">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading kicker="How it works" title="Idea on Monday. Demo-ready MVP by next Monday." />
          <ol className="relative space-y-6 border-l-4 border-ex-yellow pl-8">
            {startupSteps.map((s, i) => (
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

      {/* Packages */}
      <section id="packages" className="bg-ex-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
              Packages
            </span>
            <h2 className="font-grotesk font-bold leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">Fixed scope. Fixed price. Fast.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {startupPackages.map((p) => (
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
                <div className="mt-1 font-semibold opacity-80">⚡ {p.time}</div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <Check size={18} className={p.highlight ? "text-ex-green" : "text-ex-yellow"} strokeWidth={3} /> {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi BeOnline! I'm a founder interested in the ${p.name} (${p.price}). Can we do a quick call?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`startup-${p.name}`}
                  className={`mt-8 rounded-2xl py-3.5 text-center font-grotesk font-bold transition-transform hover:-translate-y-0.5 ${
                    p.highlight ? "bg-ex-ink text-white" : "bg-white text-ex-ink"
                  }`}
                >
                  Start this sprint
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={startupFaqs} title="Founder questions" schema />
      <FinalCTA
        lead="Tell us your idea today."
        highlight="Demo it"
        tail="next week."
        sub="The idea call is free, and we're happy to sign an NDA first. You'll leave with a clear scope and price, even if you don't build with us."
        label="Book a free idea call"
        message={WA_STARTUP_MSG}
      />
    </>
  );
}
