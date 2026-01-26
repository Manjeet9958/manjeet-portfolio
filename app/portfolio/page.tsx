import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";

export default function PortfolioPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects & Permit Work"
          subtitle="A portfolio-style showcase of the types of solar permit deliverables I work on across U.S. states and AHJs."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Case Studies"
            title="Permit Challenges → Solutions"
            subtitle="Real-world permitting situations where clean documentation and clarity make the difference."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <Card key={c.title}>
                <h3 className="text-lg font-semibold text-slate-100">{c.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  <span className="font-semibold text-slate-200">Problem:</span> {c.problem}
                </p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-200">My Approach</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                    {c.approach.slice(0, 3).map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-sm text-slate-300">
                  <span className="font-semibold text-slate-200">Result:</span> {c.result}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
