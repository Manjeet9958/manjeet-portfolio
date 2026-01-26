export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "california-2025-code-updates",
    title: "California 2025 Code Updates: What Solar Installers Must Know",
    excerpt:
      "Key changes impacting permitting workflows and how to avoid rejections during AHJ review.",
    minutes: 4,
    date: "2026-01-10",
    tags: ["California", "Codes", "Permitting"],
  },
  {
    slug: "ac-vs-dc-coupled-battery-systems",
    title: "AC-Coupled vs DC-Coupled Battery Systems (Permit Perspective)",
    excerpt:
      "A practical breakdown for solar projects and how coupling impacts documentation and compliance.",
    minutes: 5,
    date: "2026-01-12",
    tags: ["Storage", "Design", "SLD"],
  },
  {
    slug: "rsd-vs-optimizers",
    title: "RSD vs Optimizers: Not the Same Thing",
    excerpt:
      "Many beginners mix these up. Here’s the clean explanation and what it means for permitting notes.",
    minutes: 3,
    date: "2026-01-15",
    tags: ["RSD", "MLPE", "NEC"],
  },
];
