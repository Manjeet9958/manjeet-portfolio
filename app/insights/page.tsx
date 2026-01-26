import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function InsightsPage() {
  return (
    <div className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Solar Permitting Content & Learning"
          subtitle="Educational breakdowns that help installers and permit teams avoid rejections and confusion."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300">
            I post regular permitting insights on LinkedIn — code updates, battery permitting, AHJ reality, and common mistakes.
          </p>
        </div>
      </Container>
    </div>
  );
}
