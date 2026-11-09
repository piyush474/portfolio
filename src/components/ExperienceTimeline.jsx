import React from "react";

const ENTRIES = [
  {
    dateLabel: "Apr 2025 — Oct 2026",
    org: "Meta",
    role: "Software Engineer",
    place: "Menlo Park, CA",
    description:
      "Built Trust & Safety enforcement and evaluation infrastructure. Designed an automated LLM evaluation framework with a four-stage anti-hallucination pipeline, a low-latency multi-task serving path for negative feedback scoring, a unified multi-surface enforcement framework, and a multi-tier recidivist detection engine using device-linked graphs.",
    tags: ["LLM evaluation", "Model serving", "Trust & Safety", "Graph analysis", "Python"],
  },
  {
    dateLabel: "Jan 2025 — Mar 2025",
    org: "Career Launch",
    role: "Software Engineer Intern",
    place: "San Ramon, CA",
    description:
      "Architected and deployed core backend services, database schemas, and AWS infrastructure from scratch, scaling to 10K+ users and 100K+ daily records.",
    tags: ["AWS", "Backend", "Postgres"],
  },
  {
    dateLabel: "Jan 2024 — Jun 2024",
    org: "Santa Clara University",
    role: "Research Assistant",
    place: "Santa Clara, CA",
    description:
      "Built a compiler engine for parsing recursive queries in the distributed database system Apache AsterixDB.",
    tags: ["AsterixDB", "Query compilers"],
  },
  {
    dateLabel: "Jan 2021 — Aug 2023",
    org: "Media.net",
    role: "Software Engineer II",
    place: "Mumbai, India",
    description:
      "Architected a real-time keyword ad-serving engine with Universal Sentence Encoder embeddings and Redis (sub-20 ms bids, +150% ad revenue). Built Flink/Kafka/Aerospike feature pipelines processing 200K+ events/day, high-throughput Spring Boot reporting APIs, and Kubernetes CI/CD on AWS.",
    tags: ["Embeddings", "Kafka", "Flink", "Redis", "Kubernetes", "Java"],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-5xl mx-auto">
      {ENTRIES.map((entry, i) => (
        <article
          key={`${entry.org}-${entry.dateLabel}`}
          className={`grid md:grid-cols-[11rem_1fr] gap-3 md:gap-10 py-10 ${
            i !== ENTRIES.length - 1 ? "border-b border-stone-200 dark:border-stone-800" : ""
          }`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-400 pt-1">
            {entry.dateLabel}
          </p>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-display text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
                {entry.org}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">{entry.place}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-copper">{entry.role}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
              {entry.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-1 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
