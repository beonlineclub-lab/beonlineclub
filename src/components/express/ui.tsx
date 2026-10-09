import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink, WA_EXCEL_MSG } from "@/lib/express";

export function WhatsAppButton({
  label = "WhatsApp your Excel",
  message = WA_EXCEL_MSG,
  size = "lg",
  className = "",
}: {
  label?: string;
  message?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const sizes = {
    lg: "px-6 py-4 text-base sm:text-lg gap-3",
    md: "px-5 py-3 text-base gap-2",
    sm: "px-4 py-2 text-sm gap-2",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className={`inline-flex items-center justify-center rounded-2xl bg-ex-wa font-grotesk font-bold text-ex-ink shadow-[0_6px_0_#1a9e4b] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_#1a9e4b] active:translate-y-1 active:shadow-[0_2px_0_#1a9e4b] ${sizes[size]} ${className}`}
    >
      <MessageCircle size={size === "sm" ? 16 : 20} strokeWidth={2.5} />
      {label}
    </a>
  );
}

export function SectionHeading({
  kicker,
  title,
  sub,
  center = true,
}: {
  kicker?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {kicker && (
        <span className="inline-block mb-4 rounded-full bg-ex-yellow-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
          {kicker}
        </span>
      )}
      <h2 className="font-grotesk font-bold text-ex-ink leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)]">{title}</h2>
      {sub && <p className="mt-4 text-ex-muted text-base sm:text-lg">{sub}</p>}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative whitespace-nowrap">
      <span className="absolute inset-x-0 bottom-[0.08em] h-[0.38em] -z-0 rounded bg-ex-yellow" aria-hidden />
      <span className="relative">{children}</span>
    </span>
  );
}

// Top-of-page hero for inner pages. Owns the page's single <h1>.
export function PageHero({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  sub: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-ex-yellow/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mb-5 inline-block rounded-full bg-ex-yellow-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-ex-ink">
          {kicker}
        </span>
        <h1 className="font-grotesk font-bold leading-[1.05] tracking-tight text-ex-ink text-[clamp(2.25rem,6vw,4rem)]">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ex-muted sm:text-xl">{sub}</p>
        {children && <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}

// "See the full page" link placed at the end of a homepage section.
export function MoreLink({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <div className="mt-10 text-center">
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-2xl border-2 px-5 py-3 font-grotesk font-bold transition-colors ${
          dark ? "border-white/30 text-white hover:border-ex-yellow hover:text-ex-yellow" : "border-ex-ink text-ex-ink hover:bg-ex-ink hover:text-white"
        }`}
      >
        {label} <ArrowRight size={18} />
      </Link>
    </div>
  );
}
