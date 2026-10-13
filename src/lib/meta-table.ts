// Per-page <title> and description table. Every description is an existing sentence from
// src/data (or the site's original description) — no new copy is written here.
// Loaded lazily by usePageMeta so the copy data stays out of the first download.
import { about, questionnaires, terms } from '@/data/pages'
import { hero } from '@/data/site'
import { mobile, paidSocial, ppc, seoGuide, webDev } from '@/data/services'

export const DEFAULT_DESC = 'FUNKYY APPS – Experts in Web Design, Product Development & Search Engine Marketing.'
const firstSentence = (t: string) => (t.match(/^.*?[.!?](\s|$)/)?.[0] ?? t).trim()

export const PAGES: Record<string, { title: string; description: string }> = {
  '/': { title: `FUNKYY APPS – ${hero.lines.join(' ')}`, description: DEFAULT_DESC },
  '/about': { title: about.title, description: firstSentence(about.intro[0]) },
  '/seo-services': { title: 'SEO Services', description: firstSentence(seoGuide.transform.text) },
  '/paid-social-media': { title: paidSocial.title, description: firstSentence(paidSocial.intro ?? DEFAULT_DESC) },
  '/ppc-services': { title: ppc.title, description: ppc.intro ? firstSentence(ppc.intro) : DEFAULT_DESC },
  '/website-development': { title: webDev.title, description: firstSentence(webDev.intro[0]) },
  '/mobile-app-development': { title: mobile.title, description: firstSentence(mobile.intro) },
  '/shop': { title: 'Shop', description: DEFAULT_DESC },
  '/pricing': { title: 'Pricing & Quote Calculator', description: DEFAULT_DESC },
  '/faqs': { title: 'Frequently Asked Questions', description: DEFAULT_DESC },
  '/consult': { title: 'Consult FunkyyApps', description: DEFAULT_DESC },
  '/terms-and-conditions': { title: terms.title, description: terms.intro },
  ...Object.fromEntries(questionnaires.map((q) => [`/${q.slug}`, { title: q.title, description: firstSentence(q.intro[0]) }])),
}

