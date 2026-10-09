// Inspired by Unlumen "Pixel Liquid Background" + Animmaster WebGL hero shaders:
// a canvas grid of soft pixels driven by interfering waves; the pointer drops ripples into it.
import { useEffect, useRef } from 'react'

const TANG = [255, 107, 44], LILAC = [201, 182, 255], BUTTER = [255, 216, 77]

export function PixelLiquid({ className, cell = 16 }: { className?: string; cell?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current!
    const ctx = cv.getContext('2d')!
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0, t = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const ripples: { x: number; y: number; t: number }[] = []
    const resize = () => {
      const r = cv.getBoundingClientRect(); w = r.width; h = r.height
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect()
      const last = ripples[ripples.length - 1]
      const x = e.clientX - r.left, y = e.clientY - r.top
      if (x < 0 || y < 0 || x > w || y > h) return
      if (!last || Math.hypot(last.x - x, last.y - y) > 40) ripples.push({ x, y, t })
      if (ripples.length > 14) ripples.shift()
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const cols = Math.ceil(w / cell), rows = Math.ceil(h / cell)
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * cell, y = j * cell
          const nx = i / cols, ny = j / rows
          let v = Math.sin(nx * 7 + t * 0.9) * 0.5 + Math.sin(ny * 6 - t * 0.7 + nx * 3) * 0.5 + Math.sin((nx + ny) * 9 + t * 1.3) * 0.35
          for (const r of ripples) {
            const age = t - r.t
            const d = Math.hypot(x - r.x, y - r.y)
            const front = age * 260
            v += Math.max(0, 1 - Math.abs(d - front) / 50) * Math.max(0, 1 - age / 2.2) * 1.4
          }
          v = (v + 1.35) / 2.7 // ~0..1
          // fade toward the left so the headline sits on calm ground
          const fade = Math.min(1, Math.max(0, (nx - 0.15) / 0.55))
          const a = Math.max(0, v - 0.55) * 2.2 * fade
          if (a < 0.04) continue
          const c = v > 0.86 ? BUTTER : v > 0.72 ? TANG : LILAC
          const s = cell * (0.25 + Math.min(1, a) * 0.6)
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${Math.min(0.9, a)})`
          ctx.beginPath()
          ctx.roundRect(x + (cell - s) / 2, y + (cell - s) / 2, s, s, s * 0.3)
          ctx.fill()
        }
      }
    }
    const loop = () => { t += 0.016; draw(); raf = requestAnimationFrame(loop) }
    resize(); draw()
    if (!reduce) raf = requestAnimationFrame(loop)
    const ro = new ResizeObserver(() => { resize(); draw() }); ro.observe(cv)
    window.addEventListener('pointermove', onMove)
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener('pointermove', onMove) }
  }, [cell])
  return <canvas ref={ref} aria-hidden className={className} />
}
