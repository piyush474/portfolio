import React from "react";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";
import ExperienceTimeline from "./ExperienceTimeline.jsx";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        index={sectionIndex("experience")}
        eyebrow="Experience"
        title="Work experience"
        description="4+ years (non-internship) experience building fullstack products and production ML systems."
      />
      <ExperienceTimeline />
    </Section>
  );
}
