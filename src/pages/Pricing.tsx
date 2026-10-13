// "What we charge": the four website plans and the fixed-price packages as neon cards, then the
// project quote calculator for anything in between.
import { Link } from 'react-router-dom'
import { Cta } from '@/components/Cta'
import { PageHero } from '@/components/sections/PageHero'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { shop } from '@/data/pages'
import { contact, packages, paypal, plans } from '@/data/site'

const PLAN_NEON = ['var(--color-bone)', 'var(--color-butter)', 'var(--color-lilac)', 'var(--color-tang)']
const PKG_NAME: Record<string, string> = { web: packages[3].name, android: packages[2].name, ios: packages[1].name, shop: packages[0].name }

export function Pricing() {
  return (
    <>
      <PageHero title="What we charge" kicker="Pricing">
        <p>Clear prices up front. Pick a plan, grab a fixed-price package, or build your own estimate in the calculator below.</p>
      </PageHero>

      <section className="wrap pb-16 lg:pb-24" aria-labelledby="plans-h">
        <h2 id="plans-h" className="text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">Website plans</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <article key={p.name} className="neon-panel flex flex-col rounded-[28px] border bg-ink-2/85 p-6 backdrop-blur-md" style={{ '--neon': PLAN_NEON[i] } as React.CSSProperties}>
              {i === 1 && <span className="mb-4 self-start rounded-full bg-butter px-3 py-1 font-display text-xs font-bold text-ink">Most popular</span>}
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p className="mt-2 text-[15px] text-mist">{p.forText}</p>
              <p className="neon-text mt-6 font-display text-5xl font-black tracking-tight" style={{ color: PLAN_NEON[i] }}><span className="align-top text-2xl">$</span>{p.price}</p>
              <ul className="mt-6 grid gap-1.5 text-[15px]">
                {p.services.map((s) => <li key={s} className="flex items-center gap-2"><span className="size-1.5 shrink-0 rounded-full" style={{ background: PLAN_NEON[i] }} />{s}</li>)}
              </ul>
              <div className="mt-auto pt-7"><Cta href="#quote" variant={i === 1 ? 'primary' : 'shiny'}>Start Now</Cta></div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm text-mist">Every plan’s full feature list is on the <Link to="/" className="text-bone underline decoration-tang underline-offset-4">homepage</Link>.</p>
      </section>

      <section className="wrap pb-16 lg:pb-24" aria-labelledby="pkg-h">
        <h2 id="pkg-h" className="text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">Fixed-price packages</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shop.map((s) => {
            const name = PKG_NAME[s.kind]
            const link = paypal[name] || `${contact.whatsappUrl}?text=${encodeURIComponent(`Hi FunkyyApps, I'd like the ${s.title} (${s.price}) package.`)}`
            return (
              <article key={s.title} className="neon-panel flex flex-col rounded-[28px] border bg-ink-2/85 p-6 backdrop-blur-md [--neon:var(--color-tang)]">
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="neon-text mt-4 font-display text-4xl font-black text-tang">{s.price}</p>
                <p className="mt-3 text-[15px] text-mist">{s.text}</p>
                <div className="mt-auto pt-6">
                  <Cta href={link} variant="ghost">{paypal[name] ? 'Pay with PayPal' : <><WhatsAppIcon size={16} /> Order on WhatsApp</>}</Cta>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="calculator" className="wrap pb-16 lg:pb-24" aria-labelledby="calc-h">
        <p className="mb-4 inline-block rounded-full bg-tang px-3 py-1 font-display text-xs font-bold text-ink">Quote calculator</p>
        <h2 id="calc-h" className="max-w-[18ch] text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">Build your own estimate</h2>
        <p className="mt-4 max-w-[60ch] text-mist">Answer five quick questions and see a price range and timeline straight away.</p>
        <div className="mt-10"><QuoteCalculator /></div>
      </section>
    </>
  )
}
