// Inspired by Skiper UI / Unlumen "Stacked Feature Cards" + Animmaster scroll stacks:
// each card pins under the previous one and the ones below it shrink back as you scroll on.
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef, type ReactNode } from 'react'

function Card({ i, total, progress, children }: { i: number; total: number; progress: MotionValue<number>; children: ReactNode }) {
  const start = i / total
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04])
  return (
    <div className="lg:sticky lg:h-auto" style={{ top: `calc(110px + ${i * 22}px)` }}>
      <motion.div style={{ scale }} className="origin-top">{children}</motion.div>
    </div>
  )
}

export function StackedCards({ children }: { children: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <div ref={ref} className="grid gap-6 lg:gap-14">
      {children.map((c, i) => <Card key={i} i={i} total={children.length} progress={scrollYProgress}>{c}</Card>)}
    </div>
  )
}
