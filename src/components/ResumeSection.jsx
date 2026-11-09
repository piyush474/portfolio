import React from "react";
import { SITE } from "../site.js";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

function ResumeCard({ href, download, kicker, title, detail }) {
  const extra = download
    ? { download }
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <a
      href={href}
      {...extra}
      className="group flex flex-col justify-between min-h-[160px] border border-stone-200 dark:border-stone-800 p-6 md:p-8 hover:border-copper transition-colors"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-copper">
        {kicker}
      </p>
      <div>
        <p className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
          {title}
        </p>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{detail}</p>
      </div>
    </a>
  );
}

export default function ResumeSection() {
  return (
    <Section id="resume">
      <SectionHeader
        index={sectionIndex("resume")}
        eyebrow="Resume"
        title="One pager"
        description="A PDF of recent roles, systems, and education. Open it in the browser or save a copy."
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <ResumeCard
          href={SITE.resume}
          kicker="View"
          title="Open PDF"
          detail="Read it in a new tab."
        />
        <ResumeCard
          href={SITE.resume}
          download="PiyushPurohit_Resume.pdf"
          kicker="Download"
          title="Save PDF"
          detail="PiyushPurohit_Resume.pdf"
        />
      </div>
    </Section>
  );
}
