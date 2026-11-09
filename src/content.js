export const ABOUT = [
  "Software engineer with 4+ years building and shipping production ML systems — low-latency model serving, automated LLM evaluation and hallucination guardrails, graph-based abuse detection, and semantic retrieval.",
  "At Meta I built Trust & Safety enforcement and evaluation infrastructure that measures over-enforcement and gates ML experimentation. Previously at Media.net I built real-time embedding-based ad matching and Kafka/Flink feature pipelines.",
];

export const EXPERIENCE = [
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

export const SCHOOLS = [
  {
    school: "Santa Clara University",
    location: "Santa Clara, CA",
    degree: "Master of Science in Computer Science and Engineering",
    dates: "September 2023 – June 2025",
  },
  {
    school: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor of Engineering in Computer Science",
    dates: "August 2016 – November 2020",
  },
];

export const CERTIFICATION = "AWS Solutions Architect Associate, 2025";

export const TOOLKIT = [
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
