import { ShieldCheck, Database, DoorOpen } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "Live in 7 days, or 3 months free", body: "If your v1 isn't live by Day 7 after approval, your first 3 months' fee is on us." },
  { icon: Database, title: "Your data is always yours", body: "Export everything to Excel anytime. No lock-in, ever." },
  { icon: DoorOpen, title: "Cancel anytime", body: "No long contracts. Stay because it works, not because you're stuck." },
];

export default function Guarantee() {
  return (
    <section className="bg-ex-yellow py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-grotesk font-bold leading-tight text-ex-ink text-[clamp(1.75rem,4.5vw,2.75rem)]">
          The BeOnline promise
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {promises.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-ex-bg p-6 shadow-[0_6px_0_#111]">
              <Icon size={28} className="text-ex-ink" strokeWidth={2.25} />
              <h3 className="mt-4 font-grotesk text-xl font-bold text-ex-ink">{title}</h3>
              <p className="mt-2 text-ex-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
