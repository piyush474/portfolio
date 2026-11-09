import React from "react";
import SectionHeader from "./SectionHeader.jsx";

const GROUPS = [
  {
    title: "Languages & APIs",
    items: ["Python", "Java", "Go", "C++", "TypeScript", "Rust", "SQL", "FastAPI", "Spring Boot", "gRPC"],
  },
  {
    title: "ML & LLMs",
    items: [
      "TensorFlow",
      "Model serving",
      "RAG",
      "Embeddings",
      "LLM evaluation",
      "Guardrails",
      "LangGraph",
      "Vector search",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Kafka",
      "Flink",
      "Redis",
      "PostgreSQL",
      "Jenkins",
    ],
  },
];

export default function TechCarousel() {
  return (
    <section id="toolkit" className="relative z-10 px-5 md:px-8 py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Toolkit"
          title="Toolkit"
          description="Languages, ML systems, and infrastructure used to ship production software."
        />
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-stone-600 dark:text-stone-300 border-b border-stone-200/80 dark:border-stone-800 pb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
