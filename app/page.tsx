import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Database, Award, Briefcase, Code2, ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import DisciplinesShowcase from "@/components/sections/DisciplinesShowcase";
import SectionHeading from "@/components/sections/SectionHeading";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SkillsEcosystem from "@/components/sections/SkillsEcosystem";
import ResearchList from "@/components/sections/ResearchList";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Reveal from "@/components/effects/Reveal";
import Magnetic from "@/components/effects/Magnetic";
import { ABOUT_PARAGRAPHS, EXPERIENCE, PROJECTS, PERSONAL } from "@/constants/content";

const DOMAIN_LABELS: Record<string, { label: string; color: string; bg: string; border: string }> = {
  "electricity-demand-forecasting": {
    label: "Time-Series ML · Conformal Intervals",
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
  "olist-delay-risk-ml": {
    label: "Machine Learning · Risk Calibration",
    color: "#34d399",
    bg: "rgba(52, 211, 153, 0.12)",
    border: "rgba(52, 211, 153, 0.35)",
  },
  "ai-database-assistant": {
    label: "Enterprise AI · Multi-Dialect SQL",
    color: "#818cf8",
    bg: "rgba(129, 140, 248, 0.12)",
    border: "rgba(129, 140, 248, 0.35)",
  },
  "ab-test-workbench": {
    label: "Causal Inference · Experimentation",
    color: "#fbbf24",
    bg: "rgba(251, 191, 36, 0.12)",
    border: "rgba(251, 191, 36, 0.35)",
  },
  "retail-sales-profitability-analytics": {
    label: "Analytics & BI · LOD Reconciliation",
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.35)",
  },
};

