import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

// The original FUNKYY APPS logo from the live site, cut out of its white background (public/logo.webp, 596×112).
export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="FUNKYY APPS home" className={cn('inline-flex shrink-0 items-center transition-transform active:scale-95', className)}>
      <img src="/logo.webp" alt="FUNKYY APPS" width={596} height={112} className="h-6 w-auto sm:h-7 lg:h-8" />
    </Link>
  )
}
