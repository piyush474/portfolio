import React from "react";
import { isProjectLive } from "../registry.js";
import { padIndex } from "../lib/format.js";

function StatusLabel({ live, placeholder, comingSoon }) {
  if (live) {
    return (
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
        Live
      </span>
    );
  }
  if (placeholder) {
    return (
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">Available slot</span>
    );
  }
  if (comingSoon) {
    return (
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Coming soon</span>
    );
  }
  return null;
}

function StackList({ items }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectAction({ live, githubUrl }) {
  const chip =
    "shrink-0 inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200";

  if (live) {
    return (
      <span className={`${chip} group-hover:border-copper group-hover:text-copper transition-colors`}>
        Visit ↗
      </span>
    );
  }

  if (githubUrl) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${chip} hover:border-copper hover:text-copper transition-colors`}
        onClick={(event) => event.stopPropagation()}
      >
        GitHub ↗
      </a>
    );
  }

  return <span className="font-mono text-[11px] text-stone-400">URL pending</span>;
}

export function ProjectTile({ project, index }) {
  const live = isProjectLive(project);
  const Wrapper = live ? "a" : "article";
  const wrapperProps = live
    ? {
        href: project.prodUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col justify-between min-h-[280px] p-6 md:p-8 border transition-colors ${
        project.placeholder
          ? "border-dashed border-stone-300 dark:border-stone-700 bg-transparent"
          : "border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 hover:border-copper"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-stone-400">{padIndex(index)}</span>
          <StatusLabel live={live} placeholder={project.placeholder} comingSoon={project.comingSoon} />
        </div>
        <h3 className="mt-6 font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
          {project.name}
        </h3>
        <p className="mt-1 text-sm italic text-stone-500 dark:text-stone-400">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{project.description}</p>
      </div>

      <div className="mt-8 flex items-end justify-between gap-3">
        <StackList items={project.stack} />
        <ProjectAction live={live} githubUrl={project.githubUrl} />
      </div>
    </Wrapper>
  );
}
