import { Plus } from "lucide-react";
import { faqs as defaultFaqs } from "@/lib/express";
import { SectionHeading } from "./ui";

type Faq = { q: string; a: string };

export default function FAQ({
  items = defaultFaqs,
  title = "Poochhiye, bina jhijhak.",
  kicker = "Questions",
  schema = false,
}: {
  items?: Faq[];
  title?: string;
  kicker?: string;
  schema?: boolean; // emit FAQPage JSON-LD; enable on one page per FAQ set
}) {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading kicker={kicker} title={title} />
        <div className="space-y-3">
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-ex-line bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-grotesk text-lg font-bold text-ex-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus size={20} className="shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-ex-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}
