// Inspired by Vengeance UI "Flip Text / Morph Text": letters flip in one by one when the word changes.
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

export function MorphText({ words, interval = 2400, className }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval, reduce])
  const word = words[i]
  return (
    <span className={className} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={word} className="inline-flex" style={{ perspective: 600 }}>
          {word.split('').map((ch, k) => (
            <motion.span
              key={k}
              className="inline-block origin-bottom"
              initial={{ rotateX: -90, y: '0.3em' }}
              animate={{ rotateX: 0, y: 0 }}
              exit={{ rotateX: 90, y: '-0.3em', opacity: 0 }}
              transition={{ delay: k * 0.03, type: 'spring', stiffness: 260, damping: 22 }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
