"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  // Initialize to the real value (not 0) so server-rendered HTML — what
  // crawlers, link-preview bots, and no-JS/slow-connection visitors see —
  // always shows the correct stat. The count-up animation resets to 0 and
  // replays only once the element is actually in view for a real user.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let raf = 0;
    function tick(now: number) {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
