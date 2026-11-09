import React from "react";
import { EXPERIENCE } from "../content.js";

function Tag({ children }) {
  return (
    <span className="font-mono text-[11px] px-2 py-1 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
      {children}
    </span>
  );
}

function ExperienceEntry({ entry, isLast }) {
  return (
    <article
      className={`grid md:grid-cols-[11rem_1fr] gap-3 md:gap-10 py-10 ${
        isLast ? "" : "border-b border-stone-200 dark:border-stone-800"
      }`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-400 pt-1">{entry.dateLabel}</p>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
            {entry.org}
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400">{entry.place}</p>
        </div>
        <p className="mt-1 text-sm font-medium text-copper">{entry.role}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">{entry.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceTimeline() {
  return (
    <div>
      {EXPERIENCE.map((entry, index) => (
        <ExperienceEntry
          key={`${entry.org}-${entry.dateLabel}`}
          entry={entry}
          isLast={index === EXPERIENCE.length - 1}
        />
      ))}
    </div>
  );
}
