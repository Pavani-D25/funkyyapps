// Phones & tablets: a horizontal, snap-scrolling row (next card peeks in, dots show where you are),
// so groups of cards cost one screen instead of many. From lg up it is a normal grid (desktop unchanged).
import { Children, useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SwipeRow({
  children,
  label,
  desktopClassName = 'lg:grid-cols-3',
  itemClassName,
  className,
}: {
  children: ReactNode
  /** names the region for screen readers, e.g. "Pricing plans" */
  label: string
  /** the grid used from lg up */
  desktopClassName?: string
  /** width of each card below lg */
  itemClassName?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const kids = [...el.children] as HTMLElement[]
      const mid = el.scrollLeft + el.clientWidth * 0.35
      let best = 0
      kids.forEach((k, i) => { if (k.offsetLeft <= mid) best = i })
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = kids.length - 1
      setActive(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const go = (i: number) => {
    const el = ref.current
    const kid = el?.children[i] as HTMLElement | undefined
    if (el && kid) el.scrollTo({ left: kid.offsetLeft - parseFloat(getComputedStyle(el).scrollPaddingLeft || '0'), behavior: 'smooth' })
  }

  return (
    // min-w-0: inside a grid/flex parent the row must not grow to its scroll width
    <div className={cn('min-w-0', className)}>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          // full-bleed on small screens so cards slide in from the edges
          'no-scrollbar -mx-[clamp(16px,4vw,40px)] flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[clamp(16px,4vw,40px)] pb-1 [scroll-padding-inline:clamp(16px,4vw,40px)]',
          'lg:mx-0 lg:grid lg:snap-none lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0',
          desktopClassName
        )}
      >
        {items.map((child, i) => (
          <div key={i} className={cn('w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-auto', itemClassName)}>
            {child}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-4 lg:hidden">
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show item ${i + 1} of ${items.length}`}
                aria-current={active === i}
                onClick={() => go(i)}
                className={cn('h-2 rounded-full transition-all', active === i ? 'w-6 bg-tang' : 'w-2 bg-line')}
              />
            ))}
          </div>
          <span className="font-display text-xs font-bold text-mist tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  )
}
