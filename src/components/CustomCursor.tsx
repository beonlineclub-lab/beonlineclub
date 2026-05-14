"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    // Lerp ring towards mouse every frame
    const tick = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setHovered(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setHovered(false);
      }
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  return (
    <>
      {/* Glowing dot — snaps to cursor */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicked ? 6 : 8,
          height: clicked ? 6 : 8,
          borderRadius: "50%",
          background: hovered ? "#ffffff" : "#00F5FF",
          boxShadow: hovered
            ? "0 0 8px #ffffff, 0 0 16px #ffffff88"
            : "0 0 10px #00F5FF, 0 0 22px #00F5FFaa, 0 0 40px #00F5FF44",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "width 0.15s ease, height 0.15s ease, background 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? 44 : clicked ? 24 : 32,
          height: hovered ? 44 : clicked ? 24 : 32,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "rgba(255,255,255,0.6)" : "rgba(0,245,255,0.5)"}`,
          boxShadow: hovered
            ? "0 0 12px rgba(255,255,255,0.2), inset 0 0 8px rgba(255,255,255,0.05)"
            : "0 0 12px rgba(0,245,255,0.2)",
          background: hovered ? "rgba(0,245,255,0.05)" : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
