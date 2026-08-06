"use client";

import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | "button" | typeof Link;
  strength?: number;
  [key: string]: unknown;
}

const MotionDiv = motion.div;
const MotionA = motion.a;
const MotionButton = motion.button;
const MotionLink = motion.create(Link);

export default function Magnetic({ children, className, as = "div", strength = 0.25, ...rest }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 12 });
  const sy = useSpring(y, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength * 1.4);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const shared = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x: sx, y: sy },
    className: cn("inline-block", className),
    "data-cursor-hover": true,
    ...rest,
  } as Record<string, unknown>;

  if (as === Link) return <MotionLink {...(shared as ComponentPropsWithoutRef<typeof MotionLink>)}>{children}</MotionLink>;
  if (as === "a") return <MotionA {...(shared as ComponentPropsWithoutRef<typeof MotionA>)}>{children}</MotionA>;
  if (as === "button") return <MotionButton {...(shared as ComponentPropsWithoutRef<typeof MotionButton>)}>{children}</MotionButton>;
  return <MotionDiv {...(shared as ComponentPropsWithoutRef<typeof MotionDiv>)}>{children}</MotionDiv>;
}
