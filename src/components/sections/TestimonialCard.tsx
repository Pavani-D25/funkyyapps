import type { Testimonial } from '@/data/site'
import { cn } from '@/lib/utils'

const TINTS = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)', 'var(--color-bone)']

export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  const initials = t.name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')
  const tint = TINTS[t.name.length % TINTS.length]
  const long = t.quote.length > 220
  return (
    <figure className={cn('flex shrink-0 flex-col justify-between gap-6 rounded-[24px] border border-line bg-ink-2 p-6', long ? 'w-[min(86vw,520px)]' : 'w-[min(80vw,360px)]', className)}>
      <blockquote className="text-[15px] leading-relaxed text-bone/90">{t.quote}</blockquote>
      <figcaption className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full font-display text-sm font-extrabold text-ink" style={{ background: tint }}>{initials}</span>
        <span className="min-w-0">
          <span className="block font-semibold">{t.name}</span>
          {t.org && <span className="block truncate text-sm text-mist">{t.org}</span>}
        </span>
      </figcaption>
    </figure>
  )
}
