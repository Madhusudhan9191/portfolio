"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/types";

const tabs = ["System map", "API flow", "Data model", "Delivery"] as const;
export default function ProjectWorkbench({ project, accent }: { project: Project; accent: string }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("System map");
  const content: Record<(typeof tabs)[number], { title: string; steps: string[] }> = {
    "System map": { title: "Interactive system architecture", steps: project.pipeline.map(stage => stage.label) },
    "API flow": { title: "Request lifecycle", steps: ["Authenticated client", "FastAPI gateway", "Domain service", "Validation & policy", "Response / streaming"] },
    "Data model": { title: "Data foundations", steps: ["Application schema", "Structured records", "Vector / analytics layer", "Audit & query history", "Cached results"] },
    "Delivery": { title: "Production delivery", steps: ["Source control", "Container build", "Automated checks", "Docker deployment", "Observability"] },
  };
  const active = content[tab];
  return <div className="surface rounded-2xl p-4 sm:p-6"><div className="no-scrollbar flex gap-2 overflow-x-auto border-b pb-4" style={{ borderColor:"var(--border)" }}>{tabs.map(item => <button key={item} onClick={() => setTab(item)} className="mono whitespace-nowrap rounded-full px-3 py-2 text-[11px] transition-colors" style={{ background:tab === item ? accent : "transparent", color:tab === item ? "#111" : "var(--text-dim)" }}>{item}</button>)}</div><motion.div key={tab} initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} className="pt-6"><div className="eyebrow">{active.title}</div><div className="mt-5 flex flex-wrap items-center gap-2">{active.steps.map((step, i) => <div key={step} className="flex items-center gap-2"><div className="rounded-lg border px-3 py-2 text-xs font-medium" style={{ borderColor:"var(--border-strong)",background:"var(--bg-elev)" }}>{step}</div>{i < active.steps.length - 1 && <motion.span animate={{ opacity:[.3,1,.3] }} transition={{ duration:1.6,repeat:Infinity,delay:i*.12 }} style={{ color:accent }}>→</motion.span>}</div>)}</div><p className="mt-6 max-w-2xl text-sm leading-relaxed" style={{ color:"var(--text-dim)" }}>A composable architecture designed around clear boundaries: data enters through a guarded interface, domain logic remains observable, and output is delivered with performance and trust in mind.</p></motion.div></div>;
}
