import React from "react";
import { ABOUT } from "../content.js";
import { sectionIndex } from "../nav.js";
import portrait from "../../images/img1.png";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader index={sectionIndex("about")} eyebrow="About" title="A short brief" />
      <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          {ABOUT.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="md:col-span-5 flex justify-center">
          <img
            src={portrait}
            alt="Illustrated portrait of Piyush Purohit at a desk"
            className="w-auto max-h-[16rem] md:max-h-[18rem] object-contain object-center"
          />
        </div>
      </div>
    </Section>
  );
}
