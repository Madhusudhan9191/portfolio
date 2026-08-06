import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PERSONAL } from "@/constants/content";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-6 py-11">
        <p className="mono text-[12.5px]" style={{ color: "var(--text-dimmer)" }}>
          © 2026 {PERSONAL.name}. Designed &amp; built from scratch.
        </p>
        <div className="flex gap-2.5">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            data-cursor-hover
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:text-[var(--bg)] hover:bg-[var(--text)]"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            data-cursor-hover
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:text-[var(--bg)] hover:bg-[var(--text)]"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
          >
            <LinkedinIcon size={16} />
          </a>
          <Link
            href="#top"
            aria-label="Back to top"
            data-cursor-hover
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:text-[var(--bg)] hover:bg-[var(--text)]"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
