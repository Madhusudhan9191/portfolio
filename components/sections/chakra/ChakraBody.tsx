import { ShieldCheck, GitBranch, Cpu, Gauge } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import ArchitecturePipeline from "@/components/sections/ArchitecturePipeline";
import { CHAKRA } from "@/constants/content";

const ICONS = [ShieldCheck, GitBranch, Cpu, Gauge];

export default function ChakraBody() {
  return (
    <>
      <section className="pb-16">
        <div className="mx-auto grid max-w-[1000px] gap-6 px-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: "var(--accent)" }}>
                Problem
              </span>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {CHAKRA.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: "var(--accent)" }}>
                Market Opportunity
              </span>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {CHAKRA.opportunity}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: "var(--accent)" }}>
                Solution
              </span>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {CHAKRA.solution}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
              Architecture
            </span>
            <ArchitecturePipeline stages={CHAKRA.pipeline} accentVar="var(--accent)" />
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
              Core Capabilities
            </span>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {CHAKRA.features.map((f, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div
                    className="flex h-full items-start gap-4 rounded-2xl border p-6"
                    style={{ borderColor: "var(--border)", background: "linear-gradient(160deg, var(--glass-strong), var(--glass))" }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(20,241,149,0.08)", color: "var(--accent)" }}
                    >
                      <Icon size={18} />
                    </span>
                    <div>
                      <h4 className="font-semibold">{f.title}</h4>
                      <p className="mt-1.5 text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                        {f.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
