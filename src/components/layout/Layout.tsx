import { useEffect } from 'react'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import Lenis from 'lenis'
import { Mail, MessageCircle, CalendarClock, ShoppingBag } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { SpringCursor } from '@/components/ui/skiper-ui/skiper61'
import { Dock } from '@/components/unlumen-ui/dock'
import { contact } from '@/data/site'
import { setLenis, getLenis } from '@/lib/scroll'

export function Layout() {
  const { pathname } = useLocation()
  const outlet = useOutlet()
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
  // the old page finishes leaving first, then we jump to the top, so the new page never jumps
  const toTop = () => { const l = getLenis(); if (l) l.scrollTo(0, { immediate: true, force: true }); else window.scrollTo(0, 0) }

  return (
    <div className="grain">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      {/* route transition: AnimatePresence keeps the outgoing page (frozen outlet) until it has faded */}
      <AnimatePresence mode="wait" initial={false} onExitComplete={toTop}>
        <motion.main
          id="main"
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <SpringCursor />
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
