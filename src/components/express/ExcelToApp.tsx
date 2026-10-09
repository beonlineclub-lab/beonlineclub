"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Bell, TrendingUp } from "lucide-react";

const rows = [
  { id: "a", party: "Sharma Tailors", item: "3-pc suit ×12", stage: "Stitching", due: "02 Oct", tone: "bg-amber-100 text-amber-800" },
  { id: "b", party: "Raj Menswear", item: "Blazer ×30", stage: "Cutting", due: "05 Oct", tone: "bg-sky-100 text-sky-800" },
  { id: "c", party: "Gupta & Sons", item: "Sherwani ×8", stage: "Ready", due: "29 Sep", tone: "bg-ex-green-soft text-ex-green" },
  { id: "d", party: "Style Hub", item: "Trousers ×50", stage: "Fabric", due: "09 Oct", tone: "bg-violet-100 text-violet-800" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExcelToApp() {
  const reduce = useReducedMotion();
  const [app, setApp] = useState(false);

  useEffect(() => {
    if (reduce) {
      setApp(true);
      return;
    }
    const t = setInterval(() => setApp((v) => !v), 3800);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Toggle label */}
      <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold">
        <button
          onClick={() => setApp(false)}
          className={`rounded-full px-3 py-1 transition-colors ${!app ? "bg-ex-ink text-white" : "bg-white text-ex-muted border border-ex-line"}`}
        >
          Before: Excel
        </button>
        <span className="text-ex-muted">→</span>
        <button
          onClick={() => setApp(true)}
          className={`rounded-full px-3 py-1 transition-colors ${app ? "bg-ex-green text-white" : "bg-white text-ex-muted border border-ex-line"}`}
        >
          After: Your software
        </button>
      </div>

      <motion.div
        layout
        className="relative overflow-hidden rounded-3xl border border-ex-line bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
      >
        {/* Window bar */}
        <motion.div
          layout
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold transition-colors duration-500 ${
            app ? "bg-ex-ink text-white" : "bg-[#1D6F42] text-white"
          }`}
        >
          <span className="flex gap-1">
            <i className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <i className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </span>
          <span className="ml-1 truncate">{app ? "Kapoor Suits · Orders" : "ORDERS_FINAL_v7_(2).xlsx"}</span>
        </motion.div>

        <LayoutGroup>
          <div className="p-3 sm:p-4">
            {/* Stats (app only) */}
            <AnimatePresence mode="popLayout">
              {app && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                  className="mb-3 grid grid-cols-3 gap-2"
                >
                  {[
                    { k: "Today's sales", v: "₹1.8 L" },
                    { k: "Dues", v: "₹4.2 L" },
                    { k: "Due this week", v: "3" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl bg-ex-yellow-soft px-2.5 py-2">
                      <div className="text-[10px] font-semibold text-ex-muted">{s.k}</div>
                      <div className="font-grotesk text-base font-bold text-ex-ink">{s.v}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Excel header row */}
            <AnimatePresence mode="popLayout">
              {!app && (
                <motion.div
                  key="hdr"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-[1.2fr_1.1fr_0.8fr_0.6fr] border border-gray-300 bg-gray-100 font-mono text-[10px] font-bold text-gray-600"
                >
                  {["Party", "Item", "Stage", "Due"].map((h) => (
                    <div key={h} className="border-r border-gray-300 px-1.5 py-1 last:border-r-0">
                      {h}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className={app ? "space-y-2" : ""}>
              {rows.map((r) => (
                <motion.div
                  key={r.id}
                  layout
                  transition={{ duration: 0.6, ease }}
                  className={
                    app
                      ? "flex items-center justify-between rounded-xl border border-ex-line bg-white px-3 py-2.5 shadow-sm"
                      : "grid grid-cols-[1.2fr_1.1fr_0.8fr_0.6fr] border-x border-b border-gray-300 font-mono text-[10px] text-gray-800"
                  }
                >
                  {app ? (
                    <>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold text-ex-ink">{r.party}</div>
                        <div className="truncate text-xs text-ex-muted">
                          {r.item} · due {r.due}
                        </div>
                      </div>
                      <span className={`ml-2 shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${r.tone}`}>{r.stage}</span>
                    </>
                  ) : (
                    [r.party, r.item, r.stage, r.due].map((c, i) => (
                      <div key={i} className="truncate border-r border-gray-300 px-1.5 py-1 last:border-r-0">
                        {c}
                      </div>
                    ))
                  )}
                </motion.div>
              ))}
            </div>

            {/* Excel footer / app alert */}
            <AnimatePresence mode="popLayout">
              {app ? (
                <motion.div
                  key="alert"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease }}
                  className="mt-3 flex items-center gap-2 rounded-xl bg-ex-green-soft px-3 py-2 text-xs font-semibold text-ex-green"
                >
                  <Bell size={14} /> Gupta &amp; Sons notified on WhatsApp: order ready
                  <TrendingUp size={14} className="ml-auto" />
                </motion.div>
              ) : (
                <motion.div
                  key="sheets"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 flex gap-1 font-mono text-[10px]"
                >
                  {["Orders", "Stock", "Karigar", "Dues", "Old_backup"].map((s, i) => (
                    <span key={s} className={`rounded-t px-2 py-0.5 ${i === 0 ? "bg-white border border-gray-300 font-bold" : "bg-gray-100 text-gray-500"}`}>
                      {s}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </motion.div>
    </div>
  );
}
