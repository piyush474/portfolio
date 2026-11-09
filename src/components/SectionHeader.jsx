import React from "react";
import BrushStroke from "./BrushStroke.jsx";

export default function SectionHeader({ index, eyebrow, title, description }) {
  return (
    <header className="relative mb-6 md:mb-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
        {index} — {eyebrow}
      </p>
      <div className="mt-3 flex items-end justify-between gap-6 border-b border-stone-300 dark:border-stone-700 pb-5">
        <div>
          <h2 className="relative isolate w-fit font-display text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-none tracking-tight">
            <BrushStroke className="z-0 -left-[calc(10%+8px)] -top-[28%] w-[calc(124%+16px)] h-[168%]" />
            <span className="relative z-[1]">{title}</span>
          </h2>
          {description ? (
            <p className="mt-3 max-w-xl text-base text-stone-500 dark:text-stone-400">
              {description}
            </p>
          ) : null}
        </div>
        <span
          aria-hidden="true"
          className="hidden sm:block font-display text-6xl md:text-7xl leading-none text-stone-200 dark:text-stone-800 select-none"
        >
          {index}
        </span>
      </div>
    </header>
  );
}
