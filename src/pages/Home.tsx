import { ArrowDownRight, MessageCircle, Phone } from 'lucide-react'
import { StickerTrail } from '@/components/fx/StickerTrail'
import { HeroFluid } from '@/components/sections/HeroFluid'
import { PlatformOrbit } from '@/components/sections/PlatformOrbit'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { Cta } from '@/components/Cta'
import { MorphText } from '@/components/ui/morph-text'
import { Marquee } from '@/components/ui/marquee'
import { BorderBeam } from '@/components/ui/border-beam'
import { TextReveal } from '@/components/ui/text-reveal'
import { HoverExpand } from '@/components/unlumen-ui/hover-expand'
import { StickyStack } from '@/components/ui/skiper-ui/skiper16'
import { capabilities, contact, hero, industries, plans, platforms, servicesNav, testimonials, type Plan } from '@/data/site'
import { cn } from '@/lib/utils'

const SWATCH = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

export function Home() {
  const half = Math.ceil(testimonials.length / 2)
  return (
    <>
      {/* ───────── Hero: the one loud moment ───────── */}
      <StickerTrail className="relative isolate overflow-hidden">
        <HeroFluid />
        <div className="wrap pt-36 pb-16 md:pt-44 md:pb-24">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-mist md:text-base">
            <span className="size-2 rounded-full bg-tang" />
            One-stop for <MorphText align="start" words={servicesNav.map((s) => s.label)} interval={2400} fontSize="1em" className="font-semibold text-bone" />
          </p>
          <h1 className="mt-6 font-black leading-[0.9] tracking-[-0.045em]">
            <span className="block text-[clamp(2.5rem,9.2vw,9.5rem)]">{hero.lines[0]}</span>
            <span className="block text-[clamp(2.5rem,9.2vw,9.5rem)] text-tang">{hero.lines[1]}</span>
          </h1>
          <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="max-w-[30ch] font-display text-xl font-semibold leading-snug md:text-2xl">{hero.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta href="#quote">Get a quote <ArrowDownRight size={18} /></Cta>
                <Cta href={contact.whatsappUrl} variant="ghost"><MessageCircle size={18} /> WhatsApp: {contact.whatsapp}</Cta>
              </div>
            </div>
            <div className="max-w-[46ch] space-y-3 text-mist md:justify-self-end">
              {hero.body.map((p) => <p key={p}>{p}</p>)}
              <p className="text-bone">Trusted by brands, we’re your <strong className="text-tang">premier partner</strong> in digital transformation.</p>
            </div>
          </div>
        </div>
      </StickerTrail>

      {/* ───────── Trusted By ───────── */}
      <section className="section pt-10">
        <div className="wrap mb-12">
          <h2 className="max-w-[14ch] text-4xl font-extrabold md:text-6xl">Trusted By <span className="text-butter">100+</span> Brand Owners</h2>
        </div>
        <div className="relative grid gap-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee pauseOnHover repeat={2} className="[--duration:55s] [--gap:1.25rem]">{testimonials.slice(0, half).map((t) => <TestimonialCard key={t.name} t={t} />)}</Marquee>
          <Marquee pauseOnHover reverse repeat={2} className="[--duration:60s] [--gap:1.25rem]">{testimonials.slice(half).map((t) => <TestimonialCard key={t.name} t={t} />)}</Marquee>
        </div>
      </section>

      {/* ───────── Manifesto ───────── */}
      <section className="section pt-0">
        <TextReveal className="h-[160vh]" frameClassName="wrap max-w-[1240px]" textClassName="max-w-[24ch] p-0 font-display text-[clamp(1.8rem,4.6vw,4rem)] leading-[1.08] font-bold tracking-tight md:p-0 lg:p-0 dark:text-bone/20">
          At FunkyyApps, we help visualize your ideas/goals into reality. With over 7 years of industry excellence, we fuse cutting-edge design with advanced development to deliver bold, future-ready solutions.
        </TextReveal>
      </section>

      {/* ───────── Discover Our Excellence ───────── */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-extrabold md:text-6xl">Discover Our Excellence</h2>
            <p className="max-w-[48ch] text-mist md:justify-self-end">Explore our cutting-edge websites across various industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess.</p>
          </div>
          <HoverExpand
            collapsedHeight={64}
            expandedHeight={300}
            items={industries.map((it, i) => ({
              label: it.name,
              accent: SWATCH[i % 3],
              content: (
                <ul className="grid max-w-[34rem] gap-1.5 pr-10 text-[15px] font-medium sm:grid-cols-2">
                  {it.items.map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-ink" />{x}</li>)}
                </ul>
              ),
            }))}
          />
        </div>
      </section>

      {/* ───────── Capabilities band ───────── */}
      <section aria-label="Capabilities" className="-rotate-2 border-y border-line bg-tang py-5 text-ink">
        <Marquee className="p-0 [--duration:50s] [--gap:2.5rem]">
          {capabilities.slice(0, 7).map((c) => <span key={c} className="flex items-center gap-10 font-display text-2xl font-extrabold whitespace-nowrap md:text-4xl">{c}<span className="size-3 rounded-full bg-ink" /></span>)}
        </Marquee>
      </section>
      <section aria-hidden className="rotate-1 border-y border-line bg-lilac py-5 text-ink">
        <Marquee reverse className="p-0 [--duration:50s] [--gap:2.5rem]">
          {capabilities.slice(7).map((c) => <span key={c} className="flex items-center gap-10 font-display text-2xl font-extrabold whitespace-nowrap md:text-4xl">{c}<span className="size-3 rotate-45 bg-ink" /></span>)}
        </Marquee>
      </section>

      {/* ───────── Versatile Development Expertise ───────── */}
      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold md:text-6xl">Versatile Development Expertise</h2>
            <p className="mt-6 max-w-[44ch] text-lg text-mist">Explore our proficiency in platform development, custom solutions, and mastery across various programming languages.</p>
            <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {platforms.map((p) => (
                <li key={p.name} className="flex items-center gap-3 border-b border-line pb-3 text-[15px]">
                  <span className="size-2.5 rounded-full" style={{ background: p.color }} />{p.label}
                </li>
              ))}
            </ul>
          </div>
          <PlatformOrbit items={platforms} />
        </div>
      </section>

      {/* ───────── Pricing ───────── */}
      <section id="pricing" className="section pt-0">
        <div className="wrap">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 inline-block rounded-full bg-butter px-3 py-1 font-display text-xs font-bold text-ink">Our pricing</p>
            <h2 className="text-4xl font-extrabold md:text-6xl">Features You Need, Budget You Love</h2>
            <p className="mt-5 text-lg text-mist">Compare Packages &amp; Build Your Ideal Website.</p>
          </div>
          <StickyStack stickyClassName="lg:sticky" className="gap-6 lg:gap-14" scaleStep={0.04}>{plans.map((p, i) => <PlanCard key={p.name} plan={p} index={i} />)}</StickyStack>
        </div>
      </section>
    </>
  )
}

const PLAN_COLORS = ['var(--color-bone)', 'var(--color-butter)', 'var(--color-lilac)', 'var(--color-tang)']

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const featured = index === 1
  return (
    <article className="relative grid gap-8 overflow-hidden rounded-[28px] border border-line bg-ink-2 p-6 shadow-[0_-20px_60px_-20px_rgba(0,0,0,.6)] md:p-10 lg:grid-cols-[0.9fr_1.4fr]">
      {featured && <BorderBeam size={180} duration={9} colorFrom="var(--color-tang)" colorTo="var(--color-lilac)" borderWidth={1.5} />}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <span className="size-4 rounded-full" style={{ background: PLAN_COLORS[index] }} />
          <h3 className="text-2xl font-extrabold md:text-3xl">{plan.name}</h3>
        </div>
        <p className="mt-6 text-sm text-mist">{plan.forLabel}</p>
        <p className="mt-1 max-w-[34ch] text-lg">{plan.forText}</p>
        <p className="mt-8 font-display text-6xl font-black tracking-tight md:text-7xl" style={{ color: PLAN_COLORS[index] }}>
          <span className="align-top text-3xl">$</span>{plan.price}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
          <Cta href="#quote" variant={featured ? 'primary' : 'shiny'}>Start Now</Cta>
          <Cta href={contact.whatsappUrl} variant="ghost"><Phone size={16} /> Call Now</Cta>
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-sm text-mist">Included services</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {plan.services.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</li>)}
        </ul>
        <p className="mt-8 text-sm text-mist">Features</p>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {plan.features.map((f) => (
            <li key={f.text} className={cn('text-[15px] leading-relaxed text-mist', !f.title && 'font-semibold text-bone md:col-span-2')}>
              {f.title && <span className="block font-semibold text-bone">{f.title}</span>}
              {f.text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
