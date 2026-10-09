// Inspired by SmoothUI / Skiper UI "Dynamic Island": the nav is one pill that morphs open
// to reveal the services menu (desktop hover) or the full menu (mobile tap).
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { questionnaireLinks, servicesNav } from '../../data/site'
import { cn } from '../../lib/cn'

const main = [
  { label: 'About', to: '/about' },
  { label: 'Shop', to: '/shop' },
  { label: "FAQ's", to: '/faqs' },
]

export function Nav() {
  const [open, setOpen] = useState<'services' | 'mobile' | null>(null)
  const [compact, setCompact] = useState(false)
  const { scrollY } = useScroll()
  const loc = useLocation()
  useMotionValueEvent(scrollY, 'change', (v) => setCompact(v > 40))
  useEffect(() => setOpen(null), [loc.pathname])

  return (
    <div className="fixed inset-x-0 z-50 flex justify-center px-3" style={{ top: 'calc(env(safe-area-inset-top, 0px) + 14px)' }}>
      <motion.nav
        layout
        onMouseLeave={() => open === 'services' && setOpen(null)}
        className={cn('w-full overflow-hidden border border-line bg-ink/85 backdrop-blur-xl', open ? 'max-w-[880px]' : compact ? 'max-w-[760px]' : 'max-w-[1100px]')}
        style={{ borderRadius: open ? 28 : 999 }}
        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
      >
        <motion.div layout="position" className="flex items-center justify-between gap-4 py-2.5 pr-2.5 pl-5">
          <Logo className="text-[22px]" />
          <div className="hidden items-center gap-1 md:flex">
            <button
              onMouseEnter={() => setOpen('services')}
              onClick={() => setOpen(open === 'services' ? null : 'services')}
              aria-expanded={open === 'services'}
              className={cn('rounded-full px-4 py-2 text-[15px] font-medium transition-colors', open === 'services' ? 'bg-ink-3 text-bone' : 'text-mist hover:text-bone')}
            >
              Services
            </button>
            {main.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => cn('rounded-full px-4 py-2 text-[15px] font-medium transition-colors', isActive ? 'text-bone' : 'text-mist hover:text-bone')}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/consult" className="ml-2 rounded-full bg-tang px-5 py-2.5 text-[15px] font-semibold text-ink transition-transform active:scale-95">Consult</Link>
          </div>
          <button className="grid size-11 place-items-center rounded-full bg-ink-3 md:hidden" aria-label={open === 'mobile' ? 'Close menu' : 'Open menu'} onClick={() => setOpen(open === 'mobile' ? null : 'mobile')}>
            {open === 'mobile' ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-8 border-t border-line px-5 py-6 md:grid-cols-[1.3fr_1fr]"
            >
              <div>
                <p className="mb-3 text-sm text-mist">Services</p>
                <ul className="grid gap-1">
                  {servicesNav.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to} className="group flex items-center justify-between rounded-2xl px-3 py-2.5 font-display text-lg font-semibold hover:bg-ink-3">
                        {s.label}
                        <span className="size-2 rounded-full bg-tang opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm text-mist">Questionnaires</p>
                <ul className="grid gap-1">
                  {questionnaireLinks.map((s) => (
                    <li key={s.to}><Link to={s.to} className="block rounded-2xl px-3 py-2 text-[15px] text-bone hover:bg-ink-3">{s.label}</Link></li>
                  ))}
                </ul>
                {open === 'mobile' && (
                  <div className="mt-6 grid gap-1 border-t border-line pt-4">
                    {[{ label: 'Home', to: '/' }, ...main, { label: 'Terms & Conditions', to: '/terms-and-conditions' }].map((l) => (
                      <Link key={l.to} to={l.to} className="rounded-2xl px-3 py-2 text-[15px]">{l.label}</Link>
                    ))}
                    <Link to="/consult" className="mt-3 rounded-full bg-tang px-5 py-3 text-center font-semibold text-ink">Consult</Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
