import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

// The original FUNKYY APPS logo from the live site, cut out of its white background (public/logo.webp, 596×112).
// imgClassName sets the height (the width follows); defaults to the full-size header logo.
export function Logo({ className, imgClassName = 'h-11 sm:h-14 lg:h-16' }: { className?: string; imgClassName?: string }) {
  return (
    <Link to="/" aria-label="FUNKYY APPS home" className={cn('inline-flex shrink-0 items-center transition-transform active:scale-95', className)}>
      <img src="/logo.webp" alt="FUNKYY APPS" width={596} height={112} className={cn('w-auto transition-[height] duration-300', imgClassName)} />
    </Link>
  )
}
