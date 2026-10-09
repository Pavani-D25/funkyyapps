// Inspired by Unlumen "Hover Expand" / Vengeance "Staggered Grid": the hovered column widens to show its list.
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const SWATCH = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']
// same colours as hex, so Motion can tween the mobile bars between them
const SWATCH_HEX = ['#ff6b2c', '#c9b6ff', '#ffd84d']
const INK_2 = '#162a29'

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
      {/* mobile / tablet: the same idea turned sideways — tap a bar and it springs open in its colour */}
      <MobileBars items={items} />
    </>
  )
}

function MobileBars({ items }: { items: { name: string; items: string[] }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const spring = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 260, damping: 30 }
  return (
    <div className="grid gap-2 lg:hidden">
      {items.map((it, i) => {
        const on = open === i
        const id = `industry-${i}`
        return (
          <motion.div
            key={it.name}
            className={cn('overflow-hidden rounded-[22px] border', on ? 'border-transparent text-ink' : 'border-line text-bone')}
            initial={false}
            animate={{ backgroundColor: on ? SWATCH_HEX[i % 3] : INK_2 }}
            transition={reduce ? { duration: 0 } : { duration: 0.3 }}
          >
            <button
              type="button"
              aria-expanded={on}
              aria-controls={id}
              onClick={() => setOpen(on ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className={cn('font-display text-sm font-bold tabular-nums', on && 'text-ink/60')} style={on ? undefined : { color: SWATCH[i % 3] }}>{String(i + 1).padStart(2, '0')}</span>
              <span className={cn('flex-1 font-display font-extrabold leading-tight transition-[font-size] duration-300', on ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl')}>{it.name}</span>
              <motion.span
                aria-hidden
                animate={{ rotate: on ? 45 : 0 }}
                transition={spring}
                className={cn('grid size-9 shrink-0 place-items-center rounded-full border text-xl leading-none', on ? 'border-ink/30' : 'border-line')}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={id}
                  key="list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={spring}
                >
                  <ul className="grid gap-2 px-5 pb-6 text-[15px] font-medium sm:grid-cols-2 sm:px-6">
                    {it.items.map((s, k) => (
                      <motion.li
                        key={s}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reduce ? 0 : 0.05 + k * 0.04 }}
                        className="flex items-center gap-2"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-ink" />
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
