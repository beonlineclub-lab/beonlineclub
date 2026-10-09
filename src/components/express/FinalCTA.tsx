import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_LINK, WA_EXCEL_MSG } from "@/lib/express";
import { Highlight, WhatsAppButton } from "./ui";

export default function FinalCTA({
  lead = "Send your Excel today.",
  highlight = "See your software",
  tail = "in 48 hours.",
  sub = "The demo is free and there’s no obligation. If you don’t like it, you’ve lost nothing but a WhatsApp message.",
  label = "WhatsApp your Excel",
  message = WA_EXCEL_MSG,
}: {
  lead?: string;
  highlight?: string;
  tail?: string;
  sub?: string;
  label?: string;
  message?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-grotesk font-bold leading-[1.05] text-ex-ink text-[clamp(2rem,6vw,3.75rem)]">
          {lead} <Highlight>{highlight}</Highlight> {tail}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ex-muted">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton label={label} message={message} />
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 font-grotesk font-bold text-ex-ink hover:underline">
            <Phone size={18} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
