import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PageHero } from '../components/sections/PageHero'
import { AnimatedTabs } from '../components/fx/AnimatedTabs'
import { ShimmerButton } from '../components/fx/ShimmerButton'
import { mobile } from '../data/services'
import { cn } from '../lib/cn'

const TINT = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)', 'var(--color-bone)']

export function Mobile() {
  const [why, setWhy] = useState(0)
  const [stack, setStack] = useState(0)
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
        <ul className="flex flex-wrap gap-3">
          {mobile.industries.map((n, i) => (
            <motion.li key={n} whileHover={{ rotate: i % 2 ? 3 : -3, scale: 1.06 }} className="rounded-full px-5 py-3 font-display text-base font-bold text-ink md:text-lg" style={{ background: TINT[i % 4] }}>{n}</motion.li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="text-4xl font-extrabold md:text-6xl">Why Choose FunkyyApps ?</h2>
          <AnimatedTabs className="mt-10" tabs={mobile.why.map((x) => x.label)} active={why} onChange={setWhy} />
          <div className="mt-6 overflow-hidden rounded-[28px] border border-line bg-ink-2">
            <AnimatePresence mode="wait">
              <motion.div key={why} initial={{ y: 12 }} animate={{ y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid gap-8 p-7 md:p-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
                <p className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-none font-black" style={{ color: TINT[why] }}>{w.stat}</p>
                <div>
                  <h3 className="text-xl leading-snug font-bold md:text-2xl">{w.title}</h3>
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
          <h2 className="text-4xl font-extrabold md:text-5xl lg:sticky lg:top-28 lg:self-start">Custom Mobile App Development</h2>
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
          <h2 className="text-4xl font-extrabold md:text-6xl">Our Mobile Application Development Tools and Frameworks</h2>
          <AnimatedTabs className="mt-10" tabs={mobile.stack.map((x) => x.label)} active={stack} onChange={setStack} />
          <AnimatePresence mode="wait">
            <motion.ul key={stack} initial={{ y: 10 }} animate={{ y: 0 }} exit={{ opacity: 0 }} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {mobile.stack[stack].items.map((s, i) => (
                <motion.li key={s + i} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: i * 0.03 }} className="rounded-[20px] border border-line bg-ink-2 px-5 py-6 font-display text-lg font-bold">{s}</motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="max-w-[18ch] text-4xl font-extrabold md:text-6xl">{mobile.agileTitle}</h2>
          <p className="mt-6 max-w-[64ch] text-lg text-mist">{mobile.agileText}</p>
          <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mobile.process.map((p, i) => (
              <li key={p.title} className="rounded-[28px] border border-line bg-ink-2 p-7">
                <span className="font-display text-5xl font-black" style={{ color: TINT[i] }}>{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-[15px] text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10"><ShimmerButton to="/consult">Consult an Expert</ShimmerButton></div>
        </div>
      </section>

      <section className="pb-10">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[32px] bg-tang p-8 text-ink md:p-16">
            <p className="max-w-[20ch] font-display text-3xl leading-tight font-black md:text-5xl">{mobile.closer}</p>
            <div className="mt-8"><ShimmerButton to="/consult" variant="bone" className="bg-ink text-bone">Consult an Expert</ShimmerButton></div>
          </div>
        </div>
      </section>
    </>
  )
}
