"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  CONDITION_CATEGORIES,
  getConditionsByCategory,
  type ConditionCategory,
} from "@/lib/data/conditions";
import { cn } from "@/lib/utils";

function CategoryBlock({
  category,
  index,
  inView,
  reduced,
}: {
  category: ConditionCategory;
  index: number;
  inView: boolean;
  reduced: boolean | null;
}) {
  const conditions = getConditionsByCategory(category);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={inView && !reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="space-y-3"
    >
      <h3 className="text-base font-semibold text-neutral-600 uppercase tracking-wide leading-tight">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {conditions.map((cond, i) => (
          <motion.li
            key={cond.slug}
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            animate={inView && !reduced ? { opacity: 1, scale: 1 } : undefined}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + i * 0.03,
              ease: "easeOut",
            }}
          >
            <Link
              href={`/conditions/${cond.slug}`}
              className={cn(
                "inline-flex items-center min-h-[44px] px-4 py-2.5 rounded-full text-base font-medium",
                "border-2 border-brand-blue text-brand-blue bg-transparent",
                "hover:bg-brand-blue hover:text-white transition-colors duration-200"
              )}
            >
              {cond.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ConditionsCloud() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 text-center mb-12 leading-tight">
          Conditions We Treat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {CONDITION_CATEGORIES.map((category, index) => (
            <CategoryBlock
              key={category}
              category={category}
              index={index}
              inView={inView}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
