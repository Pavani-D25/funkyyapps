"use client";

import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const SPRING = {
  mass: 0.1, // avoid Controls inertia (how sluggish or responsive the object feels). Lower mass = snappier motion; higher mass = lethargic motion
  damping: 10, // its like the weight of the ball heavier the ball less it will bounce or harder the rubber band the more it will bounce
  stiffness: 131, // like rubber Band the more you strech the more speed it goes back to the original position
};


// ── Skiper UI original (unchanged): spring mouse follow inside a box ──
const SpringMouseFollow = () => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  return (
    <div
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        xSpring.set(e.clientX - bounds.left);
        ySpring.set(e.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        opacitySpring.set(1);
        scaleSpring.set(1);
      }}
      onPointerLeave={() => {
        opacitySpring.set(0);
        scaleSpring.set(0);
      }}
      className="rounded-4xl bg-background mt-20 size-[500px] overflow-hidden"
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        className="rounded-4xl size-10 bg-orange-500"
      ></motion.div>
    </div>
  );
};


// ── FUNKYY adaptation: the same springs (SPRING) driving a site-wide follower ring.
// Desktop mouse only: never mounts on touch screens or with reduced motion, and the
// system cursor stays visible so nothing about pointing or focus changes. ──
export function SpringCursor() {
  const [enabled, setEnabled] = useState(false);
  const xSpring = useSpring(-100, SPRING);
  const ySpring = useSpring(-100, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(1, SPRING);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      xSpring.set(e.clientX);
      ySpring.set(e.clientY);
      opacitySpring.set(1);
      const interactive = (e.target as Element | null)?.closest?.("a, button, [role=tab], label, summary");
      scaleSpring.set(interactive ? 1.9 : 1);
    };
    const leave = () => opacitySpring.set(0);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, xSpring, ySpring, opacitySpring, scaleSpring]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] -mt-4 -ml-4 size-8 rounded-full border-2 border-tang mix-blend-difference"
      style={{ x: xSpring, y: ySpring, opacity: opacitySpring, scale: scaleSpring }}
    />
  );
}

export { SpringMouseFollow };

