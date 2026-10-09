// Inspired by Unlumen "Hover Expand" / Vengeance "Staggered Grid": the hovered column widens to show its list.
import { motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '../../lib/cn'

const SWATCH = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

export function HoverExpand({ items }: { items: { name: string; items: string[] }[] }) {
  const [active, setActive] = useState(0)
  return (
    <>
      {/* desktop: expanding columns */}
      <div className="hidden h-[440px] gap-2 lg:flex">
        {items.map((it, i) => {
          const on = active === i
          return (
            <motion.button
              key={it.name}
              layout
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn('relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[22px] border p-5 text-left', on ? 'border-transparent text-ink' : 'border-line bg-ink-2 text-bone')}
              style={{ flex: on ? 4.2 : 1, background: on ? SWATCH[i % 3] : undefined }}
              transition={{ type: 'spring', stiffness: 220, damping: 30 }}
            >
              <span className={cn('font-display text-sm font-bold tabular-nums', on ? 'text-ink/60' : 'text-mist')}>{String(i + 1).padStart(2, '0')}</span>
              {on ? (
                <motion.div initial={{ y: 12 }} animate={{ y: 0 }} className="min-w-[260px]">
                  <p className="font-display text-3xl font-extrabold leading-none">{it.name}</p>
                  <ul className="mt-5 grid gap-1.5 text-[15px] font-medium">
                    {it.items.map((s) => <li key={s} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-ink" />{s}</li>)}
                  </ul>
                </motion.div>
              ) : (
                <span className="font-display text-sm font-semibold [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">{it.name}</span>
              )}
            </motion.button>
          )
        })}
      </div>
      {/* mobile / tablet: compact grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {items.map((it, i) => (
          <div key={it.name} className="rounded-[22px] border border-line bg-ink-2 p-5">
            <p className="font-display text-lg font-bold" style={{ color: SWATCH[i % 3] }}>{it.name}</p>
            <ul className="mt-3 grid gap-1 text-[15px] text-mist">{it.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </>
  )
}
