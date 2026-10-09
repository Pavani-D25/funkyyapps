// Index-based wrapper around SmoothUI "Animated Tabs" (pill variant, brand colours).
import AnimatedTabs from '@/components/smoothui/animated-tabs'

export const tabId = (group: string, i: number) => `${group}-tab-${i}`
export const panelProps = (group: string, i: number) => ({ role: 'tabpanel' as const, id: `${group}-panel`, 'aria-labelledby': tabId(group, i), tabIndex: 0 })

export function Tabs({ group, tabs, active, onChange, vertical, className }: { group: string; tabs: string[]; active: number; onChange: (i: number) => void; vertical?: boolean; className?: string }) {
  return (
    <AnimatedTabs
      variant="pill"
      layoutId={group}
      orientation={vertical ? 'vertical' : 'horizontal'}
      className={className}
      tabs={tabs.map((label, i) => ({ id: String(i), label }))}
      activeTab={String(active)}
      onChange={(id) => onChange(Number(id))}
    />
  )
}
