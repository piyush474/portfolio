import React from "react";
import { CERTIFICATION, SCHOOLS } from "../content.js";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

function SchoolItem({ school, location, degree, dates }) {
  return (
    <article className="text-stone-700 dark:text-stone-300">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-100">{school}</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{location}</p>
      </div>
      <p className="mt-1 text-base md:text-lg">{degree}</p>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-stone-400">{dates}</p>
    </article>
  );
}

export default function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader index={sectionIndex("education")} eyebrow="Education" title="School" />
      <div className="space-y-10">
        {SCHOOLS.map((item) => (
          <SchoolItem key={item.school} {...item} />
        ))}
      </div>
      <p className="mt-12 text-sm text-stone-500 dark:text-stone-400">{CERTIFICATION}</p>
    </Section>
  );
}
