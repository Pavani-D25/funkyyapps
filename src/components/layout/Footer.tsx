import { Link } from 'react-router-dom'
import { contact, packages, paypal, questionnaireLinks, quickLinks, servicesNav } from '@/data/site'
import { CopyChip } from '@/components/sections/CopyChip'
import { Marquee } from '@/components/ui/marquee'
import { FlipText } from '@/components/ui/flip-text'

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

      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <h3 className="text-2xl font-extrabold lg:text-3xl">Let's Talk!</h3>
          <p className="mt-3 max-w-[36ch] text-mist">Thanks for stopping by! We’re here to help, please don’t hesitate to reach out.</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:max-w-sm lg:grid-cols-1">
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
            <ul className="mt-3 grid gap-2 lg:mt-4 lg:gap-2.5">
              {col.links.map((l) => <li key={l.to}><Link to={l.to} className="text-[15px] hover:text-tang">{l.label}</Link></li>)}
            </ul>
          </nav>
        ))}
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-2 border-t border-line py-5 text-sm text-mist lg:gap-3 lg:py-6">
        <span>© {new Date().getFullYear()} FUNKYY APPS</span>
        <span>Experts in Web Design, Product Development &amp; Search Engine Marketing</span>
      </div>
      {/* Vengeance UI "Flip Text": the neon wordmark keeps flipping once it scrolls into view */}
      <div aria-hidden className="pointer-events-none -mb-[0.18em] overflow-hidden text-center font-display text-[24vw] leading-none font-black tracking-tighter text-tang select-none [filter:drop-shadow(0_0_18px_rgb(255_107_44/0.55))_drop-shadow(0_0_42px_rgb(177_77_255/0.35))]">
        <FlipText playOnView duration={3.2} className="leading-none">funkyy</FlipText>
      </div>
    </footer>
  )
}
