// Inspired by SmoothUI "Animated Tabs" / Unlumen "Motion Tabs Menu": the active pill glides with layoutId.
import { motion } from 'motion/react'
import { cn } from '../../lib/cn'
import { useId } from 'react'

export function AnimatedTabs({ tabs, active, onChange, className, vertical }: { tabs: string[]; active: number; onChange: (i: number) => void; className?: string; vertical?: boolean }) {
  const id = useId()
  return (
    <div role="tablist" className={cn('flex gap-1.5', vertical ? 'flex-col' : 'flex-wrap', className)}>
      {tabs.map((t, i) => (
        <button
          key={t}
          role="tab"
          aria-selected={active === i}
          onClick={() => onChange(i)}
          className={cn('relative rounded-full px-4 py-2.5 text-left text-[15px] font-medium transition-colors', active === i ? 'text-ink' : 'text-mist hover:text-bone')}
        >
          {active === i && <motion.span layoutId={id} className="absolute inset-0 rounded-full bg-bone" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
          <span className="relative">{t}</span>
        </button>
      ))}
    </div>
  )
}
