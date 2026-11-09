import React from "react";
import { SITE } from "../site.js";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-stone-200 dark:border-stone-800 px-5 md:px-8 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-400">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}
