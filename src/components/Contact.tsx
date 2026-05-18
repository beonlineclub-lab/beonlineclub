"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

type FormState = "idle" | "sending" | "success";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/beonline.club/" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/beonline-club-5a617640b/" },
];

const contactMeta = [
  { icon: Mail, label: "beonlineclub@gmail.com", href: "mailto:beonlineclub@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp +91 70118 81097", href: "https://wa.me/917011881097" },
  { icon: MapPin, label: "India · Available Worldwide", href: null },
];

function TerminalField({
  prompt,
  name,
  type = "text",
  placeholder,
  required = false,
  multiline = false,
  value,
  onChange,
}: {
  prompt: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const baseStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#FFFFFF",
    fontFamily: "var(--font-jetbrains-mono)",
    fontSize: "0.9rem",
    width: "100%",
    resize: "none" as const,
    caretColor: "#00F5FF",
  };

  return (
    <div
      className="relative pb-3 transition-all duration-300"
      style={{
        borderBottom: `1px solid ${focused ? "#00F5FF" : "#1E2535"}`,
        boxShadow: focused ? "0 1px 0 #00F5FF33" : "none",
      }}
    >
      <div className="flex gap-3 items-start">
        <span
          className="font-mono text-sm mt-0.5 flex-shrink-0 transition-colors duration-300"
          style={{ color: focused ? "#00F5FF" : "#3E5070" }}
        >
          &gt; {prompt}
        </span>
        {multiline ? (
          <textarea
            name={name}
            rows={4}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...baseStyle, lineHeight: "1.7" }}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...baseStyle, height: "2rem" }}
          />
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "", email: "", company: "", message: "",
  });

  const set = (key: keyof typeof fields) => (v: string) =>
    setFields((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("idle");
      alert("Something went wrong. Please email us directly at beonlineclub@gmail.com");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
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
          width: 600,
          height: 600,
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, #00F5FF07 0%, transparent 70%)",
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
            {"// LET'S TALK"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-grotesk font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFFFFF" }}
          >
            Got an idea?{" "}
            <span style={{ color: "#00F5FF" }}>Let&apos;s build it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans"
            style={{ color: "#A0ADB8", fontSize: "1rem" }}
          >
            Tell us about your project and we&apos;ll get back within 24 hours.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Terminal form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{ background: "#0A0E18", border: "1px solid #1E2535" }}
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
              <span className="ml-3 font-mono text-xs" style={{ color: "#3E5070" }}>
                beonline.club — new_project.sh
              </span>
            </div>

            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-12 flex flex-col gap-3"
              >
                <p className="font-mono text-sm" style={{ color: "#3E5070" }}>
                  $ send_message --to beonlineclub@gmail.com
                </p>
                <p className="font-mono text-base" style={{ color: "#00F5FF" }}>
                  &gt; Connecting to server...
                </p>
                <p className="font-mono text-base" style={{ color: "#39FF14" }}>
                  &gt; Message received. We&apos;ll be in touch soon. ✓
                </p>
                <p className="font-mono text-sm mt-2" style={{ color: "#3E5070" }}>
                  Expected response time: &lt; 24h
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <TerminalField
                  prompt="Your name:"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={fields.name}
                  onChange={set("name")}
                />
                <TerminalField
                  prompt="Your email:"
                  name="email"
                  type="email"
                  placeholder="john@startup.com"
                  required
                  value={fields.email}
                  onChange={set("email")}
                />
                <TerminalField
                  prompt="Company:"
                  name="company"
                  placeholder="Acme Inc. (optional)"
                  value={fields.company}
                  onChange={set("company")}
                />
                <TerminalField
                  prompt="Tell us about your project:"
                  name="message"
                  placeholder="We need a mobile app that..."
                  required
                  multiline
                  value={fields.message}
                  onChange={set("message")}
                />

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="mt-2 flex items-center gap-3 font-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 self-start"
                  style={{
                    background: formState === "sending" ? "#00F5FF22" : "#00F5FF",
                    color: formState === "sending" ? "#00F5FF" : "#080B12",
                    border: "1px solid #00F5FF",
                    boxShadow: formState === "sending" ? "none" : "0 0 20px #00F5FF33",
                    cursor: formState === "sending" ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== "sending") {
                      e.currentTarget.style.boxShadow = "0 0 32px #00F5FF66";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 20px #00F5FF33";
                  }}
                >
                  {formState === "sending" ? (
                    <>
                      <span className="animate-pulse">Sending</span>
                      <span className="animate-cursor-blink">_</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                      <span className="animate-cursor-blink">_</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            {/* Info block */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: "#0A0E18", border: "1px solid #1E2535" }}
            >
              <p className="font-mono text-xs tracking-widest" style={{ color: "#3E5070" }}>
                REACH US DIRECTLY
              </p>
              {contactMeta.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#00F5FF12", border: "1px solid #00F5FF25" }}
                  >
                    <Icon size={16} style={{ color: "#00F5FF" }} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm transition-colors duration-200 hover:text-accent-cyan"
                      style={{ color: "#A0ADB8" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00F5FF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#A0ADB8")}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-sans text-sm" style={{ color: "#A0ADB8" }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social block */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: "#0A0E18", border: "1px solid #1E2535" }}
            >
              <p className="font-mono text-xs tracking-widest" style={{ color: "#3E5070" }}>
                FIND US ONLINE
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "#141B2D",
                      border: "1px solid #2E3D56",
                      color: "#A0ADB8",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00F5FF15";
                      e.currentTarget.style.borderColor = "#00F5FF50";
                      e.currentTarget.style.color = "#00F5FF";
                      e.currentTarget.style.boxShadow = "0 0 16px #00F5FF22";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#141B2D";
                      e.currentTarget.style.borderColor = "#2E3D56";
                      e.currentTarget.style.color = "#A0ADB8";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="rounded-2xl p-6 flex items-center gap-4"
              style={{ background: "#00F5FF08", border: "1px solid #00F5FF20" }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full" style={{ background: "#39FF14" }} />
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "#39FF1466" }}
                />
              </div>
              <div>
                <p className="font-grotesk font-semibold text-sm" style={{ color: "#FFFFFF" }}>
                  Usually reply within 24 hours
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "#A0ADB8" }}>
                  Mon – Sat, 9 AM – 7 PM IST
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
