// Light **bold** support for copy carried over from the old site.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return <>{parts.map((p, i) => (p.startsWith('**') ? <strong key={i} className="font-semibold text-bone">{p.slice(2, -2)}</strong> : p))}</>
}
