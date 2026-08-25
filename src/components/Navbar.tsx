"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,11,18,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #1E253540" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-1 font-grotesk font-bold text-xl text-white hover:opacity-90 transition-opacity"
          >
            <span
              className="font-mono font-bold text-lg"
              style={{ color: "#00F5FF" }}
            >
              {"{"}
            </span>
            <span>BeOnline</span>
            <span style={{ color: "#00F5FF" }}>.club</span>
            <span
              className="font-mono font-bold text-lg"
              style={{ color: "#00F5FF" }}
            >
              {"}"}
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-grotesk text-sm font-medium transition-colors duration-200 hover:text-accent-cyan"
                  style={{ color: "#A0ADB8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00F5FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A0ADB8")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="hidden md:inline-flex items-center font-grotesk font-semibold text-sm px-5 py-2 rounded-lg transition-all duration-300"
            style={{
              border: "1.5px solid #00F5FF",
              color: "#00F5FF",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00F5FF";
              e.currentTarget.style.color = "#080B12";
              e.currentTarget.style.boxShadow = "0 0 20px #00F5FF44";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00F5FF";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Let&apos;s Build →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ color: "#00F5FF" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "rgba(8,11,18,0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Top bar spacer */}
            <div className="h-16" />

            {/* Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-grotesk font-bold text-3xl text-white transition-colors hover:text-accent-cyan"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00F5FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-4 font-grotesk font-semibold text-lg px-10 py-3 rounded-xl transition-all"
                style={{
                  background: "#00F5FF",
                  color: "#080B12",
                  boxShadow: "0 0 30px #00F5FF44",
                }}
              >
                Let&apos;s Build →
              </motion.a>
            </div>

            {/* Bottom branding */}
            <div className="pb-10 text-center">
              <span className="font-mono text-xs tracking-widest" style={{ color: "#1E2535" }}>
                BEONLINE.CLUB
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
