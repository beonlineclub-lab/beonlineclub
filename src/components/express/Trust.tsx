import { Eye, FileText, Handshake, Server, ShieldCheck, UserRound } from "lucide-react";
import { commitments, trustPillars } from "@/lib/express";
import { SectionHeading } from "./ui";

const icons = { eye: Eye, shield: ShieldCheck, server: Server, user: UserRound, handshake: Handshake, file: FileText };

export default function Trust({ showHeading = true }: { showHeading?: boolean }) {
  const title = <>We don&apos;t disappear after go-live. We&apos;re with you till the end.</>;
  return (
    <section id="trust" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeading && (
          <SectionHeading
            kicker="Trust · Quality · Reliability"
            title={title}
            sub="Cheap software that breaks is expensive. Here's how we make sure yours keeps working, year after year."
          />
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((p) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <div key={p.title} className="rounded-2xl border border-ex-line bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ex-green-soft text-ex-green">
                  <Icon size={22} strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-grotesk text-lg font-bold text-ex-ink">{p.title}</h3>
                <p className="mt-2 text-ex-muted">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl bg-ex-ink text-white md:grid-cols-4">
          {commitments.map((c, i) => (
            <div
              key={c.k}
              className={`px-5 py-5 text-center ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""} ${i === 1 ? "md:border-r" : ""}`}
            >
              <div className="font-grotesk text-2xl font-bold text-ex-yellow">{c.k}</div>
              <div className="text-sm text-white/70">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
