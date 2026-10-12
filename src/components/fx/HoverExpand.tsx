// Inspired by Unlumen "Hover Expand" / Vengeance "Staggered Grid": the hovered column widens to show its list
// and two scrolling homepage previews (the live site's "scrolling screenshot" boxes).
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

const SWATCH = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']
// same colours as hex, so Motion can tween the mobile bars between them
const SWATCH_HEX = ['#ff6b2c', '#c9b6ff', '#ffd84d']

type Industry = { name: string; items: string[]; shots: string[] }

// a small browser window whose full-page capture slowly scrolls top → bottom → top (CSS .site-pan, paused on hover)
function SitePreview({ src, label, delay = 0, className }: { src: string; label: string; delay?: number; className?: string }) {
  return (
    <div className={cn('flex min-h-0 flex-col overflow-hidden rounded-xl bg-ink shadow-[0_18px_40px_-18px_rgb(16_32_31/0.7)] ring-1 ring-ink/20', className)}>
      <div aria-hidden className="flex shrink-0 gap-1 px-2.5 py-2">
        <span className="size-1.5 rounded-full bg-tang" /><span className="size-1.5 rounded-full bg-butter" /><span className="size-1.5 rounded-full bg-lilac" />
      </div>
      <img
        src={src}
        alt={label}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="site-pan min-h-0 w-full flex-1 bg-ink-3 object-cover object-top"
        style={{ animationDelay: `${-delay}s` }}
      />
    </div>
  )
}

export function HoverExpand({ items }: { items: Industry[] }) {
  const [active, setActive] = useState(0)
  return (
    <>
      {/* desktop: expanding columns */}
      <div className="hidden h-[560px] gap-2 lg:flex">
        {items.map((it, i) => {
          const on = active === i
          return (
            <motion.button
              key={it.name}
              layout
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn('relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[22px] border text-left', on ? 'border-transparent p-5 text-ink' : 'border-line bg-ink-2 px-3 py-5 text-bone')}
              style={{ flex: on ? 14 : 1, background: on ? SWATCH[i % 3] : undefined }}
              transition={{ type: 'spring', stiffness: 220, damping: 30 }}
            >
              <span className={cn('font-display text-sm font-bold tabular-nums', on ? 'text-ink/60' : 'text-mist')}>{String(i + 1).padStart(2, '0')}</span>
              {on ? (
                <motion.div initial={{ y: 12 }} animate={{ y: 0 }} className="mt-3 flex min-h-0 min-w-[380px] flex-1 flex-col">
                  <p className="font-display text-3xl font-extrabold leading-none">{it.name}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px] font-medium">
                    {it.items.map((s) => <li key={s} className="flex items-center gap-2"><span className="size-1.5 shrink-0 rounded-full bg-ink" />{s}</li>)}
                  </ul>
                  <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3">
                    {it.shots.map((src, k) => <SitePreview key={src} src={src} delay={k * 9} label={`${it.name} homepage example ${k + 1}`} />)}
                  </div>
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

function MobilePicker({ items }: { items: Industry[] }) {
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
        {/* fixed height for the longest list plus the previews, so switching never makes the page jump */}
        <div
          className="relative mt-3 min-h-[calc(var(--list)+1rem+220px)] sm:min-h-[calc(var(--list)+1rem+320px)]"
          style={{ '--list': `calc(2.4rem + ${most} * 1.9rem)` } as CSSProperties}
        >
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
              <div className="mt-4 grid grid-cols-2 gap-3">
                {it.shots.map((src, k) => <SitePreview key={src} src={src} delay={k * 9} label={`${it.name} homepage example ${k + 1}`} className="h-[220px] sm:h-[320px]" />)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
