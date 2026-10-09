import { useState } from 'react'
import { TabServicePage } from './TabServicePage'
import { AnimatedTabs } from '../components/fx/AnimatedTabs'
import { TiltCard } from '../components/fx/TiltCard'
import { seo, seoGuide as g } from '../data/services'

const TINT = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

export function Seo() {
  const [type, setType] = useState(0)
  const ty = g.types.items[type]
  return (
    <TabServicePage data={seo}>
      {/* Crawl → Index → Rank: a true sequence, so it is numbered */}
      <section className="section pt-0">
        <div className="wrap">
          <ol className="grid gap-5 lg:grid-cols-3">
            {g.pipeline.map((s, i) => (
              <li key={s.title} className="relative rounded-[28px] border border-line bg-ink-2 p-7">
                <span className="grid size-12 place-items-center rounded-full font-display text-lg font-black text-ink" style={{ background: TINT[i] }}>{i + 1}</span>
                <h3 className="mt-6 text-xl font-bold md:text-2xl">{s.title}</h3>
                <p className="mt-4 text-mist">{s.text}</p>
                <p className="mt-6 font-semibold">{s.lead}</p>
                <ul className="mt-3 grid gap-2 text-[15px] text-mist">
                  {s.bullets.map((b) => <li key={b} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: TINT[i] }} />{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold md:text-6xl">{g.transform.title}</h2>
            <p className="mt-6 text-lg text-mist">{g.transform.text}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <TiltCard className="rounded-[28px] bg-tang p-8 text-ink md:p-10">
              <h3 className="text-3xl font-extrabold">{g.transform.traffic.title}</h3>
              <p className="mt-4 text-lg">{g.transform.traffic.text}</p>
            </TiltCard>
            <TiltCard className="rounded-[28px] bg-lilac p-8 text-ink md:p-10">
              <h3 className="text-3xl font-extrabold">{g.transform.serp.title}</h3>
              <p className="mt-4 text-lg">FunkyyApps helps your content appear in traditional search results and search engine results page (SERP) features.</p>
            </TiltCard>
          </div>
          <div className="mt-5 rounded-[28px] border border-line bg-ink-2 p-7 md:p-10">
            <h3 className="text-3xl font-extrabold">{g.transform.ux.title}</h3>
            {g.transform.ux.text.map((p) => <p key={p} className="mt-4 max-w-[70ch] text-mist">{p}</p>)}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {g.transform.ux.vitals.map((v, i) => (
                <div key={v.k} className="rounded-[22px] border border-line bg-ink p-6">
                  <p className="font-display text-4xl font-black" style={{ color: TINT[i] }}>{v.k}</p>
                  <p className="mt-2 font-semibold">{v.name}</p>
                  <p className="mt-2 text-[15px] text-mist">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-4xl font-extrabold md:text-6xl">{g.types.title}</h2>
          <p className="mt-5 max-w-[60ch] text-lg text-mist">Optimizing your site generally involves three key focus areas: <strong className="text-bone">On-page</strong>, <strong className="text-bone">off-page</strong>, and technical <strong className="text-bone">SEO</strong>.</p>
          <AnimatedTabs className="mt-10" tabs={g.types.items.map((x) => x.title)} active={type} onChange={setType} />
          <div className="mt-6 grid gap-10 rounded-[28px] border border-line bg-ink-2 p-7 md:p-10 lg:grid-cols-[1fr_1.3fr]">
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
          </div>
        </div>
      </section>
    </TabServicePage>
  )
}
