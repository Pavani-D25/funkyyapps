// The "get a quote" form that closes every page, same fields as the live site.
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Paperclip } from 'lucide-react'
import { sendForm, type SendResult } from '@/lib/forms'
import { Cta } from '@/components/Cta'
import { FormNotice } from '@/components/sections/FormNotice'
import { promises } from '@/data/site'

export function QuoteForm() {
  const [state, setState] = useState<SendResult | 'invalid-email' | null>(null)
  const [files, setFiles] = useState<string[]>([])
  // phones/tablets: the form stays folded until asked for (desktop always shows it)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onReveal = (e: Event) => { if ((e as CustomEvent<string>).detail === 'quote') setOpen(true) }
    window.addEventListener('reveal-section', onReveal)
    return () => window.removeEventListener('reveal-section', onReveal)
  }, [])
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = e.currentTarget
    const d = new FormData(f)
    if (d.get('email') !== d.get('email_confirm')) return setState('invalid-email')
    setState(await sendForm(f, 'New quote request'))
  }
  return (
    <section id="quote" className="relative py-16 lg:py-[clamp(72px,10vw,140px)]">
      <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[1.8rem] font-extrabold sm:text-4xl md:text-6xl">Get a quote</h2>
          <ul className="mt-6 grid gap-2 lg:mt-8 lg:gap-3">
            {promises.map((p, i) => (
              <li key={p} className="flex items-center gap-4 font-display text-lg font-semibold md:text-xl">
                <span className="size-3 rounded-full" style={{ background: ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)'][i] }} />
                {p}
              </li>
            ))}
          </ul>
          {!open && (
            <button type="button" onClick={() => setOpen(true)} aria-controls="quote-form" aria-expanded={false} className="mt-8 inline-flex items-center gap-2 rounded-full bg-tang px-6 py-3.5 text-[15px] font-semibold text-ink active:scale-[.97] lg:hidden">
              Get a quote <ChevronDown size={18} />
            </button>
          )}
        </div>
        <form id="quote-form" onSubmit={onSubmit} className={cn('grid gap-4 rounded-[28px] border border-line bg-ink-2 p-5 sm:grid-cols-2 md:p-8', !open && 'hidden lg:grid')}>
          <label className="grid gap-1.5 text-sm text-mist">First Name<input id="q-first" name="first_name" required className="field" autoComplete="given-name" /></label>
          <label className="grid gap-1.5 text-sm text-mist">Last Name<input id="q-last" name="last_name" className="field" autoComplete="family-name" /></label>
          <label className="grid gap-1.5 text-sm text-mist">Email Address<input id="q-email" name="email" type="email" required className="field" autoComplete="email" /></label>
          <label className="grid gap-1.5 text-sm text-mist">Confirm Email<input id="q-email2" name="email_confirm" type="email" required className="field" /></label>
          <label className="grid gap-1.5 text-sm text-mist sm:col-span-2">Phone<input id="q-phone" name="phone" type="tel" className="field" autoComplete="tel" /></label>
          <fieldset className="sm:col-span-2">
            <legend className="mb-2 text-sm text-mist">Please select the service/s you require…</legend>
            <div className="flex flex-wrap gap-2">
              {['Web Design', 'SEO', 'Mobile App Development', 'Additional Request'].map((s) => (
                <label key={s} className="cursor-pointer">
                  <input type="checkbox" name="services" value={s} className="peer sr-only" />
                  <span className="inline-block rounded-full border border-line px-4 py-2 text-[15px] transition-colors peer-checked:border-tang peer-checked:bg-tang peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-lilac">{s}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-1.5 text-sm text-mist sm:col-span-2">Additional Request<input id="q-additional" name="additional" placeholder="Enter your additional service here" className="field" /></label>
          <label className="grid gap-1.5 text-sm text-mist sm:col-span-2">Additional Project Details<textarea id="q-details" name="details" rows={4} className="field resize-y" /></label>
          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-line px-4 py-4 text-[15px] text-mist hover:border-mist sm:col-span-2">
            <Paperclip size={18} />
            <span className="min-w-0 truncate">{files.length ? files.join(', ') : 'Attach Relevant Files or Visual Aids'}</span>
            <input id="q-files" name="files" type="file" multiple className="sr-only" onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} />
          </label>
          <div className="grid gap-3 sm:col-span-2">
            <FormNotice state={state} />
            <Cta type="submit" className="justify-self-start">Submit</Cta>
          </div>
        </form>
      </div>
    </section>
  )
}
