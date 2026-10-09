// Inspired by Magic UI "Border Beam": a light that travels around a card's border.
import { motion } from 'motion/react'

export function BorderBeam({ size = 120, duration = 7, colorFrom = 'var(--color-tang)', colorTo = 'var(--color-lilac)', radius = 28 }: { size?: number; duration?: number; colorFrom?: string; colorTo?: string; radius?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ borderWidth: 1.5 }}
    >
      <motion.div
        className="absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${radius}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        }}
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{ repeat: Infinity, ease: 'linear', duration }}
      />
    </div>
  )
}
