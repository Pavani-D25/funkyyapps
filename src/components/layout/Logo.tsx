import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

// Wordmark: the double-y gets two sticker dots. Swap for the real logo file if preferred.
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="FUNKYY APPS home" className={cn('group inline-flex items-baseline font-display font-black tracking-tight', className)}>
      <span>funky</span>
      <span className="relative">
        y
        <span className="absolute -top-1 -right-2 size-2.5 rounded-full bg-tang transition-transform group-hover:scale-125" />
        <span className="absolute -top-2.5 right-1 size-1.5 rounded-full bg-lilac transition-transform group-hover:-translate-y-1" />
      </span>
      <span className="ml-3.5 text-[0.55em] font-semibold tracking-[0.2em] text-mist">APPS</span>
    </Link>
  )
}
