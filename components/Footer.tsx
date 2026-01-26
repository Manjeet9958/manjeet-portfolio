import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} Manjeet Singh Bisht
            </p>
            <p className="mt-1 text-xs text-slate-400">
              US Solar Permit Engineer • AHJ Compliance • Residential + Commercial • PV + Storage
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Built with Next.js + Tailwind • Deployable on Vercel
          </div>
        </div>
      </Container>
    </footer>
  );
}
