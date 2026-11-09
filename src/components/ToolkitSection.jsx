import React from "react";
import { TOOLKIT } from "../content.js";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";

function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-copper">{title}</h3>
      <ul className="mt-4 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-stone-600 dark:text-stone-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ToolkitSection() {
  return (
    <Section id="toolkit">
      <SectionHeader
        index={sectionIndex("toolkit")}
        eyebrow="Toolkit"
        title="Toolkit"
        description="Languages, ML systems, and infrastructure used to ship production software."
      />
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {TOOLKIT.map((group) => (
          <SkillGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </Section>
  );
}
