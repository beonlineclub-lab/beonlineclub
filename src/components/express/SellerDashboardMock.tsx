// Illustrative seller dashboard for the /ecommerce-sellers hero. Sample numbers only.
const stats = [
  { k: "142", v: "Orders due today", tone: "text-ex-ink" },
  { k: "6", v: "At risk of SLA", tone: "text-red-600" },
  { k: "11", v: "SKUs low on stock", tone: "text-amber-600" },
];

const rows = [
  { ch: "Amazon", sku: "KURTA-BLU-M", due: "2h 10m", risk: true },
  { ch: "Flipkart", sku: "DUP-COMBO-3", due: "3h 45m", risk: true },
  { ch: "Myntra", sku: "KURTA-RED-L", due: "Today", risk: false },
  { ch: "Meesho", sku: "SET-GRN-XL", due: "Today", risk: false },
];

export default function SellerDashboardMock() {
  return (
    <div
      className="mx-auto w-full max-w-xl rounded-3xl border border-ex-line bg-white p-4 text-left shadow-[0_10px_0_#111] sm:p-6"
      role="img"
      aria-label="Example dashboard: 142 orders due today, 6 at risk of missing the dispatch deadline, 11 SKUs low on stock"
    >
      <div className="flex items-center justify-between">
        <span className="font-grotesk font-bold text-ex-ink">Today · All channels</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ex-green-soft px-2.5 py-1 text-xs font-bold text-ex-green">
          <span className="h-2 w-2 rounded-full bg-ex-green" /> Live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((s) => (
          <div key={s.v} className="rounded-2xl bg-ex-bg p-3">
            <div className={`font-grotesk text-2xl font-bold sm:text-3xl ${s.tone}`}>{s.k}</div>
            <div className="text-[11px] font-semibold leading-tight text-ex-muted sm:text-xs">{s.v}</div>
          </div>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-ex-line text-sm">
        {rows.map((r) => (
          <li key={r.sku} className="flex items-center gap-3 py-2.5">
            <span className="w-16 shrink-0 rounded-md bg-ex-yellow-soft px-1.5 py-0.5 text-center text-[11px] font-bold text-ex-ink">{r.ch}</span>
            <span className="min-w-0 flex-1 truncate font-mono text-xs text-ex-ink">{r.sku}</span>
            <span className={`shrink-0 text-xs font-bold ${r.risk ? "text-red-600" : "text-ex-muted"}`}>{r.risk ? `⚠ ${r.due}` : r.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
