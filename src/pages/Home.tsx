import { ArrowDownRight, MessageCircle, Phone } from 'lucide-react'
import { PixelLiquid } from '@/components/fx/PixelLiquid'
import { StickerTrail } from '@/components/fx/StickerTrail'
import { MorphText } from '@/components/fx/MorphText'
import { ShimmerButton } from '@/components/fx/ShimmerButton'
import { PlatformOrbit } from '@/components/sections/PlatformOrbit'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { Cta } from '@/components/Cta'
import { Marquee } from '@/components/ui/marquee'
import { NumberTicker } from '@/components/ui/number-ticker'
import { BorderBeam } from '@/components/ui/border-beam'
import { MagicCard } from '@/components/ui/magic-card'
import { TextReveal } from '@/components/ui/text-reveal'
import { HoverExpand } from '@/components/fx/HoverExpand'
import { StickyStack } from '@/components/ui/skiper-ui/skiper16'
import { SwipeRow } from '@/components/sections/SwipeRow'
import { useState } from 'react'
import { capabilities, contact, hero, industries, plans, platforms, servicesNav, testimonials, type Plan } from '@/data/site'
import { cn } from '@/lib/utils'


const MANIFESTO = 'At FunkyyApps, we help visualize your ideas/goals into reality. With over 7 years of industry excellence, we fuse cutting-edge design with advanced development to deliver bold, future-ready solutions.'

