export type Project = {
  id: string;
  title: string;
  state: string;
  type: "Residential" | "Commercial" | "PV + Storage" | "Carport" | "Ground Mount";
  scope: string[];
  outcome: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "res-01",
    title: "Residential Rooftop PV Permit Plan Set",
    state: "California (CA)",
    type: "Residential",
    scope: ["CAD layout", "SLD", "Labeling & notes", "Permit documentation"],
    outcome: "Permit-ready plan set delivered with AHJ-compliant notes.",
    tags: ["AHJ", "NEC", "Rooftop", "PV Plan Set"],
  },
  {
    id: "com-01",
    title: "Commercial PV Permit Support (Multi-Array)",
    state: "Texas (TX)",
    type: "Commercial",
    scope: ["CAD layout", "Electrical documentation", "Revision support"],
    outcome: "Clean documentation prepared to reduce corrections and delays.",
    tags: ["Commercial", "QC", "Permit Docs"],
  },
  {
    id: "stor-01",
    title: "PV + Battery Storage Add-On Documentation",
    state: "Florida (FL)",
    type: "PV + Storage",
    scope: ["Battery notes", "SLD updates", "Labeling", "AHJ corrections"],
    outcome: "Storage-ready permit documentation prepared for submission.",
    tags: ["Storage", "AC/DC Coupling", "NEC 706"],
  },
  {
    id: "car-01",
    title: "Solar Carport Permit Plan Set",
    state: "Arizona (AZ)",
    type: "Carport",
    scope: ["Layout plan", "Permit notes", "Submission-ready documentation"],
    outcome: "Carport permitting requirements clarified and documented.",
    tags: ["Carport", "Structural Coordination", "Permit"],
  },
  {
    id: "gm-01",
    title: "Ground Mount PV Permit Plan Set",
    state: "New York (NY)",
    type: "Ground Mount",
    scope: ["Site layout", "SLD", "Labeling", "AHJ compliance checks"],
    outcome: "Ground mount documentation built for smooth AHJ review.",
    tags: ["Ground Mount", "Setbacks", "Electrical"],
  },
  {
    id: "qc-01",
    title: "QC Review & Revision Cycle Optimization",
    state: "Multiple States",
    type: "Commercial",
    scope: ["QC checklist", "Error reduction", "Revision handling"],
    outcome: "Improved submission quality and reduced rework during revisions.",
    tags: ["QC", "Revisions", "Turnaround"],
  },
];
