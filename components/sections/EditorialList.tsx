import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/constants/content";

export default function EditorialList({ limit }: { limit?: number }) {
  return <div className="grid gap-3 md:grid-cols-3">{BLOG_POSTS.slice(0, limit).map((post, index) => <Link key={post.slug} href="/blog" className="group surface flex flex-col justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:min-h-52" data-cursor-hover>
    <div className="flex items-center justify-between"><span className="eyebrow">0{index + 1} · {post.category}</span><ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color:"var(--primary)" }}/></div>
    <div><h3 className="max-w-sm text-xl leading-tight">{post.title}</h3><p className="mt-3 text-sm leading-relaxed" style={{ color:"var(--text-dim)" }}>{post.excerpt}</p><p className="mono mt-4 text-[11px]" style={{ color:"var(--text-dimmer)" }}>{post.readTime} · {post.date}</p></div>
  </Link>)}</div>;
}
