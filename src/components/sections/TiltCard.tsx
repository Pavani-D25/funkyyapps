// unlumen UI "Tilt": the card leans toward the pointer. Plain card when motion is reduced.
import type { ReactNode } from 'react'
import { useReducedMotion } from 'motion/react'
import { Tilt } from '@/components/unlumen-ui/tilt'

export function TiltCard({ children, className, max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return <Tilt rotationFactor={max} springOptions={{ stiffness: 220, damping: 22 }} className={className}>{children}</Tilt>
}
