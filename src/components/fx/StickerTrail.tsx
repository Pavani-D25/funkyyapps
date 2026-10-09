// Inspired by Skiper UI "Image cursor trail" / Unlumen "Cursor Image Trail":
// moving the pointer over the area drops little printed stickers that pop and fade.
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState, type ReactNode } from 'react'

const STICKERS = [
  { t: 'SEO', bg: 'var(--color-butter)', r: '999px' },
  { t: 'Apps', bg: 'var(--color-lilac)', r: '14px' },
  { t: 'Web', bg: 'var(--color-tang)', r: '999px' },
  { t: 'PPC', bg: 'var(--color-bone)', r: '6px' },
  { t: '★', bg: 'var(--color-butter)', r: '999px' },
  { t: 'UX', bg: 'var(--color-lilac)', r: '999px' },
  { t: 'Ads', bg: 'var(--color-tang)', r: '14px' },
]

type S = { id: number; x: number; y: number; k: number; rot: number }

export function StickerTrail({ children, className }: { children: ReactNode; className?: string }) {
  const [items, setItems] = useState<S[]>([])
  const last = useRef({ x: 0, y: 0 }), id = useRef(0)
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left, y = e.clientY - r.top
    if (Math.hypot(x - last.current.x, y - last.current.y) < 110) return
    last.current = { x, y }
    const s = { id: id.current++, x, y, k: id.current % STICKERS.length, rot: Math.random() * 40 - 20 }
    setItems((v) => [...v.slice(-7), s])
    setTimeout(() => setItems((v) => v.filter((i) => i.id !== s.id)), 900)
  }
  return (
    <div className={className} onPointerMove={onMove}>
      {children}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <AnimatePresence>
          {items.map((s) => {
            const st = STICKERS[s.k]
            return (
              <motion.span
                key={s.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2 font-display text-sm font-extrabold text-ink shadow-[0_6px_0_rgba(0,0,0,.25)]"
                style={{ left: s.x, top: s.y, background: st.bg, borderRadius: st.r }}
                initial={{ scale: 0, rotate: s.rot - 30 }}
                animate={{ scale: 1, rotate: s.rot }}
                exit={{ scale: 0.4, opacity: 0, y: 30 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                {st.t}
              </motion.span>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
