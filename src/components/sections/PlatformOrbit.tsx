// The 7 platforms on Magic UI "Orbiting Circles": two rings turning in opposite directions.
// Radii follow the container width so it fits at 390px as well as 1440px.
import { useEffect, useRef, useState } from 'react'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import type { platforms as Platforms } from '@/data/site'

type Platform = (typeof Platforms)[number]

function Chip({ p, compact }: { p: Platform; compact: boolean }) {
  if (compact) {
    return <span className="grid size-10 place-items-center rounded-full border-2 border-ink font-display text-xs font-black text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,.8)]" style={{ background: p.color }}>{p.mark}</span>
  }
  return (
    <span className="flex items-center gap-2 rounded-full border border-line bg-ink-3 py-1.5 pr-3.5 pl-1.5 font-display text-xs font-bold whitespace-nowrap text-bone shadow-[0_8px_24px_-12px_rgba(0,0,0,.8)] md:text-sm">
      <span className="grid size-7 place-items-center rounded-full text-[11px] font-black text-ink md:size-8" style={{ background: p.color }}>{p.mark}</span>
      {p.name}
    </span>
  )
}

export function PlatformOrbit({ items }: { items: Platform[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(480)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  // full name chips need ~70px of clearance from the edge; below 440px switch to logo-only chips
  const compact = w < 440
  const outerR = compact ? w * 0.4 : w / 2 - 72
  const innerR = compact ? w * 0.22 : outerR * 0.52
  const outer = items.slice(0, 4)
  const inner = items.slice(4)
  return (
    <div ref={ref} aria-hidden className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden">
      <div className="absolute size-[30%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-tang)_35%,transparent),transparent_70%)]" />
      <span className="relative grid size-16 place-items-center rounded-full border border-line bg-ink-2 md:size-20">
        <span className="size-4 rounded-full bg-tang" />
        <span className="absolute top-4 right-4 size-2 rounded-full bg-lilac md:top-5 md:right-5" />
      </span>
      <OrbitingCircles radius={outerR} duration={46} iconSize={40}>
        {outer.map((p) => <Chip key={p.name} p={p} compact={compact} />)}
      </OrbitingCircles>
      <OrbitingCircles radius={innerR} duration={32} iconSize={40} reverse>
        {inner.map((p) => <Chip key={p.name} p={p} compact={compact} />)}
      </OrbitingCircles>
    </div>
  )
}
