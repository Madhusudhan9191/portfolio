import Reveal from "@/components/effects/Reveal";

export default function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-xl">
      <Reveal>
        <span className="mono mb-3.5 block text-xs tracking-wide uppercase" style={{ color: "var(--primary)" }}>
          {index} — {label}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-[clamp(28px,4vw,44px)]">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-3.5 text-[16px]" style={{ color: "var(--text-dim)" }}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
