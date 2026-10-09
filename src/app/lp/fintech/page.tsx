"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  BarChart3,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Zap,
  Phone,
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const WA_NUMBER = "919571058866";
const WA_MESSAGE = encodeURIComponent(
  "Hi BeOnline.club, I saw your ad and I'm interested in building a fintech product. Can we have a quick call?"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const PHONE_LINK = `tel:+${WA_NUMBER}`;

// ─── Shared CTA button ───────────────────────────────────────────────────────

function WhatsAppCTA({
  label = "Book a Free Discovery Call",
  size = "lg",
  trackingLabel = "cta",
}: {
  label?: string;
  size?: "lg" | "md";
  trackingLabel?: string;
}) {
  const isLg = size === "lg";
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={trackingLabel}
      className="inline-flex items-center gap-3 font-grotesk font-bold rounded-xl transition-all duration-300 group"
      style={{
        background: "#25D366",
        color: "#ffffff",
        fontSize: isLg ? "1.05rem" : "0.9rem",
        padding: isLg ? "14px 28px" : "11px 22px",
        boxShadow: "0 0 28px #25D36644",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 48px #25D36688";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 28px #25D36644";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* WhatsApp icon */}
      <svg viewBox="0 0 24 24" width={isLg ? 20 : 17} height={isLg ? 20 : 17} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
      <ArrowRight size={isLg ? 16 : 14} className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: "⏳",
    problem: "Your dev team quotes 12 months to build a loan system.",
    fix: "We've already built one. We ship in weeks, not quarters.",
  },
  {
    icon: "⚠️",
    problem: "RBI compliance requirements are slowing your launch.",
    fix: "KYC flows, audit trails, data residency — we've done it for a live NBFC.",
  },
  {
    icon: "🔌",
    problem: "Payment, NACH mandate, and bureau integrations are killing your timeline.",
    fix: "Razorpay, Cashfree, CIBIL, Setu — we know these APIs cold.",
  },
];

const services = [
  {
    icon: Layers,
    title: "Loan Origination System (LOS)",
    description:
      "End-to-end application flow — onboarding, KYC, credit decisioning, approval, and disbursal. Built and live for personal, education, and MSME loan products.",
    tags: ["Personal Loans", "Education Loans", "MSME Loans"],
  },
  {
    icon: ShieldCheck,
    title: "KYC & Compliance Flows",
    description:
      "Aadhaar / PAN verification, video KYC, liveness checks, and RBI-compliant audit trails. We understand what regulators actually look for.",
    tags: ["Aadhaar / PAN", "Video KYC", "Audit Trails"],
  },
  {
    icon: CreditCard,
    title: "Payments & Collections",
    description:
      "Razorpay, Cashfree, UPI, NACH mandates, EMI repayment flows, and reconciliation dashboards. Zero leakage in your collections pipeline.",
    tags: ["NACH Mandate", "UPI", "Reconciliation"],
  },
  {
    icon: BarChart3,
    title: "Loan Management & Dashboards",
    description:
      "Real-time portfolio views, collections tracking, overdue alerts, and ops dashboards. Give your team the visibility they need to move fast.",
    tags: ["Portfolio View", "Collections", "Ops Dashboards"],
  },
];

const techStack = [
  "React", "Next.js", "Node.js", "PostgreSQL",
  "AWS", "Docker", "Razorpay", "Cashfree",
  "Setu APIs", "Digio", "CIBIL", "Redis",
];

const trustStats = [
  { icon: Layers, value: "2+", label: "Live NBFC Clients" },
  { icon: CheckCircle2, value: "3", label: "Loan Products Shipped" },
  { icon: Zap, value: "< 24h", label: "First Response" },
  { icon: Users, value: "100%", label: "End-to-End Delivery" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FintechLP() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "#080B12", color: "#FFFFFF" }}
    >
      {/* ── Minimal header bar ─────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-16"
        style={{
          background: "rgba(8,11,18,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #1E2535",
        }}
      >
        <div className="flex items-center gap-1 font-grotesk font-bold text-lg">
          <span className="font-mono" style={{ color: "#00F5FF" }}>{`{`}</span>
          <span>BeOnline</span>
          <span style={{ color: "#00F5FF" }}>.club</span>
          <span className="font-mono" style={{ color: "#00F5FF" }}>{`}`}</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="hidden sm:flex items-center gap-2 font-mono text-sm transition-colors duration-200"
            style={{ color: "#A0ADB8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00F5FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A0ADB8")}
          >
            <Phone size={14} />
            +91 957105 8866
          </a>
          <WhatsAppCTA label="Chat on WhatsApp" size="md" trackingLabel="header" />
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-20 pb-24 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1E253508 1px, transparent 1px), linear-gradient(90deg, #1E253508 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 500,
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, #00F5FF0A 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Industry badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full font-mono text-xs tracking-widest"
            style={{ background: "#00F5FF12", border: "1px solid #00F5FF30", color: "#00F5FF" }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            FOR FINTECHS & NBFCs
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-grotesk font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
          >
            We&apos;ve built loan systems
            <br />
            <span style={{ color: "#00F5FF" }}>for live NBFCs.</span>
            <br />
            We can build yours.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans mb-10 max-w-2xl mx-auto"
            style={{ color: "#A0ADB8", fontSize: "1.1rem", lineHeight: "1.8" }}
          >
            End-to-end engineering for your fintech — loan origination, KYC flows, payment
            integrations, and ops dashboards. Compliant, scalable, and delivered by a team
            that&apos;s done it before.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <WhatsAppCTA trackingLabel="hero-primary" />
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 font-grotesk font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              style={{ border: "1.5px solid #1E2535", color: "#A0ADB8", fontSize: "1rem" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00F5FF50";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1E2535";
                e.currentTarget.style.color = "#A0ADB8";
              }}
            >
              <Phone size={15} />
              Call us directly
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────────────────── */}
      <section style={{ background: "#0A0E18", borderTop: "1px solid #1E2535", borderBottom: "1px solid #1E2535" }}>
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-1"
                  style={{ background: "#00F5FF12", border: "1px solid #00F5FF25" }}
                >
                  <Icon size={17} style={{ color: "#00F5FF" }} />
                </div>
                <span className="font-grotesk font-bold text-2xl" style={{ color: "#FFFFFF" }}>
                  {s.value}
                </span>
                <span className="font-mono text-xs tracking-widest" style={{ color: "#A0ADB8" }}>
                  {s.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Pain points ────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-[0.3em] text-center mb-12"
            style={{ color: "#00F5FF" }}
          >
            {"// SOUND FAMILIAR?"}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#0A0E18", border: "1px solid #1E2535" }}
              >
                <span className="text-2xl">{p.icon}</span>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0ADB8" }}>
                  {p.problem}
                </p>
                <div className="h-px" style={{ background: "#1E2535" }} />
                <p className="font-sans text-sm leading-relaxed font-medium" style={{ color: "#00F5FF" }}>
                  {p.fix}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────── */}
      <section
        ref={servicesRef}
        className="px-6 py-20"
        style={{ background: "#0A0E18", borderTop: "1px solid #1E2535", borderBottom: "1px solid #1E2535" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="font-mono text-sm tracking-[0.3em] mb-4" style={{ color: "#00F5FF" }}>
              {"// WHAT WE BUILD FOR FINTECHS"}
            </p>
            <h2
              className="font-grotesk font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#FFFFFF" }}
            >
              The full fintech stack,{" "}
              <span style={{ color: "#00F5FF" }}>end to end.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-7 flex flex-col gap-4 group transition-all duration-300"
                  style={{ background: "#080B12", border: "1px solid #1E2535" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00F5FF40";
                    e.currentTarget.style.boxShadow = "0 0 30px #00F5FF10";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1E2535";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "#00F5FF12", border: "1px solid #00F5FF25" }}
                  >
                    <Icon size={20} style={{ color: "#00F5FF" }} />
                  </div>
                  <h3 className="font-grotesk font-semibold text-lg" style={{ color: "#FFFFFF" }}>
                    {svc.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0ADB8", lineHeight: "1.75" }}>
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{ background: "#00F5FF0A", border: "1px solid #00F5FF25", color: "#00F5FF" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case study — Flyhi Finance ─────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-[0.3em] text-center mb-12"
            style={{ color: "#00F5FF" }}
          >
            {"// REAL WORK, REAL NBFC"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #00F5FF25", background: "linear-gradient(135deg, #0a1628 0%, #0d2240 50%, #080B12 100%)" }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <span
                    className="font-mono text-xs tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                    style={{ background: "#00F5FF15", border: "1px solid #00F5FF30", color: "#00F5FF" }}
                  >
                    FINTECH · NBFC · LIVE IN PRODUCTION
                  </span>
                  <h3 className="font-grotesk font-bold text-2xl" style={{ color: "#FFFFFF" }}>
                    Flyhi Finance
                  </h3>
                  <a
                    href="https://flyhifinance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs mt-1 inline-block transition-colors"
                    style={{ color: "#3E5070" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00F5FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3E5070")}
                  >
                    flyhifinance.com ↗
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-mono text-xs tracking-widest mb-4" style={{ color: "#3E5070" }}>
                    WHAT WE DELIVERED
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Complete loan origination system (LOS)",
                      "KYC & document verification flows",
                      "Personal, education & MSME loan products",
                      "Borrower dashboard & repayment portal",
                      "Admin panel with portfolio analytics",
                      "AWS cloud infrastructure & CI/CD",
                      "RBI-compliant audit logging",
                      "Razorpay payment & collections integration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#00F5FF" }} />
                        <span className="font-sans text-sm" style={{ color: "#A0ADB8" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="font-mono text-xs tracking-widest mb-1" style={{ color: "#3E5070" }}>
                    TECH STACK USED
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Razorpay", "Digio", "Redis"].map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{ background: "#0F1420", border: "1px solid #1E2535", color: "#A0ADB8" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-4 p-5 rounded-xl"
                    style={{ background: "#080B12", border: "1px solid #1E2535" }}
                  >
                    <p className="font-mono text-xs tracking-widest mb-3" style={{ color: "#3E5070" }}>
                      SCOPE
                    </p>
                    {[
                      ["Engagement", "End-to-end product build"],
                      ["Products", "Personal · Education · MSME loans"],
                      ["Delivery", "Backend + Frontend + Infra + Compliance"],
                      ["Status", "Live in Production ✓"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm py-2" style={{ borderBottom: "1px solid #1E253540" }}>
                        <span style={{ color: "#3E5070" }}>{k}</span>
                        <span style={{ color: "#FFFFFF" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech stack credibility ─────────────────────────────────────── */}
      <section
        className="px-6 py-16"
        style={{ background: "#0A0E18", borderTop: "1px solid #1E2535", borderBottom: "1px solid #1E2535" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs tracking-widest mb-8" style={{ color: "#3E5070" }}>
            FINTECH TECH STACK WE WORK WITH
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200"
                style={{ background: "#141B2D", border: "1px solid #2E3D56", color: "#8A9BB5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00F5FF50";
                  e.currentTarget.style.color = "#00F5FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2E3D56";
                  e.currentTarget.style.color = "#8A9BB5";
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, #00F5FF06 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: "#00F5FF" }}>
              {"// READY TO BUILD?"}
            </p>
            <h2
              className="font-grotesk font-bold mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "#FFFFFF" }}
            >
              Let&apos;s talk about
              <br />
              <span style={{ color: "#00F5FF" }}>your fintech product.</span>
            </h2>
            <p className="font-sans mb-10" style={{ color: "#A0ADB8", fontSize: "1rem", lineHeight: "1.8" }}>
              Free 30-minute discovery call. No pitch decks, no sales fluff — just an honest
              conversation about your product, your timeline, and what it takes to build it right.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <WhatsAppCTA label="Book Free Discovery Call" trackingLabel="footer-primary" />
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 font-grotesk font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                style={{ border: "1.5px solid #1E2535", color: "#A0ADB8", fontSize: "1rem" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00F5FF50";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E2535";
                  e.currentTarget.style.color = "#A0ADB8";
                }}
              >
                <Phone size={15} />
                +91 957105 8866
              </a>
            </div>

            {/* Response time guarantee */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full" style={{ background: "#0A0E18", border: "1px solid #1E2535" }}>
              <Clock size={14} style={{ color: "#00F5FF" }} />
              <span className="font-mono text-xs" style={{ color: "#A0ADB8" }}>
                We respond within <span style={{ color: "#FFFFFF" }}>24 hours</span> · Mon–Sat, 9AM–7PM IST
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal footer ─────────────────────────────────────────────── */}
      <footer
        className="px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid #1E2535" }}
      >
        <div className="flex items-center gap-1 font-grotesk font-bold">
          <span className="font-mono" style={{ color: "#00F5FF" }}>{`{`}</span>
          <span style={{ color: "#FFFFFF" }}>BeOnline</span>
          <span style={{ color: "#00F5FF" }}>.club</span>
          <span className="font-mono" style={{ color: "#00F5FF" }}>{`}`}</span>
        </div>
        <p className="font-mono text-xs" style={{ color: "#3E5070" }}>
          © {new Date().getFullYear()} BeOnline.club · All rights reserved
        </p>
        <a
          href="/"
          className="font-mono text-xs transition-colors"
          style={{ color: "#3E5070" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#A0ADB8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#3E5070")}
        >
          ← Back to main site
        </a>
      </footer>
    </div>
  );
}
