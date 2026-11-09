import React from "react";
import { SITE } from "../site.js";

const LINKS = [
  { href: `mailto:${SITE.email}`, label: "Email", detail: SITE.email, external: false },
  { href: SITE.linkedin, label: "LinkedIn", detail: "piyushpurohit08", external: true },
  { href: SITE.github, label: "GitHub", detail: "github.com/piyush474", external: true },
];

export default function ContactIcons() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group block border border-stone-200 dark:border-stone-800 p-5 hover:border-copper transition-colors"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-copper">
            {link.label}
          </p>
          <p className="mt-3 text-sm text-stone-800 dark:text-stone-200 break-all">
            {link.detail}
          </p>
        </a>
      ))}
    </div>
  );
}
