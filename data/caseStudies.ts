export type CaseStudy = {
  title: string;
  problem: string;
  challenges: string[];
  approach: string[];
  deliverables: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Battery Storage Add-On Permit Requirements",
    problem:
      "Installers often add batteries late in the project, triggering new permit requirements and revisions.",
    challenges: [
      "Extra labeling and updated SLD requirements",
      "AHJ-specific storage rules and documentation expectations",
      "Avoiding rejections due to incomplete notes",
    ],
    approach: [
      "Updated plan set notes and SLD for storage integration",
      "Added clear labeling and compliance-focused documentation",
      "Prepared submission-ready package to reduce back-and-forth",
    ],
    deliverables: ["Updated SLD", "Storage notes & labeling", "Permit-ready documentation"],
    result:
      "Clear, AHJ-friendly documentation that supports faster review and fewer correction cycles.",
  },
  {
    title: "Solar Carport Permitting Reality",
    problem:
      "Carports look simple but often trigger extra permitting complexity compared to rooftop systems.",
    challenges: [
      "Different structural/permitting expectations",
      "More documentation needed for AHJ review",
      "Cost and time surprises for installers",
    ],
    approach: [
      "Documented the permitting requirements clearly",
      "Created clean plan sets to support approval workflow",
      "Focused on reducing confusion during submission",
    ],
    deliverables: ["Carport plan set", "Permit notes", "Submission documentation"],
    result:
      "Better project clarity for installers and smoother permit submission experience.",
  },
  {
    title: "Residential vs Commercial Permit Differences",
    problem:
      "Many installers underestimate how commercial permitting differs from residential projects.",
    challenges: [
      "Stricter AHJ review expectations",
      "More complex electrical documentation",
      "Multi-stage approvals and revisions",
    ],
    approach: [
      "Structured documentation for commercial review flow",
      "Added clarity to SLD and labeling",
      "Maintained QC to reduce correction cycles",
    ],
    deliverables: ["Commercial-ready plan set", "Improved SLD + labeling", "QC review"],
    result:
      "Higher submission quality and reduced risk of delays from missing documentation.",
  },
];
