import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { TabServicePage } from './TabServicePage'
import { Tabs, panelProps } from '@/components/sections/Tabs'
import { TiltCard } from '@/components/sections/TiltCard'
import { SwipeRow } from '@/components/sections/SwipeRow'
import { ReadMore } from '@/components/sections/ReadMore'
import { seo, seoGuide as g } from '@/data/services'

const TINT = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

// Crawl → Index → Rank: a true sequence, so the numbered nodes are joined by Magic UI "Animated Beam"s.
function Pipeline() {
  const box = useRef<HTMLDivElement>(null)
  const a = useRef<HTMLSpanElement>(null), b = useRef<HTMLSpanElement>(null), c = useRef<HTMLSpanElement>(null)
  const nodes = [a, b, c]
  const beam = { containerRef: box, pathColor: 'var(--color-line)', pathWidth: 3, pathOpacity: 1, gradientStartColor: '#ff6b2c', gradientStopColor: '#c9b6ff', duration: 3.2, curvature: 0 }
  return (
    <div ref={box} className="relative">
      <div aria-hidden className="relative z-10 mb-8 hidden grid-cols-3 lg:grid">
        {nodes.map((r, i) => (
          <span key={i} ref={r} className="mx-auto grid size-14 place-items-center rounded-full font-display text-xl font-black text-ink shadow-[0_0_0_8px_var(--color-ink)] lg:size-16" style={{ background: TINT[i] }}>{i + 1}</span>
        ))}
      </div>
      <div className="hidden lg:block">
        <AnimatedBeam {...beam} fromRef={a} toRef={b} />
        <AnimatedBeam {...beam} fromRef={b} toRef={c} delay={1.6} />
      </div>
      <SwipeRow label="Crawl, index, rank" desktopClassName="lg:grid-cols-3">
        {g.pipeline.map((s, i) => (
          <div key={s.title} className="relative h-full rounded-[28px] border border-line bg-ink-2 p-6 md:p-7">
            <span className="font-display text-sm font-bold tabular-nums" style={{ color: TINT[i] }}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-xl font-bold md:text-2xl">{s.title}</h3>
            <p className="mt-4 text-mist">{s.text}</p>
            <p className="mt-6 font-semibold">{s.lead}</p>
            <ul className="mt-3 grid gap-2 text-[15px] text-mist">
              {s.bullets.map((x) => <li key={x} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: TINT[i] }} />{x}</li>)}
            </ul>
          </div>
        ))}
      </SwipeRow>
    </div>
  )
}

export function Seo() {
  const [type, setType] = useState(0)
  const ty = g.types.items[type]
  return (
    <TabServicePage data={seo}>
      {/* Crawl → Index → Rank: a true sequence, so it is numbered */}
      <section className="section pt-0">
        <div className="wrap">
          <Pipeline />
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">{g.transform.title}</h2>
            <p className="mt-6 text-lg text-mist">{g.transform.text}</p>
          </div>
          <SwipeRow label="What SEO brings" desktopClassName="lg:grid-cols-2" className="mt-10 lg:mt-12">
            <TiltCard className="h-full rounded-[28px] bg-tang p-7 text-ink md:p-10">
              <h3 className="text-3xl font-extrabold">{g.transform.traffic.title}</h3>
              <p className="mt-4 text-lg">{g.transform.traffic.text}</p>
            </TiltCard>
            <TiltCard className="h-full rounded-[28px] bg-lilac p-7 text-ink md:p-10">
              <h3 className="text-3xl font-extrabold">{g.transform.serp.title}</h3>
              <p className="mt-4 text-lg">FunkyyApps helps your content appear in traditional search results and search engine results page (SERP) features.</p>
            </TiltCard>
          </SwipeRow>
          <div className="mt-5 rounded-[28px] border border-line bg-ink-2 p-7 md:p-10">
            <h3 className="text-3xl font-extrabold">{g.transform.ux.title}</h3>
            {g.transform.ux.text.map((p) => <p key={p} className="mt-4 max-w-[70ch] text-mist">{p}</p>)}
            <SwipeRow label="Core Web Vitals" desktopClassName="lg:grid-cols-3 lg:gap-4" className="mt-8">
              {g.transform.ux.vitals.map((v, i) => (
                <div key={v.k} className="h-full rounded-[22px] border border-line bg-ink p-6">
                  <p className="font-display text-4xl font-black" style={{ color: TINT[i] }}>{v.k}</p>
                  <p className="mt-2 font-semibold">{v.name}</p>
                  <p className="mt-2 text-[15px] text-mist">{v.text}</p>
                </div>
              ))}
            </SwipeRow>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">{g.types.title}</h2>
          <p className="mt-5 max-w-[60ch] text-lg text-mist">Optimizing your site generally involves three key focus areas: <strong className="text-bone">On-page</strong>, <strong className="text-bone">off-page</strong>, and technical <strong className="text-bone">SEO</strong>.</p>
          <Tabs group="seo-types" className="mt-10 flex" tabs={g.types.items.map((x) => x.title)} active={type} onChange={setType} />
          <div {...panelProps('seo-types', type)} className="mt-6 overflow-hidden rounded-[28px] border border-line bg-ink-2">
            <ReadMore resetKey={type} collapsedHeight={440} buttonClassName="mx-7 mb-7 mt-0">
            <AnimatePresence mode="wait" initial={false}>
            <motion.div key={type} initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="text-3xl font-extrabold">{ty.title}</h3>
              <p className="mt-4 text-mist">{ty.text}</p>
            </div>
            <div className="min-w-0">
              <p className="font-semibold">{ty.lead}</p>
              <ul className="mt-4 grid gap-4">
                {ty.bullets.map(([k, v]) => <li key={k} className="border-b border-line pb-4 text-[15px] text-mist"><strong className="text-bone">{k}</strong> {v}</li>)}
              </ul>
            </div>
            </motion.div>
            </AnimatePresence>
            </ReadMore>
          </div>
        </div>
      </section>
    </TabServicePage>
  )
}
