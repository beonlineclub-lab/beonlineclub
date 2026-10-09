import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui";

const stages = ["Order & measurements", "Fabric issued", "Cutting", "Stitching", "Finishing", "Delivered"];

// TODO: replace `results` with real before/after numbers from the client (with their permission).
const results = [
  { before: "Separate sheets for orders, fabric, karigars and dues", after: "One app, one source of truth" },
  { before: "Owner calls the floor to ask for status", after: "Every piece's stage visible on the phone" },
  { before: "Karigar payments worked out by hand each month", after: "Piece-rate payroll calculated automatically" },
];

export default function CaseStudy() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Real business, real software"
          title="A ₹5–6 crore suit manufacturer, moved from Excel to their own software."
          sub="Every suit is now tracked from the first measurement to the final delivery."
        />

        {/* Workflow pipeline */}
        <div className="mb-10 overflow-x-auto pb-2">
          <ol className="flex min-w-max items-center gap-2 sm:justify-center">
            {stages.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    i === stages.length - 1 ? "bg-ex-green text-white" : "bg-white text-ex-ink ring-1 ring-ex-line"
                  }`}
                >
                  {s}
                </span>
                {i < stages.length - 1 && <ArrowRight size={16} className="text-ex-muted" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ex-line bg-white">
          <div className="grid grid-cols-2 border-b border-ex-line text-xs font-bold uppercase tracking-wider">
            <div className="bg-red-50 px-4 py-3 text-red-700 sm:px-6">Before: Excel</div>
            <div className="bg-ex-green-soft px-4 py-3 text-ex-green sm:px-6">After: BeOnline</div>
          </div>
          {results.map((r) => (
            <div key={r.before} className="grid grid-cols-2 border-b border-ex-line last:border-b-0">
              <div className="px-4 py-4 text-sm text-ex-muted sm:px-6 sm:text-base">{r.before}</div>
              <div className="px-4 py-4 text-sm font-semibold text-ex-ink sm:px-6 sm:text-base">{r.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
