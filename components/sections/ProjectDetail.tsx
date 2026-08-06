import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import ParticleField from "@/components/effects/ParticleField";
import Reveal from "@/components/effects/Reveal";
import ArchitecturePipeline from "@/components/sections/ArchitecturePipeline";
import ProjectWorkbench from "@/components/sections/ProjectWorkbench";
import ProjectScreenshots from "@/components/sections/ProjectScreenshots";
import RepoMindDeepDive from "@/components/sections/RepoMindDeepDive";
import EngineeringReview from "@/components/sections/EngineeringReview";
import AIDatabaseDeepDive from "@/components/sections/AIDatabaseDeepDive";
import type { Project } from "@/types";

const ACCENTS = { primary: "var(--primary)", secondary: "var(--secondary)", accent: "var(--accent)" };

export default function ProjectDetail({ project }: { project: Project }) {
  const accent = ACCENTS[project.accent];

  return (
    <article>
      <section className="relative overflow-hidden pt-36 pb-20">
        <ParticleField className="pointer-events-none absolute inset-0 opacity-30" />
        <div className="hero-grid-bg pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
          style={{ background: accent }}
        />
        <div className="relative mx-auto max-w-[1000px] px-6">
          <Reveal>
            <Link
              href="/projects"
              className="mono mb-8 inline-flex items-center gap-2 text-[13px]"
              style={{ color: "var(--text-dim)" }}
            >
              <ArrowLeft size={14} /> All projects
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="mono text-xs" style={{ color: accent }}>
              Case Study {project.index}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 text-[clamp(32px,5.5vw,58px)] leading-[1.05]">{project.slug === "repomind-ai" ? "Production-Grade Code Intelligence Platform" : project.name}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-[17px]" style={{ color: "var(--text-dim)" }}>
              {project.slug === "repomind-ai" ? "Semantic repository indexing, multi-stage retrieval, streaming AI responses, production authentication, telemetry, and scalable backend architecture." : project.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium"
                  style={{ borderColor: "var(--border-strong)", background: "var(--glass)" }}
                >
                  <GithubIcon size={16} /> Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
                  style={{ background: "var(--text)", color: "var(--bg)" }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {(project.slug === "repomind-ai" || project.slug === "ai-database-assistant") && (
                <Link href={`/architecture/${project.slug}`} data-cursor-hover className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium" style={{ borderColor: "var(--border-strong)", background: "var(--glass)" }}>Architecture blueprint <ExternalLink size={16} /></Link>
              )}
              {project.slug === "repomind-ai" && <a href="#pipeline" className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium" style={{ borderColor: "var(--border-strong)", background: "var(--glass)" }}>Explore pipeline <ExternalLink size={16} /></a>}
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-2">
              {(project.slug === "repomind-ai" ? ["FastAPI", "Python", "Qdrant", "React", "Docker", "JWT", "SSE", "Sentence Transformers"] : project.tech).map((t) => (
                <span
                  key={t}
                  className="mono rounded-md border px-2.5 py-1 text-[11.5px]"
                  style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                >
                  {t}
                </span>
              ))}
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
            <ArchitecturePipeline stages={project.pipeline} accentVar={accent} />
          </Reveal>
          <Reveal delay={0.08} className="mt-5"><ProjectWorkbench project={project} accent={accent} /></Reveal>
        </div>
      </section>

      <section className="pb-16"><div className="mx-auto grid max-w-[1000px] gap-5 px-6 md:grid-cols-2"><Reveal><div className="surface rounded-2xl p-6"><div className="eyebrow">Implementation note</div><pre className="mono mt-5 overflow-x-auto text-[11px] leading-relaxed" style={{color:"var(--text-dim)"}}>{`request → validate → execute\n        → observe → explain\n\n# boundary-first design\npolicy.check(input)\nresult = service.run(input)`}</pre></div></Reveal><Reveal delay={.06}><div className="surface rounded-2xl p-6"><div className="eyebrow">Future direction</div><p className="mt-5 text-sm leading-relaxed" style={{color:"var(--text-dim)"}}>The next iteration would deepen evaluation, add observability around quality and latency, and make the most valuable workflows easier for teams to operationalize.</p></div></Reveal></div></section>

      <ProjectScreenshots name={project.name} accent={accent} />

      <section className="pb-16">
        <div className="mx-auto grid max-w-[1000px] gap-6 px-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border p-8" delay={0}>
            <div style={{ borderColor: "var(--border)" }}>
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: accent }}>
                Problem
              </span>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {project.problem}
              </p>
            </div>
          </Reveal>
          <Reveal className="rounded-2xl border p-8" delay={0.06}>
            <div style={{ borderColor: "var(--border)" }}>
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: accent }}>
                Solution
              </span>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
              Features
            </span>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div
                  className="flex items-start gap-3 rounded-xl border px-5 py-4 text-[14px]"
                  style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text-dim)" }}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                  {f}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
              Engineering challenges &amp; decisions
            </span>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <h4 className="mb-3 text-sm font-semibold" style={{ color: "var(--text)" }}>
                Challenges
              </h4>
              <ul className="grid gap-2.5">
                {project.challenges.map((c) => (
                  <li key={c} className="relative pl-5 text-[14px]" style={{ color: "var(--text-dim)" }}>
                    <span className="absolute top-[7px] left-0 h-1.5 w-1.5 rotate-45" style={{ background: "var(--secondary)" }} />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h4 className="mb-3 text-sm font-semibold" style={{ color: "var(--text)" }}>
                Decisions
              </h4>
              <ul className="grid gap-2.5">
                {project.decisions.map((d) => (
                  <li key={d} className="relative pl-5 text-[14px]" style={{ color: "var(--text-dim)" }}>
                    <span className="absolute top-[7px] left-0 h-1.5 w-1.5 rotate-45" style={{ background: accent }} />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <div className="rounded-xl border p-5" style={{ borderColor: "var(--border)" }}>
                  <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: accent }}>
                    {m.value}
                  </div>
                  <div className="mt-1 text-[12.5px]" style={{ color: "var(--text-dimmer)" }}>
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal>
            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--border)", background: "linear-gradient(160deg, var(--glass-strong), var(--glass))" }}
            >
              <span className="mono mb-3 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                Lessons learned
              </span>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {project.lessons}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <EngineeringReview project={project} />
      {project.slug === "ai-database-assistant" && <AIDatabaseDeepDive />}
      {project.slug === "repomind-ai" && <RepoMindDeepDive />}
    </article>
  );
}
