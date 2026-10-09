import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PageHero } from '@/components/sections/PageHero'
import { StatsRow } from '@/components/sections/StatsRow'
import { Tabs, panelProps } from '@/components/sections/Tabs'
import { Faq } from '@/components/sections/Faq'
import { Cta } from '@/components/Cta'
import { marketingStats } from '@/data/pages'
import type { TabService } from '@/data/services'
import type { ReactNode } from 'react'

export function TabServicePage({ data, children }: { data: TabService; children?: ReactNode }) {
  const [tab, setTab] = useState(0)
  const t = data.tabs[tab]
  return (
    <>
      <PageHero title={data.title} kicker="Services">
        {data.heading && <p className="mb-3 font-display text-xl font-semibold text-bone md:text-2xl">{data.heading}</p>}
        {data.intro && <p>{data.intro}</p>}
      </PageHero>

      {data.stats && <div className="wrap pb-16"><StatsRow stats={marketingStats} /></div>}

      <section className="section pt-4">
        <div className="wrap grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Tabs group={`${data.slug}-v`} tabs={data.tabs.map((x) => x.label)} active={tab} onChange={setTab} vertical className="hidden w-full lg:flex" />
            <Tabs group={`${data.slug}-h`} tabs={data.tabs.map((x) => x.label)} active={tab} onChange={setTab} className="flex lg:hidden" />
          </div>
          <div {...panelProps(`${data.slug}-v`, tab)} className="min-w-0 rounded-[28px] border border-line bg-ink-2 p-6 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                <p className="font-display text-sm font-bold text-tang tabular-nums">{String(tab + 1).padStart(2, '0')} / {String(data.tabs.length).padStart(2, '0')}</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">{t.label}</h2>
                <div className="mt-8 grid max-w-[68ch] gap-6 text-lg text-mist">
                  {t.body.map((p, i) => (
                    <p key={i}>{p.lead && <strong className="mb-1 block font-display text-xl leading-snug font-semibold text-bone">{p.lead}</strong>}{p.text}</p>
                  ))}
                  {t.bullets && (
                    <ul className="grid gap-2">
                      {t.bullets.map((b) => <li key={b} className="flex gap-3 text-bone"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-lilac" />{b}</li>)}
                    </ul>
                  )}
                  {t.after?.map((p, i) => <p key={i}>{p.text}</p>)}
                </div>
                <div className="mt-10"><Cta href="#quote">Get a quote</Cta></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {children}

      {data.faqs && (
        <section className="section pt-0">
          <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
            <h2 className="text-4xl font-extrabold md:text-5xl">Frequently Asked Questions</h2>
            <Faq items={data.faqs} />
          </div>
        </section>
      )}
    </>
  )
}
