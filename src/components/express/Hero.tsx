"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ExcelToApp from "./ExcelToApp";
import { Highlight, WhatsAppButton } from "./ui";

const chips = ["⚡ Live in 7 days", "₹ No hidden cost", "🛠 We do everything", "📱 Works on your phone"];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-ex-yellow/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-60 -left-40 h-[360px] w-[360px] rounded-full bg-ex-green/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p {...fadeUp(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-ex-line bg-white px-3 py-1.5 text-sm font-semibold text-ex-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ex-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ex-green" />
            </span>
            Excel mein business chalana band karo.
          </motion.p>

          <motion.h1 {...fadeUp(0.08)} className="font-grotesk font-bold leading-[1.02] tracking-tight text-ex-ink text-[clamp(2.5rem,7vw,4.5rem)]">
            Your business has outgrown <Highlight>Excel.</Highlight>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-lg text-ex-muted sm:text-xl">
            Get your own custom software, <strong className="text-ex-ink">live in 7 days, starts from ₹9,999</strong>. We handle everything
            from understanding your work to training your staff. You just send us your Excel.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton label="WhatsApp your Excel → Free demo in 48 hrs" className="w-full sm:w-auto" />
            <a
              href="#price"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 font-grotesk font-bold text-ex-ink underline-offset-4 hover:underline"
            >
              See your price in 30 sec <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.32)} className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ex-ink shadow-sm ring-1 ring-ex-line">
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div {...fadeUp(0.2)}>
          <ExcelToApp />
        </motion.div>
      </div>
    </section>
  );
}
