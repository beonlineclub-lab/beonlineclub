"use client";

import { useState } from "react";
import { calcAssumptions as A, calcDefaults, WA_SELLER_MSG } from "@/lib/ecommerce";
import { inr } from "@/lib/express";
import { SectionHeading, WhatsAppButton } from "./ui";

type Key = keyof typeof calcDefaults;

const fields: { key: Key; label: string; min: number; max: number; step: number; money?: boolean }[] = [
  { key: "ordersPerDay", label: "Orders per day (all channels)", min: 10, max: 2000, step: 10 },
  { key: "aov", label: "Average order value", min: 100, max: 5000, step: 50, money: true },
  { key: "cancellationsPerWeek", label: "Cancellations from stock mismatch, per week", min: 0, max: 200, step: 1 },
  { key: "slaBreachesPerMonth", label: "Late dispatches (SLA breaches), per month", min: 0, max: 300, step: 1 },
  { key: "peopleOnSheets", label: "People who work on Excel sheets", min: 1, max: 60, step: 1 },
];

export default function LossCalculator() {
  const [v, setV] = useState(calcDefaults);

  const lostOrders = Math.round(v.cancellationsPerWeek * 4.33 * v.aov * A.marginOnLostOrder);
  const penalties = v.slaBreachesPerMonth * A.penaltyPerSlaBreach;
  const staff = v.peopleOnSheets * A.hoursPerPersonPerDay * A.costPerHour * A.workDaysPerMonth;
  const total = lostOrders + penalties + staff;

  const lines = [
    { label: "Profit lost on cancelled orders", value: lostOrders },
    { label: "SLA penalties & lost visibility", value: penalties },
    { label: "Staff hours spent on sheets", value: staff },
  ];

  return (
    <section id="calculator" className="scroll-mt-20 bg-ex-yellow-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Loss calculator"
          title="What is Excel really costing you every month?"
          sub="Move the sliders to match your business. It's a rough estimate, and every assumption is shown below."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 rounded-3xl bg-white p-6 sm:p-8">
            {fields.map((f) => (
              <label key={f.key} className="block">
                <span className="flex items-baseline justify-between gap-4 text-sm font-semibold text-ex-ink">
                  {f.label}
                  <span className="font-grotesk text-lg font-bold">{f.money ? inr(v[f.key]) : v[f.key].toLocaleString("en-IN")}</span>
                </span>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={v[f.key]}
                  onChange={(e) => setV((s) => ({ ...s, [f.key]: Number(e.target.value) }))}
                  className="mt-2 w-full accent-ex-green"
                />
              </label>
            ))}
          </div>

          <div className="flex flex-col rounded-3xl bg-ex-ink p-6 text-white sm:p-8">
            <div className="text-sm font-semibold text-white/70">Estimated monthly loss</div>
            <div className="mt-1 font-grotesk text-[clamp(2.5rem,7vw,3.75rem)] font-bold leading-none text-ex-yellow" aria-live="polite">
              {inr(total)}
            </div>
            <div className="mt-1 text-sm text-white/70">≈ {inr(total * 12)} a year</div>
            <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
              {lines.map((l) => (
                <li key={l.label} className="flex justify-between gap-4 text-sm">
                  <span className="text-white/80">{l.label}</span>
                  <span className="font-bold">{inr(l.value)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <WhatsAppButton label="Get a demo that fixes this" message={WA_SELLER_MSG} size="md" className="w-full" />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-ex-muted">
          Assumptions: {Math.round(A.marginOnLostOrder * 100)}% profit on each cancelled order, {inr(A.penaltyPerSlaBreach)} average cost per
          late dispatch, {A.hoursPerPersonPerDay} hours a day per person on sheets at {inr(A.costPerHour)}/hour, {A.workDaysPerMonth} working
          days a month. It doesn&apos;t count account-health drops or festive-sale misses, so the real cost is often higher.
        </p>
      </div>
    </section>
  );
}
