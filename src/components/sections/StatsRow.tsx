import { NumberTicker } from '@/components/ui/number-ticker'

export function StatsRow({ stats }: { stats: { value: number; suffix: string; label: string }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse bg-ink-2 p-7 md:p-9">
          <dt className="mt-3 text-mist">{s.label}</dt>
          <dd className="font-display text-5xl font-black md:text-6xl"><NumberTicker value={s.value} />{s.suffix && <span className="text-tang">{s.suffix}</span>}</dd>
        </div>
      ))}
    </dl>
  )
}
