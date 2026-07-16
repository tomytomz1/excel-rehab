"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity,
  Bone,
  Brain,
  Hand,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  CONDITION_CATEGORIES,
  getConditionsByCategory,
  type ConditionCategory,
} from "@/lib/data/conditions";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<ConditionCategory, LucideIcon> = {
  "Spine & Back": Bone,
  Injuries: Activity,
  "Joint & Extremity": Hand,
  Neurological: Brain,
};

function CategoryCard({
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
  const Icon = CATEGORY_ICONS[category];

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={inView && !reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8",
        "h-full"
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10"
          aria-hidden
        >
          <Icon className="h-5 w-5 text-brand-blue" />
        </div>
        <h2 className="text-lg font-semibold text-neutral-900 leading-tight">
          {category}
        </h2>
      </div>
      <ul className="space-y-3" aria-label={category}>
        {conditions.map((condition) => (
          <li
            key={condition.slug}
            className="flex items-start gap-3 text-base text-neutral-800 leading-relaxed"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
              aria-hidden
            />
            <span>{condition.name}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function ConditionsHubClient() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  return (
    <SectionWrapper amount={0} className="py-10 lg:py-14 bg-neutral-100">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-10">
          At Excel Rehab, we provide a Comprehensive Physiatric Assessment to
          determine the best course of action for individuals with the following
          conditions:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {CONDITION_CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category}
              category={category}
              index={index}
              inView={inView}
              reduced={reduced}
            />
          ))}
        </div>
        <p className="mt-10 text-lg text-neutral-700 leading-relaxed">
          <Link
            href="/physical-therapy-novi-mi"
            className="text-brand-blue font-semibold hover:underline"
          >
            Learn more about on-site physical therapy in Novi.
          </Link>
        </p>
      </div>
    </SectionWrapper>
  );
}
