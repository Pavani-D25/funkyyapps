// Inspired by Vengeance UI "Animated Rays": slow, soft light beams behind page headers.
import { cn } from '../../lib/cn'

export function Rays({ className, color = 'var(--color-lilac)' }: { className?: string; color?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute -top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 animate-spin-slow opacity-[.13]"
        style={{ background: `repeating-conic-gradient(from 0deg, ${color} 0deg 4deg, transparent 4deg 18deg)`, maskImage: 'radial-gradient(circle, #000 0%, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle, #000 0%, transparent 60%)' }}
      />
    </div>
  )
}
