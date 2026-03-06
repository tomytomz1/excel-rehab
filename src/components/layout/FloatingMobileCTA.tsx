"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { PHONE } from "@/lib/constants";

const SCROLL_THRESHOLD_PX = 600;

export function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > SCROLL_THRESHOLD_PX);
  });

  return (
    <motion.div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden",
        "flex items-stretch gap-0",
        "pb-[env(safe-area-inset-bottom)]"
      )}
      initial={{ y: "100%" }}
      animate={{ y: visible ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${PHONE.replace(/\./g, "")}`}
        className="flex-1 flex items-center justify-center min-h-12 bg-brand-blue text-white py-4 text-base font-semibold hover:opacity-90 transition-opacity"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center min-h-12 bg-brand-green text-white py-4 text-base font-semibold hover:opacity-90 transition-opacity"
      >
        Schedule
      </Link>
    </motion.div>
  );
}
