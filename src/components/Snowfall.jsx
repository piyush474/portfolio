import React, { useEffect, useRef } from "react";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useLowPower.js";
import { useTheme } from "../context/ThemeContext.jsx";

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
    const count = isMobile ? 28 : 46;
    const flakes = [];
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      flakes.length = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let i = 0; i < count; i += 1) {
        flakes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.7 + Math.random() * 1.4,
          vy: 0.18 + Math.random() * 0.38,
          vx: -0.12 + Math.random() * 0.24,
          sway: 0.006 + Math.random() * 0.008,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    seed();
    window.addEventListener("resize", resize);

    const color = isDark
      ? "rgba(245, 242, 235, 0.32)"
      : "rgba(87, 83, 78, 0.42)";

    const tick = () => {
      if (!running) return;
      if (document.hidden) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (let i = 0; i < flakes.length; i += 1) {
        const f = flakes[i];
        f.phase += f.sway;
        f.x += f.vx + Math.sin(f.phase) * 0.18;
        f.y += f.vy;
        if (f.y > h + 6) {
          f.y = -6;
          f.x = Math.random() * w;
        } else if (f.x < -6) {
          f.x = w + 6;
        } else if (f.x > w + 6) {
          f.x = -6;
        }
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
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
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
