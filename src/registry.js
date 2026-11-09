// Project registry.
//
// Fill prodUrl when a demo ships. The card switches from "Coming Soon" to "Live".
// githubUrl is shown whenever it is set.

export const PROJECTS = [
  {
    id: "accent-mirror",
    name: "Accent Mirror",
    tagline: "Your voice. Their accent.",
    description:
      "Accent Mirror (working name) lets anyone hear their own voice in another accent: record or type a line, pick an accent or type a character, and hear yourself say it. The output always keeps the user's own voice; only pronunciation and delivery change.",
    stack: ["ElevenLabs", "LLM Guardrails", "Next.js", "Supabase"],
    color: "#8a5a38",
    spineHighlight: "#c48a62",
    spineShadow: "#4a2e1c",
    icon: "voice",
    scene: "accent",
    prodUrl: "",
    githubUrl: "https://github.com/piyush474/AccentMirror",
    comingSoon: true,
  },
  {
    id: "visual-recs",
    name: "Visual Recs",
    tagline: "Similarity search for products",
    description:
      "Retrieval pipeline using ResNet18 image embeddings and approximate nearest-neighbor search over the Kaggle H&M product dataset, with Cypher as the vector store, to power similarity-based recommendations.",
    stack: ["Python", "ResNet18", "ANN", "Cypher"],
    color: "#546988",
    spineHighlight: "#8ea1bd",
    spineShadow: "#2f3d52",
    icon: "radar",
    scene: "recs",
    prodUrl: "",
    githubUrl: "https://github.com/piyush474/ecommerce-visual-search-recommendation",
  },
  {
    id: "minimq",
    name: "MiniMQ",
    tagline: "Fault-tolerant message broker",
    description:
      "Distributed broker in Java with leader election, heartbeat, and gossip protocols, persistent storage, and dynamic load balancing. Deployed on four AWS EC2 instances at 1,600 QPS.",
    stack: ["Java", "AWS EC2", "Gossip", "Leader election"],
    color: "#6b8258",
    spineHighlight: "#a8be8e",
    spineShadow: "#3f4e33",
    icon: "nodes",
    scene: "broker",
    prodUrl: "",
    githubUrl: "https://github.com/piyush474/Pub-Sub-Stock-News",
  },
];

export function isProjectLive(project) {
  return Boolean(project.prodUrl);
}
