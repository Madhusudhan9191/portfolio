import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Database } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import DisciplinesShowcase from "@/components/sections/DisciplinesShowcase";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/effects/Reveal";
import Magnetic from "@/components/effects/Magnetic";
import { ABOUT_PARAGRAPHS, EXPERIENCE, PROJECTS } from "@/constants/content";
import GitHubActivity from "@/components/sections/GitHubActivity";

export default function HomePage() {
  // Featured projects curated across all 3 disciplines:
  // 1. Data Science & Forecasting (electricity-demand-forecasting)
  // 2. Hybrid RAG AI Platform (repomind-ai)
  // 3. Operational ML Delay Risk (olist-delay-risk-ml)
  // 4. Enterprise AI Database Assistant (ai-database-assistant)
  // 5. Causal Inference & A/B Testing (ab-test-workbench)
  // 6. Retail Analytics & LOD Simulator (retail-sales-profitability-analytics)
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
      <Hero />
      <StatsBar />

      {/* The 3 Core Disciplines: Data Science | AI Engineering | Software Engineering */}
      <DisciplinesShowcase />

      {/* About Section */}
      <section className="py-28">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="01" label="About & Philosophy" title="Engineering systems that reason, predict, and scale." />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <Reveal key={p.slice(0, 30)} delay={i * 0.06}>
                  <p className="mb-5 text-[15.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {p}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  data-cursor-hover
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  Read the full engineering journey <ArrowUpRight size={15} />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border p-8" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
                <div className="flex items-center justify-between border-b pb-4 mb-4" style={{ borderColor: "var(--border)" }}>
                  <h4 className="mono text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                    Current Industry Role
                  </h4>
                  <span className="mono text-[11px] px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    Active Production
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dashed py-3.5 text-sm" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-dim)" }}>Role</span>
                  <span className="mono font-semibold text-right">{current.role}</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dashed py-3.5 text-sm" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-dim)" }}>Company</span>
                  <span className="mono font-semibold">{current.company}</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dashed py-3.5 text-sm" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-dim)" }}>Scope</span>
                  <span className="mono font-semibold">1,000+ Production Users · 99.9% Uptime</span>
                </div>
                <div className="flex items-baseline justify-between py-3.5 text-sm">
                  <span style={{ color: "var(--text-dim)" }}>Experience</span>
                  <span className="mono font-semibold">3+ Years Continuous Impact</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Multi-Disciplinary Work */}
      <section className="py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="02"
              label="Selected Systems"
              title={
                <>
                  Proven systems across
                  <br />
                  Data Science, AI & Backend.
                </>
              }
            />
            <Reveal>
              <Link
                href="/projects"
                data-cursor-hover
                className="mono mb-10 inline-flex items-center gap-1.5 text-[13px] rounded-xl border px-4 py-2.5 transition-colors hover:border-[var(--primary)]"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                <span>View all 9 projects with metrics</span> <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  href={`/projects/${p.slug}`}
                  data-cursor-hover
                  className="group flex flex-col justify-between h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
                  style={{ borderColor: "var(--border)", background: "var(--glass)" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono text-xs font-semibold px-2 py-0.5 rounded-md border" style={{ borderColor: "var(--border)", color: "var(--text-dimmer)" }}>
                        {p.index}
                      </span>
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-[var(--primary)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {p.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="mono text-[11px] px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.04)", color: "var(--text-dim)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Lessons Section */}
      <section className="py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="03" label="Engineering Lessons" title="What actually mattered when building these systems." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conformal Uncertainty & Drift",
                project: "Electricity Demand Forecasting",
                lesson: "Static interval formulas fail under load drift and weather volatility. 21-day rolling conformal prediction maintains empirical coverage by adapting to volatility in real time.",
              },
              {
                title: "AST-Aware Retrieval Precision",
                project: "RepoMind AI",
                lesson: "Precision at the top of candidate sets matters more than raw model scale. Combining Python AST boundaries with Okapi BM25 and dense Qdrant vectors dramatically out-retrieves naive chunking.",
              },
              {
                title: "Probability Calibration in ML",
                project: "Olist Delay Risk Classifier",
                lesson: "Uncalibrated raw probabilities lead to alert fatigue in logistics triage. Isotonic calibration aligns predicted probabilities with true empirical risk deciles, enabling trusted dispatch queues.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="flex flex-col justify-between h-full rounded-3xl border p-7"
                  style={{ borderColor: "var(--border)", background: "var(--glass)" }}
                >
                  <div>
                    <span className="mono text-xs font-medium" style={{ color: "var(--primary)" }}>
                      {item.project}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {item.lesson}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live GitHub Activity */}
      <section className="pb-28">
        <div className="mx-auto max-w-[1220px] px-6">
          <GitHubActivity />
        </div>
      </section>

      {/* Modern High-Impact CTA */}
      <section className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <div className="eyebrow mb-4">Availability</div>
            <h2 className="text-[clamp(30px,5vw,54px)] font-bold">
              Let&apos;s build systems with
              <br />
              <span className="text-gradient">mathematical &amp; engineering rigor.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-lg text-[16.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
              Open to Data Scientist, AI / GenAI Engineer, and Senior Backend roles. Ready to deliver production models, RAG pipelines, and high-performance backend infrastructure.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic
                as="a"
                href="/contact"
                className="rounded-2xl px-8 py-4 text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "var(--primary)", color: "#101010" }}
              >
                Start a Conversation →
              </Magnetic>
              <Magnetic
                as="a"
                href="/resume"
                className="rounded-2xl border px-8 py-4 text-sm font-semibold transition-all hover:border-[var(--primary)]"
                style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text)" }}
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
