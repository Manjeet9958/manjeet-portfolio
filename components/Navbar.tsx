import Link from "next/link";
import Container from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold tracking-tight text-slate-100">
            Manjeet<span className="text-orange-400">.</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Hire Me
            </Link>
          </nav>

          <Link
            href="/contact"
            className="md:hidden rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Hire Me
          </Link>
        </div>
      </Container>
    </header>
  );
}
