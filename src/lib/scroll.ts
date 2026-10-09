import type Lenis from 'lenis'

let instance: Lenis | null = null
export const setLenis = (l: Lenis | null) => { instance = l }
export const getLenis = () => instance

// HashRouter owns the URL hash, so in-page jumps go through here instead of href="#id".
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (instance) instance.scrollTo(el, { offset: -90 })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
