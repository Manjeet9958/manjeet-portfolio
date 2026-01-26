import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="/contact"
        className="rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600"
      >
        Hire Me / Contact
      </Link>
    </div>
  );
}
