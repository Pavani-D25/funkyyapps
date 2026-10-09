import { PageHero } from '../components/sections/PageHero'
import { ShimmerButton } from '../components/fx/ShimmerButton'
import { terms } from '../data/pages'

export function Terms() {
  return (
    <>
      <PageHero title={terms.title} kicker="Legal"><p>{terms.intro}</p></PageHero>
      <section className="wrap grid gap-12 pb-20 lg:grid-cols-[2fr_1fr]">
        <div className="max-w-[70ch]">
          <ol className="grid gap-5">
            {terms.clauses.map((c, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line pb-5 text-mist">
                <span className="font-display font-bold text-tang">{String.fromCharCode(97 + i)}.</span><span>{c}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-5 text-mist">{terms.paras.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
        <aside className="grid content-start gap-4">
          {terms.notes.map((n) => <p key={n} className="rounded-[22px] border border-line bg-ink-2 p-6 text-[15px] text-mist"><span className="text-tang">* </span>{n}</p>)}
          <ShimmerButton href="#quote" className="justify-self-start">Get A Quote</ShimmerButton>
        </aside>
      </section>
    </>
  )
}
