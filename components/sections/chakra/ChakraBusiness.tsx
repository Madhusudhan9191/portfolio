import Reveal from "@/components/effects/Reveal";
import { CHAKRA } from "@/constants/content";

export default function ChakraBusiness() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)" }}>
              <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                Business Value
              </span>
              <ul className="grid gap-2.5">
                {CHAKRA.businessValue.map((v) => (
                  <li key={v} className="relative pl-5 text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                    <span className="absolute top-[6px] left-0 h-1.5 w-1.5 rotate-45" style={{ background: "var(--accent)" }} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)" }}>
              <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                Potential Customers
              </span>
              <ul className="grid gap-2.5">
                {CHAKRA.customers.map((c) => (
                  <li key={c} className="relative pl-5 text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                    <span className="absolute top-[6px] left-0 h-1.5 w-1.5 rotate-45" style={{ background: "var(--primary)" }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border p-7" style={{ borderColor: "var(--border)" }}>
              <span className="mono mb-4 block text-xs tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                Future Roadmap
              </span>
              <ul className="grid gap-2.5">
                {CHAKRA.roadmap.map((r) => (
                  <li key={r} className="relative pl-5 text-[13.5px]" style={{ color: "var(--text-dim)" }}>
                    <span className="absolute top-[6px] left-0 h-1.5 w-1.5 rotate-45" style={{ background: "var(--secondary)" }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-2">
            {CHAKRA.techStack.map((t) => (
              <span
                key={t}
                className="mono rounded-md border px-2.5 py-1.5 text-[11.5px]"
                style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
