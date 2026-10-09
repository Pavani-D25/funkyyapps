import { PageHero } from '@/components/sections/PageHero'
import { HorizontalScroll } from '@/components/sections/HorizontalScroll'
import { BrowserShot } from '@/components/sections/BrowserShot'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { Cta } from '@/components/Cta'
import { Marquee } from '@/components/ui/marquee'
import { TextReveal } from '@/components/ui/text-reveal'
import { portfolio, webDev } from '@/data/services'
import { testimonials } from '@/data/site'

export function WebDev() {
  return (
    <>
      <PageHero title={webDev.title} kicker={webDev.kicker}>
        {webDev.intro.map((p) => <p key={p} className="mb-4">{p}</p>)}
        <div className="mt-6"><Cta href="#quote">Get a Quote</Cta></div>
      </PageHero>

      <HorizontalScroll>
        {portfolio.map((src, i) => <BrowserShot key={src} src={src} i={i} />)}
      </HorizontalScroll>

      <section className="section">
        <div className="wrap mb-10">
          <p className="mb-3 text-mist">Testimonials</p>
          <h2 className="text-4xl font-extrabold md:text-6xl">Trusted by brands.</h2>
        </div>
        <div className="[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee pauseOnHover repeat={2} className="[--duration:70s] [--gap:1.25rem]">{testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}</Marquee>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {webDev.templates.map((p, i) => (
            <p key={p} className={`rounded-[28px] p-8 text-xl font-medium md:p-10 md:text-2xl ${i ? 'bg-lilac text-ink' : 'border border-line bg-ink-2'}`}>{p}</p>
          ))}
        </div>
        <div className="wrap mt-24">
        </div>
        <TextReveal className="h-[150vh]" frameClassName="wrap max-w-[1240px]" textClassName="max-w-[26ch] p-0 font-display text-[clamp(1.8rem,4.4vw,3.8rem)] leading-[1.08] font-bold md:p-0 lg:p-0 dark:text-bone/20">{webDev.usama}</TextReveal>
        <div className="wrap">
          <p className="font-display text-2xl font-extrabold text-tang md:text-4xl">{webDev.closer}</p>
          <div className="mt-8"><Cta href="#quote">Get a Quote</Cta></div>
        </div>
      </section>
    </>
  )
}
