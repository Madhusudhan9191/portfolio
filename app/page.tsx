import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/effects/Reveal";
import Magnetic from "@/components/effects/Magnetic";
import { ABOUT_PARAGRAPHS, EXPERIENCE, PROJECTS } from "@/constants/content";
import GitHubActivity from "@/components/sections/GitHubActivity";

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);
  const current = EXPERIENCE[0];

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="py-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="01" label="About" title="Engineering systems that reason, not just respond." />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <Reveal key={p} delay={i * 0.06}>
                  <p className="mb-5 text-[16px]" style={{ color: "var(--text-dim)" }}>
                    {p}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  data-cursor-hover
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Read the full story <ArrowUpRight size={15} />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
                <h4 className="mono mb-4 text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                  Currently
                </h4>
                <div className="flex items-baseline justify-between border-b border-dashed py-3 text-sm" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-dim)" }}>Role</span>
                  <span className="mono font-semibold">{current.role}</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-dashed py-3 text-sm" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-dim)" }}>Company</span>
                  <span className="mono font-semibold">{current.company}</span>
                </div>
                <div className="flex items-baseline justify-between py-3 text-sm">
                  <span style={{ color: "var(--text-dim)" }}>Since</span>
                  <span className="mono font-semibold">{current.period}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="02"
              label="Featured Work"
              title={
                <>
                  A few products worth
                  <br />
                  a closer look.
                </>
              }
            />
            <Reveal>
              <Link
                href="/projects"
                data-cursor-hover
                className="mono mb-16 inline-flex items-center gap-1.5 text-[13px]"
                style={{ color: "var(--text-dim)" }}
              >
                View all projects <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${p.slug}`}
                  data-cursor-hover
                  className="group block h-full rounded-2xl border p-6 transition-transform hover:-translate-y-1"
                  style={{ borderColor: "var(--border)", background: "var(--glass)" }}
                >
                  <span className="mono text-xs" style={{ color: "var(--text-dimmer)" }}>
                    {p.index}
                  </span>
                  <h3 className="mt-2 text-lg leading-snug">{p.name}</h3>
                  <p className="mt-2.5 text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                    {p.tagline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="03" label="Lessons from the build" title="What actually mattered, project by project." />
          <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${p.slug}`}
                  data-cursor-hover
                  className="group block h-full rounded-2xl border p-6 transition-transform hover:-translate-y-1"
                  style={{ borderColor: "var(--border)", background: "var(--glass)" }}
                >
                  <span className="mono text-xs" style={{ color: "var(--text-dimmer)" }}>{p.name}</span>
                  <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--text)" }}>{p.lessons}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28"><div className="mx-auto max-w-[1220px] px-6"><GitHubActivity /></div></section>

      <section className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <Reveal>
            <h2 className="text-[clamp(28px,4.4vw,46px)]">
              Let&apos;s build something
              <br />
              <span className="text-gradient">worth shipping.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-md text-[16px]" style={{ color: "var(--text-dim)" }}>
              Open to AI engineering, generative AI, and backend-heavy roles.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Magnetic
              as="a"
              href="/contact"
              className="mt-9 inline-block rounded-xl px-8 py-4 text-sm font-semibold"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              Get in touch
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
