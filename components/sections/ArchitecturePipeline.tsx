"use client";

import { motion } from "framer-motion";
import type { PipelineStage } from "@/types";

export default function ArchitecturePipeline({
  stages,
  accentVar = "var(--primary)",
}: {
  stages: PipelineStage[];
  accentVar?: string;
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-0 rounded-2xl border p-5"
      style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.18)" }}
    >
      {stages.map((stage, i) => (
        <motion.div key={stage.label + i} className="flex items-center" initial="rest">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -3, scale: 1.03 }}
            title={`${stage.label}: an explicit boundary in the request pipeline`}
            className="mono whitespace-nowrap rounded-lg border px-3.5 py-2.5 text-[12.5px] transition-shadow hover:shadow-[0_0_24px_rgba(213,255,63,.16)]"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-elev-2)", color: "var(--text)" }}
          >
            {stage.label}
          </motion.div>
          {i < stages.length - 1 && (
            <div className="relative mx-1 h-[2px] w-7 overflow-hidden md:w-9" style={{ background: "var(--border-strong)" }}>
              <motion.div
                className="absolute top-0 left-0 h-full w-2/5"
                style={{ background: `linear-gradient(90deg, transparent, ${accentVar}, transparent)` }}
                animate={{ left: ["-40%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
