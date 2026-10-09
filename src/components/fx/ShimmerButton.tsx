// Original hand-made hero button (kept for the hero only, as it was before the library upgrade).
// Inspired by Magic UI "Shimmer Button" + Vengeance "hover button": a light sweep and a press squish.
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { scrollToId } from '@/lib/scroll'

type Props = { children: ReactNode; to?: string; href?: string; onClick?: () => void; type?: 'button' | 'submit'; variant?: 'tang' | 'ghost' | 'bone'; className?: string }

export function ShimmerButton({ children, to, href, onClick, type = 'button', variant = 'tang', className }: Props) {
  const cls = cn(
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform duration-200 active:scale-[.96] select-none',
    variant === 'tang' && 'bg-tang text-ink',
    variant === 'bone' && 'bg-bone text-ink',
    variant === 'ghost' && 'border border-line text-bone hover:border-mist',
    className
  )
  const inner = (
    <>
      {variant !== 'ghost' && (
        <span aria-hidden className="pointer-events-none absolute inset-0 animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,.55)_50%,transparent_65%)] opacity-60" />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href?.startsWith('#')) return <button type="button" onClick={() => scrollToId(href.slice(1))} className={cls}>{inner}</button>
  if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>{inner}</a>
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>
}
