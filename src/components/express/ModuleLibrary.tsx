import { modules } from "@/lib/express";

export default function ModuleLibrary() {
  return (
    <section className="bg-ex-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-block rounded-full bg-ex-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
            The building blocks
          </span>
          <h2 className="font-grotesk font-bold leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">
            Ready-made, tested modules. That&apos;s how we deliver in 7 days.
          </h2>
          <p className="mt-4 text-white/70 sm:text-lg">
            About 80% of your software comes from blocks that already work in live businesses. We build the other 20% just for you.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <li key={m.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-grotesk font-bold">{m.name}</h3>
                {m.core && <span className="rounded-full bg-ex-green px-2 py-0.5 text-[11px] font-bold">Always included</span>}
              </div>
              <p className="mt-1 text-sm text-white/70">{m.hint}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
