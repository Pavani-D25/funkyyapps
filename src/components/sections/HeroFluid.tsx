// Hero background: unlumen UI "Pixel Liquid Background" (three.js fluid sim, dithered into pixels),
// recoloured to the brand. It is the page's one big effect, so it is guarded hard:
// - only on desktop with a real mouse, motion allowed and WebGL available
// - code-split (three.js never ships to phones) and started when the browser is idle
// - everyone first gets a static CSS pixel field, which is also what phones keep
import { lazy, Suspense, useEffect, useState } from 'react'

const PixelLiquidBg = lazy(() => import('@/components/unlumen-ui/pixel-liquid-bg').then((m) => ({ default: m.PixelLiquidBg })))

const PALETTE = ['#10201f', '#2d2a52', '#c9b6ff', '#ff6b2c', '#ffd84d']

function canRunWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export function HeroFluid() {
  const [live, setLive] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!desktop || reduce || !canRunWebGL()) return
    const start = () => setLive(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(start, 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(100deg,transparent_8%,#000_55%)]"
    >
      {/* static pixel field: always painted first, and all that phones get */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 30%, color-mix(in oklab, var(--color-tang) 55%, transparent) 0 2px, transparent 2.5px), radial-gradient(circle at 70% 62%, color-mix(in oklab, var(--color-lilac) 50%, transparent) 0 2px, transparent 2.5px)',
          backgroundSize: '16px 16px, 16px 16px',
          maskImage: 'radial-gradient(ellipse 55% 60% at 78% 42%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 55% 60% at 78% 42%, #000 0%, transparent 70%)',
        }}
      />
      {live && (
        <Suspense fallback={null}>
          <PixelLiquidBg className="!absolute inset-0 bg-transparent" darkPalette={PALETTE} lightPalette={PALETTE} pixelSize={16} resolution={0.35} mouseForce={9} cursorSize={120} />
        </Suspense>
      )}
    </div>
  )
}
