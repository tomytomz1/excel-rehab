"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <SectionWrapper amount={0} className="py-8 lg:py-10 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 md:gap-8 items-center max-w-3xl mx-auto">
          <div className="w-full min-w-0 flex flex-col items-stretch text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2 leading-tight">
              Thank you for letting us take care of you!
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed mb-1 w-full">
              Your experience helps others.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-3 w-full">
              Scan the code or tap below to leave a Google Review{"\u2014"}we
              appreciate it.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-brand-green px-6 py-3",
                "text-neutral-900 font-semibold hover:opacity-90 transition-opacity",
                "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              )}
            >
              Leave Us a Review
            </a>
          </div>
          <div className="flex flex-col items-stretch justify-center text-center w-full min-w-0">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-sm shrink-0 mx-auto">
              <Image
                src="/qr/Google%20Review%20QR%20Code.png"
                alt="QR code to leave a Google Review for Excel Physical Medicine and Rehab"
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 144px, 160px"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
