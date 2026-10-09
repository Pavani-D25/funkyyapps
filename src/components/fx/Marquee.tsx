// Inspired by Magic UI "Marquee" — infinite, pausable, two directions, vertical option.
import { cn } from '../../lib/cn'
import type { ReactNode, CSSProperties } from 'react'

type Props = { children: ReactNode; reverse?: boolean; vertical?: boolean; pauseOnHover?: boolean; duration?: number; gap?: string; className?: string; repeat?: number }

export function Marquee({ children, reverse, vertical, pauseOnHover = true, duration = 40, gap = '1.25rem', className, repeat = 2 }: Props) {
  return (
    <div
      className={cn('group flex overflow-hidden [--gap:var(--g)]', vertical ? 'flex-col' : 'flex-row', className)}
      style={{ '--g': gap, '--duration': `${duration}s`, gap } as CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            'flex shrink-0 justify-around',
            vertical ? 'flex-col animate-marquee-y' : 'flex-row animate-marquee',
            reverse && '[animation-direction:reverse]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{ gap }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
