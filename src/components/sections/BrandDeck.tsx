// "Trusted By" as a hand of cards: the clients' logo cards (from the live site's coverflow) fanned in an arc.
// The front card stands up straight and its quote shows alongside. The deck deals itself forward when the
// progress bar fills (paused on hover/focus and off-screen); click a card, use the arrows or swipe to move.
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef, useState, type ReactNode } from 'react'
import type { Testimonial } from '@/data/site'
import { cn } from '@/lib/utils'

const STEP = 7 // degrees between neighbouring cards
const SPREAD = 17 // % of a card's width between neighbouring cards
const SHOW = 3 // cards visible on each side of the front one
const DWELL = 5 // seconds per card

export function BrandDeck({ items, heading }: { items: Testimonial[]; heading: ReactNode }) {
  const n = items.length
  const [active, setActive] = useState(0)
  const [hold, setHold] = useState(false)
  const reduce = useReducedMotion()
  const deckRef = useRef<HTMLDivElement>(null)
  const inView = useInView(deckRef, { amount: 0.4 })
  const panned = useRef(false)
  const go = (i: number) => setActive(((i % n) + n) % n)
  const playing = !hold && inView

  return (
    <div
      className="grid items-center gap-x-12 gap-y-8 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr]"
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setHold(true) }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setHold(false) }}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setHold(true) }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setHold(false) }}
    >
      <div className="lg:col-start-1 lg:row-start-1 lg:self-end">{heading}</div>

      {/* the fan */}
      <motion.div
        ref={deckRef}
        className="relative flex h-[270px] touch-pan-y items-start justify-center overflow-hidden pt-6 select-none [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)] sm:h-[330px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[400px] lg:pt-12"
        onPanStart={() => { panned.current = true }}
        onPanEnd={(_, info) => {
          if (info.offset.x < -40) go(active + 1)
          else if (info.offset.x > 40) go(active - 1)
          setTimeout(() => { panned.current = false })
        }}
      >
        <div className="relative aspect-[10/7] w-[230px] sm:w-[280px] lg:w-[320px]">
          {items.map((t, i) => {
            const d = ((i - active + n + Math.floor(n / 2)) % n) - Math.floor(n / 2)
            const front = d === 0
            const hidden = Math.abs(d) > SHOW
            return (
              <motion.button
                key={t.name}
                type="button"
                tabIndex={hidden ? -1 : 0}
                aria-label={`Show ${t.brand ?? t.name}`}
                aria-current={front || undefined}
                onClick={() => { if (!panned.current) go(i) }}
                className={cn('absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-black/10', front ? 'shadow-[0_30px_60px_-20px_rgb(0_0_0/0.75)]' : 'shadow-[0_14px_30px_-14px_rgb(0_0_0/0.6)]', hidden && 'pointer-events-none')}
                style={{ zIndex: 20 - Math.abs(d), transformOrigin: '50% 180%' }}
                initial={false}
                animate={{ rotate: d * STEP, x: `${d * SPREAD}%`, y: front ? -14 : Math.abs(d) * 6, scale: front ? 1 : 0.88, opacity: hidden ? 0 : 1 }}
                transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 22, opacity: { duration: 0.2 } }}
              >
                <img src={t.image} alt={t.brand ?? t.name} width={600} height={420} draggable={false} loading="lazy" decoding="async" className="size-full object-cover" />
                <motion.span aria-hidden className="absolute inset-0 bg-ink" initial={false} animate={{ opacity: front ? 0 : 0.35 }} transition={{ duration: 0.3 }} />
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* the front card's quote: every quote sits in the same grid cell so the box keeps the tallest height */}
      <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-mist tabular-nums">{String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          {/* the bar's animation end deals the next card, so a pause freezes both together */}
          <span className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-line">
            {!reduce && (
              <span
                key={active}
                className="absolute inset-y-0 left-0 w-full origin-left bg-tang"
                style={{ animation: `deck-progress ${DWELL}s linear forwards`, animationPlayState: playing ? 'running' : 'paused' }}
                onAnimationEnd={() => go(active + 1)}
              />
            )}
          </span>
          <span className="flex gap-1.5">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous brand" className="grid size-10 place-items-center rounded-full border border-line text-lg leading-none text-bone transition-colors hover:border-bone">‹</button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next brand" className="grid size-10 place-items-center rounded-full border border-line text-lg leading-none text-bone transition-colors hover:border-bone">›</button>
          </span>
        </div>
        <div className="grid">
          {items.map((t, i) => {
            const on = i === active
            const sub = t.org ?? (t.brand !== t.name ? t.brand : undefined)
            return (
              <figure
                key={t.name}
                aria-hidden={!on}
                className={cn('col-start-1 row-start-1 transition-[opacity,translate,visibility]', on ? 'visible translate-y-0 opacity-100 delay-200 duration-500' : 'invisible translate-y-3 opacity-0 duration-200')}
              >
                <span aria-hidden className="block font-display text-5xl leading-none text-tang">“</span>
                <blockquote className="mt-1 text-[17px] leading-relaxed text-bone/90 md:text-lg">{t.quote.replace(/^"|"$/g, '')}</blockquote>
                <figcaption className="mt-5">
                  <span className="block font-semibold">{t.name}</span>
                  {sub && <span className="block text-sm text-mist">{sub}</span>}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}