export default function HomePage() {
  const featuredSlugs = [
    "electricity-demand-forecasting",
    "repomind-ai",
    "olist-delay-risk-ml",
    "ai-database-assistant",
    "ab-test-workbench",
    "retail-sales-profitability-analytics",
  ];

  const featured = featuredSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PROJECTS;

  const current = EXPERIENCE[0];

  return (
    <>
      {/* Executive Hero Section */}
      <Hero />

      {/* KPI Dashboard: 5 High-Impact Executive Cards */}
      <StatsBar />

      {/* Section 01: The 3 Core Disciplines */}
      <DisciplinesShowcase />

      {/* Section 02: Selected Production Systems */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(15, 23, 42, 0.35)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="01"
              label="Production Systems"
              title={
                <>
                  Proven systems across
                  <br />
                  Data Science, AI &amp; Backend.
                </>
              }
              description="Full-lifecycle systems running in production, benchmarked on public datasets, or validated across enterprise workloads."
            />
            <Reveal>
              <Link
                href="/projects"
                data-cursor-hover
                className="mono mb-10 inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-blue-400 hover:text-white"
                style={{ borderColor: "rgba(255, 255, 255, 0.12)", background: "var(--bg-elev)", color: "var(--text-dim)" }}
              >
                <span>View all 9 projects with metrics</span>
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => {
              const domain = DOMAIN_LABELS[p.slug] || {
                label: "Production Engineering",
                color: "#38bdf8",
                bg: "rgba(56, 189, 248, 0.1)",
                border: "rgba(56, 189, 248, 0.3)",
              };

              return (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/projects/${p.slug}`}
                    data-cursor-hover
                    className="group relative flex flex-col justify-between h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      background: "linear-gradient(170deg, rgba(15, 23, 42, 0.9), rgba(11, 15, 25, 0.95))",
                    }}
                  >
                    <div>
                      {/* Domain Badge & Index */}
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

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {p.name}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-2.5 text-[13.5px] text-slate-300 leading-relaxed line-clamp-2">
                        {p.tagline}
                      </p>

                      {/* Quantified Metrics Badges */}
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

                    {/* Tech Pills & Bottom Footer */}
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
                        <span>Read Case Study</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 03: 3-Year Industry Experience */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(11, 15, 25, 0.5)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="02"
              label="Career Progression"
              title={
                <>
                  Three years of engineering impact
                  <br />
                  at Kallque Pvt Ltd.
                </>
              }
              description="A track record of promotion from foundational backend systems to enterprise microservices, applied machine learning, and AI platform engineering."
            />
            <Reveal>
              <Link
                href="/experience"
                data-cursor-hover
                className="mono mb-10 inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-blue-400 hover:text-white"
                style={{ borderColor: "rgba(255, 255, 255, 0.12)", background: "var(--bg-elev)", color: "var(--text-dim)" }}
              >
                <span>Full Career Timeline</span>
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Section 04: Technical Skills & Tooling Matrix */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(15, 23, 42, 0.35)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading
            index="03"
            label="Technical Stack"
            title="Production tools &amp; technologies mastered."
            description="Production technologies used across data science modeling, AI retrieval pipelines, and distributed backends."
          />
          <SkillsEcosystem />
        </div>
      </section>

      {/* Section 05: Peer-Reviewed Research Publications */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(11, 15, 25, 0.5)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="04"
              label="Academic Research"
              title={
                <>
                  Peer-reviewed IEEE publications
                  <br />
                  in applied AI &amp; signal processing.
                </>
              }
              description="Research published in IEEE conferences advancing remote photoplethysmography and applied machine learning."
            />
            <Reveal>
              <Link
                href="/research"
                data-cursor-hover
                className="mono mb-10 inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-blue-400 hover:text-white"
                style={{ borderColor: "rgba(255, 255, 255, 0.12)", background: "var(--bg-elev)", color: "var(--text-dim)" }}
              >
                <span>View Research Papers</span>
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <ResearchList />
        </div>
      </section>

      {/* Section 06: Engineering Lessons & Empirical Insights */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(15, 23, 42, 0.35)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading
            index="05"
            label="Engineering Lessons"
            title="What actually mattered when building these systems."
            description="Empirical lessons learned from shipping models and services under production constraints."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conformal Uncertainty & Drift",
                project: "Electricity Demand Forecasting",
                lesson: "Static interval formulas fail under load drift and weather volatility. 21-day rolling conformal prediction maintains empirical coverage by adapting to volatility in real time.",
                color: "#38bdf8",
              },
              {
                title: "AST-Aware Retrieval Precision",
                project: "RepoMind AI",
                lesson: "Precision at the top of candidate sets matters more than raw model scale. Combining Python AST boundaries with Okapi BM25 and dense Qdrant vectors dramatically out-retrieves naive chunking.",
                color: "#c084fc",
              },
              {
                title: "Probability Calibration in ML",
                project: "Olist Delay Risk Classifier",
                lesson: "Uncalibrated raw probabilities lead to alert fatigue in logistics triage. Isotonic calibration aligns predicted probabilities with true empirical risk deciles, enabling trusted dispatch queues.",
                color: "#34d399",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="flex flex-col justify-between h-full rounded-2xl border p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    background: "var(--bg-elev)",
                  }}
                >
                  <div>
                    <span className="mono text-xs font-bold" style={{ color: item.color }}>
                      {item.project}
                    </span>
                    <h3 className="mt-2.5 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                      {item.lesson}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: Live GitHub Activity */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", background: "rgba(11, 15, 25, 0.5)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-10">
            <SectionHeading
              index="06"
              label="Open Source"
              title="Continuous code delivery &amp; commits."
              description="Real-time activity and repositories across GitHub."
            />
          </div>
          <GitHubActivity />
        </div>
      </section>

      {/* Section 08: Executive Direct Contact / Hire Me CTA */}
      <section className="py-32" style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(11, 15, 25, 0.95))" }}>
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
              <span>Executive Availability</span>
            </div>

            <h2 className="text-[clamp(32px,5.2vw,56px)] font-extrabold text-white leading-tight">
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
