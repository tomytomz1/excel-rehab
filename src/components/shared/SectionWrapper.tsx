"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Viewport amount (0-1) to trigger animation. Default 0.2 */
  amount?: number;
  /** Delay before animation starts (seconds). Default 0 */
  delay?: number;
}

/**
 * Reusable scroll-triggered wrapper: fade in + slide up 30px.
 * Spec: 0.6s duration, easeOut, useInView (once).
 * Respects prefers-reduced-motion (no animation when set).
 */
export function SectionWrapper({
  children,
  className,
  amount = 0.2,
  delay = 0,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 30 };
  const animate = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0 };
  const transition = prefersReducedMotion
    ? undefined
    : { duration: 0.4, ease: "easeOut" as const, delay };

  return (
    <motion.div
      initial={initial}
      whileInView={animate ?? initial}
      viewport={{ once: true, amount }}
      transition={transition}
      className={cn("min-w-0", className)}
    >
      {children}
    </motion.div>
  );
}
