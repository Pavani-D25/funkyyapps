import type Lenis from 'lenis'

let instance: Lenis | null = null
export const setLenis = (l: Lenis | null) => { instance = l }
export const getLenis = () => instance

// In-page jumps go through Lenis so they glide like the rest of the page (and respect the nav height).
export function scrollToId(id: string) {
  // sections that collapse on small screens (e.g. the quote form) open themselves on this event
  window.dispatchEvent(new CustomEvent('reveal-section', { detail: id }))
  const el = document.getElementById(id)
  if (!el) return
  if (instance) instance.scrollTo(el, { offset: -90 })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
