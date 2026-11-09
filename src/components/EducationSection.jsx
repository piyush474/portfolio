import React from "react";
import SectionHeader from "./SectionHeader.jsx";

const SCHOOLS = [
  {
    school: "Santa Clara University",
    location: "Santa Clara, CA",
    degree: "Master of Science in Computer Science and Engineering",
    dates: "September 2023 – June 2025",
  },
  {
    school: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor of Engineering in Computer Science",
    dates: "August 2016 – November 2020",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 px-5 md:px-8 py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="05" eyebrow="Education" title="School" />

        <div className="space-y-10">
          {SCHOOLS.map((item) => (
            <article key={item.school} className="text-stone-700 dark:text-stone-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-100">
                  {item.school}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">{item.location}</p>
              </div>
              <p className="mt-1 text-base md:text-lg">{item.degree}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-stone-400">
                {item.dates}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-stone-500 dark:text-stone-400">
          AWS Solutions Architect Associate, 2025
        </p>
      </div>
    </section>
  );
}
