"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/effects/Magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PERSONAL } from "@/constants/content";
import { ArrowRight, FileText } from "lucide-react";

function useRoles(words: string[]) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(timer);
  }, [words.length]);
  return words[index];
}

export default function Hero() {
  const role = useRoles(PERSONAL.roles);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="aurora pointer-events-none absolute inset-0" />
      <div className="hero-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative z-[2] mx-auto w-full max-w-[1220px] px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-medium"
          style={{
            borderColor: "rgba(16, 185, 129, 0.3)",
            background: "rgba(16, 185, 129, 0.08)",
            color: "#34d399",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Data Scientist, AI/GenAI &amp; Senior Backend roles</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(42px,7.5vw,94px)] font-extrabold tracking-tight leading-[1.02]"
        >
          Data Science &amp; AI Systems.
          <br />
          <span className="text-gradient">Engineered for Enterprise Scale.</span>
        </motion.h1>

        {/* Rotating Multi-Disciplinary Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mono mt-6 flex items-center justify-center gap-2 text-[clamp(14px,2.2vw,18px)] font-medium"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--primary)" }}>{"//"}</span>
          <span>{role}</span>
          <span className="inline-block h-[1.1em] w-0.5 animate-pulse" style={{ background: "var(--primary)" }} />
        </motion.div>

        {/* Executive Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed sm:text-[18px]"
          style={{ color: "var(--text-dim)" }}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic
            as={Link}
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
            style={{
              background: "var(--primary)",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
            }}
          >
            Explore Selected Systems <ArrowRight size={16} />
          </Magnetic>

          <Magnetic
            as={Link}
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-4 text-sm font-semibold transition-all hover:border-[var(--primary)]"
            style={{
              borderColor: "var(--border-strong)",
              background: "var(--glass)",
              color: "var(--text)",
            }}
          >
            <FileText size={16} style={{ color: "var(--text-dimmer)" }} />
            <span>3-Year Resume</span>
          </Magnetic>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:border-[var(--primary)]"
              style={{ borderColor: "var(--border-strong)", background: "var(--glass)" }}
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:border-[var(--primary)]"
              style={{ borderColor: "var(--border-strong)", background: "var(--glass)" }}
            >
              <LinkedinIcon size={19} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
