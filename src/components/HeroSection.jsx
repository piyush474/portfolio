import React from "react";
import { SITE } from "../site.js";
import { scrollToId } from "../lib/scroll.js";
import { useLowPower } from "../hooks/useLowPower.js";
import Typewriter from "./Typewriter.jsx";

function HeroButton({ to, children, variant = "solid" }) {
  const className =
    variant === "solid"
      ? "px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-copper dark:hover:bg-copper dark:hover:text-white transition-colors"
      : "px-5 py-2.5 border border-stone-300 dark:border-stone-700 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-700 dark:text-stone-200 hover:border-copper hover:text-copper transition-colors";

  return (
    <button type="button" onClick={() => scrollToId(to)} className={className}>
      {children}
    </button>
  );
}

export default function HeroSection() {
  const lowPower = useLowPower();

  return (
    <section id="hero" className="relative min-h-screen px-5 md:px-8 flex items-center scroll-mt-0 pt-14">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 md:gap-10 items-end">
        <div className="md:col-span-7 animate-fade-in-up">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Software engineer</p>
          <h1 className="mt-4 font-display text-stone-900 dark:text-white leading-[0.9] tracking-tight text-[18vw] md:text-8xl lg:text-[7.5rem]">
            <span className="block">{SITE.firstName}</span>
            <span className="block italic text-copper">{SITE.lastName}</span>
          </h1>
        </div>

        <div className="md:col-span-5 md:pb-3 animate-fade-in">
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">{SITE.roles.join(" · ")}</p>
          <p className="mt-4 text-sm text-stone-500 dark:text-stone-400 min-h-[1.5em]">
            {lowPower ? SITE.typewriter[0] : <Typewriter phrases={SITE.typewriter} />}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <HeroButton to="experience">View Experience</HeroButton>
            <HeroButton to="contact" variant="outline">
              Contact me
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
}
