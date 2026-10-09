import type Lenis from 'lenis'

let instance: Lenis | null = null
export const setLenis = (l: Lenis | null) => { instance = l }
export const getLenis = () => instance

// In-page jumps go through Lenis so they glide like the rest of the page (and respect the nav height).
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (instance) instance.scrollTo(el, { offset: -90 })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
