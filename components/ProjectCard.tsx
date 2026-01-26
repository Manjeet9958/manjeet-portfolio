import Card from "./Card";
import Badge from "./Badge";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:border-white/20 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{project.state} • {project.type}</p>
        </div>
        <Badge>{project.type}</Badge>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-200">Scope</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
          {project.scope.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-sm text-slate-300">
        <span className="font-semibold text-slate-200">Outcome:</span> {project.outcome}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}
