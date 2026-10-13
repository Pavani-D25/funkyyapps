// Project quote calculator: every number the estimate uses lives here (USD).
// Base prices come from the site's own plans and packages (data/site.ts):
//   Website = Silver Startup $999, E-commerce = Standard Ecommerce Website $3,000,
//   Web app = Enterprise Web Apps $3,099, Android $4,000 / iOS $5,500 (Basic Mobile App packages).
// Everything else (per page, add-ons, multipliers, weeks) is a starting estimate: adjust freely.

export type ProjectKind = 'website' | 'ecommerce' | 'webapp' | 'mobile'
export type Platform = 'android' | 'ios' | 'both'

export const kinds: { id: ProjectKind; label: string; blurb: string; base: number; included: number; perExtra: number; unit: string; min: number; max: number; weeks: number }[] = [
  { id: 'website', label: 'Website', blurb: 'Business sites, portfolios, landing pages', base: 999, included: 3, perExtra: 120, unit: 'pages', min: 1, max: 30, weeks: 2 },
  { id: 'ecommerce', label: 'E-commerce store', blurb: 'Shopify, WooCommerce or custom stores', base: 3000, included: 8, perExtra: 150, unit: 'pages', min: 3, max: 40, weeks: 4 },
  { id: 'webapp', label: 'Web app', blurb: 'Dashboards, portals, SaaS products', base: 3099, included: 6, perExtra: 260, unit: 'screens', min: 3, max: 40, weeks: 6 },
  { id: 'mobile', label: 'Mobile app', blurb: 'iOS, Android or both', base: 4000, included: 6, perExtra: 300, unit: 'screens', min: 3, max: 40, weeks: 8 },
]

// mobile base by platform (Android is the kinds[] base); "both" is cheaper than two separate apps
export const platforms: { id: Platform; label: string; base: number }[] = [
  { id: 'android', label: 'Android', base: 4000 },
  { id: 'ios', label: 'iOS', base: 5500 },
  { id: 'both', label: 'Both', base: 8500 },
]

export const designLevels = [
  { id: 'template', label: 'Template', note: 'Polished theme, your branding', factor: 0.85 },
  { id: 'custom', label: 'Custom', note: 'Designed from scratch', factor: 1 },
  { id: 'premium', label: 'Premium', note: 'Custom + motion & 3D moments', factor: 1.3 },
] as const

export type AddOn = { id: string; label: string; price: number; perUnit?: boolean; for?: ProjectKind[] }
export const addOns: AddOn[] = [
  { id: 'branding', label: 'Logo & brand kit', price: 299 },
  { id: 'copy', label: 'Copywriting (per page)', price: 40, perUnit: true },
  { id: 'seo', label: 'SEO setup', price: 349 },
  { id: 'cms', label: 'Blog / CMS', price: 249, for: ['website', 'ecommerce', 'webapp'] },
  { id: 'payments', label: 'Online payments', price: 399 },
  { id: 'accounts', label: 'User accounts & login', price: 599 },
  { id: 'admin', label: 'Admin dashboard', price: 899, for: ['ecommerce', 'webapp', 'mobile'] },
  { id: 'i18n', label: 'Multi-language', price: 399 },
  { id: 'push', label: 'Push notifications', price: 349, for: ['mobile'] },
]

export const rush = { label: 'Fast-track delivery', factor: 1.25, weeksFactor: 0.6 }
export const care = { label: 'Care plan (updates, backups, fixes)', monthly: 99 }

// the shown range around the estimate, rounded to the nearest $50
export const range = { low: 0.9, high: 1.15, step: 50 }
