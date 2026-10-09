import { Check } from "lucide-react";
import { howDetails, needFromYou } from "@/lib/express";
import { SectionHeading } from "./ui";

export default function HowDetails() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          kicker="Step by step"
          title="What happens on each day"
          sub="No jargon and no surprises. This is exactly what you can expect."
        />
        <ol className="space-y-4">
          {howDetails.map((s, i) => (
            <li key={s.day} className="grid gap-4 rounded-3xl border border-ex-line bg-white p-6 sm:grid-cols-[180px_1fr] sm:p-8">
              <div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ex-yellow font-bold text-ex-ink">{i + 1}</span>
                <div className="mt-3 text-xs font-bold uppercase tracking-wider text-ex-green">{s.day}</div>
                <h3 className="mt-1 font-grotesk text-xl font-bold text-ex-ink">{s.title}</h3>
              </div>
              <ul className="space-y-2 self-center">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ex-ink">
                    <Check size={18} className="mt-0.5 shrink-0 text-ex-green" strokeWidth={3} />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-3xl bg-ex-yellow-soft p-6 sm:p-8">
          <h3 className="font-grotesk text-xl font-bold text-ex-ink">All we need from you</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {needFromYou.map((n) => (
              <li key={n} className="rounded-2xl bg-white p-4 font-semibold text-ex-ink">{n}</li>
            ))}
          </ul>
          <p className="mt-4 text-ex-muted">Everything else, from design and code to hosting, data import and training, is on us.</p>
        </div>
      </div>
    </section>
  );
}
