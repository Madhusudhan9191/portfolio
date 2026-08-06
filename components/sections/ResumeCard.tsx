import { FileText } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import Magnetic from "@/components/effects/Magnetic";
import { STATS } from "@/constants/content";

export default function ResumeCard() {
  return (
    <Reveal>
      <div
        className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border p-11 text-center"
        style={{ borderColor: "var(--border)", background: "linear-gradient(160deg, var(--glass-strong), var(--glass))" }}
      >
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-15 blur-[90px]"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border"
          style={{ borderColor: "rgba(0,245,255,0.25)", background: "rgba(0,245,255,0.08)", color: "var(--primary)" }}
        >
          <FileText size={26} />
        </div>
        <h3 className="text-2xl">Full resume, one click away</h3>
        <p className="mt-2.5 text-[14.5px]" style={{ color: "var(--text-dim)" }}>
          Experience, skills, publications, and projects — in a clean, recruiter-friendly PDF.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 border-t border-b py-6" style={{ borderColor: "var(--border)" }}>
          {STATS.slice(0, 3).map((s) => (
            <div key={s.label}>
              <div className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}>
                {s.value}
                {s.suffix}
              </div>
              <div className="mt-1 text-[10.5px]" style={{ color: "var(--text-dimmer)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <Magnetic
          as="a"
          href="/resume.pdf"
          download="resume.pdf"
          className="mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
          style={{ background: "var(--text)", color: "var(--bg)" }}
        >
          Download Resume (PDF) ↓
        </Magnetic>

      </div>
    </Reveal>
  );
}
