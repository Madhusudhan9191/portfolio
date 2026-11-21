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
  primary: "#38bdf8",
  secondary: "#c084fc",
  accent: "#34d399",
};

export default function DisciplinesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = DISCIPLINE_PILLARS[activeTab];
  const Icon = ICONS[current.iconName as keyof typeof ICONS] || Brain;
  const currentAccent = ACCENTS[current.accent];

  return (
    <section className="py-24 relative" style={{ borderTop: "1px solid var(--border)", background: "rgba(11, 15, 25, 0.6)" }}>
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal>
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase mono"
            style={{
              borderColor: "rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.08)",
              color: "#60a5fa",
            }}
          >
            <Layers size={13} />
            <span>Core Disciplines · 3 Years of Enterprise Impact</span>
          </div>

          <h2 className="text-[clamp(28px,4.5vw,50px)] font-bold tracking-tight text-white leading-tight">
            Data Science. AI Engineering.
            <br />
            <span className="text-gradient">Production Software.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-300">
            Senior engineering leaders often struggle to find talent that bridges mathematical data science, modern LLM architectures, and battle-tested production backends. Here is how these three disciplines intersect in my work.
          </p>
        </Reveal>

        {/* Pillar Switcher Tabs */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                className="group relative flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300"
                style={{
                  borderColor: isActive ? accentColor : "rgba(255, 255, 255, 0.1)",
                  background: isActive ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.5)",
                  boxShadow: isActive ? `0 0 25px -5px ${accentColor}35` : "none",
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors"
                  style={{
                    borderColor: isActive ? accentColor : "rgba(255, 255, 255, 0.12)",
                    background: isActive ? `${accentColor}20` : "rgba(255, 255, 255, 0.03)",
                    color: isActive ? accentColor : "#94a3b8",
                  }}
                >
                  <TabIcon size={20} />
                </div>
                <div>
                  <div className="mono text-[11px] font-bold tracking-wider uppercase" style={{ color: isActive ? accentColor : "#94a3b8" }}>
                    Pillar 0{i + 1}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border p-8 md:p-10 shadow-2xl"
              style={{
                borderColor: "rgba(255, 255, 255, 0.14)",
                background: "linear-gradient(170deg, rgba(15, 23, 42, 0.95), rgba(11, 15, 25, 0.98))",
              }}
            >
              {/* Radial glow */}
              <div
                className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-[100px]"
                style={{ background: currentAccent }}
              />

              <div className="grid gap-10 lg:grid-cols-12">
                {/* Left col: Overview & Competencies */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="mono text-xs font-bold uppercase px-3 py-1 rounded-md border"
                      style={{
                        borderColor: `${currentAccent}50`,
                        background: `${currentAccent}18`,
                        color: currentAccent,
                      }}
                    >
                      {current.role}
                    </span>
                    <span className="mono text-xs font-medium text-slate-400">
                      3 Years Continuous Delivery
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {current.tagline}
                  </h3>

                  <div className="mt-8">
                    <h4 className="mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Core Technical Competencies
                    </h4>
                    <div className="grid gap-2.5 sm:grid-cols-1">
                      {current.competencies.map((comp) => (
                        <div
                          key={comp}
                          className="flex items-start gap-3 rounded-xl border p-3.5 text-sm text-slate-200"
                          style={{
                            borderColor: "rgba(255, 255, 255, 0.08)",
                            background: "rgba(255, 255, 255, 0.03)",
                          }}
                        >
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: currentAccent }} />
                          <span className="font-medium">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right col: Flagship Project Cards */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h4 className="mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Flagship Shipped Implementations
                    </h4>
                    <div className="flex flex-col gap-3.5">
                      {current.flagshipProjects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/projects/${p.slug}`}
                          data-cursor-hover
                          className="group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-500"
                          style={{
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            background: "rgba(15, 23, 42, 0.7)",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                              {p.name}
                            </span>
                            <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: currentAccent }} />
                          </div>
                          <div className="mt-3.5 flex items-center justify-between">
                            <span
                              className="mono text-xs font-semibold px-2.5 py-0.5 rounded border"
                              style={{
                                borderColor: `${currentAccent}40`,
                                background: `${currentAccent}12`,
                                color: currentAccent,
                              }}
                            >
                              {p.metric}
                            </span>
                            <span className="text-[12px] font-medium text-slate-300 group-hover:underline underline-offset-4">
                              View Case Study →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                    <Link
                      href="/projects"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
                    >
                      <Sparkles size={16} className="text-blue-400" />
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
