"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_LINK, WA_EXCEL_MSG, waLink } from "@/lib/express";
import { WA_STARTUP_MSG } from "@/lib/startups";

export default function MobileStickyBar() {
  const startup = usePathname() === "/startups";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ex-line bg-ex-bg/95 p-3 backdrop-blur lg:hidden">
      <a
        href={PHONE_LINK}
        aria-label="Call us"
        className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ex-ink text-ex-ink"
      >
        <Phone size={20} />
      </a>
      <a
        href={waLink(startup ? WA_STARTUP_MSG : WA_EXCEL_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="sticky-whatsapp"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-ex-wa font-grotesk font-bold text-ex-ink"
      >
        <MessageCircle size={20} strokeWidth={2.5} /> {startup ? "Free idea call on WhatsApp" : "Free demo on WhatsApp"}
      </a>
    </div>
  );
}
