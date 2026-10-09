// Inspired by Unlumen "Tilt Card": the card leans toward the pointer with a moving glare.
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function TiltCard({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const x = useMotionValue(0.5), y = useMotionValue(0.5)
  const rx = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })
  const gx = useTransform(x, (v) => `${v * 100}%`), gy = useTransform(y, (v) => `${v * 100}%`)
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,.14), transparent 55%)`
  return (
    <motion.div
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height) }}
      onPointerLeave={() => { x.set(0.5); y.set(0.5) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={cn('relative', className)}
    >
      {children}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glare }} />
    </motion.div>
  )
}
