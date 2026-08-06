import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import AboutJourney from "@/components/sections/AboutJourney";
import SkillsEcosystem from "@/components/sections/SkillsEcosystem";
import Reveal from "@/components/effects/Reveal";
import { ABOUT_PARAGRAPHS } from "@/constants/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Engineering systems that
            <br />
            reason, not just respond.
          </>
        }
      />

      <section className="pb-28">
        <div className="mx-auto max-w-[720px] px-6">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <p className="mb-5 text-[16.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="01" label="The Journey" title="From a CS degree to shipping AI products." />
          <AboutJourney />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading
            index="02"
            label="Technology Ecosystem"
            title="A stack built for shipping AI products end to end."
            description="Grouped by where each technology lives in the systems I build. Hover a node for context."
          />
          <SkillsEcosystem />
        </div>
      </section>
      <section className="pb-32"><div className="mx-auto max-w-[1220px] px-6"><SectionHeading index="03" label="Currently learning" title="Going deeper on the systems behind dependable AI." /><div className="surface grid gap-4 rounded-2xl p-6 md:grid-cols-3"><div><div className="eyebrow">Evaluation</div><p className="mt-3 text-sm" style={{color:"var(--text-dim)"}}>RAG quality measurement, failure analysis, and golden datasets.</p></div><div><div className="eyebrow">Agent systems</div><p className="mt-3 text-sm" style={{color:"var(--text-dim)"}}>Stateful workflows, tool boundaries, and human-in-the-loop controls.</p></div><div><div className="eyebrow">Open source</div><p className="mt-3 text-sm" style={{color:"var(--text-dim)"}}>Contributing reusable engineering patterns and learning in public.</p></div></div></div></section>
    </>
  );
}
