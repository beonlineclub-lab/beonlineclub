"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Real clients with styled text logos
const clients = [
  { name: "Flyhi Finance", tag: "FINTECH", accent: "#00F5FF", url: "https://flyhifinance.com/" },
  { name: "Wedding Manual", tag: "SAAS", accent: "#C084FC", url: "https://theweddingmanual.com/" },
  { name: "YogaKaro", tag: "WELLNESS", accent: "#39FF14", url: "https://m.yogakro.com/" },
  { name: "Milkorra", tag: "E-COMMERCE", accent: "#FBBF24", url: "https://milkoraa.com/" },
  { name: "Luxuraa Ceramics", tag: "LUXURY", accent: "#D4A843", url: "https://luxuraceramics.com/" },
];

// Doubled for seamless infinite loop
const row1 = [...clients, ...clients, ...clients];
const row2 = [...[...clients].reverse(), ...[...clients].reverse(), ...[...clients].reverse()];

function LogoBadge({
  client,
  size = "md",
}: {
  client: (typeof clients)[0];
  size?: "sm" | "md";
}) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 flex flex-col items-center justify-center gap-1 rounded-xl transition-all duration-300 cursor-pointer select-none"
      style={{
        width: size === "md" ? 180 : 150,
        height: size === "md" ? 72 : 60,
        background: "#141B2D",
        border: "1px solid #2E3D56",
        padding: "0 20px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = client.accent + "70";
        el.style.boxShadow = `0 0 24px ${client.accent}25`;
        el.style.background = client.accent + "12";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#2E3D56";
        el.style.boxShadow = "none";
        el.style.background = "#141B2D";
      }}
    >
      <span
        className="font-grotesk font-bold whitespace-nowrap text-center transition-colors duration-300"
        style={{
          fontSize: size === "md" ? "0.85rem" : "0.75rem",
          color: "#8A9BB5",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = client.accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB5")}
      >
        {client.name}
      </span>
      <span
        className="font-mono transition-colors duration-300"
        style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#3E5070" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = client.accent + "AA")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3E5070")}
      >
        {client.tag}
      </span>
    </a>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 40,
}: {
  items: (typeof clients)[0][];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="overflow-hidden w-full" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
      <div
        className="flex gap-4"
        style={{
          animation: `${reverse ? "ticker-right" : "ticker-left"} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {items.map((client, i) => (
          <LogoBadge key={`${client.name}-${i}`} client={client} size="md" />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      id="clients"
      className="relative py-28 overflow-hidden"
      style={{ background: "#080B12" }}
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
          width: 500,
          height: 400,
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #7B2FFF08 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00F5FF" }}
          >
            {"// TRUSTED BY"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Startups and founders{" "}
            <span style={{ color: "#00F5FF" }}>who chose us.</span>
          </motion.h2>
        </div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4 mb-16"
        >
          <MarqueeRow items={row1} reverse={false} speed={35} />
          <MarqueeRow items={row2} reverse={true} speed={45} />
        </motion.div>

        {/* Static grid */}
        <div ref={gridRef} className="px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex justify-center"
              >
                <LogoBadge client={client} size="sm" />
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center font-mono text-xs tracking-widest"
            style={{ color: "#4A607A" }}
          >
            Across SaaS · HealthTech · Fintech · E-commerce · and more
          </motion.p>
        </div>
      </div>
    </section>
  );
}
