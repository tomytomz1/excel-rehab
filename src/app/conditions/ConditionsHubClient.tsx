"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CONDITIONS } from "@/lib/data/conditions";

export function ConditionsHubClient() {
  return (
    <SectionWrapper amount={0} className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-8">
          At Excel Rehab, we provide a Comprehensive Physiatric Assessment to
          determine the best course of action for individuals with the following
          conditions:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 text-neutral-900">
          {CONDITIONS.map((condition) => (
            <li key={condition.slug} className="text-lg leading-relaxed">
              {condition.name}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
