// Every page is its own chunk; Layout preloads them once the browser is idle so navigation stays instant.
export const pageLoaders = {
  Home: () => import('./Home').then((m) => ({ default: m.Home })),
  About: () => import('./About').then((m) => ({ default: m.About })),
  Seo: () => import('./Seo').then((m) => ({ default: m.Seo })),
  PaidSocial: () => import('./PaidSocial').then((m) => ({ default: m.PaidSocial })),
  Ppc: () => import('./Ppc').then((m) => ({ default: m.Ppc })),
  WebDev: () => import('./WebDev').then((m) => ({ default: m.WebDev })),
  Mobile: () => import('./Mobile').then((m) => ({ default: m.Mobile })),
  Shop: () => import('./Shop').then((m) => ({ default: m.Shop })),
  Faqs: () => import('./Faqs').then((m) => ({ default: m.Faqs })),
  Consult: () => import('./Consult').then((m) => ({ default: m.Consult })),
  Terms: () => import('./Terms').then((m) => ({ default: m.Terms })),
  QuestionnairePage: () => import('./Questionnaire').then((m) => ({ default: m.QuestionnairePage })),
  NotFound: () => import('./NotFound').then((m) => ({ default: m.NotFound })),
}
