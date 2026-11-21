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
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase mono"
          style={{
            borderColor: "rgba(59, 130, 246, 0.3)",
            background: "rgba(59, 130, 246, 0.08)",
            color: "#60a5fa",
          }}
        >
          <span>{index}</span>
          <span>·</span>
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-white tracking-tight leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-300">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
