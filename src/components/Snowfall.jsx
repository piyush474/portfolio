import React, { useEffect, useRef } from "react";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useLowPower.js";
import { useTheme } from "../context/ThemeContext.jsx";

function createFlake(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.7 + Math.random() * 1.4,
    vy: 0.18 + Math.random() * 0.38,
    vx: -0.12 + Math.random() * 0.24,
    sway: 0.006 + Math.random() * 0.008,
    phase: Math.random() * Math.PI * 2,
  };
}

function sizeCanvas(canvas, ctx) {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function stepFlake(flake, width, height) {
  flake.phase += flake.sway;
  flake.x += flake.vx + Math.sin(flake.phase) * 0.18;
  flake.y += flake.vy;
  if (flake.y > height + 6) {
    flake.y = -6;
    flake.x = Math.random() * width;
  } else if (flake.x < -6) {
    flake.x = width + 6;
  } else if (flake.x > width + 6) {
    flake.x = -6;
  }
}

function drawFlake(ctx, flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
  ctx.fill();
}

export default function Snowfall() {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { isDark } = useTheme();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const count = isMobile ? 56 : 92;
    const flakes = [];
    let raf = 0;
    let running = true;

    const seed = () => {
      flakes.length = 0;
      const width = window.innerWidth;
      const height = window.innerHeight;
      for (let i = 0; i < count; i += 1) {
        flakes.push(createFlake(width, height));
      }
    };

    const resize = () => sizeCanvas(canvas, ctx);

    resize();
    seed();
    window.addEventListener("resize", resize);

    const color = isDark ? "rgba(245, 242, 235, 0.32)" : "rgba(87, 83, 78, 0.42)";

    const tick = () => {
      if (!running) return;
      if (document.hidden) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      flakes.forEach((flake) => {
        stepFlake(flake, width, height);
        drawFlake(ctx, flake);
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, isDark, isMobile]);

  if (reduced) return null;

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]" />
  );
}
