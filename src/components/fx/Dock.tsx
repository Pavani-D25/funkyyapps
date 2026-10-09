// Inspired by Unlumen "Dock" / Vengeance "Glass Dock": a floating contact dock with magnifying icons.
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

function Item({ mouseX, children, label, href, to }: { mouseX: MotionValue<number>; children: ReactNode; label: string; href?: string; to?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const dist = useTransform(mouseX, (v) => { const b = ref.current?.getBoundingClientRect(); return b ? v - b.x - b.width / 2 : 999 })
  const size = useSpring(useTransform(dist, [-120, 0, 120], [44, 64, 44]), { stiffness: 300, damping: 22 })
  const body = (
    <motion.span ref={ref} style={{ width: size, height: size }} className="group relative grid place-items-center rounded-2xl bg-ink-3 text-bone hover:bg-tang hover:text-ink transition-colors">
      {children}
      <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-full bg-bone px-3 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">{label}</span>
    </motion.span>
  )
  return to ? <Link to={to} aria-label={label}>{body}</Link> : <a href={href} target="_blank" rel="noreferrer" aria-label={label}>{body}</a>
}

export function Dock({ items }: { items: { label: string; icon: ReactNode; href?: string; to?: string }[] }) {
  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-[76px] items-end gap-2.5 rounded-3xl border border-line bg-ink/80 px-3 pb-3 backdrop-blur-xl"
    >
      {items.map((it) => <Item key={it.label} mouseX={mouseX} {...it}>{it.icon}</Item>)}
    </motion.div>
  )
}
