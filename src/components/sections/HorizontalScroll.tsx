// Own code (no library version requested): vertical scroll drives a horizontal gallery on desktop, swipe row on mobile.
import { motion, useScroll, useTransform } from 'motion/react'
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

export function HorizontalScroll({ children }: { children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null), track = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  useLayoutEffect(() => {
    const measure = () => setDist(Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth + 48))
    measure(); window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])
  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  return (
    <>
      <div ref={outer} className="relative hidden md:block" style={{ height: `calc(100vh + ${dist}px)` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex gap-6 pl-[max(24px,calc((100vw-1240px)/2+40px))]">{children}</motion.div>
        </div>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">{children}</div>
    </>
  )
}
