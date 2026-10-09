import Image from "next/image";
import { ArrowRight, PlayCircle, Quote } from "lucide-react";
import { manufacturerCase, type CaseStudyData } from "@/lib/caseStudies";
import { SectionHeading } from "./ui";

// Renders only the evidence that has been filled in (see src/lib/caseStudies.ts).
export default function CaseStudy({ study = manufacturerCase }: { study?: CaseStudyData }) {
  const counts = [
    study.sheetsReplaced !== null && { k: String(study.sheetsReplaced), v: "spreadsheets retired" },
    study.handoffsRemoved !== null && { k: String(study.handoffsRemoved), v: "manual handoffs removed" },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={study.kicker} title={study.title} sub={study.context} />

        {study.stages && (
          <div className="mb-10 overflow-x-auto pb-2">
            <ol className="flex min-w-max items-center gap-2 sm:justify-center">
              {study.stages.map((s, i, all) => (
                <li key={s} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-bold ${
                      i === all.length - 1 ? "bg-ex-green text-white" : "bg-white text-ex-ink ring-1 ring-ex-line"
                    }`}
                  >
                    {s}
                  </span>
                  {i < all.length - 1 && <ArrowRight size={16} className="text-ex-muted" />}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Verified numbers */}
        {(study.metrics.length > 0 || counts.length > 0) && (
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-ex-ink p-6 text-white">
                <div className="text-sm text-white/70">{m.label}</div>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-white/50 line-through">{m.before}</span>
                  <ArrowRight size={16} className="text-ex-yellow" />
                  <span className="font-grotesk text-2xl font-bold text-ex-yellow">{m.after}</span>
                </div>
              </div>
            ))}
            {counts.map((c) => (
              <div key={c.v} className="rounded-2xl bg-ex-ink p-6 text-white">
                <div className="font-grotesk text-4xl font-bold text-ex-yellow">{c.k}</div>
                <div className="mt-1 text-sm text-white/70">{c.v}</div>
              </div>
            ))}
          </div>
        )}

        <div className="overflow-hidden rounded-3xl border border-ex-line bg-white">
          <div className="grid grid-cols-2 border-b border-ex-line text-xs font-bold uppercase tracking-wider">
            <div className="bg-red-50 px-4 py-3 text-red-700 sm:px-6">Before: Excel</div>
            <div className="bg-ex-green-soft px-4 py-3 text-ex-green sm:px-6">After: BeOnline</div>
          </div>
          {study.changes.map((r) => (
            <div key={r.before} className="grid grid-cols-2 border-b border-ex-line last:border-b-0">
              <div className="px-4 py-4 text-sm text-ex-muted sm:px-6 sm:text-base">{r.before}</div>
              <div className="px-4 py-4 text-sm font-semibold text-ex-ink sm:px-6 sm:text-base">{r.after}</div>
            </div>
          ))}
        </div>

        {/* Owner's view, screenshot, quote, interview */}
        {(study.ownerTracking || study.screenshot || study.quote || study.videoUrl) && (
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
            {study.screenshot && (
              <figure className="overflow-hidden rounded-3xl border border-ex-line bg-white">
                <Image src={study.screenshot.src} alt={study.screenshot.alt} width={1200} height={800} className="h-auto w-full" />
                <figcaption className="px-5 py-3 text-xs text-ex-muted">Real screen from the client&apos;s software. Names and amounts blurred.</figcaption>
              </figure>
            )}
            <div className="space-y-6">
              {study.ownerTracking && (
                <div className="rounded-3xl bg-ex-green-soft p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-ex-green">How the owner tracks production now</div>
                  <p className="mt-2 text-lg font-semibold text-ex-ink">{study.ownerTracking}</p>
                </div>
              )}
              {study.quote && (
                <blockquote className="rounded-3xl bg-ex-yellow-soft p-6">
                  <Quote size={24} className="text-ex-ink/40" aria-hidden />
                  <p className="mt-2 font-grotesk text-xl font-bold leading-snug text-ex-ink">{study.quote.text}</p>
                  <footer className="mt-3 text-sm text-ex-muted">
                    {study.quote.name}, {study.quote.role}
                  </footer>
                </blockquote>
              )}
              {study.videoUrl && (
                <a
                  href={study.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-grotesk font-bold text-ex-ink underline-offset-4 hover:underline"
                >
                  <PlayCircle size={20} /> Watch the customer interview
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
