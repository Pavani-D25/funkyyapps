// Inspired by Unlumen "Motion FAQs Accordion": height springs open, the plus turns into a cross.
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { cn } from '../../lib/cn'

export type AccItem = { q: string; a: string[] }

// light **bold** support for copy carried over from the old site
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return <>{parts.map((p, i) => (p.startsWith('**') ? <strong key={i} className="font-semibold text-bone">{p.slice(2, -2)}</strong> : p))}</>
}

export function Accordion({ items, defaultOpen = 0, className }: { items: AccItem[]; defaultOpen?: number; className?: string }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  return (
    <div className={cn('divide-y divide-line border-y border-line', className)}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q}>
            <button
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-lg font-semibold leading-snug md:text-xl">{it.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className={cn('mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border text-xl transition-colors', isOpen ? 'border-tang bg-tang text-ink' : 'border-line text-bone')}
              >+</motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 32 }}
                  className="overflow-hidden"
                >
                  <div className="prose-fa max-w-[68ch] pb-7 text-mist">
                    {it.a.map((p, k) => <p key={k}><Rich text={p} /></p>)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
