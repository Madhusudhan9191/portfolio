import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Projects"
        title={
          <>
            Products built on my own time.
            <br />
            Self-initiated, production-grade systems.
          </>
        }
        description="Each project shipped as a working system outside of my day job — architecture, tradeoffs, and outcomes included."
      />
      <section className="pb-10">
        <div className="mx-auto max-w-[1220px] px-6">
          <Link
            href="/hackathon"
            data-cursor-hover
            className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-6 transition-colors hover:border-[var(--primary)]"
            style={{ borderColor: "var(--border)", background: "var(--glass)" }}
          >
            <div>
              <span className="mono rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-medium text-purple-400">
                Hackathon build
              </span>
              <h3 className="mt-3 text-xl">CHAKRA — AI Financial Compliance Intelligence Platform</h3>
              <p className="mt-1.5 text-sm" style={{ color: "var(--text-dim)" }}>
                Offline LLM reasoning, knowledge-graph fraud detection, and a deterministic rule engine — my most technically ambitious build.
              </p>
            </div>
            <span
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[var(--primary)]"
              style={{ color: "var(--text)" }}
            >
              View case study <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
