"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Code2,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Native iOS, Android, and web apps built for performance and growth.",
    color: "#00F5FF",
    animation: "animate-float-1",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Custom AI integrations, automation pipelines, and ML features built into your product.",
    color: "#7B2FFF",
    animation: "animate-pulse-slow",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, Docker, CI/CD — infrastructure that scales with you.",
    color: "#00F5FF",
    animation: "animate-float-2",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design systems and interfaces that users love and investors notice.",
    color: "#7B2FFF",
    animation: "animate-float-3",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end engineering — backend, frontend, APIs, databases.",
    color: "#00F5FF",
    animation: "animate-pulse-slow",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description:
      "Architecture reviews, tech stack decisions, and CTO-level guidance for early-stage founders.",
    color: "#7B2FFF",
    animation: "animate-float-1",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300"
      style={{
        background: "#0F1420",
        border: "1px solid #1E2535",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = service.color + "55";
        el.style.boxShadow = `0 0 30px ${service.color}18, 0 8px 32px rgba(0,0,0,0.4)`;
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#1E2535";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Glowing top border line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.animation}`}
        style={{
          background: service.color + "15",
          border: `1px solid ${service.color}30`,
        }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      {/* Text */}
      <div>
        <h3
          className="font-grotesk font-semibold mb-2"
          style={{ fontSize: "1.1rem", color: "#FFFFFF" }}
        >
          {service.title}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "#A0ADB8", lineHeight: "1.7" }}
        >
          {service.description}
        </p>
      </div>

      {/* Arrow — appears on hover */}
      <div
        className="mt-auto font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
        style={{ color: service.color }}
      >
        LEARN MORE →
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, #7B2FFF0A 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00F5FF" }}
          >
            {"// WHAT WE DO"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Everything your startup needs{" "}
            <span style={{ color: "#00F5FF" }}>to ship fast.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans max-w-xl mx-auto"
            style={{ color: "#A0ADB8", fontSize: "1rem", lineHeight: "1.7" }}
          >
            From idea to production — we cover the full stack so you don&apos;t
            have to hire five agencies.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-grotesk font-semibold text-sm tracking-wide transition-all duration-300 group"
            style={{ color: "#00F5FF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textShadow = "0 0 16px #00F5FF88")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textShadow = "none")
            }
          >
            See All Services
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
