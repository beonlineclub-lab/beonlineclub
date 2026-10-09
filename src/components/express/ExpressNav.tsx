"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { WhatsAppButton } from "./ui";

const links = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Software Menu", href: "/software" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Sellers", href: "/ecommerce-sellers" },
  { label: "For Startups", href: "/startups" },
  { label: "Why BeOnline", href: "/why-beonline" },
];

export default function ExpressNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open || pathname === "/startups" ? "bg-ex-bg/90 backdrop-blur-md border-b border-ex-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-grotesk text-xl font-bold text-ex-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ex-yellow">
            <Zap size={18} strokeWidth={2.75} />
          </span>
          <span>
            BeOnline<span className="text-ex-green">.club</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-sm font-semibold hover:text-ex-ink ${
                isActive(l.href) ? "text-ex-ink underline decoration-ex-yellow decoration-[3px] underline-offset-8" : "text-ex-ink/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <WhatsAppButton size="sm" label="WhatsApp us" />
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl text-ex-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ex-line bg-ex-bg px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`block border-b border-ex-line py-4 font-grotesk text-lg font-semibold ${isActive(l.href) ? "text-ex-green" : "text-ex-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
