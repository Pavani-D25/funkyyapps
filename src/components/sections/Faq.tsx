// FAQ list built on unlumen UI "Motion FAQs Accordion".
import { MotionAccordion } from '@/components/unlumen-ui/motion-faqs-accordion'
import { Rich } from './Rich'

export function Faq({ items, defaultOpen = 0, className }: { items: { q: string; a: string[] }[]; defaultOpen?: number | null; className?: string }) {
  return (
    <MotionAccordion
      className={className}
      defaultOpen={defaultOpen}
      items={items.map((it) => ({
        question: it.q,
        answer: <div className="prose-fa">{it.a.map((p, k) => <p key={k}><Rich text={p} /></p>)}</div>,
      }))}
    />
  )
}
