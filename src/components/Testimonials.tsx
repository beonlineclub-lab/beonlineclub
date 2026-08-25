"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "[ Add a real client quote here — e.g. 'BeOnline built our entire loan platform from scratch. They handled everything from KYC flows to Razorpay integration, and we went live without a single compliance issue.' ]",
    name: "[ Client Name ]",
    title: "[ Founder / CTO ]",
    company: "Flyhi Finance",
    accent: "#00F5FF",
    initial: "F",
  },
  {
    quote:
      "[ Add a real client quote here — e.g. 'We needed a complex multi-vendor coordination tool, not just a website. BeOnline understood the domain immediately and delivered a platform our planners actually love using.' ]",
    name: "[ Client Name ]",
    title: "[ Founder / CEO ]",
    company: "Wedding Manual",
    accent: "#C084FC",
    initial: "W",
  },
  {
    quote:
      "[ Add a real client quote here — e.g. 'From booking engine to live streaming, BeOnline handled a technically complex build without cutting corners. Highly recommend for any founder who needs a real engineering team.' ]",
    name: "[ Client Name ]",
    title: "[ Founder ]",
    company: "YogaKaro",
    accent: "#39FF14",
    initial: "Y",
  },
];

export default function Testimonials() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#050810" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1E2535, transparent)" }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 500,
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #7B2FFF07 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={headerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00F5FF" }}
          >
            {"// WHAT CLIENTS SAY"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Founders who{" "}
            <span style={{ color: "#00F5FF" }}>shipped with us.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                background: "#0A0E18",
                border: "1px solid #1E2535",
              }}
            >
              {/* Quote mark */}
              <span
                className="font-grotesk font-bold mb-5 leading-none select-none"
                style={{ fontSize: "3.5rem", color: t.accent, opacity: 0.25, lineHeight: 1 }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="font-sans text-sm leading-relaxed flex-1 mb-8"
                style={{ color: "#A0ADB8", lineHeight: "1.75" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-grotesk font-bold text-sm flex-shrink-0"
                  style={{
                    background: t.accent + "20",
                    border: `1px solid ${t.accent}40`,
                    color: t.accent,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-grotesk font-semibold text-sm" style={{ color: "#FFFFFF" }}>
                    {t.name}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "#3E5070" }}>
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clutch badge callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center mt-12"
        >
          <p className="font-mono text-xs tracking-widest" style={{ color: "#3E5070" }}>
            RECOGNISED AS A{" "}
            <a
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "#00F5FF" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#00F5FF")}
            >
              CLUTCH TOP DEVELOPER
            </a>{" "}
            · 500+ PROJECTS DELIVERED ACROSS 10+ COUNTRIES
          </p>
        </motion.div>
      </div>
    </section>
  );
}
