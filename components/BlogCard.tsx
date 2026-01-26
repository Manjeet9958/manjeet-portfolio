import Card from "./Card";
import type { Post } from "@/data/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="hover:border-white/20 transition">
      <h3 className="text-lg font-semibold text-slate-100">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>{post.date}</span>
        <span>{post.minutes} min read</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}
