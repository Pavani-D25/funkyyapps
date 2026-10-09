import { Link } from 'react-router-dom'
import { contact, packages, paypal, questionnaireLinks, quickLinks, servicesNav } from '@/data/site'
import { CopyChip } from '@/components/sections/CopyChip'
import { Marquee } from '@/components/ui/marquee'

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line bg-ink-2">
      {/* packages ticker (the old site's PayPal packages) */}
      <div className="border-b border-line py-5">
        <Marquee pauseOnHover repeat={3} className="p-0 [--duration:36s] [--gap:1.25rem]">
          {packages.map((p) => {
            const link = paypal[p.name]
            return (
              <div key={p.name} className="flex shrink-0 items-center gap-4 rounded-full border border-line bg-ink py-2 pr-2 pl-5">
                <span className="text-[15px]">{p.name}</span>
                <span className="font-display font-bold text-butter">({p.price})</span>
                {link
                  ? <a href={link} target="_blank" rel="noreferrer" className="rounded-full bg-bone px-4 py-1.5 text-sm font-semibold text-ink">Pay with PayPal</a>
                  : <Link to="/shop" className="rounded-full bg-bone px-4 py-1.5 text-sm font-semibold text-ink">Pay with PayPal</Link>}
              </div>
            )
          })}
        </Marquee>
      </div>

      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-3xl font-extrabold">Let's Talk!</h3>
          <p className="mt-3 max-w-[36ch] text-mist">Thanks for stopping by! We’re here to help, please don’t hesitate to reach out.</p>
          <div className="mt-6 grid max-w-sm gap-2">
            <CopyChip label="WhatsApp" value={contact.whatsapp} href={contact.whatsappUrl} />
            <CopyChip label="We'd love to hear from you" value={contact.email} href={`mailto:${contact.email}`} />
          </div>
        </div>
        {[
          { title: 'Services', links: servicesNav },
          { title: 'Quick Links', links: quickLinks },
          { title: 'Questionnaires', links: questionnaireLinks },
        ].map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="font-display text-sm font-bold text-mist">{col.title}</p>
            <ul className="mt-4 grid gap-2.5">
              {col.links.map((l) => <li key={l.to}><Link to={l.to} className="text-[15px] hover:text-tang">{l.label}</Link></li>)}
            </ul>
          </nav>
        ))}
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-sm text-mist">
        <span>© {new Date().getFullYear()} FUNKYY APPS</span>
        <span>Experts in Web Design, Product Development &amp; Search Engine Marketing</span>
      </div>
      <p aria-hidden className="pointer-events-none -mb-[0.22em] text-center font-display text-[24vw] leading-none font-black tracking-tighter text-ink select-none">funkyy</p>
    </footer>
  )
}
