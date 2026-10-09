"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface HoverExpandItem {
  label: string;
  /** e.g. country, year, category */
  sublabel?: string;
  image?: string;
  imageAlt?: string;
  /** short descriptor shown when expanded */
  description?: string;
  /** FUNKYY: solid colour shown instead of an image when expanded */
  accent?: string;
  /** FUNKYY: extra content revealed inside the expanded row */
  content?: React.ReactNode;
}

export interface HoverExpandProps {
  items: HoverExpandItem[];
  /**
   * Row height when collapsed, in pixels.
   * @default 68
   */
  collapsedHeight?: number;
  /**
   * Row height when expanded, in pixels.
   * @default 320
   */
  expandedHeight?: number;
  className?: string;
}

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 320,
  className,
}: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const baseId = React.useId();

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="w-full border-t border-current opacity-15" />

      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;
        const panelId = `${baseId}-row-${i}`;
        // FUNKYY: dark text on a light accent, white text over photos
        const onColor = item.accent ? "var(--color-ink)" : "#ffffff";

        return (
          <React.Fragment key={i}>
            <motion.div
              className="relative w-full overflow-hidden cursor-default"
              animate={{
                height: isHovered ? expandedHeight : collapsedHeight,
                opacity: isOtherHovered ? 0.38 : 1,
              }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                },
                opacity: { duration: 0.22, ease: "easeOut" },
              }}
              onHoverStart={(e) => { if ((e as PointerEvent).pointerType === "mouse") setHoveredIndex(i); }}
              onHoverEnd={(e) => { if ((e as PointerEvent).pointerType === "mouse") setHoveredIndex(null); }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 1.06,
                }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                }}
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                  </>
                ) : (
                  <div className="h-full w-full rounded-[22px]" style={{ background: item.accent }} />
                )}
              </motion.div>

              {item.content && (
                <motion.div
                  id={panelId}
                  className="absolute inset-x-0 top-0 px-5 pt-5 md:px-7 md:pt-6"
                  style={{ color: onColor }}
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0, ease: [0.23, 1, 0.32, 1] }}
                  aria-hidden={!isHovered}
                >
                  {item.content}
                </motion.div>
              )}

              <button
                type="button"
                aria-expanded={isHovered}
                aria-controls={item.content ? panelId : undefined}
                onClick={() => setHoveredIndex(isHovered ? null : i)}
                className="absolute inset-0 flex cursor-pointer items-end rounded-[22px] px-5 pb-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lilac md:px-7"
              >
                <div className="flex w-full items-end justify-between gap-4">
                  <div className="flex items-baseline gap-3 min-w-0">
                    <motion.span
                      className="text-xs tabular-nums shrink-0 opacity-40"
                      animate={{
                        color: isHovered ? onColor : "currentColor",
                        opacity: isHovered ? 0.5 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.span
                      className="font-semibold tracking-tight truncate"
                      style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
                      animate={{
                        color: isHovered ? onColor : "currentColor",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {item.description && (
                      <motion.span
                        className="text-sm text-white/70 truncate hidden sm:block"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -8,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isHovered ? 0.12 : 0,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        — {item.description}
                      </motion.span>
                    )}
                  </div>

                  {item.sublabel && (
                    <motion.span
                      className="text-xs tracking-widest uppercase shrink-0"
                      animate={{
                        color: isHovered
                          ? "rgba(255,255,255,0.55)"
                          : "currentColor",
                        opacity: isHovered ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.sublabel}
                    </motion.span>
                  )}
                </div>
              </button>
            </motion.div>

            <div className="w-full border-t border-current opacity-15" />
          </React.Fragment>
        );
      })}
    </div>
  );
}
