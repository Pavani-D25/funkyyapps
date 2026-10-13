// One call-to-action component for the whole site.
// primary → Magic UI "Shimmer Button", shiny → Magic UI "Shiny Button", ghost → plain outline (secondary actions).
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ShinyButton } from '@/components/ui/shiny-button'
import { scrollToId } from '@/lib/scroll'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  /** internal route, e.g. "/consult" */
  to?: string
  /** external URL, mailto:, or an in-page "#id" */
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'shiny' | 'ghost'
  /** primary only: dark button for use on tangerine panels */
  tone?: 'tang' | 'ink'
  className?: string
}

export function Cta({ children, to, href, type = 'button', variant = 'primary', tone = 'tang', className }: Props) {
  const external = href?.startsWith('http')
  const target = to ? (
    <Link to={to}>{children}</Link>
  ) : href?.startsWith('#') ? (
    <a href={href} onClick={(e) => { e.preventDefault(); scrollToId(href.slice(1)) }}>{children}</a>
  ) : href ? (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>
  ) : null

  if (variant === 'ghost') {
    const cls = cn('neon-ghost inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-semibold text-bone transition-colors hover:border-mist active:scale-[.97]', className)
    if (to) return <Link to={to} className={cls}>{children}</Link>
    if (href) return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={cls}>{children}</a>
    return <button type={type} className={cls}>{children}</button>
  }

  if (variant === 'shiny') {
    return target ? <ShinyButton asChild className={cn('neon-ghost', className)}>{target}</ShinyButton> : <ShinyButton type={type} className={cn('neon-ghost', className)}>{children}</ShinyButton>
  }

  const ink = tone === 'ink'
  const shimmer = { background: ink ? 'var(--color-ink)' : 'var(--color-tang)', shimmerColor: ink ? '#ff9a6b' : '#fff4e8', className: cn('neon-btn', ink && 'text-bone', className) }
  return target ? <ShimmerButton asChild {...shimmer}>{target}</ShimmerButton> : <ShimmerButton type={type} {...shimmer}>{children}</ShimmerButton>
}
