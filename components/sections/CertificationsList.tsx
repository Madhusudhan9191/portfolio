import Reveal from "@/components/effects/Reveal";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/content";

export default function CertificationsList() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {CERTIFICATIONS.map((cert, i) => (
        <Reveal key={cert.name} delay={i * 0.06}>
          <div
            className="flex items-center gap-4 rounded-xl border p-5 transition-transform hover:-translate-y-1"
            style={{ borderColor: "var(--border)", background: "var(--glass)" }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border"
              style={{ borderColor: "rgba(20,241,149,0.25)", background: "rgba(20,241,149,0.08)", color: "var(--accent)" }}
            >
              <Award size={19} />
            </div>
            <div>
              <div className="mono text-[11.5px]" style={{ color: cert.status === "In Progress" ? "var(--secondary)" : "var(--text-dimmer)" }}>
                {cert.status === "In Progress" ? "In Progress" : cert.issuer}
              </div>
              <div className="font-medium">{cert.name}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
