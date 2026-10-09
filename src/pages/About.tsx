import { PageHero } from '@/components/sections/PageHero'
import { StatsRow } from '@/components/sections/StatsRow'
import { TiltCard } from '@/components/sections/TiltCard'
import { SwipeRow } from '@/components/sections/SwipeRow'
import { Marquee } from '@/components/ui/marquee'
import { about } from '@/data/pages'

const TINT = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)', 'var(--color-bone)']

export function About() {
  return (
    <>
      <PageHero title={about.title} kicker="About">
        {about.intro.map((p) => <p key={p} className="mb-4">{p}</p>)}
      </PageHero>

      <div className="border-y border-line bg-ink-2 py-5">
        <Marquee className="p-0 [--duration:30s] [--gap:3rem]">
          {about.ribbon.map((r, i) => <span key={r} className="flex items-center gap-12 font-display text-xl font-bold whitespace-nowrap md:text-2xl">{r}<span className="size-2.5 rounded-full" style={{ background: TINT[i] }} /></span>)}
        </Marquee>
      </div>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <h2 className="font-black leading-[0.9] tracking-[-0.04em]">
            <span className="block text-[clamp(2.8rem,7vw,6.5rem)]">{about.build[0]}</span>
            <span className="block text-[clamp(2.8rem,7vw,6.5rem)] text-tang">{about.build[1]}</span>
          </h2>
          <StatsRow stats={about.stats} />
        </div>
      </section>

      <section className="section pt-0">
        <SwipeRow label="What we do" desktopClassName="lg:grid-cols-2" className="wrap">
          {about.blocks.map((b, i) => (
            <TiltCard key={b.title} className="h-full rounded-[28px] border border-line bg-ink-2 p-7 md:p-10">
              <span className="mb-8 block h-1.5 w-14 rounded-full" style={{ background: TINT[i] }} />
              <h3 className="text-2xl font-bold md:text-3xl">{b.title}</h3>
              <p className="mt-5 text-mist">{b.text}</p>
            </TiltCard>
          ))}
        </SwipeRow>
      </section>
    </>
  )
}
