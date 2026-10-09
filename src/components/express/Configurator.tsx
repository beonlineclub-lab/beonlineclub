"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Truck } from "lucide-react";
import {
  BASE_MONTHLY,
  BASE_SETUP,
  DELIVERY_DAYS,
  STARTER_INCLUDED,
  inr,
  modules,
} from "@/lib/express";
import { SectionHeading, WhatsAppButton } from "./ui";

const paid = modules.filter((m) => !m.core);
const core = modules.filter((m) => m.core);

export default function Configurator({
  initial = ["orders", "inventory", "billing"],
  title = "Build your software. See the price instantly.",
}: {
  initial?: string[];
  title?: string;
}) {
  const [picked, setPicked] = useState<string[]>(initial);
  const [liveBy, setLiveBy] = useState("");

  // Computed on the client so the date is the visitor's, and SSR markup stays stable.
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + DELIVERY_DAYS);
    setLiveBy(d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }));
  }, []);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const { setup, monthly, extras } = useMemo(() => {
    // The base plan covers the priciest STARTER_INCLUDED modules; the rest are add-ons.
    const chosen = paid.filter((m) => picked.includes(m.id)).sort((a, b) => b.setup - a.setup);
    const addOns = chosen.slice(STARTER_INCLUDED);
    return {
      setup: BASE_SETUP + addOns.reduce((s, m) => s + m.setup, 0),
      monthly: BASE_MONTHLY + addOns.reduce((s, m) => s + m.monthly, 0),
      extras: addOns.length,
    };
  }, [picked]);

  const names = paid.filter((m) => picked.includes(m.id)).map((m) => m.name);
  const message =
    `Hi BeOnline! I built my software on your website.\n` +
    `Modules: ${names.length ? names.join(", ") : "(not sure yet)"}\n` +
    `Estimate: ${inr(setup)} one-time + ${inr(monthly)}/month.\n` +
    `Can I get a free demo?`;

  return (
    <section id="price" className="bg-ex-yellow-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="See your price in 30 seconds"
          title={title}
          sub="Tick what your business needs. No sales call is needed to know the cost."
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
            </div>
          </div>

          {/* Summary / cart */}
          <div className="lg:sticky lg:top-24 h-fit rounded-3xl bg-ex-ink p-6 text-white">
            <div className="text-sm font-semibold text-white/60">Your estimate</div>
            <div className="mt-2 font-grotesk text-4xl font-bold sm:text-5xl" aria-live="polite">
              {inr(setup)}
            </div>
            <div className="text-white/70">one-time setup</div>
            <div className="mt-4 font-grotesk text-2xl font-bold">
              + {inr(monthly)}
              <span className="text-base font-medium text-white/70"> / month</span>
            </div>
            <div className="text-sm text-white/60">hosting, backups, updates & support included</div>

            <div className="mt-6 space-y-2 border-t border-white/15 pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Modules selected</span>
                <span className="font-bold">{names.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Included in base</span>
                <span className="font-bold">{Math.min(names.length, STARTER_INCLUDED)}</span>
              </div>
              {extras > 0 && (
                <div className="flex justify-between">
                  <span className="text-white/70">Add-on modules</span>
                  <span className="font-bold">{extras}</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-ex-green px-4 py-3">
              <Truck size={22} />
              <div>
                <div className="text-xs font-semibold text-white/80">Live by</div>
                <div className="font-grotesk text-lg font-bold">{liveBy || `${DELIVERY_DAYS} days from today`}</div>
              </div>
            </div>

            <WhatsAppButton label="Get this on WhatsApp" message={message} size="md" className="mt-5 w-full" />
            <p className="mt-3 text-center text-xs text-white/60">
              Free demo first. You pay only after you’ve seen it working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
