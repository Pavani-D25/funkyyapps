// Project quote calculator: pick what you're building, how big, how designed, which extras and how fast,
// and the neon panel shows an estimated price range + delivery time. "Send this estimate" drops a summary
// into the site-wide quote form and scrolls to it; WhatsApp opens a chat with the same summary.
import { animate, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Cta } from '@/components/Cta'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { addOns, care, designLevels, kinds, platforms, range, rush, type Platform, type ProjectKind } from '@/data/pricing'
import { contact } from '@/data/site'
import { scrollToId } from '@/lib/scroll'
import { cn } from '@/lib/utils'

type Design = (typeof designLevels)[number]['id']
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const roundTo = (n: number) => Math.round(n / range.step) * range.step

// a number that glides to its new value (instant for reduced motion)
function Glide({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const mv = useMotionValue(value)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true })
  useMotionValueEvent(mv, 'change', (v) => { if (ref.current) ref.current.textContent = usd(v) })
  useEffect(() => {
    if (reduce || !inView) { mv.set(value); return }
    const c = animate(mv, value, { duration: 0.6, ease: [0.22, 1, 0.36, 1] })
    return () => c.stop()
  }, [value, reduce, inView, mv])
  return <span ref={ref} className={className}>{usd(value)}</span>
}

function Choice({ name, checked, onChange, children, className }: { name: string; checked: boolean; onChange: () => void; children: React.ReactNode; className?: string }) {
  return (
    <label className={cn('cursor-pointer', className)}>
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className={cn('block h-full rounded-2xl border px-4 py-3 transition-[border-color,background-color,box-shadow] peer-focus-visible:outline-2 peer-focus-visible:outline-lilac', checked ? 'neon-panel border-transparent bg-ink-3' : 'border-line hover:border-mist')}>{children}</span>
    </label>
  )
}

