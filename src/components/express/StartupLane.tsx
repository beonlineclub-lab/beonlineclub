import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function StartupLane() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-ex-ink p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-yellow">
              <Rocket size={14} /> For startups & founders
            </span>
            <h2 className="mt-4 font-grotesk text-3xl font-bold leading-tight sm:text-4xl">
              Investor demo next week? Get a working MVP in 7 days.
            </h2>
            <p className="mt-3 text-white/70">
              Same express model: a real product your investors can click through, not slides. Then weekly releases up to launch.
            </p>
          </div>
          <Link
            href="/startups"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-ex-yellow px-6 py-4 font-grotesk font-bold text-ex-ink transition-transform hover:-translate-y-0.5"
          >
            See how it works for startups <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
