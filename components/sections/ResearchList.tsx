import { ExternalLink } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import { PUBLICATIONS } from "@/constants/content";

export default function ResearchList() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {PUBLICATIONS.map((pub, i) => (
        <Reveal key={pub.title} delay={i * 0.08}>
          <a
            href={pub.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="surface group block h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="mono rounded-full border px-3 py-1 text-[10px]"
                style={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
              >
                IEEE · PEER REVIEWED
              </span>
              <ExternalLink
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--primary)" }}
              />
            </div>
            <h3 className="mt-6 text-xl leading-snug group-hover:text-[var(--primary)] transition-colors">
              {pub.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {pub.blurb}
            </p>
            <div
              className="mt-6 border-t pt-4 text-xs font-semibold flex items-center justify-between"
              style={{ borderColor: "var(--border)", color: "var(--primary)" }}
            >
              <span>Read Paper on IEEE Xplore</span>
              <ExternalLink size={13} />
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
