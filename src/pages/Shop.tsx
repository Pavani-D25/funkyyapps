import { PageHero } from '@/components/sections/PageHero'
import { TiltCard } from '@/components/sections/TiltCard'
import { SwipeRow } from '@/components/sections/SwipeRow'
import { Cta } from '@/components/Cta'
import { shop } from '@/data/pages'
import { contact, packages, paypal } from '@/data/site'

const PKG: Record<string, string> = { web: packages[3].name, android: packages[2].name, ios: packages[1].name, shop: packages[0].name }
const TINT: Record<string, string> = { web: 'var(--color-lilac)', android: 'var(--color-butter)', ios: 'var(--color-bone)', shop: 'var(--color-tang)' }

function Art({ kind }: { kind: string }) {
  if (kind === 'web') return (
    <div className="w-[78%] rounded-xl bg-ink p-2"><div className="mb-2 flex gap-1">{[0, 1, 2].map((k) => <span key={k} className="size-1.5 rounded-full bg-mist/50" />)}</div><div className="grid gap-1.5 rounded-lg bg-ink-3 p-3"><span className="h-2.5 w-2/3 rounded-full bg-bone" /><span className="h-2.5 w-1/2 rounded-full bg-mist/50" /><span className="mt-1 h-4 w-14 rounded-full bg-tang" /></div></div>
  )
  if (kind === 'shop') return (
    <div className="grid w-[70%] grid-cols-3 gap-2">{[0, 1, 2, 3, 4, 5].map((k) => <span key={k} className="aspect-square rounded-lg bg-ink/85" />)}</div>
  )
  return (
    <div className="relative h-[78%] aspect-[9/17] rounded-[22px] border-4 border-ink bg-ink-3 p-2">
      {kind === 'ios' ? <span className="mx-auto block h-2 w-10 rounded-full bg-ink" /> : <span className="mx-auto block size-2 rounded-full bg-ink" />}
      <div className="mt-3 grid grid-cols-3 gap-1.5">{Array.from({ length: 9 }).map((_, k) => <span key={k} className="aspect-square rounded-md" style={{ background: ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)'][k % 3] }} />)}</div>
    </div>
  )
}

export function Shop() {
  return (
    <>
      <PageHero title="Shop" kicker="Packages" />
      <SwipeRow label="Packages" desktopClassName="lg:grid-cols-2 lg:gap-6" className="wrap pb-16 lg:pb-20">
        {shop.map((s) => {
          const name = PKG[s.kind]
          const link = paypal[name] || `${contact.whatsappUrl}?text=${encodeURIComponent(`Hi FunkyyApps, I'd like the ${s.title} (${s.price}) package.`)}`
          return (
            <TiltCard key={s.title} max={4} className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-ink-2">
              <div className="grid aspect-[16/9] place-items-center" style={{ background: TINT[s.kind] }}><Art kind={s.kind} /></div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-2xl font-extrabold">{s.title}</h2>
                  <p className="neon-text font-display text-2xl font-black text-tang">({s.price})</p>
                </div>
                <p className="mt-3 text-mist">{s.text}</p>
                <div className="mt-auto pt-7"><Cta href={link}>Shop Now</Cta></div>
              </div>
            </TiltCard>
          )
        })}
      </SwipeRow>
    </>
  )
}
