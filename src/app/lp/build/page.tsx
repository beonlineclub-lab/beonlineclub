"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Clock, Star, Shield } from "lucide-react";

// ─── Config — swap CTA_LINK to a Calendly URL when ready ─────────────────────
const WA_NUMBER = "918000511720";
const WA_MESSAGE = encodeURIComponent(
  "Hi BeOnline.club! I saw your ad and I have a tech idea I'd like to discuss. Can we hop on a quick call?"
);
const CTA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const PHONE_LINK = `tel:+${WA_NUMBER}`;

// ─── Shared CTA ───────────────────────────────────────────────────────────────
function CTAButton({
  label = "Book My Free Call →",
  size = "lg",
  tracking = "cta",
}: {
  label?: string;
  size?: "lg" | "md";
  tracking?: string;
}) {
  const lg = size === "lg";
  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={tracking}
      className="inline-flex items-center gap-3 font-grotesk font-bold rounded-xl transition-all duration-300 group"
      style={{
        background: "#00F5FF",
        color: "#080B12",
        fontSize: lg ? "1.05rem" : "0.9rem",
        padding: lg ? "15px 30px" : "11px 22px",
        boxShadow: "0 0 30px #00F5FF44",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 50px #00F5FF88";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 30px #00F5FF44";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
      <ArrowRight size={lg ? 17 : 14} className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const tickerItems = [
  "💳 Fintech", "🛒 E-Commerce", "🧑‍💼 Personal Brands", "📦 SaaS",
  "🏥 HealthTech", "🤖 AI & Automation", "📱 Mobile Apps", "🎓 EdTech",
  "💳 Fintech", "🛒 E-Commerce", "🧑‍💼 Personal Brands", "📦 SaaS",
  "🏥 HealthTech", "🤖 AI & Automation", "📱 Mobile Apps", "🎓 EdTech",
];

const painPoints = [
  { text: "You have a clear vision but no technical co-founder." },
  { text: "You've been quoted ₹5L–₹20L with no clear breakdown." },
  { text: "You hired someone once and got half-finished code." },
  { text: "You don't know React from a spreadsheet — and you shouldn't have to." },
];

const industries = [
  { emoji: "💳", name: "Fintech", builds: "Payment systems, KYC flows, trading dashboards, wallets" },
  { emoji: "🛒", name: "E-Commerce", builds: "Custom stores, headless commerce, inventory systems" },
  { emoji: "🧑‍💼", name: "Personal Brand", builds: "Portfolio sites, booking systems, content platforms" },
  { emoji: "🤖", name: "AI & Automation", builds: "Chatbots, workflow automation, AI-powered tools" },
  { emoji: "🏥", name: "HealthTech", builds: "Patient portals, appointment systems, health dashboards" },
  { emoji: "📦", name: "SaaS", builds: "MVPs, dashboards, subscription platforms" },
];

const steps = [
  {
    number: "01",
    title: "Tell us your idea",
    subtitle: "Free 30-min call",
    description: "No tech knowledge needed. Just tell us the problem you're solving and what you want to build.",
  },
  {
    number: "02",
    title: "We plan & quote",
    subtitle: "Clear scope. No surprises.",
    description: "Realistic timeline, honest pricing, no hidden costs. You know exactly what you're getting before we start.",
  },
  {
    number: "03",
    title: "We build & deliver",
    subtitle: "A real working product.",
    description: "You get a live product with documentation and post-launch support. We don't ghost after delivery.",
  },
];

const testimonials = [
  {
    quote: "We had an idea for a fintech app for 2 years. BeOnline.club shipped it in 6 weeks.",
    name: "Rahul M.",
    role: "Founder, Fintech Startup",
    stars: 5,
  },
  {
    quote: "They explained everything in plain English and delivered exactly what we asked for. No jargon, no delays.",
    name: "Priya S.",
    role: "E-Commerce Brand Owner",
    stars: 5,
  },
  {
    quote: "Our Shopify store wasn't cutting it. They built us a custom platform and our conversions doubled.",
    name: "Arjun K.",
    role: "D2C Brand Founder",
    stars: 5,
  },
];

const credStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "48hr", label: "Average First Response" },
  { value: "100%", label: "Project Completion Rate" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BuildLP() {
  const painRef = useRef(null);
  const painInView = useInView(painRef, { once: true, margin: "-60px" });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen font-sans" style={{ background: "#080B12", color: "#FFFFFF" }}>

      {/* ── Minimal header ──────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5 h-16"
        style={{
          background: "rgba(8,11,18,0.92)",
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
        <CTAButton label="Book Free Call" size="md" tracking="header" />
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative px-5 pt-16 pb-20 overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(#1E253508 1px, transparent 1px), linear-gradient(90deg, #1E253508 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        {/* Glow */}
        <div className="absolute pointer-events-none" style={{
          width: 700, height: 500, top: "-20%", left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #00F5FF09 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full font-mono text-xs tracking-widest"
            style={{ background: "#00F5FF12", border: "1px solid #00F5FF30", color: "#00F5FF" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            FOR SMALL BUSINESSES & STARTUPS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-grotesk font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)" }}
          >
            Got a Tech Idea?
            <br />
            <span style={{ color: "#00F5FF" }}>We&apos;ll Build It.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="font-sans mb-10 max-w-xl mx-auto"
            style={{ color: "#A0ADB8", fontSize: "1.1rem", lineHeight: "1.85" }}
          >
            Stuck on where to start, who to trust, or how to ship fast?
            <br className="hidden sm:block" />
            We&apos;re the tech team that turns your idea into a real product —
            without the jargon, delays, or agency runaround.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <CTAButton label="Let's Talk About Your Idea →" tracking="hero" />
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 font-sans text-sm transition-colors duration-200"
              style={{ color: "#A0ADB8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A0ADB8")}
            >
              <Phone size={14} />
              +91 80005 11720
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Scrolling ticker ────────────────────────────────────────────── */}
      <div
        style={{
          background: "#0A0E18",
          borderTop: "1px solid #1E2535",
          borderBottom: "1px solid #1E2535",
          padding: "14px 0",
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            width: "max-content",
            animation: "ticker-left 28s linear infinite",
          }}
        >
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest whitespace-nowrap"
              style={{ color: "#A0ADB8", padding: "0 28px" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Pain section ────────────────────────────────────────────────── */}
      <section ref={painRef} className="px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={painInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: "#00F5FF" }}>
              {"// WE GET IT"}
            </p>
            <h2 className="font-grotesk font-bold" style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)" }}>
              Building tech is hard when...
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={painInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "#0A0E18", border: "1px solid #1E2535" }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold mt-0.5"
                  style={{ background: "#FF004415", border: "1px solid #FF004430", color: "#FF0044" }}
                >
                  ✕
                </span>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0ADB8", lineHeight: "1.75" }}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={painInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center py-8 px-6 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #00F5FF08, #7B2FFF08)", border: "1px solid #00F5FF20" }}
          >
            <p className="font-grotesk font-bold text-xl mb-2" style={{ color: "#FFFFFF" }}>
              That&apos;s exactly why we exist.
            </p>
            <p className="font-sans text-sm" style={{ color: "#A0ADB8" }}>
              We speak plain English, give honest quotes, and ship real products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industries / Solutions ──────────────────────────────────────── */}
      <section
        className="px-5 py-20"
        style={{ background: "#0A0E18", borderTop: "1px solid #1E2535", borderBottom: "1px solid #1E2535" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-[0.25em] mb-4"
              style={{ color: "#00F5FF" }}
            >
              {"// WHAT WE BUILD"}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-grotesk font-bold"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)" }}
            >
              Whatever your industry,{" "}
              <span style={{ color: "#00F5FF" }}>we&apos;ve solved it.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group"
                style={{ background: "#080B12", border: "1px solid #1E2535" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00F5FF35";
                  e.currentTarget.style.background = "#00F5FF05";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E2535";
                  e.currentTarget.style.background = "#080B12";
                }}
              >
                <span className="text-2xl flex-shrink-0">{ind.emoji}</span>
                <div>
                  <p className="font-grotesk font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                    {ind.name}
                  </p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#A0ADB8" }}>
                    {ind.builds}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-sans text-sm italic"
            style={{ color: "#3E5070" }}
          >
            Don&apos;t see your industry? We&apos;ve probably built it anyway.{" "}
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#00F5FF" }}>
              Just ask.
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section ref={stepsRef} className="px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              className="font-mono text-sm tracking-[0.25em] mb-4"
              style={{ color: "#00F5FF" }}
            >
              {"// HOW IT WORKS"}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-grotesk font-bold"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)" }}
            >
              From idea to live product{" "}
              <span style={{ color: "#00F5FF" }}>in 3 steps.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-14 w-px"
                    style={{ height: "calc(100% - 3rem)", background: "linear-gradient(to bottom, #00F5FF30, transparent)" }}
                  />
                )}

                {/* Step number */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-sm z-10"
                  style={{
                    background: "#080B12",
                    border: "2px solid #00F5FF",
                    color: "#00F5FF",
                    boxShadow: "0 0 16px #00F5FF30",
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-grotesk font-bold text-lg" style={{ color: "#FFFFFF" }}>
                      {step.title}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{ background: "#00F5FF12", border: "1px solid #00F5FF25", color: "#00F5FF" }}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#A0ADB8", lineHeight: "1.75" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ─────────────────────────────────────────────────── */}
      <section
        className="px-5 py-20"
        style={{ background: "#0A0E18", borderTop: "1px solid #1E2535", borderBottom: "1px solid #1E2535" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-[0.25em] mb-4"
              style={{ color: "#00F5FF" }}
            >
              {"// WHAT OUR CLIENTS SAY"}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-grotesk font-bold"
              style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)" }}
            >
              Don&apos;t take our word for it.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ background: "#080B12", border: "1px solid #1E2535" }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={13} fill="#FBBF24" style={{ color: "#FBBF24" }} />
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "#A0ADB8", lineHeight: "1.75" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-2" style={{ borderTop: "1px solid #1E2535" }}>
                  <p className="font-grotesk font-semibold text-sm" style={{ color: "#FFFFFF" }}>
                    {t.name}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "#3E5070" }}>
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credibility stats ────────────────────────────────────────────── */}
      <section className="px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <span
                  className="font-grotesk font-bold"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
                >
                  {s.value.replace(/(\d+)/, (n) => n)}
                  {s.value.includes("+") && (
                    <span style={{ color: "#00F5FF" }}>+</span>
                  )}
                </span>
                <div className="w-6 h-px" style={{ background: "#00F5FF" }} />
                <span className="font-mono text-xs tracking-widest" style={{ color: "#A0ADB8" }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section
        className="px-5 py-24 relative overflow-hidden"
        style={{ background: "#0A0E18", borderTop: "1px solid #1E2535" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, #00F5FF07 0%, transparent 70%)",
        }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: "#00F5FF" }}>
              {"// YOUR MOVE"}
            </p>
            <h2
              className="font-grotesk font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
            >
              Stop sitting{" "}
              <span style={{ color: "#00F5FF" }}>on your idea.</span>
            </h2>
            <p className="font-sans mb-10 max-w-lg mx-auto" style={{ color: "#A0ADB8", fontSize: "1.05rem", lineHeight: "1.85" }}>
              Every week you wait is a week your competitor gets ahead. Book a free 30-minute
              call — no pitch, no pressure, just clarity on what it&apos;ll take to build your product.
            </p>

            <div className="flex flex-col items-center gap-5">
              <CTAButton label="Book My Free Call →" tracking="footer" />

              {/* Trust note */}
              <div className="flex items-center gap-2">
                <Shield size={13} style={{ color: "#3E5070" }} />
                <span className="font-sans text-xs" style={{ color: "#3E5070" }}>
                  No commitment. No sales pressure. Just honest advice.
                </span>
              </div>

              {/* Response guarantee */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-full"
                style={{ background: "#080B12", border: "1px solid #1E2535" }}
              >
                <Clock size={13} style={{ color: "#00F5FF" }} />
                <span className="font-mono text-xs" style={{ color: "#A0ADB8" }}>
                  We respond within{" "}
                  <span style={{ color: "#FFFFFF" }}>48 hours</span> · Mon–Sat, 9AM–7PM IST
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal footer ───────────────────────────────────────────────── */}
      <footer
        className="px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid #1E2535" }}
      >
        <div>
          <div className="flex items-center gap-1 font-grotesk font-bold mb-1">
            <span className="font-mono" style={{ color: "#00F5FF" }}>{`{`}</span>
            <span>BeOnline</span>
            <span style={{ color: "#00F5FF" }}>.club</span>
            <span className="font-mono" style={{ color: "#00F5FF" }}>{`}`}</span>
          </div>
          <p className="font-mono text-xs" style={{ color: "#3E5070" }}>
            Your tech team, on demand.
          </p>
        </div>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a
            href="mailto:beonlineclub@gmail.com"
            className="font-mono text-xs transition-colors"
            style={{ color: "#3E5070" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A0ADB8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3E5070")}
          >
            beonlineclub@gmail.com
          </a>
          <span style={{ color: "#1E2535" }}>·</span>
          <a href="#" className="font-mono text-xs" style={{ color: "#3E5070" }}>Privacy Policy</a>
          <span style={{ color: "#1E2535" }}>·</span>
          <a href="#" className="font-mono text-xs" style={{ color: "#3E5070" }}>Terms</a>
        </div>

        <a
          href="/"
          className="font-mono text-xs transition-colors"
          style={{ color: "#3E5070" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#A0ADB8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#3E5070")}
        >
          ← Main site
        </a>
      </footer>

    </div>
  );
}
