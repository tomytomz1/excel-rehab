"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { DOCTOR } from "@/lib/data/doctor";

// Two board certifications independently corroborated by Corewell Health.
const trustText = [
  DOCTOR.certifications[0],
  DOCTOR.certifications[1],
  "Physician-led care in Novi, MI",
].join(" | ");

export function TrustBar() {
  return (
    <SectionWrapper className="bg-neutral-100 py-3 overflow-x-hidden w-full min-w-0">
      <p className="text-center text-sm sm:text-base text-neutral-600 max-w-7xl max-w-full mx-auto px-4 leading-relaxed sm:whitespace-nowrap sm:overflow-x-auto min-w-0 w-full">
        {trustText}
      </p>
    </SectionWrapper>
  );
}
