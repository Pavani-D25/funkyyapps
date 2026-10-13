import type { ReactNode } from 'react'

export function PageHero({ title, children, kicker }: { title: string; kicker?: string; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="wrap relative">
        {kicker && <p className="mb-5 inline-block rounded-full bg-lilac px-3 py-1 font-display text-xs font-bold text-ink">{kicker}</p>}
        <h1 className="max-w-[16ch] text-[clamp(1.9rem,7vw,6rem)] font-black [overflow-wrap:anywhere] [hyphens:auto]">{title}</h1>
        {children && <div className="mt-8 max-w-[62ch] text-lg text-mist md:text-xl">{children}</div>}
      </div>
    </header>
  )
}
