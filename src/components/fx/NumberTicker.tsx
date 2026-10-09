// Inspired by Magic UI "Number Ticker" / Unlumen "Animate Count": springs up when scrolled into view.
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'

export function NumberTicker({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { damping: 40, stiffness: 90 })
  const inView = useInView(ref, { once: true, margin: '0px' })
  useEffect(() => { if (inView) mv.set(value) }, [inView, value, mv])
  useEffect(() => spring.on('change', (v) => { if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-US') }), [spring])
  // resting text is the real number, so the page reads correctly even before animating
  return <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>{value.toLocaleString('en-US')}</span>
}
