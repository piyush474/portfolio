import { padIndex } from "./lib/format.js";

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const SECTION_IDS = ["hero", ...NAV.map((item) => item.id)];

export function sectionIndex(id) {
  return padIndex(NAV.findIndex((item) => item.id === id));
}
