"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE } from "@/constants/content";

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute top-2 bottom-2 left-[7px] w-px" style={{ background: "var(--border-strong)" }} />
      <div className="flex flex-col gap-7">
        {EXPERIENCE.map((exp, i) => {
          const open = openIndex === i;
          return (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-9"
            >
              <span
                className="absolute top-2 left-0 h-[13px] w-[13px] rounded-full border-2"
                style={{
                  background: open ? "var(--primary)" : "var(--bg)",
                  borderColor: open ? "var(--primary)" : "var(--border-strong)",
                  boxShadow: open ? "0 0 14px var(--primary)" : "none",
                }}
              />
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                data-cursor-hover
                className="w-full rounded-2xl border px-6 py-5 text-left transition-colors hover:border-[var(--border-strong)]"
                style={{ borderColor: "var(--border)", background: "var(--glass)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      {exp.current && (
                        <span
                          className="mono rounded-md px-2 py-0.5 text-[10.5px]"
                          style={{ background: "rgba(0,245,255,0.08)", color: "var(--primary)", border: "1px solid rgba(0,245,255,0.25)" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mono mt-1.5 flex flex-wrap items-center gap-2 text-[13px]" style={{ color: "var(--text-dim)" }}>
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={18} style={{ color: "var(--text-dimmer)" }} />
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-[14.5px]" style={{ color: "var(--text-dim)" }}>
                        {exp.summary}
                      </p>
                      <ul className="mt-4 grid gap-2.5">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="relative pl-5 text-[14px]" style={{ color: "var(--text-dim)" }}>
                            <span
                              className="absolute top-[7px] left-0 h-1.5 w-1.5 rotate-45"
                              style={{ background: "var(--secondary)" }}
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="mono rounded-md border px-2.5 py-1 text-[11.5px]"
                            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
