// Inspired by Unlumen "Orbital Image Wheel": platform badges orbit a centre; hover one to read it.
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

type Item = { name: string; label: string; mark: string; color: string }

export function OrbitalWheel({ items }: { items: Item[] }) {
  const [hover, setHover] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const current = hover ?? 0
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[6%] rounded-full border border-dashed border-line" />
      <div className="absolute inset-[26%] rounded-full border border-line" />
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-ink-2 p-6 text-center">
        <div>
          <p className="font-display text-xl font-extrabold md:text-2xl" style={{ color: items[current].color }}>{items[current].name}</p>
          <p className="mt-1 text-sm text-mist">{items[current].label}</p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0"
        animate={reduce || hover !== null ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        {items.map((it, i) => {
          const a = (i / items.length) * Math.PI * 2 - Math.PI / 2
          const left = 50 + Math.cos(a) * 44, top = 50 + Math.sin(a) * 44
          return (
            <motion.button
              key={it.name}
              aria-label={it.label}
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              className="absolute grid size-[17%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-line bg-ink-3 font-display text-base font-extrabold md:text-lg"
              style={{ left: `${left}%`, top: `${top}%`, color: it.color }}
              animate={reduce || hover !== null ? { rotate: 0 } : { rotate: -360 }}
              whileHover={{ scale: 1.15 }}
              transition={{ rotate: { repeat: Infinity, duration: 60, ease: 'linear' } }}
            >
              {it.mark}
            </motion.button>
          )
        })}
      </motion.div>
    </div>
  )
}
