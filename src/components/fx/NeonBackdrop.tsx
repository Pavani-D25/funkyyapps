// Site backdrop: every page gets its own neon scene on a night ground. Four colour clouds drift behind
// all of them (in the page's palette), plus one signature layer per scene, and a soft glow that trails
// the pointer (mouse/pen only). Gradients + transforms only, so it stays cheap; reduced motion freezes it.
import { motion } from 'motion/react'
import { useEffect, useRef, type CSSProperties } from 'react'
import type { Look } from '@/data/neon-looks'

export function NeonBackdrop({ look }: { look: Look }) {
  const spot = useRef<HTMLDivElement>(null)
  const [n1, n2, n3, n4] = look.colors

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
      style={{ '--n1': n1, '--n2': n2, '--n3': n3, '--n4': n4 } as CSSProperties}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="neon-blob neon-blob-1" />
      <div className="neon-blob neon-blob-2" />
      <div className="neon-blob neon-blob-3" />
      <div className="neon-blob neon-blob-4" />
      {look.scene === 'synth' && <div className="neon-floor"><div className="neon-grid" /></div>}
      {look.scene === 'beams' && [
        { d: 13, delay: 0, c: n1 }, { d: 17, delay: -6, c: n2 }, { d: 11, delay: -3, c: n3 }, { d: 21, delay: -14, c: n1 }, { d: 15, delay: -9, c: n4 },
      ].map((b, i) => <div key={i} className="neon-beam" style={{ '--d': `${b.d}s`, '--delay': `${b.delay}s`, '--beam': b.c } as CSSProperties} />)}
      {look.scene === 'rings' && <><div className="neon-rings" /><div className="neon-rings alt" /></>}
      {look.scene === 'prism' && <><div className="neon-prism" /><div className="neon-dots" /></>}
      {look.scene === 'aurora' && (
        <>
          <div className="neon-stars" />
          <div className="neon-ribbon" style={{ top: '14%', '--ribbon': n1, '--d': '17s' } as CSSProperties} />
          <div className="neon-ribbon" style={{ top: '40%', '--ribbon': n2, '--d': '23s' } as CSSProperties} />
          <div className="neon-ribbon" style={{ top: '66%', '--ribbon': n3, '--d': '19s' } as CSSProperties} />
        </>
      )}
      <div ref={spot} className="neon-spot" />
    </motion.div>
  )
}
