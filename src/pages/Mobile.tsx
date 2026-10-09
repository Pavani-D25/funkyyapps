import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PageHero } from '@/components/sections/PageHero'
import { Tabs, panelProps } from '@/components/sections/Tabs'
import { Cta } from '@/components/Cta'
import { Marquee } from '@/components/ui/marquee'
import { StickyStack } from '@/components/ui/skiper-ui/skiper16'
import { SwipeRow } from '@/components/sections/SwipeRow'
import { mobile } from '@/data/services'
import { cn } from '@/lib/utils'

const TINT = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)', 'var(--color-bone)']

export function Mobile() {
  const [why, setWhy] = useState(0)
  const [open, setOpen] = useState(0)
  const w = mobile.why[why]
  return (
    <>
      <PageHero title={mobile.title} kicker="Services">
        <p className="mb-3 font-display text-xl font-semibold text-bone md:text-2xl">{mobile.heading}</p>
        <p>{mobile.intro}</p>
      </PageHero>

      {/* industries as a loose sticker wall (Vengeance "staggered grid") */}
      <section className="wrap pb-10">
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {mobile.industries.map((n, i) => (
            <motion.li key={n} whileHover={{ rotate: i % 2 ? 3 : -3, scale: 1.06 }} className="rounded-full px-3.5 py-2 font-display text-sm font-bold text-ink sm:px-5 sm:py-3 sm:text-base md:text-lg" style={{ background: TINT[i % 4] }}>{n}</motion.li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">Why Choose FunkyyApps ?</h2>
          <Tabs group="mobile-why" className="mt-10 flex" tabs={mobile.why.map((x) => x.label)} active={why} onChange={setWhy} />
          <div {...panelProps('mobile-why', why)} className="mt-6 overflow-hidden rounded-[28px] border border-line bg-ink-2">
            <AnimatePresence mode="wait">
              <motion.div key={why} initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="grid gap-8 p-7 md:p-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
                <p className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-none font-black" style={{ color: TINT[why] }}>{w.stat}</p>
                <div>
                  <h3 className="text-lg leading-snug font-bold sm:text-xl md:text-2xl">{w.title}</h3>
                  <p className="mt-4 text-mist">{w.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Unlumen "Hover Image List"-style expanding list */}
      <section className="section pt-0">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl lg:sticky lg:top-28 lg:self-start">Custom Mobile App Development</h2>
          <ul className="border-t border-line">
            {mobile.custom.map((c, i) => (
              <li key={c.title} className="border-b border-line">
                <button onClick={() => setOpen(i)} onPointerEnter={() => setOpen(i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className={cn('font-display text-lg font-bold transition-colors md:text-2xl', open === i ? 'text-bone' : 'text-mist')}>{c.title}</span>
                  <span className="size-3 shrink-0 rounded-full transition-transform" style={{ background: TINT[i % 4], transform: `scale(${open === i ? 1.4 : 0.6})` }} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <span className="block max-w-[64ch] pb-6 text-mist">{c.text}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">Our Mobile Application Development Tools and Frameworks</h2>
        </div>
        {/* Magic UI "Marquee": one row per group, alternating direction */}
        <div className="mt-10 grid gap-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          {mobile.stack.map((g, gi) => (
            <div key={g.label} className="grid gap-2">
              <h3 className="wrap font-sans text-sm font-semibold tracking-normal text-mist">{g.label}</h3>
              <Marquee pauseOnHover reverse={gi % 2 === 1} className="[--duration:34s] [--gap:0.75rem]">
                {g.items.map((s, i) => (
                  <span key={s + i} className="flex items-center gap-3 rounded-full border border-line bg-ink-2 py-3 pr-6 pl-3 font-display text-lg font-bold whitespace-nowrap">
                    <span aria-hidden className="grid size-9 place-items-center rounded-full text-sm font-black text-ink" style={{ background: TINT[(gi + i) % 4] }}>{s.replace(/[^A-Za-z0-9+#]/g, '').slice(0, 2)}</span>
                    {s}
                  </span>
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="max-w-[18ch] text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">{mobile.agileTitle}</h2>
            <p className="mt-6 max-w-[64ch] text-lg text-mist">{mobile.agileText}</p>
            <div className="mt-10"><Cta to="/consult">Consult an Expert</Cta></div>
          </div>
          {/* Skiper UI scroll-driven card stack: each step pins and the earlier ones sink back */}
          <StickyStack top={112} step={26} scaleStep={0.05} className="hidden gap-6 pb-10 lg:grid">
            {mobile.process.map((p, i) => (
              <article key={p.title} className="min-h-[300px] rounded-[28px] border border-line p-7 shadow-[0_-24px_60px_-24px_rgba(0,0,0,.7)] md:p-10" style={{ background: i % 2 ? 'var(--color-ink-3)' : 'var(--color-ink-2)' }}>
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <span className="font-display text-6xl leading-none font-black md:text-7xl" style={{ color: TINT[i] }}>{i + 1}</span>
                </div>
                <p className="mt-6 max-w-[56ch] text-mist">{p.text}</p>
              </article>
            ))}
          </StickyStack>
          {/* phones/tablets: swipe through the four steps */}
          <SwipeRow label="Development process" className="lg:hidden" desktopClassName="">
            {mobile.process.map((p, i) => (
              <article key={p.title} className="h-full rounded-[28px] border border-line p-6" style={{ background: i % 2 ? 'var(--color-ink-3)' : 'var(--color-ink-2)' }}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <span className="font-display text-5xl leading-none font-black" style={{ color: TINT[i] }}>{i + 1}</span>
                </div>
                <p className="mt-4 text-[15px] text-mist">{p.text}</p>
              </article>
            ))}
          </SwipeRow>
        </div>
      </section>

      <section className="pb-10">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[32px] bg-tang p-8 text-ink md:p-16">
            <p className="max-w-[20ch] font-display text-3xl leading-tight font-black md:text-5xl">{mobile.closer}</p>
            <div className="mt-8"><Cta to="/consult" tone="ink">Consult an Expert</Cta></div>
          </div>
        </div>
      </section>
    </>
  )
}
