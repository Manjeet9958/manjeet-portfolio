export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-orange-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-slate-300 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
