import AnimatedCounter from "@/components/effects/AnimatedCounter";
import Reveal from "@/components/effects/Reveal";
import { STATS } from "@/constants/content";

export default function StatsBar() {
  return (
    <div className="border-y" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-6 px-6 py-16 md:grid-cols-5">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center">
            <div className="text-[clamp(30px,4vw,46px)] font-bold" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
            </div>
            <div className="mt-1.5 text-[13px]" style={{ color: "var(--text-dim)" }}>
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
