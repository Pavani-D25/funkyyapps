// Which neon scene + palette each page gets (rendered by components/fx/NeonBackdrop).
export type Scene = 'synth' | 'beams' | 'rings' | 'prism' | 'aurora'
export type Look = { scene: Scene; colors: [string, string, string, string] }

const TANG = '#ff6b2c', VIOLET = '#b14dff', GREEN = '#18e39b', CYAN = '#22d3ee', MAGENTA = '#ff3fa4', BUTTER = '#ffd84d', BLUE = '#3b82f6', LIME = '#b6ff3b'

const LOOKS: Record<string, Look> = {
  '/': { scene: 'synth', colors: [TANG, VIOLET, GREEN, CYAN] },
  '/seo-services': { scene: 'beams', colors: [GREEN, CYAN, LIME, VIOLET] },
  '/paid-social-media': { scene: 'beams', colors: [MAGENTA, VIOLET, TANG, CYAN] },
  '/ppc-services': { scene: 'beams', colors: [BUTTER, TANG, MAGENTA, VIOLET] },
  '/website-development': { scene: 'beams', colors: [CYAN, VIOLET, BLUE, MAGENTA] },
  '/mobile-app-development': { scene: 'beams', colors: [VIOLET, MAGENTA, CYAN, GREEN] },
  '/about': { scene: 'rings', colors: [TANG, BUTTER, MAGENTA, VIOLET] },
  '/shop': { scene: 'prism', colors: [GREEN, BUTTER, CYAN, TANG] },
  '/pricing': { scene: 'prism', colors: [TANG, VIOLET, CYAN, GREEN] },
  '/faqs': { scene: 'aurora', colors: [CYAN, VIOLET, GREEN, BLUE] },
  '/consult': { scene: 'aurora', colors: [TANG, MAGENTA, VIOLET, BUTTER] },
}
const FALLBACK: Look = { scene: 'aurora', colors: [VIOLET, CYAN, BLUE, MAGENTA] }

export function lookFor(pathname: string) {
  return LOOKS[pathname.replace(/\/+$/, '') || '/'] ?? FALLBACK
}
