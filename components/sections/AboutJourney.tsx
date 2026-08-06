"use client";

import { motion } from "framer-motion";
import { ABOUT_JOURNEY } from "@/constants/content";

export default function AboutJourney() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute top-0 bottom-0 left-[15px] w-px" style={{ background: "var(--border-strong)" }} />
      <motion.div
        className="absolute top-0 left-[15px] w-px origin-top"
        style={{ background: "linear-gradient(var(--primary), var(--accent))" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="flex flex-col gap-9">
        {ABOUT_JOURNEY.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative flex items-center gap-6 pl-[46px]"
          >
            <span
              className="absolute top-1/2 left-[8px] h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2"
              style={{ background: "var(--bg)", borderColor: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }}
            />
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2 rounded-xl border px-5 py-4" style={{ borderColor: "var(--border)", background: "var(--glass)" }}>
              <span className="font-medium">{step.label}</span>
              <span className="mono text-[12.5px]" style={{ color: "var(--text-dimmer)" }}>
                {step.detail}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
