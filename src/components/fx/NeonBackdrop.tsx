// Homepage backdrop: neon colour clouds drifting on a night ground, a synthwave grid floor rolling
// toward the viewer, and a soft glow that trails the pointer (mouse/pen only). All layers are
// gradients + transforms (no blur filters), so it stays cheap; reduced motion freezes it (see index.css).
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

export function NeonBackdrop() {
  const spot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spot.current
    if (!el || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    let x = window.innerWidth / 2, y = window.innerHeight / 3, tx = x, ty = y, raf = 0
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0
    }
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY
      el.style.opacity = '1'
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    // the fade lives on this element (not a wrapper) so it never forms a stacking context above the page
    <motion.div
      aria-hidden
      className="neon-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <div className="neon-blob neon-blob-1" />
      <div className="neon-blob neon-blob-2" />
      <div className="neon-blob neon-blob-3" />
      <div className="neon-blob neon-blob-4" />
      <div className="neon-floor"><div className="neon-grid" /></div>
      <div ref={spot} className="neon-spot" />
    </motion.div>
  )
}
