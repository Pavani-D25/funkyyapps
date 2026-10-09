import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Lenis from 'lenis'
import { Mail, MessageCircle, CalendarClock, ShoppingBag } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { QuoteForm } from '../sections/QuoteForm'
import { Dock } from '@/components/unlumen-ui/dock'
import { contact } from '@/data/site'
import { setLenis, getLenis } from '@/lib/scroll'

export function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const go = (to: string) => (e: React.MouseEvent<HTMLElement>) => { e.preventDefault(); navigate(to) }
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.11 })
    setLenis(lenis)
    let raf = 0
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); setLenis(null) }
  }, [])
  useEffect(() => { const l = getLenis(); if (l) l.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="grain">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      {/* page transition — Animmaster-style curtain wipe */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={pathname}>
          <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[55] origin-top bg-tang"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
          />
          <main id="main">
            <Outlet />
          </main>
        </motion.div>
      </AnimatePresence>
      <QuoteForm />
      <Footer />
      <div className="fixed right-6 z-40 hidden md:block" style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)' }}>
        {/* unlumen UI "Dock" */}
        <Dock
          iconSize={44}
          magnification={1.45}
          items={[
            { label: 'WhatsApp', icon: <MessageCircle />, href: contact.whatsappUrl, external: true },
            { label: 'Email us', icon: <Mail />, href: `mailto:${contact.email}`, separator: true },
            { label: 'Consult', icon: <CalendarClock />, href: '/consult', onClick: go('/consult') },
            { label: 'Shop', icon: <ShoppingBag />, href: '/shop', onClick: go('/shop') },
          ]}
        />
      </div>
    </div>
  )
}