export function Home() {
  const cols = [testimonials.slice(0, 3), testimonials.slice(3, 6), testimonials.slice(6)]
  return (
    <>
      {/* ───────── Hero: the original hand-made hero, kept as it was (pixel canvas + sticker trail + flip text) ───────── */}
      <StickerTrail className="relative isolate overflow-hidden">
        <PixelLiquid className="absolute inset-0 -z-10 h-full w-full" />
        <div className="wrap pt-36 pb-16 md:pt-44 md:pb-24">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-mist md:text-base">
            <span className="size-2 rounded-full bg-tang" />
            One-stop for <MorphText words={servicesNav.map((s) => s.label)} className="font-semibold text-bone" />
          </p>
          <h1 className="mt-6 font-black leading-[0.9] tracking-[-0.045em]">
            <span className="block text-[clamp(2.5rem,9.2vw,9.5rem)]">{hero.lines[0]}</span>
            <span className="block text-[clamp(2.5rem,9.2vw,9.5rem)] text-tang">{hero.lines[1]}</span>
          </h1>
          <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="max-w-[30ch] font-display text-xl font-semibold leading-snug md:text-2xl">{hero.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ShimmerButton href="#quote">Get a quote <ArrowDownRight size={18} /></ShimmerButton>
                <ShimmerButton href={contact.whatsappUrl} variant="ghost"><MessageCircle size={18} /> WhatsApp: {contact.whatsapp}</ShimmerButton>
              </div>
            </div>
            <div className="max-w-[46ch] space-y-3 text-mist md:justify-self-end">
              {hero.body.map((p) => <p key={p}>{p}</p>)}
              <p className="text-bone">Trusted by brands, we’re your <strong className="text-tang">premier partner</strong> in digital transformation.</p>
            </div>
          </div>
        </div>
      </StickerTrail>

      {/* ───────── Trusted By: Magic UI 3D marquee (desktop) / two rows (mobile) ───────── */}
      <section className="section pt-10">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="max-w-[14ch] text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">
            Trusted By <span className="text-butter"><NumberTicker value={100} />+</span> Brand Owners
          </h2>
          <div className="relative hidden h-[560px] items-center justify-center overflow-hidden [perspective:900px] lg:flex">
            <div className="flex flex-row gap-4" style={{ transform: 'translateX(-40px) translateZ(-60px) rotateX(16deg) rotateY(-9deg) rotateZ(9deg)' }}>
              {cols.map((col, i) => (
                <Marquee key={i} vertical pauseOnHover reverse={i === 1} repeat={3} className="h-[720px] [--duration:38s] [--gap:1rem]">
                  {col.map((t) => <TestimonialCard key={t.name} t={t} className="w-[280px]" />)}
                </Marquee>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-ink" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-ink" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-ink" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-ink" />
          </div>
        </div>
        {/* phones/tablets: one row (all testimonials) instead of two */}
        <div className="relative mt-8 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] lg:hidden">
          <Marquee pauseOnHover repeat={2} className="[--duration:90s] [--gap:1rem]">{testimonials.map((t) => <TestimonialCard key={t.name} t={t} className="self-start" />)}</Marquee>
        </div>
      </section>

      {/* ───────── Manifesto: Magic UI "Text Reveal" ───────── */}
      <section className="pt-0">
        {/* phones/tablets: the same sentence as a plain paragraph (no extra scroll room) */}
        <p className="wrap pb-12 font-display text-[clamp(1.3rem,5vw,2.2rem)] leading-[1.15] font-bold tracking-tight lg:hidden">{MANIFESTO}</p>
        <TextReveal className="hidden h-[160vh] lg:block" frameClassName="wrap max-w-[1240px]" textClassName="max-w-[24ch] p-0 font-display text-[clamp(1.8rem,4.6vw,4rem)] leading-[1.08] font-bold tracking-tight md:p-0 lg:p-0 dark:text-bone/20">
          {MANIFESTO}
        </TextReveal>
      </section>

      {/* ───────── Discover Our Excellence: the original expanding columns, kept as they were ───────── */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">Discover Our Excellence</h2>
            <p className="max-w-[48ch] text-mist md:justify-self-end">Explore our cutting-edge websites across various industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess.</p>
          </div>
          <HoverExpand items={industries} />
        </div>
      </section>

      {/* ───────── Capabilities band (Magic UI Marquee); wrapper clips the tilted edges ───────── */}
      <div className="overflow-hidden py-6">
      <section aria-label="Capabilities" className="-rotate-2 border-y border-line bg-tang py-5 text-ink">
        <Marquee className="p-0 [--duration:50s] [--gap:2.5rem]">
          {capabilities.slice(0, 7).map((c) => <span key={c} className="flex items-center gap-10 font-display text-2xl font-extrabold whitespace-nowrap md:text-4xl">{c}<span className="size-3 rounded-full bg-ink" /></span>)}
        </Marquee>
      </section>
      <section aria-label="More capabilities" className="rotate-1 border-y border-line bg-lilac py-5 text-ink">
        <Marquee reverse className="p-0 [--duration:50s] [--gap:2.5rem]">
          {capabilities.slice(7).map((c) => <span key={c} className="flex items-center gap-10 font-display text-2xl font-extrabold whitespace-nowrap md:text-4xl">{c}<span className="size-3 rotate-45 bg-ink" /></span>)}
        </Marquee>
      </section>
      </div>

      {/* ───────── Versatile Development Expertise: Magic UI "Orbiting Circles" ───────── */}
      <section className="section">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">Versatile Development Expertise</h2>
            <p className="mt-6 max-w-[44ch] text-lg text-mist">Explore our proficiency in platform development, custom solutions, and mastery across various programming languages.</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:mt-10 lg:gap-x-6 lg:gap-y-3">
              {platforms.map((p) => (
                <li key={p.name} className="flex items-center gap-2.5 border-b border-line pb-2.5 text-[13px] leading-snug sm:text-[15px] lg:gap-3 lg:pb-3">
                  <span className="size-2.5 shrink-0 rounded-full" style={{ background: p.color }} />{p.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[340px] lg:max-w-none"><PlatformOrbit items={platforms} /></div>
        </div>
      </section>

      {/* ───────── Pricing: Skiper sticky stack + Magic Card spotlight, Border Beam on Gold ───────── */}
      <section id="pricing" className="section pt-0">
        <div className="wrap">
          <div className="mb-8 max-w-3xl lg:mb-14">
            <p className="mb-4 inline-block rounded-full bg-butter px-3 py-1 font-display text-xs font-bold text-ink">Our pricing</p>
            <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">Features You Need, Budget You Love</h2>
            <p className="mt-5 text-lg text-mist">Compare Packages &amp; Build Your Ideal Website.</p>
          </div>
          {/* desktop: Skiper sticky stack; phones/tablets: swipe through the plans */}
          <StickyStack stickyClassName="lg:sticky" className="hidden gap-14 lg:grid" scaleStep={0.04}>{plans.map((p, i) => <PlanCard key={p.name} plan={p} index={i} />)}</StickyStack>
          <SwipeRow label="Pricing plans" className="lg:hidden" itemClassName="sm:w-[70%]">{plans.map((p, i) => <PlanCard key={p.name} plan={p} index={i} compact />)}</SwipeRow>
        </div>
      </section>
    </>
  )
}

const PLAN_COLORS = ['var(--color-bone)', 'var(--color-butter)', 'var(--color-lilac)', 'var(--color-tang)']

function PlanCard({ plan, index, compact }: { plan: Plan; index: number; compact?: boolean }) {
  const featured = index === 1
  // compact (phones/tablets): first features shown, the rest one tap away
  const [all, setAll] = useState(false)
  const SHOWN = 3
  const features = compact && !all ? plan.features.slice(0, SHOWN) : plan.features
  return (
    <article className={cn('relative overflow-hidden rounded-[28px]', compact ? 'h-full' : 'shadow-[0_-20px_60px_-20px_rgba(0,0,0,.6)]')}>
      <MagicCard
        className={cn('rounded-[28px] [--background:var(--color-ink-2)] [--color-background:var(--color-ink-2)]', compact && 'h-full')}
        gradientSize={320}
        gradientColor="color-mix(in oklab, var(--color-lilac) 14%, transparent)"
        gradientOpacity={1}
        gradientFrom={featured ? 'var(--color-tang)' : PLAN_COLORS[index]}
        gradientTo="var(--color-lilac)"
      >
        <div className={cn('grid gap-8 p-6 md:p-10', !compact && 'lg:grid-cols-[0.9fr_1.4fr]', compact && 'gap-6')}>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="size-4 rounded-full" style={{ background: PLAN_COLORS[index] }} />
              <h3 className="text-2xl font-extrabold md:text-3xl">{plan.name}</h3>
            </div>
            <p className="mt-6 text-sm text-mist">{plan.forLabel}</p>
            <p className="mt-1 max-w-[34ch] text-lg">{plan.forText}</p>
            <p className={cn('font-display font-black tracking-tight', compact ? 'mt-5 text-5xl' : 'mt-8 text-6xl md:text-7xl')} style={{ color: PLAN_COLORS[index] }}>
              <span className="align-top text-3xl">$</span>{plan.price}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              <Cta href="#quote" variant={featured ? 'primary' : 'shiny'}>Start Now</Cta>
              <Cta href={contact.whatsappUrl} variant="ghost"><Phone size={16} /> Call Now</Cta>
            </div>
          </div>
          <div className="min-w-0">
            {(!compact || all) && (
              <>
                <p className="text-sm text-mist">Included services</p>
                <ul className="mt-3 mb-8 flex flex-wrap gap-2">
                  {plan.services.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</li>)}
                </ul>
              </>
            )}
            <p className="text-sm text-mist">Features</p>
            <ul className={cn('mt-3 grid gap-3', !compact && 'md:grid-cols-2')}>
              {features.map((f) => (
                <li key={f.text} className={cn('text-[15px] leading-relaxed text-mist', !f.title && 'font-semibold text-bone md:col-span-2')}>
                  {f.title && <span className="block font-semibold text-bone">{f.title}</span>}
                  {f.text}
                </li>
              ))}
            </ul>
            {compact && (
              <button type="button" onClick={() => setAll(!all)} aria-expanded={all} aria-label={all ? 'Show fewer details' : 'Show all included services and features'} className="mt-4 rounded-full border border-line px-4 py-2 text-sm font-semibold text-bone hover:border-mist">
                {all ? '−' : `+${plan.features.length - SHOWN + plan.services.length} more`}
              </button>
            )}
          </div>
        </div>
      </MagicCard>
      {featured && <BorderBeam size={180} duration={9} colorFrom="var(--color-tang)" colorTo="var(--color-lilac)" borderWidth={1.5} />}
    </article>
  )
}
