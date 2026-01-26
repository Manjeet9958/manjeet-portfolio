import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  title: "Manjeet Singh Bisht | US Solar Permit Engineer",
  description:
    "Solar Permit Engineer with 3.5+ years experience delivering permit-ready PV plan sets across 10+ U.S. states. 5000+ plan sets, 24–48h turnaround, AHJ compliance.",
  openGraph: {
    title: "Manjeet Singh Bisht | US Solar Permit Engineer",
    description:
      "5000+ permit plan sets | 10+ U.S. states | 24–48h turnaround | AHJ compliance | Residential + Commercial | PV + Storage",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <StickyCTA />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
