import React from "react";
import { SITE } from "../site.js";
import { sectionIndex } from "../nav.js";
import Section from "./Section.jsx";
import SectionHeader from "./SectionHeader.jsx";
import ContactIcons from "./ContactIcons.jsx";

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeader
        index={sectionIndex("contact")}
        eyebrow="Contact"
        title="Say hello"
        description={`${SITE.location} · ${SITE.phone}`}
      />
      <ContactIcons />
    </Section>
  );
}
