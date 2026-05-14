"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Flyhi Finance",
    url: "https://flyhifinance.com/",
    industry: "Fintech",
    description:
      "End-to-end student loan onboarding and management system built for a registered NBFC — from KYC to disbursement.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Razorpay"],
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d2240 40%, #003366 100%)",
    accent: "#00F5FF",
    pattern: "fintech",
    featured: true,
  },
  {
    name: "Wedding Manual",
    url: "https://theweddingmanual.com/",
    industry: "SaaS / Events",
    description:
      "Full-featured wedding management platform used by planners to coordinate vendors, budgets, and timelines seamlessly.",
    stack: ["Next.js", "MongoDB", "Stripe", "Vercel"],
    gradient: "linear-gradient(135deg, #1a0a1e 0%, #2d1040 40%, #4a1060 100%)",
    accent: "#C084FC",
    pattern: "events",
    featured: false,
  },
  {
    name: "YogaKaro",
    url: "https://m.yogakro.com/",
    industry: "Health & Wellness",
    description:
      "Custom yoga and wellness platform with session booking, instructor profiles, and live class streaming.",
    stack: ["React", "Firebase", "Node.js", "Razorpay"],
    gradient: "linear-gradient(135deg, #051a10 0%, #0a3020 40%, #0d4a2a 100%)",
    accent: "#39FF14",
    pattern: "wellness",
    featured: false,
  },
  {
    name: "Milkorra",
    url: "https://milkoraa.com/",
    industry: "E-commerce",
    description:
      "Hyperlocal marketplace connecting dairy farms and consumers — subscriptions, daily delivery, and product discovery.",
    stack: ["Next.js", "Node.js", "MongoDB", "AWS"],
    gradient: "linear-gradient(135deg, #1a1000 0%, #2e1d00 40%, #3d2800 100%)",
    accent: "#FBBF24",
    pattern: "marketplace",
    featured: false,
  },
  {
    name: "Luxuraa Ceramics",
    url: "https://luxuraceramics.com/",
    industry: "Luxury E-commerce",
    description:
      "Premium ceramics brand storefront with curated collections, custom product configurator, and white-glove checkout.",
    stack: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    gradient: "linear-gradient(135deg, #12100e 0%, #1c1814 40%, #2a2218 100%)",
    accent: "#D4A843",
    pattern: "luxury",
    featured: false,
  },
];

