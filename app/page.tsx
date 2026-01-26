import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>US Solar Permitting</Badge>
                <Badge>AHJ Compliance</Badge>
                <Badge>PV + Storage</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
                US Solar Permit Engineer | 5000+ Plan Sets | 10+ U.S. States
              </h1>

              <p className="mt-4 text-lg text-slate-300">
                Permit-ready solar plan sets with AHJ compliance + <span className="text-orange-400 font-semibold">24–48h turnaround</span>.
                I help solar installers reduce revisions and move faster toward approvals.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  { k: "5000+", v: "Plan Sets" },
                  { k: "10+", v: "U.S. States" },
                  { k: "24–48h", v: "Turnaround" },
                  { k: "Residential", v: "Projects" },
                  { k: "Commercial", v: "Projects" },
                  { k: "PV + Storage", v: "Support" },
                ].map((item) => (
                  <Card key={item.v} className="p-4">
                    <p className="text-xl font-bold text-slate-100">{item.k}</p>
                    <p className="text-xs text-slate-400">{item.v}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <p className="text-sm font-semibold text-orange-400">What I solve</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-100">
                Faster approvals. Fewer corrections. Cleaner plan sets.
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>✅ Permit plan sets aligned with AHJ expectations</li>
                <li>✅ Clear SLD, labeling, and documentation quality</li>
                <li>✅ Revision support to reduce rework and delays</li>
                <li>✅ PV + Storage documentation built for compliance</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-slate-100">Currently exploring:</span>{" "}
                  AI-powered solar permitting workflows (quality checks, automation, faster accuracy).
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent Projects (Preview)"
            subtitle="A snapshot of the kind of permit work I deliver across residential, commercial, and storage projects."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/portfolio"
              className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
            >
              View Full Portfolio →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
