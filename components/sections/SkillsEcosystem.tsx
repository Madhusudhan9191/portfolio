"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SKILL_GROUPS } from "@/constants/content";
import type { SkillNode } from "@/types";

const GROUP_ORDER: SkillNode["group"][] = ["ai", "backend", "language", "frontend", "database", "data"];

export default function SkillsEcosystem() {
  const [hovered, setHovered] = useState<SkillNode | null>(null);

  return (
    <div className="relative">
      <div className="mb-8 flex h-16 items-center justify-center">
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.div
              key={hovered.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="font-medium" style={{ color: "var(--text)" }}>
                {hovered.name}
              </div>
              <div className="mono mt-1 text-[12.5px]" style={{ color: "var(--text-dim)" }}>
                {hovered.description}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mono text-[12.5px]"
              style={{ color: "var(--text-dimmer)" }}
            >
              Hover a node to see how it fits my stack
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {GROUP_ORDER.map((group) => {
          const nodes = SKILLS.filter((s) => s.group === group);
          const meta = SKILL_GROUPS[group];
          return (
            <div
              key={group}
              className="rounded-2xl border p-6 transition-colors hover:border-[var(--border-strong)]"
              style={{ borderColor: "var(--border)", background: "var(--glass)" }}
            >
              <div className="mono mb-4 flex items-center gap-2 text-[12px] tracking-wide uppercase" style={{ color: "var(--text-dimmer)" }}>
                <span className="h-2 w-2 rounded-[2px]" style={{ background: meta.color }} />
                {meta.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {nodes.map((node) => (
                  <button
                    key={node.name}
                    data-cursor-hover
                    onMouseEnter={() => setHovered(node)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(node)}
                    onBlur={() => setHovered(null)}
                    className="rounded-lg border px-3 py-2 text-[12.5px] transition-all duration-200"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)", color: "var(--text-dim)" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "var(--bg)";
                      e.currentTarget.style.background = meta.color;
                      e.currentTarget.style.borderColor = meta.color;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "var(--text-dim)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {node.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
