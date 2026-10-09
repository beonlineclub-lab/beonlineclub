import { painPoints } from "@/lib/express";
import { SectionHeading } from "./ui";

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Sound familiar?"
          title="Excel was fine at ₹20 lakh. At ₹5 crore, it's holding you back."
          sub="If even two of these happen in your business every week, you need your own software."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ex-line bg-white p-6 transition-transform hover:-translate-y-1">
              <div className="mb-3 text-3xl" aria-hidden>
                {p.emoji}
              </div>
              <h3 className="font-grotesk text-lg font-bold text-ex-ink">{p.title}</h3>
              <p className="mt-2 text-ex-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
