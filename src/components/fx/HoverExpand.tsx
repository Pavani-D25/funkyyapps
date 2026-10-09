// Inspired by Unlumen "Hover Expand" / Vengeance "Staggered Grid": the hovered column widens to show its list.
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const SWATCH = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']
// same colours as hex, so Motion can tween the mobile bars between them
const SWATCH_HEX = ['#ff6b2c', '#c9b6ff', '#ffd84d']

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
      {/* mobile / tablet: every industry as a chip, one colour panel for the chosen one (swipe to move on) */}
      <MobilePicker items={items} />
    </>
  )
}

function MobilePicker({ items }: { items: { name: string; items: string[] }[] }) {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const reduce = useReducedMotion()
  const go = (i: number) => { const n = (i + items.length) % items.length; setDir(n > active ? 1 : -1); setActive(n) }
  const it = items[active]
  const most = Math.max(...items.map((x) => x.items.length))
  return (
    <div className="lg:hidden">
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2">
        {items.map((x, i) => {
          const on = active === i
          return (
            <button
              key={x.name}
              type="button"
              role="tab"
              id={`industry-tab-${i}`}
              aria-selected={on}
              aria-controls="industry-panel"
              onClick={() => go(i)}
              className={cn('rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors', on ? 'border-transparent text-ink' : 'border-line text-mist hover:text-bone')}
              style={on ? { background: SWATCH[i % 3] } : undefined}
            >
              {x.name}
            </button>
          )
        })}
      </div>
      <motion.div
        id="industry-panel"
        role="tabpanel"
        aria-labelledby={`industry-tab-${active}`}
        className="relative mt-4 touch-pan-y overflow-hidden rounded-[22px] p-5 text-ink sm:p-6"
        initial={false}
        animate={{ backgroundColor: SWATCH_HEX[active % 3] }}
        transition={reduce ? { duration: 0 } : { duration: 0.3 }}
        drag={reduce ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={(_, info) => { if (info.offset.x < -50) go(active + 1); else if (info.offset.x > 50) go(active - 1) }}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold text-ink/60 tabular-nums">{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
          <span className="flex gap-1.5">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous industry" className="grid size-9 place-items-center rounded-full border border-ink/25 text-lg leading-none">‹</button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next industry" className="grid size-9 place-items-center rounded-full border border-ink/25 text-lg leading-none">›</button>
          </span>
        </div>
        {/* fixed height for the longest list, so switching never makes the page jump */}
        <div className="relative mt-3" style={{ minHeight: `calc(2.4rem + ${most} * 1.9rem)` }}>
          <AnimatePresence mode="popLayout" initial={false} custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={reduce ? false : { opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: dir * -40 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <p className="font-display text-2xl leading-tight font-extrabold sm:text-3xl">{it.name}</p>
              <ul className="mt-3 grid gap-1.5 text-[15px] font-medium sm:grid-cols-2">
                {it.items.map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 shrink-0 rounded-full bg-ink" />{x}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
