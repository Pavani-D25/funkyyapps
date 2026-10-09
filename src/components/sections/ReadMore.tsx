// Phones & tablets: long copy is shown up to a set height with a fade and a "Read more" button,
// so a single tab doesn't cost several screens of scrolling. All text stays in the page (nothing is
// removed), and from lg up it is always fully open.
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function ReadMore({ children, collapsedHeight = 340, className, buttonClassName, resetKey }: { children: ReactNode; collapsedHeight?: number; className?: string; buttonClassName?: string; resetKey?: unknown }) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [needed, setNeeded] = useState(false)

  // a new tab starts folded again
  useEffect(() => setOpen(false), [resetKey])

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => setNeeded(el.scrollHeight > collapsedHeight + 80)
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => ro.disconnect()
  }, [collapsedHeight, resetKey])

  const folded = needed && !open
  return (
    <div className={className}>
      <div
        ref={ref}
        className={cn('relative lg:!max-h-none lg:!overflow-visible', folded && 'overflow-hidden')}
        style={folded ? { maxHeight: collapsedHeight } : undefined}
      >
        {children}
        {folded && <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-ink-2 to-transparent lg:hidden" />}
      </div>
      {needed && (
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className={cn('mt-4 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-bone hover:border-mist lg:hidden', buttonClassName)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}
