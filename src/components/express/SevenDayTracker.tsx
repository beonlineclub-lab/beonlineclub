"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { journey } from "@/lib/express";
import { MoreLink } from "./ui";

export default function SevenDayTracker({ moreHref }: { moreHref?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="how" className="bg-ex-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-4 inline-block rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
            Express delivery
          </span>
          <h2 className="mx-auto max-w-3xl font-grotesk font-bold leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">
            From Excel to live software in <span className="text-ex-yellow">7 days</span>. Track every step.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Like tracking a delivery: you always know where your software is. Daily updates come on WhatsApp.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* progress line: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-[19px] top-2 bottom-2 w-1 rounded bg-white/10 lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:h-1 lg:w-auto" />
          <motion.div
            className="absolute left-[19px] top-2 w-1 origin-top rounded bg-ex-yellow lg:hidden"
            initial={{ height: 0 }}
            animate={inView ? { height: "calc(100% - 16px)" } : {}}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-0 top-[19px] hidden h-1 rounded bg-ex-yellow lg:block"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />

          <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-4">
            {journey.map((s, i) => {
              const live = i === 4;
              return (
                <motion.li
                  key={s.day}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.3, duration: 0.5 }}
                  className="flex gap-4 lg:flex-col"
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-bold ring-4 ring-ex-ink ${
                      live ? "bg-ex-green text-white" : "bg-ex-yellow text-ex-ink"
                    }`}
                  >
                    {live ? <Check size={20} strokeWidth={3} /> : i + 1}
                  </span>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${live ? "text-[#5DDB6F]" : "text-ex-yellow"}`}>{s.day}</div>
                    <div className="mt-1 font-grotesk text-lg font-bold">{s.title}</div>
                    <p className="mt-1 text-sm text-white/70">{s.body}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <p className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-4 text-center text-sm text-white/80 sm:text-base">
          <strong className="text-white">What “live” means:</strong> your main workflow runs on real data, your staff is using it,
          and Excel is retired. New features keep shipping every week after that.
        </p>
        {moreHref && <MoreLink href={moreHref} label="See the full process" dark />}
      </div>
    </section>
  );
}
