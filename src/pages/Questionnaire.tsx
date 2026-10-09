import { useState } from 'react'
import { Paperclip } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Cta } from '@/components/Cta'
import { FormNotice } from '@/components/sections/FormNotice'
import { sendForm, type SendResult } from '@/lib/forms'
import { fontStyles, logoTypes, questionnaires, type QField } from '@/data/pages'
import { cn } from '@/lib/utils'

function Field({ f, id }: { f: QField; id: string }) {
  const [file, setFile] = useState('')
  const lbl = 'grid gap-2 text-[15px] text-bone'
  switch (f.type) {
    case 'textarea':
      return <label className={cn(lbl, 'sm:col-span-2')}>{f.label}<textarea id={id} name={f.label} rows={3} className="field resize-y" /></label>
    case 'select':
      return <label className={cn(lbl, 'sm:col-span-2')}>{f.label}<select id={id} name={f.label} className="field" defaultValue=""><option value="" disabled>Select option</option>{f.options.map((o) => <option key={o}>{o}</option>)}</select></label>
    case 'checks':
    case 'yesno': {
      const opts = f.type === 'yesno' ? ['Yes', 'No'] : f.options
      return (
        <fieldset className="sm:col-span-2">
          <legend className="mb-2.5 text-[15px]">{f.label}</legend>
          <div className="flex flex-wrap gap-2">
            {opts.map((o, k) => (
              <label key={o} className="cursor-pointer">
                <input id={`${id}-${k}`} type={f.type === 'yesno' ? 'radio' : 'checkbox'} name={f.label} value={o} className="peer sr-only" />
                <span className="inline-block rounded-full border border-line px-4 py-2 text-sm transition-colors peer-checked:border-lilac peer-checked:bg-lilac peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-lilac">{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )
    }
    case 'file':
      return (
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-line px-4 py-4 text-[15px] text-mist hover:border-mist sm:col-span-2">
          <Paperclip size={18} /><span className="min-w-0 truncate">{file || f.label}</span>
          <input id={id} type="file" name={f.label} className="sr-only" onChange={(e) => setFile(e.target.files?.[0]?.name ?? '')} />
        </label>
      )
    default:
      return <label className={cn(lbl, !f.half && 'sm:col-span-2')}>{f.label}<input id={id} type={f.type} name={f.label} className="field" /></label>
  }
}

// little drawn examples for each logo type
function LogoDemo({ name }: { name: string }) {
  const base = 'grid h-28 place-items-center rounded-2xl bg-ink text-bone'
  switch (name) {
    case 'Wordmark': return <div className={base}><span className="font-display text-2xl font-black">acme</span></div>
    case 'Lettermark': return <div className={base}><span className="font-display text-4xl font-black tracking-tighter">AC</span></div>
    case 'Monogram': return <div className={base}><span className="relative grid size-16 place-items-center rounded-full border-2 border-butter font-display text-2xl font-black"><span className="-mr-2">A</span><span className="-ml-1 text-lilac">C</span></span></div>
    case 'Symbol': return <div className={base}><span className="size-12 rotate-45 rounded-[10px] bg-tang shadow-[10px_-10px_0_var(--color-lilac)]" /></div>
    case 'Mascot': return <div className={base}><span className="relative grid size-16 place-items-center rounded-full bg-butter"><span className="absolute top-5 left-4 size-2 rounded-full bg-ink" /><span className="absolute top-5 right-4 size-2 rounded-full bg-ink" /><span className="absolute bottom-4 h-2 w-6 rounded-b-full bg-ink" /></span></div>
    case 'Emblem': return <div className={base}><span className="grid h-16 w-24 place-items-center rounded-[40%] border-4 border-double border-lilac font-display text-sm font-black">ACME</span></div>
    default: return <div className={base}><span className="flex items-center gap-2"><span className="size-7 rounded-full bg-tang" /><span className="font-display text-xl font-black">acme</span></span></div>
  }
}

export function QuestionnairePage({ slug }: { slug: string }) {
  const [state, setState] = useState<SendResult | null>(null)
  const q = questionnaires.find((x) => x.slug === slug) ?? questionnaires[0]
  return (
    <>
      <PageHero title={q.title} kicker="Questionnaire">{q.intro.map((p) => <p key={p} className="mb-3">{p}</p>)}</PageHero>
      <section className="wrap pb-20">
        <form
          onSubmit={async (e) => { e.preventDefault(); setState(await sendForm(e.currentTarget, q.title)) }}
          className="grid gap-6 rounded-[28px] border border-line bg-ink-2 p-6 sm:grid-cols-2 md:p-10"
        >
          {q.fields.map((f, i) => <Field key={f.label + i} f={f} id={`${q.slug}-${i}`} />)}
          <div className="grid gap-3 sm:col-span-2"><FormNotice state={state} /><Cta type="submit" className="justify-self-start">Submit</Cta></div>
        </form>

        {q.logoGuide && (
          <div className="mt-24">
            <h2 className="text-4xl font-extrabold md:text-5xl">Logo Types</h2>
            <p className="mt-4 max-w-[60ch] text-mist">Please select ONE category &gt; Font Based Or Icon Based &gt; Then Check One Sub-Category Of That</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {logoTypes.map((l) => (
                <div key={l.name} className="rounded-[22px] border border-line bg-ink-2 p-4">
                  <LogoDemo name={l.name} />
                  <h3 className="mt-4 px-1 text-lg font-bold">{l.name}</h3>
                  <p className="mt-2 px-1 pb-2 text-[15px] text-mist">{l.text}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-20 text-4xl font-extrabold md:text-5xl">Font Style</h2>
            <ul className="mt-8 flex flex-wrap gap-2">{fontStyles.map((f) => <li key={f} className="rounded-full border border-line px-4 py-2">{f}</li>)}</ul>
          </div>
        )}
      </section>
    </>
  )
}
