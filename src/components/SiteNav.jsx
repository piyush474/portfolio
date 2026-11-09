import React, { useCallback, useState } from "react";
import { NAV, SECTION_IDS } from "../nav.js";
import { padIndex } from "../lib/format.js";
import { scrollToId } from "../lib/scroll.js";
import { events, track } from "../lib/analytics.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { useOverlay } from "../hooks/useOverlay.js";
import ThemeToggle from "./ThemeToggle.jsx";
import Monogram from "./Monogram.jsx";

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

function DesktopNavLink({ item, active, onGo }) {
  return (
    <button
      type="button"
      onClick={() => onGo(item.id)}
      className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
        active === item.id
          ? "text-copper"
          : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
      }`}
    >
      {item.label}
    </button>
  );
}

function MobileNavLink({ item, index, onGo }) {
  return (
    <button type="button" onClick={() => onGo(item.id)} className="text-left flex items-baseline gap-4">
      <span className="font-mono text-[11px] text-copper">{padIndex(index)}</span>
      <span className="font-display text-3xl text-stone-900 dark:text-stone-100">{item.label}</span>
    </button>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS, "hero");
  const close = useCallback(() => setOpen(false), []);

  useOverlay(open, close);

  const go = (id, source = "nav") => {
    if (source === "nav") track(events.nav(id));
    close();
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[70] border-b border-stone-200/80 dark:border-stone-800 bg-[#f5f2eb]/85 dark:bg-[#12100e]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
          <button type="button" onClick={() => go("hero", "monogram")} className="flex items-center gap-2">
            <Monogram />
          </button>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV.map((item) => (
              <DesktopNavLink key={item.id} item={item} active={active} onGo={go} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="md:hidden fixed inset-0 z-[60] min-h-dvh bg-[#f5f2eb] dark:bg-[#12100e] px-5 pt-20 pb-10 overflow-y-auto overscroll-contain"
        >
          <nav className="flex flex-col gap-5">
            {NAV.map((item, index) => (
              <MobileNavLink key={item.id} item={item} index={index} onGo={go} />
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