function CardPattern({
  pattern,
  accent,
}: {
  pattern: string;
  accent: string;
}) {
  if (pattern === "fintech")
    return (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="fg1" cx="80%" cy="20%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fg1)" />
        {[40, 80, 120, 160, 200].map((r, i) => (
          <circle key={i} cx="85%" cy="15%" r={r} fill="none" stroke={accent} strokeOpacity="0.07" strokeWidth="1" />
        ))}
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke={accent} strokeOpacity="0.05" strokeWidth="1" strokeDasharray="8 12" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke={accent} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="8 12" />
      </svg>
    );

  if (pattern === "events")
    return (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="eg1" cx="20%" cy="80%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#eg1)" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <line key={i}
            x1="20%" y1="80%"
            x2={`${20 + 80 * Math.cos((deg * Math.PI) / 180)}%`}
            y2={`${80 + 60 * Math.sin((deg * Math.PI) / 180)}%`}
            stroke={accent} strokeOpacity="0.06" strokeWidth="1"
          />
        ))}
      </svg>
    );

  if (pattern === "wellness")
    return (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="wg1" cx="50%" cy="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.1" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#wg1)" />
        <ellipse cx="50%" cy="50%" rx="35%" ry="35%" fill="none" stroke={accent} strokeOpacity="0.08" strokeWidth="1" />
        <ellipse cx="50%" cy="50%" rx="25%" ry="25%" fill="none" stroke={accent} strokeOpacity="0.06" strokeWidth="1" />
        <ellipse cx="50%" cy="50%" rx="15%" ry="15%" fill="none" stroke={accent} strokeOpacity="0.1" strokeWidth="1" />
      </svg>
    );

  if (pattern === "marketplace")
    return (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="mg1" cx="30%" cy="70%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mg1)" />
        {Array.from({ length: 5 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <rect key={`${i}-${j}`} x={`${i * 22 + 5}%`} y={`${j * 28 + 5}%`}
              width="14%" height="18%" rx="4"
              fill="none" stroke={accent} strokeOpacity="0.05" strokeWidth="1"
            />
          ))
        )}
      </svg>
    );

  // luxury
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="lg1" cx="70%" cy="30%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#lg1)" />
      <line x1="0" y1="0" x2="100%" y2="100%" stroke={accent} strokeOpacity="0.05" strokeWidth="1" />
      <line x1="100%" y1="0" x2="0" y2="100%" stroke={accent} strokeOpacity="0.05" strokeWidth="1" />
      <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke={accent} strokeOpacity="0.06" strokeWidth="1" />
      <rect x="20%" y="20%" width="60%" height="60%" fill="none" stroke={accent} strokeOpacity="0.04" strokeWidth="1" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    e.currentTarget.style.borderColor = "#1E2535";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "col-span-1 md:col-span-2" : "col-span-1"}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
        style={{
          background: project.gradient,
          border: "1px solid #1E2535",
          minHeight: featured ? 340 : 280,
          transition: "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = project.accent + "55";
          e.currentTarget.style.boxShadow = `0 20px 60px ${project.accent}18`;
        }}
      >
        {/* Abstract pattern */}
        <CardPattern pattern={project.pattern} accent={project.accent} />

        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(8,11,18,0.95) 0%, rgba(8,11,18,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-7 flex flex-col justify-end h-full" style={{ minHeight: featured ? 340 : 280 }}>
          {/* Top row */}
          <div className="flex items-start justify-between mb-auto">
            <span
              className="font-mono text-xs tracking-widest px-3 py-1 rounded-full"
              style={{
                background: project.accent + "18",
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
            >
              {project.industry}
            </span>

            {/* Hover arrow */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: project.accent,
                color: "#080B12",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Bottom content */}
          <div className="mt-16">
            <h3
              className="font-grotesk font-bold mb-2"
              style={{ fontSize: featured ? "1.6rem" : "1.25rem", color: "#FFFFFF" }}
            >
              {project.name}
            </h3>
            <p
              className="font-sans text-sm mb-4 leading-relaxed max-w-md"
              style={{ color: "#A0ADB8", lineHeight: "1.65" }}
            >
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-1 rounded"
                  style={{
                    background: "#0F1420",
                    border: "1px solid #1E2535",
                    color: "#A0ADB8",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View case study — slides up on hover */}
            <div className="mt-4 overflow-hidden h-6">
              <p
                className="font-mono text-xs tracking-widest translate-y-6 group-hover:translate-y-0 transition-transform duration-300"
                style={{ color: project.accent }}
              >
                VIEW CASE STUDY →
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const headerRef = useRef(null);

  return (
    <section
      id="work"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* Subtle divider from services */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #1E2535, transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 500,
          bottom: "10%",
          right: "-10%",
          background: "radial-gradient(circle, #00F5FF07 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm tracking-[0.3em] mb-4"
            style={{ color: "#00F5FF" }}
          >
            {"// OUR WORK"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Projects that shipped.{" "}
            <span style={{ color: "#00F5FF" }}>Products that grew.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans"
            style={{ color: "#A0ADB8", fontSize: "1rem" }}
          >
            Real work for real startups — from MVP to scale.
          </motion.p>
        </div>

        {/* Grid: featured (span-2) + 4 regular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              featured={project.featured}
            />
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
            className="inline-flex items-center gap-2 font-grotesk font-semibold text-sm tracking-wide group transition-all duration-300"
            style={{ color: "#00F5FF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textShadow = "0 0 16px #00F5FF88")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textShadow = "none")
            }
          >
            View Full Portfolio
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
