import { useState } from 'react'
import { PageHero } from '@/components/sections/PageHero'
import { Cta } from '@/components/Cta'
import { CopyChip } from '@/components/sections/CopyChip'
import { FormNotice } from '@/components/sections/FormNotice'
import { sendForm, type SendResult } from '@/lib/forms'
import { contact } from '@/data/site'

export function Consult() {
  const [state, setState] = useState<SendResult | null>(null)
  return (
    <>
      <PageHero title="Consult FunkyyApps" kicker="Consult" />
      <section className="wrap grid gap-10 pb-20 lg:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={async (e) => { e.preventDefault(); setState(await sendForm(e.currentTarget, 'Consultation request')) }}
          className="grid gap-4 rounded-[28px] border border-line bg-ink-2 p-6 sm:grid-cols-2 md:p-10"
        >
          <label className="grid gap-1.5 text-sm text-mist">Name *<input id="c-name" name="name" required className="field" autoComplete="name" /></label>
          <label className="grid gap-1.5 text-sm text-mist">Email Address *<input id="c-email" name="email" type="email" required className="field" autoComplete="email" /></label>
          <label className="grid gap-1.5 text-sm text-mist sm:col-span-2">Phone *<input id="c-phone" name="phone" type="tel" required className="field" autoComplete="tel" /></label>
          <label className="grid gap-1.5 text-sm text-mist sm:col-span-2">Requirement *<textarea id="c-req" name="requirement" required rows={5} className="field resize-y" /></label>
          <p className="rounded-2xl bg-butter px-4 py-3 text-[15px] font-semibold text-ink sm:col-span-2">Virtual consultation for 30 minutes requires $250</p>
          <div className="grid gap-3 sm:col-span-2"><FormNotice state={state} /><Cta type="submit" className="justify-self-start">Get in touch</Cta></div>
        </form>
        <aside className="grid content-start gap-3">
          <CopyChip label="WhatsApp" value={contact.whatsapp} href={contact.whatsappUrl} />
          <CopyChip label="Text Us" value={contact.sms} href={`sms:${contact.sms}`} />
          <CopyChip label="Email Us" value={contact.email} href={`mailto:${contact.email}`} />
        </aside>
      </section>
    </>
  )
}
