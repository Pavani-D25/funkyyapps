import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { Mail, MessageCircle, CalendarClock, ShoppingBag } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { QuoteForm } from '../sections/QuoteForm'
import { Dock } from '../fx/Dock'
import { contact } from '../../data/site'

import { setLenis, getLenis } from '../../lib/scroll'

export function Layout() {
  const { pathname } = useLocation()
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
        <Dock items={[
          { label: 'WhatsApp', icon: <MessageCircle size={20} />, href: contact.whatsappUrl },
          { label: 'Email us', icon: <Mail size={20} />, href: `mailto:${contact.email}` },
          { label: 'Consult', icon: <CalendarClock size={20} />, to: '/consult' },
          { label: 'Shop', icon: <ShoppingBag size={20} />, to: '/shop' },
        ]} />
      </div>
    </div>
  )
}
