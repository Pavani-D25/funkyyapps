import { useState, type ReactNode } from 'react'
import { Check, Copy } from 'lucide-react'

// Shows the value as selectable text; links still work on a real site, copy is the fallback.
export function CopyChip({ label, value, href, icon }: { label: string; value: string; href: string; icon?: ReactNode }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1600) } catch { /* selectable text remains */ }
  }
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-line bg-ink-3 py-2 pr-2 pl-4">
      {icon && <span className="shrink-0">{icon}</span>}
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="min-w-0 flex-1">
        <span className="block text-xs text-mist">{label}</span>
        <span className="block truncate font-semibold select-all">{value}</span>
      </a>
      <button onClick={copy} aria-label={`Copy ${label}`} className="grid size-9 shrink-0 place-items-center rounded-xl hover:bg-ink-2">
        {done ? <Check size={16} className="text-lilac" /> : <Copy size={16} />}
      </button>
    </div>
  )
}
