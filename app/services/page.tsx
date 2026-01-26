import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Link from "next/link";

const services = [
  {
    title: "Solar Permit Plan Sets (Residential)",
    desc: "Permit-ready residential plan sets with clear notes, labeling, and AHJ-friendly formatting.",
  },
  {
    title: "Commercial Solar Permit Support",
    desc: "Documentation structured for stricter reviews, multi-array projects, and revision cycles.",
  },
  {
    title: "PV + Storage Permit Documentation",
    desc: "Battery add-on documentation support, SLD updates, labeling, and compliance notes.",
  },
  {
    title: "AHJ Revisions & Corrections",
    desc: "Fast revision handling to reduce back-and-forth and keep projects moving.",
  },
  {
    title: "SLD + Labeling + Notes",
    desc: "Clean electrical documentation that improves review clarity and reduces mistakes.",
  },
  {
    title: "Quality Check (QC) Before Submission",
    desc: "QC-focused review to catch issues early and improve first-pass success.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I Can Deliver"
          subtitle="Freelance-ready deliverables built for speed, clarity, and compliance."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300">
            Want quick support on a permit project?  
            <span className="font-semibold text-slate-100"> Message me on LinkedIn or Email for a quick quote.</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
