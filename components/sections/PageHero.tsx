import Reveal from "@/components/effects/Reveal";
import ParticleField from "@/components/effects/ParticleField";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <ParticleField className="pointer-events-none absolute inset-0 opacity-30" />
      <div className="hero-grid-bg pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 -left-20 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--secondary)" }}
      />
      <div className="relative mx-auto max-w-[1220px] px-6">
        <Reveal>
          <span
            className="mono mb-6 inline-block rounded-full border px-3.5 py-1.5 text-[11.5px] tracking-wide uppercase"
            style={{ borderColor: "rgba(0,245,255,0.25)", background: "rgba(0,245,255,0.06)", color: "var(--primary)" }}
          >
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl text-[clamp(34px,5.4vw,60px)] leading-[1.05]">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[16px]" style={{ color: "var(--text-dim)" }}>
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
