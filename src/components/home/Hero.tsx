"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TAGLINES, PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

const container = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const visibleState = { opacity: 1, y: 0 };

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const noAnimation = prefersReducedMotion === true;

  return (
    <section
      className={cn(
        "relative min-h-[55vh] sm:min-h-[70vh] lg:min-h-screen flex flex-col justify-center",
        "bg-neutral-900 overflow-hidden"
      )}
      aria-label="Hero"
    >
      <Image
        src="/images/hero-medical-bg.jpg"
        alt="Medical and rehabilitation care background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <motion.div
          className={cn(
            "max-w-2xl",
            "text-left md:text-left",
            "flex flex-col items-start"
          )}
          variants={noAnimation ? undefined : container}
          initial={noAnimation ? visibleState : "hidden"}
          animate={noAnimation ? visibleState : "visible"}
        >
          <motion.p
            variants={noAnimation ? undefined : item}
            initial={noAnimation ? visibleState : undefined}
            animate={noAnimation ? visibleState : undefined}
            className="text-white/90 text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-4"
          >
            PHYSICAL MEDICINE & REHABILITATION IN NOVI, MICHIGAN
          </motion.p>
          <motion.h1
            variants={noAnimation ? undefined : item}
            initial={noAnimation ? visibleState : undefined}
            animate={noAnimation ? visibleState : undefined}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {TAGLINES.hero}
          </motion.h1>
          <motion.p
            variants={noAnimation ? undefined : item}
            initial={noAnimation ? visibleState : undefined}
            animate={noAnimation ? visibleState : undefined}
            className="text-white/80 text-base sm:text-lg font-normal max-w-xl mb-8"
          >
            Patient centered, function focused, interdisciplinary care. Focused
            on the prevention, diagnosis, and non-operative management of pain
            and disability.
          </motion.p>
          <motion.div
            variants={noAnimation ? undefined : item}
            initial={noAnimation ? visibleState : undefined}
            animate={noAnimation ? visibleState : undefined}
            className={cn(
              "flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            )}
          >
            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex items-center justify-center min-h-12 rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-white",
                "hover:opacity-90 transition-opacity",
                FOCUS_RING
              )}
            >
              Schedule an Appointment
            </Link>
            <a
              href={`tel:${PHONE.replace(/\./g, "")}`}
              className={cn(
                "sm:hidden inline-flex items-center justify-center min-h-12 rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-white",
                "hover:opacity-90 transition-opacity",
                FOCUS_RING
              )}
            >
              Call Now
            </a>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center min-h-12 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white",
                "hover:bg-white/10 transition-colors",
                FOCUS_RING
              )}
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
