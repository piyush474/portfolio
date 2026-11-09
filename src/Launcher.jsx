import React, { useEffect, useState } from "react";
import { PROJECTS, isProjectLive } from "./registry.js";
import { SITE } from "./site.js";
import TechCarousel from "./components/TechCarousel.jsx";
import Typewriter from "./components/Typewriter.jsx";
import ContactIcons from "./components/ContactIcons.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Monogram from "./components/Monogram.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import { ProjectTile } from "./components/ProjectCard.jsx";
import { useLowPower } from "./hooks/useLowPower.js";
import Snowfall from "./components/Snowfall.jsx";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", ...NAV.map((n) => n.id)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const go = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-stone-200/80 dark:border-stone-800 bg-[#f5f2eb]/85 dark:bg-[#12100e]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <button type="button" onClick={() => go("hero")} className="flex items-center gap-2">
          <Monogram />
        </button>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active === item.id
                  ? "text-copper"
                  : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#f5f2eb] dark:bg-[#12100e] px-5 py-6">
          <div className="flex items-center justify-between">
            <Monogram />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="h-9 w-9 border border-stone-300 dark:border-stone-700 inline-flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-5">
            {NAV.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="text-left flex items-baseline gap-4"
              >
                <span className="font-mono text-[11px] text-copper">0{i + 1}</span>
                <span className="font-display text-3xl text-stone-900 dark:text-stone-100">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-5 md:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" eyebrow="About" title="A short brief" />
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            <p>
              Software engineer with 4+ years building and shipping production ML
              systems — low-latency model serving, automated LLM evaluation and
              hallucination guardrails, graph-based abuse detection, and semantic retrieval.
            </p>
            <p>
              At Meta I built Trust &amp; Safety enforcement and evaluation infrastructure
              that measures over-enforcement and gates ML experimentation. Previously at
              Media.net I built real-time embedding-based ad matching and Kafka/Flink
              feature pipelines.
            </p>
          </div>
          <aside className="md:col-span-5 md:border-l md:border-stone-200 dark:md:border-stone-800 md:pl-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400">
              Based in
            </p>
            <p className="mt-2 font-display text-3xl text-stone-900 dark:text-stone-100">
              {SITE.location}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-300">
              <li>Python, Java, Go</li>
              <li>Distributed systems on Kubernetes and AWS</li>
              <li>LLM evals, serving, and retrieval</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-5 md:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Work"
          description="4+ years of experience building fullstack products and production ML systems."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-5 md:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title="Say hello"
          description={`${SITE.location} · ${SITE.phone}`}
        />
        <ContactIcons />
      </div>
    </section>
  );
}

export default function Launcher() {
  const lowPower = useLowPower();
  const liveCount = PROJECTS.filter(isProjectLive).length;

  return (
    <div className="min-h-screen bg-page paper-grid">
      <Snowfall />
      <div className="relative z-10">
      <SiteNav />

      <section
        id="hero"
        className="relative min-h-screen px-5 md:px-8 flex items-center scroll-mt-0 pt-14"
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7 animate-fade-in-up">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
              Software engineer
            </p>
            <h1 className="mt-4 font-display text-stone-900 dark:text-white leading-[0.9] tracking-tight text-[18vw] md:text-8xl lg:text-[7.5rem]">
              <span className="block">{SITE.firstName}</span>
              <span className="block italic text-copper">{SITE.lastName}</span>
            </h1>
          </div>

          <div className="md:col-span-5 md:pb-3 animate-fade-in">
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              {SITE.roles.join(" · ")}
            </p>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-400 min-h-[1.5em]">
              {lowPower ? SITE.typewriter[0] : <Typewriter phrases={SITE.typewriter} />}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToId("projects")}
                className="px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-copper dark:hover:bg-copper dark:hover:text-white transition-colors"
              >
                View work
              </button>
              <a
                href={`mailto:${SITE.email}`}
                className="px-5 py-2.5 border border-stone-300 dark:border-stone-700 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-700 dark:text-stone-200 hover:border-copper hover:text-copper transition-colors"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <TechCarousel />

      <div id="projects" className="relative z-10 px-5 md:px-8 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="03"
            eyebrow="Projects"
            title="Selected work"
            description="Accent Mirror, Visual Recs, and MiniMQ. GitHub is linked; live URLs land here when demos ship."
          />
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-400">
            {liveCount}/{PROJECTS.length} live
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {PROJECTS.map((p, idx) => (
              <ProjectTile key={p.id} project={p} index={idx} />
            ))}
          </div>
        </div>
      </div>

      <ExperienceSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />

      <footer className="relative z-10 border-t border-stone-200 dark:border-stone-800 px-5 md:px-8 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-400">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Sunnyvale, CA</span>
        </div>
      </footer>
      </div>
    </div>
  );
}
