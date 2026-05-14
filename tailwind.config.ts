import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#080B12",
        "bg-card": "#0F1420",
        "accent-cyan": "#00F5FF",
        "accent-purple": "#7B2FFF",
        "text-primary": "#FFFFFF",
        "text-muted": "#A0ADB8",
        border: "#1E2535",
        "red-cta": "#FF0044",
        "neon-green": "#39FF14",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "ticker-left": "ticker-left 30s linear infinite",
        "ticker-right": "ticker-right 30s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float-1": "float1 8s ease-in-out infinite",
        "float-2": "float2 10s ease-in-out infinite",
        "float-3": "float3 12s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-arrow": "bounceArrow 2s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        "ticker-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-30px) translateX(15px)" },
          "66%": { transform: "translateY(15px) translateX(-20px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-40px) rotate(180deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) scale(1)" },
          "40%": { transform: "translateY(20px) translateX(-15px) scale(1.1)" },
          "70%": { transform: "translateY(-20px) translateX(25px) scale(0.9)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
