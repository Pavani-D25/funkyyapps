// Main navigation on SmoothUI "Expandable Navbar": one floating island that springs open into
// the services menu (desktop) or the full menu (mobile). Closes on route change and on Escape.
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import ExpandableNavbar from '@/components/smoothui/expandable-navbar'
import { Logo } from './Logo'
import { questionnaireLinks, servicesNav } from '@/data/site'
import { cn } from '@/lib/utils'

const main = [
  { label: 'About', to: '/about' },
  { label: 'Shop', to: '/shop' },
  { label: "FAQ's", to: '/faqs' },
]

function ServicesPanel() {
  return (
    <div className="grid gap-6 px-1 pb-1 md:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="mb-2 px-3 text-sm text-mist">Services</p>
        <ul className="grid gap-0.5">
          {servicesNav.map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="group flex items-center justify-between rounded-2xl px-3 py-2.5 font-display text-lg font-semibold hover:bg-ink-3">
                {s.label}
                <span className="size-2 rounded-full bg-tang opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 px-3 text-sm text-mist">Questionnaires</p>
        <ul className="grid gap-0.5">
          {questionnaireLinks.map((s) => (
            <li key={s.to}><Link to={s.to} className="block rounded-2xl px-3 py-2 text-[15px] hover:bg-ink-3">{s.label}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobilePanel() {
  return (
    <div className="grid gap-6">
      <ServicesPanel />
      <div className="grid gap-0.5 border-t border-line pt-4">
        {[{ label: 'Home', to: '/' }, ...main, { label: 'Terms & Conditions', to: '/terms-and-conditions' }].map((l) => (
          <Link key={l.to} to={l.to} className="rounded-2xl px-3 py-2 text-[15px] hover:bg-ink-3">{l.label}</Link>
        ))}
        <Link to="/consult" className="mt-3 rounded-full bg-tang px-5 py-3 text-center font-semibold text-ink">Consult</Link>
      </div>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState<string | null>(null)
  const [compact, setCompact] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  useMotionValueEvent(scrollY, 'change', (v) => setCompact(v > 40))
  useEffect(() => setOpen(null), [pathname])

  return (
    <div className="fixed inset-x-0 z-50 flex justify-center px-3" style={{ top: 'calc(env(safe-area-inset-top, 0px) + 14px)' }}>
      {/* desktop */}
      <motion.div
        className="hidden w-full md:block"
        animate={{ maxWidth: open ? 880 : compact ? 780 : 1100 }}
        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
      >
        <ExpandableNavbar
          width="100%"
          openId={open}
          onOpenChange={setOpen}
          start={<Logo className="mr-4 text-[22px]" />}
          items={[{ id: 'services', label: 'Services', panel: <ServicesPanel /> }]}
          end={
            <div className="flex items-center gap-1">
              {main.map((l) => (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => cn('rounded-full px-4 py-2 text-[15px] font-medium transition-colors', isActive ? 'text-bone' : 'text-mist hover:text-bone')}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/consult" className="ml-2 rounded-full bg-tang px-5 py-2.5 text-[15px] font-semibold text-ink transition-transform active:scale-95">Consult</Link>
            </div>
          }
        />
      </motion.div>

      {/* mobile */}
      <div className="w-full md:hidden">
        <ExpandableNavbar
          width="100%"
          openId={open}
          onOpenChange={setOpen}
          openOnHover={false}
          start={<Logo className="text-[22px]" />}
          items={[{ id: 'menu', label: open === 'menu' ? 'Close' : 'Menu', panel: <MobilePanel /> }]}
          triggerClassName="bg-ink-3 px-5 py-2.5 text-bone"
        />
      </div>
    </div>
  )
}
