"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Children, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// ── Skiper UI original (unchanged): sticky image card that scales back as the stack scrolls ──
const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-[300px] w-[500px] origin-top flex-col overflow-hidden"
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};


// ── FUNKYY adaptation: the same sticky + scale-back mechanic (useScroll over the stack, each card
// scales from 1 to its target over [i / n, 1]) for any card content instead of a fixed image. ──
function StickyStackItem({
  i,
  progress,
  range,
  targetScale,
  top,
  stickyClassName,
  children,
}: {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  top: number;
  stickyClassName: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const scale = useTransform(progress, range, [1, reduce ? 1 : targetScale]);
  return (
    <div className={stickyClassName} style={{ top, zIndex: i + 1 }}>
      <motion.div style={{ scale }} className="origin-top">
        {children}
      </motion.div>
    </div>
  );
}

export function StickyStack({
  children,
  top = 110,
  step = 22,
  scaleStep = 0.05,
  stickyClassName = "sticky",
  className,
}: {
  children: ReactNode;
  /** px from the viewport top where the first card pins */
  top?: number;
  /** extra px each following card pins lower, so the edges peek out */
  step?: number;
  /** how much each buried card shrinks per card above it */
  scaleStep?: number;
  /** e.g. "lg:sticky" to stack only on large screens */
  stickyClassName?: string;
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const items = Children.toArray(children);
  return (
    <div ref={container} className={cn("relative grid", className)}>
      {items.map((child, i) => (
        <StickyStackItem
          key={i}
          i={i}
          progress={scrollYProgress}
          range={[i / items.length, 1]}
          targetScale={Math.max(0.5, 1 - (items.length - i - 1) * scaleStep)}
          top={top + i * step}
          stickyClassName={stickyClassName}
        >
          {child}
        </StickyStackItem>
      ))}
    </div>
  );
}

export { StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
