import React from "react";
import { SITE } from "../site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative z-10 px-5 md:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="06"
          eyebrow="Resume"
          title="One pager"
          description="A PDF of recent roles, systems, and education. Open it in the browser or save a copy."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between min-h-[160px] border border-stone-200 dark:border-stone-800 p-6 md:p-8 hover:border-copper transition-colors"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-copper">
              View
            </p>
            <div>
              <p className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
                Open PDF
              </p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                Read it in a new tab.
              </p>
            </div>
          </a>

          <a
            href={SITE.resume}
            download="PiyushPurohit_Resume.pdf"
            className="group flex flex-col justify-between min-h-[160px] border border-stone-200 dark:border-stone-800 p-6 md:p-8 hover:border-copper transition-colors"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-copper">
              Download
            </p>
            <div>
              <p className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
                Save PDF
              </p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                PiyushPurohit_Resume.pdf
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
