import { PageHero } from "./ui";

// Plain prose layout for policy pages (privacy, terms).
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { h: string; body: React.ReactNode }[];
}) {
  return (
    <>
      <PageHero kicker={`Last updated ${updated}`} title={title} sub={intro} />
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-grotesk text-xl font-bold text-ex-ink">{s.h}</h2>
              <div className="mt-2 space-y-3 text-ex-muted [&_a]:font-semibold [&_a]:text-ex-ink [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
