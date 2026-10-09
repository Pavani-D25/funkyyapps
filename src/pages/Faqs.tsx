import { PageHero } from '@/components/sections/PageHero'
import { Faq } from '@/components/sections/Faq'
import { faqs } from '@/data/pages'

export function Faqs() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" kicker="Faq's" />
      <section className="wrap pb-20"><Faq items={faqs} /></section>
    </>
  )
}
