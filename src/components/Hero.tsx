"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TypewriterText from "./TypewriterText";
import FloatingOrbs from "./FloatingOrbs";

const NeuralBackground = dynamic(() => import("./NeuralBackground"), {
  ssr: false,
  loading: () => null,
});

const tickerItems = [
  "⚡ TOP STARTUP STUDIO",
  "🏆 CLUTCH TOP DEVELOPER",
  "🚀 500+ PROJECTS DELIVERED",
  "🌍 CLIENTS IN 10+ COUNTRIES",
  "💡 AI-FIRST ENGINEERING",
  "🔐 ENTERPRISE-GRADE SECURITY",
  "⚡ TOP STARTUP STUDIO",
  "🏆 CLUTCH TOP DEVELOPER",
  "🚀 500+ PROJECTS DELIVERED",
  "🌍 CLIENTS IN 10+ COUNTRIES",
  "💡 AI-FIRST ENGINEERING",
  "🔐 ENTERPRISE-GRADE SECURITY",
];

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
  };
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* Particle neural network */}
      <NeuralBackground />

      {/* Floating 3D orbs & geometry */}
      <FloatingOrbs />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(#1E253508 1px, transparent 1px),
            linear-gradient(90deg, #1E253508 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080B12 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl w-full mx-auto">
        {/* Top label */}
        <motion.div {...fadeUpProps(0)} className="mb-6">
          <span
            className="font-mono text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.3em] uppercase"
            style={{ color: "#00F5FF" }}
          >
            [ FULL-STACK SOFTWARE STUDIO ]
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUpProps(0.15)}
          className="font-grotesk font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 7vw, 5rem)", color: "#FFFFFF" }}
        >
          BeOnline{" "}
          <span className="glow-cyan-text" style={{ color: "#00F5FF" }}>
            with us
          </span>
        </motion.h1>

        {/* Typewriter subheading */}
        <motion.div
          {...fadeUpProps(0.3)}
          className="mb-10 h-8"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          <TypewriterText />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fadeUpProps(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="font-grotesk font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            style={{
              background: "#00F5FF",
              color: "#080B12",
              fontSize: "1rem",
              boxShadow: "0 0 24px #00F5FF44",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 40px #00F5FF88")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 24px #00F5FF44")
            }
          >
            Start a Project →
          </a>
          <a
            href="#work"
            className="font-grotesk font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            style={{
              border: "1.5px solid #00F5FF",
              color: "#00F5FF",
              background: "transparent",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00F5FF15";
              e.currentTarget.style.boxShadow = "0 0 20px #00F5FF33";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Our Work
          </a>
        </motion.div>

        {/* Ticker strip */}
        <motion.div
          {...fadeUpProps(0.6)}
          className="max-w-3xl mx-auto rounded-xl overflow-hidden ticker-wrap"
          style={{
            background: "#0F1420",
            border: "1px solid #1E2535",
            padding: "12px 0",
            width: "calc(100% - 2rem)",
          }}
        >
          <div className="ticker-track">
            {tickerItems.map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs tracking-widest mx-4 sm:mx-8 whitespace-nowrap"
                style={{ color: "#A0ADB8" }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: "#A0ADB8" }}
        >
          SCROLL
        </span>
        <ArrowDown
          size={18}
          style={{ color: "#00F5FF" }}
          className="animate-bounce-arrow"
        />
      </motion.div>
    </section>
  );
}
