"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleField from "@/components/effects/ParticleField";
import Magnetic from "@/components/effects/Magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PERSONAL, STATS } from "@/constants/content";

function useRoles(words: string[]) { const [index, setIndex] = useState(0); useEffect(() => { const timer = setInterval(() => setIndex(i => (i + 1) % words.length), 2200); return () => clearInterval(timer); }, [words.length]); return words[index]; }

export default function Hero() {
  const role = useRoles(PERSONAL.roles);
  return <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
    <ParticleField className="absolute inset-0 opacity-40" /><div className="aurora pointer-events-none absolute inset-0" /><div className="hero-grid-bg pointer-events-none absolute inset-0" />
    <div className="relative z-[2] mx-auto w-full max-w-[1220px] px-6 text-center">
      <motion.div initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ duration:.6 }} className="eyebrow mb-7 flex items-center justify-center gap-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" /> Available for high-impact work</motion.div>
      <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:.8,delay:.12 }} className="text-[clamp(45px,8.2vw,108px)] leading-[.91]">AI systems with<br /><span className="text-gradient">engineering rigor.</span></motion.h1>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.42 }} className="mono mt-7 h-7 text-[clamp(13px,2vw,17px)]" style={{ color:"var(--text-dim)" }}><span style={{ color:"var(--primary)" }}>{"// "}</span>{role}<span className="ml-1 inline-block h-[1em] w-px animate-pulse bg-[var(--primary)]" /></motion.div>
      <motion.p initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.5 }} className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed sm:text-[18px]" style={{ color:"var(--text-dim)" }}>{PERSONAL.tagline}</motion.p>
      <motion.div initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.6 }} className="mt-10 flex flex-wrap justify-center gap-3">
        <Magnetic as={Link} href="/projects" className="rounded-xl px-6 py-3.5 text-sm font-semibold" style={{ background:"var(--primary)",color:"#101010" }}>Explore selected work →</Magnetic>
        <Magnetic as={Link} href="/resume" className="rounded-xl border px-6 py-3.5 text-sm font-semibold" style={{ borderColor:"var(--border-strong)",background:"var(--glass)" }}>Resume</Magnetic>
        <a href={PERSONAL.github} target="_blank" rel="noopener" aria-label="GitHub" className="flex items-center rounded-xl border px-4" style={{ borderColor:"var(--border-strong)",background:"var(--glass)" }}><GithubIcon size={17}/></a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="flex items-center rounded-xl border px-4" style={{ borderColor:"var(--border-strong)",background:"var(--glass)" }}><LinkedinIcon size={17}/></a>
      </motion.div>
      <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.8 }} className="mx-auto mt-14 grid max-w-3xl grid-cols-3 border-y py-5 sm:grid-cols-5" style={{ borderColor:"var(--border)" }}>{STATS.map(stat => <div key={stat.label} className="px-2 text-center"><div className="text-xl font-semibold sm:text-2xl">{stat.value}{stat.suffix}</div><div className="mt-1 text-[9px] leading-tight sm:text-[10px]" style={{ color:"var(--text-dimmer)" }}>{stat.label}</div></div>)}</motion.div>
    </div>
    <div className="mono absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[.2em]" style={{ color:"var(--text-dimmer)" }}><span>SCROLL TO EXPLORE</span><motion.span className="h-8 w-px bg-[var(--text-dimmer)]" animate={{ scaleY:[0,1,0] }} transition={{ duration:2,repeat:Infinity }} /></div>
  </section>;
}
