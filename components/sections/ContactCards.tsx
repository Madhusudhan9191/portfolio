"use client";

import { Mail, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useToast } from "@/components/effects/ToastProvider";
import { PERSONAL } from "@/constants/content";

export default function ContactCards() {
  const { show } = useToast();

  function copyEmail() {
    navigator.clipboard?.writeText(PERSONAL.email).then(() => show("Email copied to clipboard"));
  }

  return (
    <div className="grid gap-3.5">
      <button
        onClick={copyEmail}
        data-cursor-hover
        className="flex items-center gap-4 rounded-xl border p-4.5 text-left transition-transform hover:translate-x-1"
        style={{ borderColor: "var(--border)", background: "var(--glass)" }}
      >
        <span className="flex h-9.5 w-9.5 items-center justify-center rounded-lg" style={{ background: "rgba(0,245,255,0.08)", color: "var(--primary)" }}>
          <Mail size={17} />
        </span>
        <span>
          <span className="mono block text-[11px]" style={{ color: "var(--text-dimmer)" }}>
            EMAIL — CLICK TO COPY
          </span>
          <span className="text-[14.5px] font-medium">{PERSONAL.email}</span>
        </span>
      </button>

      <a
        href={PERSONAL.linkedin}
        target="_blank"
        rel="noopener"
        data-cursor-hover
        className="flex items-center gap-4 rounded-xl border p-4.5 transition-transform hover:translate-x-1"
        style={{ borderColor: "var(--border)", background: "var(--glass)" }}
      >
        <span className="flex h-9.5 w-9.5 items-center justify-center rounded-lg" style={{ background: "rgba(0,245,255,0.08)", color: "var(--primary)" }}>
          <LinkedinIcon size={17} />
        </span>
        <span>
          <span className="mono block text-[11px]" style={{ color: "var(--text-dimmer)" }}>
            LINKEDIN
          </span>
          <span className="text-[14.5px] font-medium">{PERSONAL.linkedinHandle}</span>
        </span>
      </a>

      <a
        href={PERSONAL.github}
        target="_blank"
        rel="noopener"
        data-cursor-hover
        className="flex items-center gap-4 rounded-xl border p-4.5 transition-transform hover:translate-x-1"
        style={{ borderColor: "var(--border)", background: "var(--glass)" }}
      >
        <span className="flex h-9.5 w-9.5 items-center justify-center rounded-lg" style={{ background: "rgba(0,245,255,0.08)", color: "var(--primary)" }}>
          <GithubIcon size={17} />
        </span>
        <span>
          <span className="mono block text-[11px]" style={{ color: "var(--text-dimmer)" }}>
            GITHUB
          </span>
          <span className="text-[14.5px] font-medium">{PERSONAL.githubHandle}</span>
        </span>
      </a>

      <div className="flex items-center gap-4 rounded-xl border p-4.5" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
        <span className="flex h-9.5 w-9.5 items-center justify-center rounded-lg" style={{ background: "rgba(0,245,255,0.08)", color: "var(--primary)" }}>
          <MapPin size={17} />
        </span>
        <span>
          <span className="mono block text-[11px]" style={{ color: "var(--text-dimmer)" }}>
            LOCATION
          </span>
          <span className="text-[14.5px] font-medium">{PERSONAL.location}</span>
        </span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border p-4.5" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
        <span className="flex h-9.5 w-9.5 items-center justify-center rounded-lg" style={{ background: "rgba(20,241,149,0.08)", color: "var(--accent)" }}>
          <Clock size={17} />
        </span>
        <span>
          <span className="mono block text-[11px]" style={{ color: "var(--text-dimmer)" }}>
            AVAILABILITY
          </span>
          <span className="text-[14.5px] font-medium">{PERSONAL.availability}</span>
        </span>
      </div>
    </div>
  );
}
