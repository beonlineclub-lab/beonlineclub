"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", color: "#00F5FF" },
  { value: 30,  suffix: "+", label: "Happy Clients",      color: "#7B2FFF" },
  { value: 5,   suffix: "+", label: "Years Experience",   color: "#00F5FF" },
  { value: 10,  suffix: "+", label: "Industries Served",  color: "#7B2FFF" },
  { value: 99,  suffix: "%", label: "Client Retention",   color: "#00F5FF" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const start = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof stats)[0];
  index: number;
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      {/* Number */}
      <div className="relative mb-3">
        <span
          className="font-grotesk font-bold leading-none"
          style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "#FFFFFF" }}
        >
          {count}
        </span>
        <span
          className="font-grotesk font-bold leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            color: stat.color,
            textShadow: `0 0 30px ${stat.color}66`,
          }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="w-8 h-px mb-3 transition-all duration-500 group-hover:w-16"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />

      {/* Label */}
      <p
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "#A0ADB8" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1E2535, transparent)" }}
      />

      {/* Dot-grid SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#1E2535" fillOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none animate-float-1"
        style={{
          width: 500,
          height: 400,
          top: "50%",
          left: "25%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, #00F5FF0A 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute pointer-events-none animate-float-2"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          right: "15%",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, #7B2FFF0A 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Card container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00F5FF" }}
          >
            {"// BY THE NUMBERS"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Scale that{" "}
            <span style={{ color: "#00F5FF" }}>speaks for itself.</span>
          </motion.h2>
        </div>

        {/* Stats row */}
        <div
          className="rounded-2xl py-14 px-8"
          style={{
            background: "#0A0E18",
            border: "1px solid #1E2535",
            boxShadow: "0 0 60px #00F5FF08, inset 0 1px 0 #1E2535",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
