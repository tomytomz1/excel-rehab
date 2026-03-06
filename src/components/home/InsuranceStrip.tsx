"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ACCEPTED_INSURANCE } from "@/lib/data/insurance";
import { PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function InsuranceStrip() {
  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-8 leading-tight">
          We Accept Most Major Insurance Plans
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {ACCEPTED_INSURANCE.map((payor) => (
            <span
              key={payor}
              className={cn(
                "inline-flex items-center min-h-[44px] px-4 py-2.5 rounded-full text-base font-medium",
                "bg-white text-neutral-700 border border-neutral-200 shadow-sm"
              )}
            >
              {payor}
            </span>
          ))}
        </div>
        <p className="text-neutral-600 text-base leading-relaxed">
          Not sure if we accept your insurance? Give us a call at{" "}
          <a
            href={`tel:${PHONE.replace(/\./g, "")}`}
            className="font-semibold text-brand-blue hover:underline"
          >
            {PHONE}
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
