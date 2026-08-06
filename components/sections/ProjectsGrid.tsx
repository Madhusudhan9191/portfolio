"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, Database, Brain, Video } from "lucide-react";
import { PROJECTS } from "@/constants/content";

const accents = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
};

const FILTERS = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "rag", label: "RAG & LLMs", icon: Brain },
  { id: "fastapi", label: "Python & FastAPI", icon: Code2 },
  { id: "sql", label: "SQL & Analytics", icon: Database },
  { id: "vision", label: "Vision & Research", icon: Video },
] as const;

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;

    return PROJECTS.filter((p) => {
      const techLower = p.tech.map((t) => t.toLowerCase());
      const slug = p.slug.toLowerCase();

      if (activeFilter === "rag") {
        return (
          slug.includes("repomind") ||
          slug.includes("property") ||
          slug.includes("database") ||
          techLower.some((t) => t.includes("groq") || t.includes("rag") || t.includes("qdrant"))
        );
      }
      if (activeFilter === "fastapi") {
        return techLower.some((t) => t.includes("fastapi") || t.includes("python"));
      }
      if (activeFilter === "sql") {
        return techLower.some((t) => t.includes("sql") || t.includes("postgresql") || t.includes("oracle") || t.includes("mysql"));
      }
      if (activeFilter === "vision") {
        return slug.includes("heart-rate") || techLower.some((t) => t.includes("opencv") || t.includes("fft") || t.includes("face"));
      }
      return true;
    });
  }, [activeFilter]);

  return (
    <div className="grid gap-8">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2.5 items-center justify-start pb-2">
        {FILTERS.map((f) => {
          const Icon = f.icon;
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              data-cursor-hover
              className={`mono inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-200 border ${
                isActive
                  ? "border-[var(--primary)] bg-[rgba(213,255,63,0.12)] text-[var(--primary)] shadow-[0_0_15px_rgba(213,255,63,0.15)]"
                  : "border-[var(--border)] bg-[var(--glass)] text-[var(--text-dim)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              }`}
            >
              <Icon size={14} className={isActive ? "text-[var(--primary)]" : "text-[var(--text-dimmer)]"} />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                data-cursor-hover
                className="surface group relative block overflow-hidden rounded-3xl p-6 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
              >
                <div
                  className="absolute top-0 right-0 h-56 w-56 rounded-full opacity-10 blur-3xl"
                  style={{ background: accents[project.accent] }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="eyebrow">
                        Case study {project.index} / 0{PROJECTS.length}
                      </span>
                      <span className="mono rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] text-sky-400 font-medium">
                        Personal Project
                      </span>
                      {project.github && (
                        <span className="mono rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] text-emerald-400 font-medium">
                          Open Source
                        </span>
                      )}
                      {project.slug === "heart-rate-estimation" && (
                        <span className="mono rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] text-purple-400 font-medium">
                          IEEE Paper
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 text-3xl leading-[.98] sm:text-5xl group-hover:text-[var(--primary)] transition-colors">
                      {project.name}
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {project.tagline}
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border p-4"
                          style={{ borderColor: "var(--border)", background: "rgba(0,0,0,.14)" }}
                        >
                          <div
                            className="text-xl font-semibold"
                            style={{ color: accents[project.accent] }}
                          >
                            {metric.value}
                          </div>
                          <div className="mt-1 text-[11px]" style={{ color: "var(--text-dimmer)" }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="mono rounded-md border px-2 py-1 text-[10px]"
                            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[var(--primary)]"
                        style={{ color: accents[project.accent] }}
                      >
                        Open case study{" "}
                        <ArrowUpRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
