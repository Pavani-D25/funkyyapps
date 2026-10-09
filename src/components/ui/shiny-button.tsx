import React from "react"
import { motion, type MotionProps } from "motion/react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  /** FUNKYY: render onto the single child element (e.g. a router <Link> or <a>) */
  asChild?: boolean
}

// FUNKYY: motion.create(Slot) lets the shine run on a router <Link>/<a> as well as a <button>.
const MotionSlot = motion.create(Slot.Root)

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? MotionSlot : motion.button
  const label = (content: React.ReactNode) => (
    <span
      className="relative inline-flex size-full items-center gap-2 text-[15px] tracking-wide text-bone"
      style={{
        maskImage:
          "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
      }}
    >
      {content}
    </span>
  )
  return (
    <Comp
      ref={ref}
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center rounded-full border border-line px-6 py-3.5 font-semibold backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_24px_color-mix(in_oklab,var(--color-tang)_25%,transparent)] dark:bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--color-tang)_14%,transparent)_0%,transparent_60%)]",
        className
      )}
      {...animationProps}
      {...(props as MotionProps)}
    >
      {asChild ? <Slot.Slottable child={children}>{label}</Slot.Slottable> : label(children)}
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,color-mix(in oklab,var(--primary) 10%,transparent) calc(var(--x) + 20%),color-mix(in oklab,var(--primary) 60%,transparent) calc(var(--x) + 25%),color-mix(in oklab,var(--primary) 10%,transparent) calc(var(--x) + 100%))",
        }}
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </Comp>
  )
})

ShinyButton.displayName = "ShinyButton"
