"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarClock, Check, Sparkles, Truck } from "lucide-react";
import { DELIVERY_DAYS, STARTER_INCLUDED, estimate, inr, modules, type Module } from "@/lib/express";
import { SectionHeading, WhatsAppButton } from "./ui";

const core = modules.filter((m) => m.core);

export default function Configurator({
  initial = ["orders", "inventory", "billing"],
  title = "Build your software. See an estimate instantly.",
  options = modules,
}: {
  initial?: string[];
  title?: string;
  options?: Module[]; // modules to offer, e.g. an industry kit's own list and wording
}) {
  const paid = options.filter((m) => !m.core);
  const [picked, setPicked] = useState<string[]>(initial);
  const [liveBy, setLiveBy] = useState("");
  // "Built your way": anything outside the module list. Priced on a call, so no number is shown.
  const [custom, setCustom] = useState(false);
  const [customNote, setCustomNote] = useState("");

  // Computed on the client so the date is the visitor's, and SSR markup stays stable.
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + DELIVERY_DAYS);
    setLiveBy(d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }));
  }, []);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const { setup, monthly, extras } = useMemo(() => estimate(picked), [picked]);

  const names = paid.filter((m) => picked.includes(m.id)).map((m) => m.name);
  const message = custom
    ? `Hi BeOnline! I need custom software, built my way.\n` +
      (names.length ? `Modules: ${names.join(", ")}\n` : "") +
      `What I need: ${customNote.trim() || "(I'll explain here)"}\n` +
      `Can we talk about a quote?`
    : `Hi BeOnline! I built my software on your website.\n` +
      `Modules: ${names.length ? names.join(", ") : "(not sure yet)"}\n` +
      `Estimate: ${inr(setup)} one-time + ${inr(monthly)}/month.\n` +
      `Can I get a free demo?`;

  return (
    <section id="price" className="bg-ex-yellow-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Estimate your price in 30 seconds"
          title={title}
          sub="Tick what your business needs. No sales call is needed to get the pricing idea."
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Modules */}
          <div className="rounded-3xl border border-ex-line bg-white p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {core.map((m) => (
                <span key={m.id} className="inline-flex items-center gap-1.5 rounded-full bg-ex-green-soft px-3 py-1.5 text-xs font-bold text-ex-green">
                  <Check size={14} strokeWidth={3} /> {m.name}: always included
                </span>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {paid.map((m) => {
                const on = picked.includes(m.id);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggle(m.id)}
                    aria-pressed={on}
                    className={`flex items-start gap-3 rounded-2xl border-2 p-3 text-left transition-colors ${
                      on ? "border-ex-ink bg-ex-yellow-soft" : "border-ex-line bg-white hover:border-ex-ink/40"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 ${
                        on ? "border-ex-ink bg-ex-ink text-white" : "border-ex-line"
                      }`}
                    >
                      {on && <Check size={13} strokeWidth={3.5} />}
                    </span>
                    <span>
                      <span className="block font-bold text-ex-ink">{m.name}</span>
                      <span className="block text-sm text-ex-muted">{m.hint}</span>
                    </span>
                  </button>
                );
              })}

              {/* Custom: anything the list doesn't cover */}
              <div
                className={`rounded-2xl border-2 border-dashed p-3 sm:col-span-2 transition-colors ${
                  custom ? "border-ex-ink bg-ex-yellow-soft" : "border-ex-ink/30 bg-white hover:border-ex-ink/60"
                }`}
              >
                <button type="button" onClick={() => setCustom((c) => !c)} aria-pressed={custom} className="flex w-full items-start gap-3 text-left">
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 ${
                      custom ? "border-ex-ink bg-ex-ink text-white" : "border-ex-line"
                    }`}
                  >
                    {custom && <Check size={13} strokeWidth={3.5} />}
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 font-bold text-ex-ink">
                      <Sparkles size={16} className="text-ex-green" /> Something else, built your way
                    </span>
                    <span className="block text-sm text-ex-muted">
                      Your own process, an integration (Tally, payments, any app), or an idea that isn&apos;t on this list. Priced
                      together after a quick chat.
                    </span>
                  </span>
                </button>
                {custom && (
                  <textarea
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    rows={2}
                    placeholder="Tell us in a line what you need (optional)"
                    aria-label="What you need"
                    className="mt-3 w-full resize-none rounded-xl border border-ex-line bg-white p-3 text-sm text-ex-ink outline-none focus:border-ex-ink"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Summary / cart */}
          <div className="lg:sticky lg:top-24 h-fit rounded-3xl bg-ex-ink p-6 text-white">
            <div className="text-sm font-semibold text-white/60">Your estimate</div>
            <div className="mt-2 font-grotesk text-4xl font-bold sm:text-5xl" aria-live="polite">
              {custom ? "Let’s talk" : inr(setup)}
            </div>
            <div className="text-white/70">{custom ? "custom quote, agreed before any work starts" : "one-time setup"}</div>
            {custom ? (
              <div className="mt-4 text-sm text-white/70">
                Tell us what you need on WhatsApp. We&apos;ll understand it, show you a demo and quote a fixed price, with the monthly
                plan sized to what we build.
              </div>
            ) : (
              <>
                <div className="mt-4 font-grotesk text-2xl font-bold">
                  + {inr(monthly)}
                  <span className="text-base font-medium text-white/70"> / month</span>
                </div>
                <div className="text-sm text-white/60">hosting, backups, updates & support included</div>
              </>
            )}

            <div className="mt-6 space-y-2 border-t border-white/15 pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Modules selected</span>
                <span className="font-bold">{names.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Included in base</span>
                <span className="font-bold">{Math.min(names.length, STARTER_INCLUDED)}</span>
              </div>
              {custom && (
                <div className="flex justify-between">
                  <span className="text-white/70">Custom work</span>
                  <span className="font-bold">Yes</span>
                </div>
              )}
              {!custom && extras > 0 && (
                <div className="flex justify-between">
                  <span className="text-white/70">Add-on modules</span>
                  <span className="font-bold">{extras}</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-ex-green px-4 py-3">
              {custom ? <CalendarClock size={22} /> : <Truck size={22} />}
              <div>
                <div className="text-xs font-semibold text-white/80">{custom ? "Timeline" : "Live by"}</div>
                <div className="font-grotesk text-lg font-bold">
                  {custom ? "Planned together with you" : liveBy || `${DELIVERY_DAYS} days from today`}
                </div>
              </div>
            </div>

            <WhatsAppButton label={custom ? "Let’s talk on WhatsApp" : "Get this on WhatsApp"} message={message} size="md" className="mt-5 w-full" />
            <p className="mt-3 text-center text-xs text-white/60">
              Approximate price. Your final price is agreed in writing after we understand your needs. Free demo first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