export function QuoteCalculator() {
  const [kindId, setKindId] = useState<ProjectKind>('website')
  const kind = kinds.find((k) => k.id === kindId)!
  const [size, setSize] = useState(5)
  const [platform, setPlatform] = useState<Platform>('both')
  const [design, setDesign] = useState<Design>('custom')
  const [extras, setExtras] = useState<Set<string>>(new Set(['seo']))
  const [fast, setFast] = useState(false)
  const [carePlan, setCarePlan] = useState(false)

  const pickKind = (id: ProjectKind) => {
    const k = kinds.find((x) => x.id === id)!
    setKindId(id)
    setSize((s) => Math.min(k.max, Math.max(k.min, s)))
    // a store always takes payments; drop extras the new type doesn't offer
    setExtras((prev) => {
      const next = new Set([...prev].filter((x) => { const a = addOns.find((o) => o.id === x)!; return !a.for || a.for.includes(id) }))
      if (id === 'ecommerce') next.add('payments')
      return next
    })
  }
  const toggle = (id: string) => setExtras((prev) => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n })
  const offered = addOns.filter((a) => !a.for || a.for.includes(kindId))

  const est = useMemo(() => {
    const both = kindId === 'mobile' && platform === 'both'
    const base = kindId === 'mobile' ? platforms.find((p) => p.id === platform)!.base : kind.base
    const extraUnits = Math.max(0, size - kind.included)
    const build = (base + extraUnits * kind.perExtra * (both ? 1.6 : 1)) * designLevels.find((d) => d.id === design)!.factor
    const chosen = offered.filter((a) => extras.has(a.id))
    const lines = chosen.map((a) => ({ label: a.perUnit ? `${a.label.replace(' (per page)', '')} × ${size}` : a.label, cost: a.perUnit ? a.price * size : a.price }))
    const subtotal = build + lines.reduce((t, l) => t + l.cost, 0)
    const total = fast ? subtotal * rush.factor : subtotal
    const weeks = Math.max(1, Math.ceil((kind.weeks + extraUnits * 0.25 + chosen.length * 0.4) * (design === 'premium' ? 1.2 : 1) * (fast ? rush.weeksFactor : 1)))
    return { build, lines, total, low: roundTo(total * range.low), high: roundTo(total * range.high), weeks }
  }, [kindId, kind, platform, size, design, extras, fast, offered])

  const summary = [
    `Project: ${kind.label}${kindId === 'mobile' ? ` (${platforms.find((p) => p.id === platform)!.label})` : ''}, ${size} ${kind.unit}`,
    `Design: ${designLevels.find((d) => d.id === design)!.label}`,
    est.lines.length ? `Extras: ${est.lines.map((l) => l.label).join(', ')}` : 'Extras: none',
    fast ? `Timeline: ${rush.label}` : 'Timeline: standard',
    carePlan ? `${care.label}: ${usd(care.monthly)}/month` : '',
    `Estimate: ${usd(est.low)} – ${usd(est.high)}, about ${est.weeks} week${est.weeks > 1 ? 's' : ''}`,
  ].filter(Boolean).join('\n')

  const sendToForm = () => {
    const details = document.getElementById('q-details') as HTMLTextAreaElement | null
    if (details) details.value = `Quote calculator estimate:\n${summary}`
    const service = kindId === 'mobile' ? 'Mobile App Development' : 'Web Design'
    document.querySelectorAll<HTMLInputElement>('#quote-form input[name="services"]').forEach((i) => { if (i.value === service || (i.value === 'SEO' && extras.has('seo'))) i.checked = true })
    scrollToId('quote')
  }
  const waLink = `${contact.whatsappUrl}?text=${encodeURIComponent(`Hi FunkyyApps! I used your quote calculator:\n${summary}`)}`

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
      <div className="grid gap-8">
        <fieldset>
          <legend className="mb-3 font-display text-lg font-bold">1. What are we building?</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {kinds.map((k) => (
              <Choice key={k.id} name="calc-kind" checked={kindId === k.id} onChange={() => pickKind(k.id)}>
                <span className="block font-semibold">{k.label}</span>
                <span className="block text-sm text-mist">{k.blurb}</span>
                <span className="mt-1 block text-sm text-butter">from {usd(k.id === 'mobile' ? platforms[0].base : k.base)}</span>
              </Choice>
            ))}
          </div>
        </fieldset>

        {kindId === 'mobile' && (
          <fieldset>
            <legend className="mb-3 font-display text-lg font-bold">Which platforms?</legend>
            <div className="grid grid-cols-3 gap-2">
              {platforms.map((p) => (
                <Choice key={p.id} name="calc-platform" checked={platform === p.id} onChange={() => setPlatform(p.id)}>
                  <span className="block text-center font-semibold">{p.label}</span>
                </Choice>
              ))}
            </div>
          </fieldset>
        )}

        <div>
          <label htmlFor="calc-size" className="mb-3 flex items-baseline justify-between gap-4 font-display text-lg font-bold">
            <span>2. How many {kind.unit}?</span>
            <span className="neon-text text-2xl text-tang tabular-nums">{size}</span>
          </label>
          <input id="calc-size" type="range" min={kind.min} max={kind.max} value={size} onChange={(e) => setSize(Number(e.target.value))} className="calc-range w-full" style={{ '--fill': `${((size - kind.min) / (kind.max - kind.min)) * 100}%` } as React.CSSProperties} />
          <p className="mt-2 text-sm text-mist">{kind.included} {kind.unit} included, then {usd(kind.perExtra)} each.</p>
        </div>

        <fieldset>
          <legend className="mb-3 font-display text-lg font-bold">3. Design level</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {designLevels.map((d) => (
              <Choice key={d.id} name="calc-design" checked={design === d.id} onChange={() => setDesign(d.id)}>
                <span className="block font-semibold">{d.label}</span>
                <span className="block text-sm text-mist">{d.note}</span>
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-display text-lg font-bold">4. Extras</legend>
          <div className="flex flex-wrap gap-2">
            {offered.map((a) => (
              <label key={a.id} className="cursor-pointer">
                <input type="checkbox" checked={extras.has(a.id)} onChange={() => toggle(a.id)} className="peer sr-only" />
                <span className={cn('inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] transition-[border-color,background-color,box-shadow] peer-focus-visible:outline-2 peer-focus-visible:outline-lilac', extras.has(a.id) ? 'neon-btn border-transparent bg-tang text-ink [animation:none]' : 'border-line hover:border-mist')}>
                  {a.label}<span className={extras.has(a.id) ? 'text-ink/70' : 'text-mist'}>+{usd(a.price)}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-2 sm:grid-cols-2">
          <legend className="mb-3 font-display text-lg font-bold">5. Timeline &amp; care</legend>
          {[
            { on: fast, set: () => setFast((v) => !v), title: rush.label, note: `+${Math.round((rush.factor - 1) * 100)}%, about ${Math.round((1 - rush.weeksFactor) * 100)}% sooner` },
            { on: carePlan, set: () => setCarePlan((v) => !v), title: care.label, note: `${usd(care.monthly)}/month after launch` },
          ].map((t) => (
            <label key={t.title} className="cursor-pointer">
              <input type="checkbox" checked={t.on} onChange={t.set} className="peer sr-only" />
              <span className={cn('flex h-full items-start gap-3 rounded-2xl border px-4 py-3 transition-[border-color,box-shadow] peer-focus-visible:outline-2 peer-focus-visible:outline-lilac', t.on ? 'neon-panel border-transparent bg-ink-3' : 'border-line hover:border-mist')}>
                <span className={cn('mt-1 grid size-5 shrink-0 place-items-center rounded-md border text-xs', t.on ? 'border-tang bg-tang text-ink' : 'border-line')}>{t.on ? '✓' : ''}</span>
                <span><span className="block font-semibold">{t.title}</span><span className="block text-sm text-mist">{t.note}</span></span>
              </span>
            </label>
          ))}
        </fieldset>
      </div>

      {/* the estimate */}
      <aside aria-live="polite" className="neon-panel self-start rounded-[28px] border bg-ink-2/90 p-6 backdrop-blur-md md:p-8 lg:sticky lg:top-28 [--neon:var(--color-tang)]">
        <p className="text-sm text-mist">Your estimate</p>
        <p className="mt-2 font-display text-[clamp(2rem,5vw,3.2rem)] leading-none font-black tracking-tight">
          <Glide value={est.low} className="neon-text text-tang" /><span className="mx-2 text-mist">–</span><Glide value={est.high} className="neon-text text-tang" />
        </p>
        <p className="mt-3 text-[15px] text-bone">About <strong className="neon-text text-butter">{est.weeks} week{est.weeks > 1 ? 's' : ''}</strong> to launch{carePlan && <>, then {usd(care.monthly)}/month care</>}</p>

        <ul className="mt-6 grid gap-2 border-t border-line pt-5 text-[15px]">
          <li className="flex justify-between gap-4"><span>{kind.label}, {size} {kind.unit}, {designLevels.find((d) => d.id === design)!.label.toLowerCase()} design</span><span className="shrink-0 text-mist">{usd(est.build)}</span></li>
          {est.lines.map((l) => <li key={l.label} className="flex justify-between gap-4"><span>{l.label}</span><span className="shrink-0 text-mist">{usd(l.cost)}</span></li>)}
          {fast && <li className="flex justify-between gap-4"><span>{rush.label}</span><span className="shrink-0 text-mist">+{Math.round((rush.factor - 1) * 100)}%</span></li>}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={sendToForm} className="neon-btn inline-flex items-center justify-center gap-2 rounded-full bg-tang px-6 py-3.5 text-[15px] font-semibold text-ink active:scale-[.97]">Send this estimate</button>
          <Cta href={waLink} variant="ghost"><WhatsAppIcon size={18} /> Ask on WhatsApp</Cta>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-mist">A guide, not a contract: your exact quote comes after a free consultation.</p>
      </aside>
    </div>
  )
}
