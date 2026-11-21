import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Briefcase, Award, ArrowRight, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import DisciplinesShowcase from "@/components/sections/DisciplinesShowcase";
import Reveal from "@/components/effects/Reveal";
import Magnetic from "@/components/effects/Magnetic";
import { PROJECTS, PERSONAL } from "@/constants/content";

const DOMAIN_LABELS: Record<string, { label: string; color: string; bg: string; border: string }> = {
  "electricity-demand-forecasting": {
    label: "Data Science · Conformal Intervals",
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.35)",
  },
  "repomind-ai": {
    label: "AI Systems · AST Hybrid RAG",
    color: "#c084fc",
    bg: "rgba(192, 132, 252, 0.12)",
    border: "rgba(192, 132, 252, 0.35)",
  },
  "ai-database-assistant": {
    label: "Software Engineering · Multi-Tenant SQL",
    color: "#818cf8",
    bg: "rgba(129, 140, 248, 0.12)",
    border: "rgba(129, 140, 248, 0.35)",
  },
};

export default function HomePage() {
  // Curate the top 3 flagship projects across the 3 disciplines
  const flagshipSlugs = [
    "electricity-demand-forecasting",
    "repomind-ai",
    "ai-database-assistant",
  ];

  const flagships = flagshipSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PROJECTS;

  return (
    <>
      {/* Executive Hero */}
      <Hero />

      {/* 4 Crisp KPI Cards */}
      <StatsBar />

      {/* The 3 Core Disciplines: Data Science | AI Systems | Software Engineering */}
      <DisciplinesShowcase />

      {/* Selected Flagship Projects Preview (Top 3) */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(15, 23, 42, 0.3)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase mono"
                style={{
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  background: "rgba(59, 130, 246, 0.08)",
                  color: "#60a5fa",
                }}
              >
                <span>Curated Systems</span>
                <span>·</span>
                <span>Production Portfolio</span>
              </div>
              <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-white tracking-tight leading-tight">
                Featured Flagship Work.
              </h2>
              <p className="mt-3 max-w-xl text-[16px] text-slate-300 leading-relaxed">
                Three representative implementations demonstrating predictive machine learning, high-precision RAG architectures, and enterprise microservices.
              </p>
            </div>

            <Reveal>
              <Link
                href="/projects"
                data-cursor-hover
                className="mono inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-blue-400 hover:text-white"
                style={{ borderColor: "rgba(255, 255, 255, 0.14)", background: "var(--bg-elev)", color: "var(--text-dim)" }}
              >
                <span>Explore all 9 projects with case studies</span>
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          {/* 3 Flagship Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {flagships.map((p, i) => {
              const domain = DOMAIN_LABELS[p.slug] || {
                label: "Production Engineering",
                color: "#38bdf8",
                bg: "rgba(56, 189, 248, 0.1)",
                border: "rgba(56, 189, 248, 0.3)",
              };

              return (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/projects/${p.slug}`}
                    data-cursor-hover
                    className="group relative flex flex-col justify-between h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      background: "linear-gradient(170deg, rgba(15, 23, 42, 0.95), rgba(11, 15, 25, 0.98))",
                    }}
                  >
                    <div>
                      {/* Domain Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span
                          className="mono text-[10.5px] font-bold uppercase px-2.5 py-0.5 rounded border"
                          style={{
                            color: domain.color,
                            background: domain.bg,
                            borderColor: domain.border,
                          }}
                        >
                          {domain.label}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {p.name}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-2.5 text-[13.5px] text-slate-300 leading-relaxed line-clamp-2">
                        {p.tagline}
                      </p>

                      {/* Top Metrics */}
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {p.metrics.slice(0, 2).map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border p-2.5"
                            style={{
                              borderColor: "rgba(255, 255, 255, 0.08)",
                              background: "rgba(0, 0, 0, 0.25)",
                            }}
                          >
                            <div className="text-sm font-bold text-white" style={{ color: domain.color }}>
                              {m.value}
                            </div>
                            <div className="text-[10.5px] font-medium text-slate-400 leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Pills & Link */}
                    <div className="mt-5 pt-4 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="mono text-[10.5px] font-medium px-2 py-0.5 rounded border"
                            style={{
                              borderColor: "rgba(255, 255, 255, 0.08)",
                              background: "rgba(255, 255, 255, 0.03)",
                              color: "var(--text-dim)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:underline">
                        <span>Open In-Depth Case Study</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Banner to Explore All Projects */}
          <div className="mt-8 rounded-2xl border p-6 flex flex-wrap items-center justify-between gap-4"
            style={{
              borderColor: "rgba(59, 130, 246, 0.25)",
              background: "linear-gradient(90deg, rgba(59, 130, 246, 0.08), rgba(15, 23, 42, 0.6))",
            }}
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Looking for specialized systems across ML, Logistics, BI, or Multi-Agent AI?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Browse all 9 production projects with interactive filters for Data Science, GenAI, and Backend.
                </p>
              </div>
            </div>

            <Link
              href="/projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all hover:scale-105"
              style={{ background: "var(--primary)" }}
            >
              Browse Projects Hub (9) →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore By Page: Dedicated Portals */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(11, 15, 25, 0.6)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 max-w-xl">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase mono"
              style={{
                borderColor: "rgba(59, 130, 246, 0.3)",
                background: "rgba(59, 130, 246, 0.08)",
                color: "#60a5fa",
              }}
            >
              <Compass size={13} />
              <span>Explore My Profile</span>
            </div>
            <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-white tracking-tight leading-tight">
              Deep Dives &amp; Background.
            </h2>
            <p className="mt-3 text-[16px] text-slate-300 leading-relaxed">
              Explore dedicated pages covering career trajectory, peer-reviewed research, and technical stack.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Portal Card 1: Experience */}
            <Reveal delay={0.05}>
              <Link
                href="/experience"
                data-cursor-hover
                className="group flex flex-col justify-between h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  background: "var(--bg-elev)",
                }}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-5">
                    <Briefcase size={22} />
                  </div>
                  <div className="mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Career Progression
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    3 Years at Kallque Pvt Ltd
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Promotion trajectory across three roles: backend systems engineer, microservice architect, and applied ML lead serving 1,000+ users.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold text-blue-400 group-hover:underline" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <span>View Timeline &amp; Impact</span>
                  <span>→</span>
                </div>
              </Link>
            </Reveal>

            {/* Portal Card 2: Research */}
            <Reveal delay={0.1}>
              <Link
                href="/research"
                data-cursor-hover
                className="group flex flex-col justify-between h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  background: "var(--bg-elev)",
                }}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-5">
                    <Award size={22} />
                  </div>
                  <div className="mono text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Academic Research
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    2 IEEE Peer-Reviewed Papers
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Published research in remote photoplethysmography (rPPG), signal processing, and contactless physiological monitoring algorithms.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold text-purple-400 group-hover:underline" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <span>Read Publications &amp; DOIs</span>
                  <span>→</span>
                </div>
              </Link>
            </Reveal>

            {/* Portal Card 3: About & Story */}
            <Reveal delay={0.15}>
              <Link
                href="/about"
                data-cursor-hover
                className="group flex flex-col justify-between h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  background: "var(--bg-elev)",
                }}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-5">
                    <BookOpen size={22} />
                  </div>
                  <div className="mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Story &amp; Technology Stack
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Philosophy, Education &amp; Skills
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    B.Tech in CS &amp; AI from MSRUAS, engineering philosophy on why software rigor makes better data scientists, and the 25+ tools I use daily.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:underline" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <span>Read Background &amp; Stack</span>
                  <span>→</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Executive Contact / Hire Me CTA */}
      <section className="py-28" style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.35), rgba(9, 13, 22, 0.95))" }}>
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mono"
              style={{
                borderColor: "rgba(59, 130, 246, 0.3)",
                background: "rgba(59, 130, 246, 0.08)",
                color: "#60a5fa",
              }}
            >
              <Briefcase size={13} />
              <span>Available for Hire</span>
            </div>

            <h2 className="text-[clamp(32px,5.2vw,54px)] font-extrabold text-white leading-tight">
              Let&apos;s build systems with
              <br />
              <span className="text-gradient">mathematical &amp; engineering rigor.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed text-slate-300">
              Open to Data Scientist, AI / GenAI Engineer, and Senior Backend roles. Ready to deliver calibrated production models, RAG architectures, and scalable microservices.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic
                as="a"
                href="/contact"
                className="rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
              >
                Start a Conversation →
              </Magnetic>

              <Magnetic
                as="a"
                href="/resume"
                className="rounded-xl border px-8 py-4 text-sm font-semibold transition-all hover:border-blue-400 text-white"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.16)",
                  background: "var(--bg-elev)",
                }}
              >
                View 3-Year Resume
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
