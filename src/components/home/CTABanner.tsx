"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SITE_ADDRESS, PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16 bg-brand-blue">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-[1.65rem] sm:text-[2.35rem] lg:text-[2.8rem] font-bold mb-4 leading-tight">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Schedule your comprehensive physiatric assessment today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5",
              "text-white font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
            )}
          >
            Schedule Appointment
          </Link>
          <a
            href={`tel:${PHONE.replace(/\./g, "")}`}
            className={cn(
              "inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3.5",
              "text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            )}
          >
            Call {PHONE}
          </a>
        </div>
        <p className="text-white/80 text-base">{SITE_ADDRESS.full}</p>
      </motion.div>
    </SectionWrapper>
  );
}
