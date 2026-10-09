import { comparison } from "@/lib/express";
import { SectionHeading } from "./ui";

export default function Comparison() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          kicker="Why not the usual options?"
          title="Built for businesses the software industry forgot."
          sub="Big software companies are priced for big companies, and freelancers are a gamble. We sit in between: professional, but reachable."
        />
        <div className="overflow-x-auto rounded-3xl border border-ex-line bg-white">
          <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-ex-line">
                <th className="px-4 py-4 sm:px-6" />
                {comparison.cols.map((c, i) => (
                  <th key={c} className={`px-4 py-4 font-grotesk font-bold sm:px-6 ${i === 0 ? "bg-ex-yellow-soft text-ex-ink" : "text-ex-muted"}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r) => (
                <tr key={r.k} className="border-b border-ex-line last:border-b-0">
                  <th scope="row" className="px-4 py-4 font-semibold text-ex-ink sm:px-6">{r.k}</th>
                  {r.v.map((v, i) => (
                    <td key={i} className={`px-4 py-4 sm:px-6 ${i === 0 ? "bg-ex-yellow-soft font-bold text-ex-ink" : "text-ex-muted"}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
