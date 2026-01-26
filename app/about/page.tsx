import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

export default function AboutPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="My story: Intern → Solar Permit Engineer"
          subtitle="I support solar installers across the U.S. by delivering permit-ready plan sets that meet AHJ requirements and reduce approval delays."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex flex-wrap gap-2">
              <Badge>3.5+ Years</Badge>
              <Badge>5000+ Plan Sets</Badge>
              <Badge>10+ U.S. States</Badge>
            </div>

            <p className="mt-4 text-slate-300">
              I’m <span className="font-semibold text-slate-100">Manjeet Singh Bisht</span>, a Solar Permit Engineer at{" "}
              <span className="font-semibold text-slate-100">One Place Solar</span> (India). My role is focused on creating
              permit-ready documentation for residential and commercial solar projects across U.S. states and AHJs.
            </p>

            <p className="mt-4 text-slate-300">
              I started as an intern and grew into my current position through continuous learning, hands-on work, and strong attention to quality.
              My focus is simple: <span className="text-orange-400 font-semibold">make permitting smoother</span> for installers.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-100">Skills & Tools</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Solar Permit Plan Sets (Residential + Commercial)</li>
              <li>• CAD Drafting + Documentation Quality</li>
              <li>• AHJ Compliance + Code Interpretation</li>
              <li>• SLD + Labeling + Notes</li>
              <li>• PV + Storage permitting documentation</li>
              <li>• Revision cycles & correction handling</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Primary Tool:</span> AutoCAD
              </p>
              <p className="mt-1 text-xs text-slate-400">
                (Optional placeholders: Aurora / HelioScope / PVsyst — add if you actively use them)
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <h3 className="text-lg font-semibold text-slate-100">Future direction</h3>
            <p className="mt-3 text-slate-300">
              I’m focused on expanding my skills, exploring international opportunities, and learning how AI can improve solar permitting workflows —
              faster checks, better accuracy, and fewer rejections.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
