import { PageHero } from '../components/sections/PageHero'
import { Accordion } from '../components/fx/Accordion'
import { faqs } from '../data/pages'

export function Faqs() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" kicker="Faq's" />
      <section className="wrap pb-20"><Accordion items={faqs} /></section>
    </>
  )
}
