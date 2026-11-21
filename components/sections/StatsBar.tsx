"use client";

import Reveal from "@/components/effects/Reveal";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { Briefcase, Users, Layers, Award, Zap, ArrowUpRight } from "lucide-react";

interface KPIMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  context: string;
  icon: typeof Briefcase;
  accent: string;
  borderAccent: string;
  bgAccent: string;
}

const KPI_METRICS: KPIMetric[] = [
  {
    value: 3,
    suffix: "+",
    label: "3+ Years",
    sublabel: "Cross-Discipline Impact",
    context: "Data Science, AI Systems & Production Software",
    icon: Briefcase,
    accent: "#38bdf8",
    borderAccent: "rgba(56, 189, 248, 0.25)",
    bgAccent: "rgba(56, 189, 248, 0.08)",
  },
  {
    value: 1000,
    suffix: "+",
    label: "1,000+",
    sublabel: "Active Production Users",
    context: "Deployed enterprise microservices at 99.9% SLA",
    icon: Users,
    accent: "#34d399",
    borderAccent: "rgba(52, 211, 153, 0.25)",
    bgAccent: "rgba(52, 211, 153, 0.08)",
  },
  {
    value: 9,
    suffix: " Systems",
    label: "9 Systems",
    sublabel: "Production Implementations",
    context: "Calibrated ML, hybrid RAG & scalable microservices",
    icon: Layers,
    accent: "#818cf8",
    borderAccent: "rgba(129, 140, 248, 0.25)",
    bgAccent: "rgba(129, 140, 248, 0.08)",
  },
  {
    value: 2,
    suffix: " Papers",
    label: "2 Papers",
    sublabel: "IEEE Research Publications",
    context: "Peer-reviewed applied ML & signal processing",
    icon: Award,
    accent: "#c084fc",
    borderAccent: "rgba(192, 132, 252, 0.25)",
    bgAccent: "rgba(192, 132, 252, 0.08)",
  },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 py-12" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(15, 23, 42, 0.45)" }}>
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_METRICS.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <Reveal key={kpi.sublabel} delay={i * 0.07}>
                <div
                  className="group relative flex h-full flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-elev)",
                  }}
                >
                  {/* Subtle top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 transition-opacity group-hover:opacity-100"
                    style={{ background: kpi.accent }}
                  />

                  {/* Header: Icon + Metric Label */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: kpi.borderAccent,
                          background: kpi.bgAccent,
                          color: kpi.accent,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="mono text-[10.5px] uppercase tracking-wider font-semibold" style={{ color: "var(--text-dimmer)" }}>
                        Metric 0{i + 1}
                      </span>
                    </div>

                    {/* Prominent Stat Value */}
                    <div className="mt-4 flex items-baseline gap-1">
                      {kpi.prefix && (
                        <span className="text-xl font-bold" style={{ color: kpi.accent }}>
                          {kpi.prefix}
                        </span>
                      )}
                      <span className="text-3xl font-extrabold text-white sm:text-4xl">
                        <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                      </span>
                    </div>

                    {/* Subtitle / Focus Area */}
                    <div className="mt-2 text-sm font-semibold text-slate-100 leading-snug">
                      {kpi.sublabel}
                    </div>
                  </div>

                  {/* Context / Explanation */}
                  <div className="mt-3 pt-3 border-t text-xs leading-relaxed" style={{ borderColor: "rgba(255, 255, 255, 0.06)", color: "var(--text-dimmer)" }}>
                    {kpi.context}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
