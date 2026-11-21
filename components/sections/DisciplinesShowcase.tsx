"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Brain, Code2, ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { DISCIPLINE_PILLARS } from "@/constants/content";
import Reveal from "@/components/effects/Reveal";

const ICONS = {
  TrendingUp,
  Brain,
  Code2,
};

const ACCENTS = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
};

export default function DisciplinesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = DISCIPLINE_PILLARS[activeTab];
  const Icon = ICONS[current.iconName as keyof typeof ICONS] || Brain;
  const currentAccent = ACCENTS[current.accent];

  return (
    <section className="py-24 relative" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal>
          <div className="eyebrow mb-3 flex items-center gap-2">
            <Layers size={14} style={{ color: "var(--primary)" }} />
            <span>Three Pillars · Three Years of Production Impact</span>
          </div>
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-bold tracking-tight">
            Data Science. AI Engineering.
            <br />
            <span className="text-gradient">Production Software.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[16px]" style={{ color: "var(--text-dim)" }}>
            Senior engineering leaders often struggle to find talent that bridges mathematical data science, modern LLM architectures, and battle-tested production backends. Here is how these three disciplines intersect in my work.
          </p>
        </Reveal>

        {/* Pillar Switcher Tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {DISCIPLINE_PILLARS.map((pillar, i) => {
            const TabIcon = ICONS[pillar.iconName as keyof typeof ICONS] || Brain;
            const isActive = activeTab === i;
            const accentColor = ACCENTS[pillar.accent];

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(i)}
                data-cursor-hover
                className="group relative flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left transition-all duration-300"
                style={{
                  borderColor: isActive ? accentColor : "var(--border)",
                  background: isActive ? "rgba(255,255,255,0.04)" : "var(--glass)",
                  boxShadow: isActive ? `0 0 24px -6px ${accentColor}40` : "none",
                }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl border transition-colors"
                  style={{
                    borderColor: isActive ? accentColor : "var(--border)",
                    background: isActive ? `${accentColor}18` : "transparent",
                    color: isActive ? accentColor : "var(--text-dim)",
                  }}
                >
                  <TabIcon size={18} />
                </div>
                <div>
                  <div className="mono text-[11px] font-medium tracking-wide uppercase" style={{ color: isActive ? accentColor : "var(--text-dimmer)" }}>
                    Pillar 0{i + 1}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: isActive ? "var(--text)" : "var(--text-dim)" }}>
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border p-8 md:p-12"
              style={{
                borderColor: "var(--border)",
                background: "linear-gradient(170deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              }}
            >
              {/* Radial glow */}
              <div
                className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-15 blur-[100px]"
                style={{ background: currentAccent }}
              />

              <div className="grid gap-10 lg:grid-cols-12">
                {/* Left col: Overview & Competencies */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="mono text-xs font-semibold uppercase px-2.5 py-1 rounded-md border"
                      style={{
                        borderColor: `${currentAccent}40`,
                        background: `${currentAccent}15`,
                        color: currentAccent,
                      }}
                    >
                      {current.role}
                    </span>
                    <span className="mono text-xs" style={{ color: "var(--text-dimmer)" }}>
                      3 Years Continuous Delivery
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight" style={{ color: "var(--text)" }}>
                    {current.tagline}
                  </h3>

                  <div className="mt-8">
                    <h4 className="mono text-xs font-medium uppercase tracking-wider mb-4" style={{ color: "var(--text-dimmer)" }}>
                      Key Engineering Competencies
                    </h4>
                    <div className="grid gap-2.5 sm:grid-cols-1">
                      {current.competencies.map((comp) => (
                        <div key={comp} className="flex items-start gap-3 rounded-xl border p-3 text-sm" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.015)" }}>
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: currentAccent }} />
                          <span style={{ color: "var(--text)" }}>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right col: Flagship Project Cards */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h4 className="mono text-xs font-medium uppercase tracking-wider mb-4" style={{ color: "var(--text-dimmer)" }}>
                      Flagship Shipped Implementations
                    </h4>
                    <div className="flex flex-col gap-3.5">
                      {current.flagshipProjects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          data-cursor-hover
                          className="group relative flex flex-col justify-between rounded-2xl border p-5 transition-all hover:-translate-y-1"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--glass)",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-base font-semibold group-hover:text-[var(--primary)] transition-colors">
                              {p.name}
                            </span>
                            <ArrowUpRight size={17} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: currentAccent }} />
                          </div>
                          <div className="mt-3.5 flex items-center justify-between">
                            <span className="mono text-xs font-medium" style={{ color: currentAccent }}>
                              {p.metric}
                            </span>
                            <span className="text-[12px] underline underline-offset-4" style={{ color: "var(--text-dim)" }}>
                              View Case Study →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                    <Link
                      href="/projects"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--primary)]"
                      style={{ color: "var(--text)" }}
                    >
                      <Sparkles size={15} style={{ color: "var(--primary)" }} />
                      <span>Browse all 9 production projects with metrics →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
