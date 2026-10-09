import { useState } from 'react'

const BANDS = ['var(--color-tang)', 'var(--color-lilac)', 'var(--color-butter)']

// A browser frame around a portfolio screenshot; draws an abstract page if the image can't load.
export function BrowserShot({ src, i }: { src: string; i: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="w-[min(78vw,560px)] shrink-0 snap-center overflow-hidden rounded-[22px] border border-line bg-ink-2">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        {[0, 1, 2].map((k) => <span key={k} className="size-2.5 rounded-full bg-line" />)}
        <span className="ml-3 h-5 flex-1 rounded-full bg-ink-3" />
      </div>
      <div className="aspect-[16/10] w-full">
        {!failed ? (
          <img src={src} alt={`Website built by FunkyyApps, project ${i + 1}`} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-3 p-5" aria-label={`Portfolio project ${i + 1}`}>
            <div className="flex items-center justify-between"><span className="h-3 w-16 rounded-full bg-mist/40" /><span className="flex gap-2">{[0, 1, 2].map((k) => <span key={k} className="h-2 w-8 rounded-full bg-line" />)}</span></div>
            <div className="grid grid-cols-[1.2fr_1fr] gap-4 rounded-2xl p-5" style={{ background: BANDS[i % 3] }}>
              <div className="grid content-center gap-2"><span className="h-4 w-4/5 rounded-full bg-ink/80" /><span className="h-4 w-3/5 rounded-full bg-ink/80" /><span className="mt-2 h-6 w-24 rounded-full bg-ink" /></div>
              <div className="rounded-xl bg-ink/15" />
            </div>
            <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((k) => <span key={k} className="h-10 rounded-xl bg-ink-3" />)}</div>
          </div>
        )}
      </div>
    </figure>
  )
}
