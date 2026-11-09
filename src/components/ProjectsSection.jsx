import React from "react";
import { PROJECTS, isProjectLive } from "../registry.js";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { ProjectTile } from "./ProjectCard.jsx";

export default function ProjectsSection() {
  const liveCount = PROJECTS.filter(isProjectLive).length;

  return (
    <Section id="projects">
      <SectionHeader
        index={sectionIndex("projects")}
        eyebrow="Projects"
        title="Select projects"
        description="Accent Mirror, Visual Recs, and MiniMQ. GitHub is linked; live URLs land here when demos ship."
      />
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-400">
        {liveCount}/{PROJECTS.length} live
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectTile key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
