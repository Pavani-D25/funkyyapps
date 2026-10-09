// A portfolio screenshot inside a Magic UI "Safari" browser mockup.
// If the file isn't in /public/portfolio yet, an abstract page is drawn inside the frame instead.
import { useEffect, useState } from 'react'
import { Safari } from '@/components/ui/safari'

const BANDS = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

export function BrowserShot({ src, i }: { src: string; i: number }) {
  const [state, setState] = useState<'loading' | 'ok' | 'missing'>('loading')
  useEffect(() => {
    const img = new Image()
    img.onload = () => setState('ok')
    img.onerror = () => setState('missing')
    img.src = src
  }, [src])

  return (
    <figure className="relative w-[min(84vw,640px)] shrink-0 snap-center">
      <Safari url="funkyyapps.com" imageSrc={state === 'ok' ? src : undefined} imageAlt={`Website built by FunkyyApps, project ${i + 1}`} className="drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]" />
      {state === 'missing' && (
        // sits exactly over the Safari screen area (52/753 from the top)
        <div role="img" aria-label={`Portfolio project ${i + 1}`} className="absolute inset-x-[0.1%] top-[6.9%] bottom-[0.2%] z-20 grid grid-rows-[auto_1fr_auto] gap-3 overflow-hidden rounded-b-[11px] bg-ink-2 p-[4%]">
          <div className="flex items-center justify-between"><span className="h-3 w-16 rounded-full bg-mist/40" /><span className="flex gap-2">{[0, 1, 2].map((k) => <span key={k} className="h-2 w-8 rounded-full bg-line" />)}</span></div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-4 rounded-2xl p-[5%]" style={{ background: BANDS[i % 3] }}>
            <div className="grid content-center gap-2"><span className="h-4 w-4/5 rounded-full bg-ink/80" /><span className="h-4 w-3/5 rounded-full bg-ink/80" /><span className="mt-2 h-6 w-24 rounded-full bg-ink" /></div>
            <div className="rounded-xl bg-ink/15" />
          </div>
          <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((k) => <span key={k} className="h-8 rounded-xl bg-ink-3" />)}</div>
        </div>
      )}
    </figure>
  )
}
