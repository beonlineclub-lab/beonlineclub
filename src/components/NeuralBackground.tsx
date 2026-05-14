"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function NeuralBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.5 } },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: "#00F5FF" },
          links: {
            color: "#00F5FF",
            distance: 140,
            enable: true,
            opacity: 0.35,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: {
            value: 90,
            density: { enable: true, width: 1400 },
          },
          opacity: {
            value: { min: 0.4, max: 0.85 },
            animation: { enable: true, speed: 1, sync: false },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1.5, max: 3.5 },
            animation: { enable: true, speed: 2, sync: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
