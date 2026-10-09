// Sets the per-page <title> and meta description (table in meta-table.ts, loaded on demand).
import { useEffect } from 'react'

const SITE = 'FUNKYY APPS'

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function usePageMeta(pathname: string) {
  useEffect(() => {
    let live = true
    import('./meta-table').then(({ PAGES, DEFAULT_DESC }) => {
      if (!live) return
      const path = pathname.replace(/\/+$/, '') || '/'
      const page = PAGES[path] ?? { title: 'This page doesn’t exist', description: DEFAULT_DESC }
      const title = path === '/' ? page.title : `${page.title} | ${SITE}`
      document.title = title
      setMeta('meta[name="description"]', 'name', 'description', page.description)
      setMeta('meta[property="og:title"]', 'property', 'og:title', title)
      setMeta('meta[property="og:description"]', 'property', 'og:description', page.description)
    })
    return () => { live = false }
  }, [pathname])
}
