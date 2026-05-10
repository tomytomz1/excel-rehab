"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <SectionWrapper amount={0} className="py-8 lg:py-10 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 md:gap-8 items-center max-w-3xl mx-auto">
            {/* Left: thank-you, body text, and scan CTA label */}
            <div className="w-full min-w-0 flex flex-col items-stretch text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2 leading-tight">
                Thank you for letting us take care of you!
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-1 w-full">
                Your experience helps others.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-3 w-full">
                Scan the code to leave a Google Review—we appreciate it.
              </p>
              <p className="text-neutral-700 font-semibold text-sm uppercase tracking-wide w-full">
                Scan code to write a Google Review
              </p>
            </div>
            {/* Right: QR code and button centered together */}
            <div className="flex flex-col items-stretch justify-center gap-4 text-center w-full min-w-0">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white border border-neutral-200 shadow-sm shrink-0 mx-auto">
                <Image
                  src="/qr/Google%20Review%20QR%20Code.png"
                  alt="QR code to leave a Google Review for Excel Physical Medicine and Rehab"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </div>
              <a
                href="#"
                className={cn(
                  "w-full flex items-center justify-center rounded-lg bg-brand-green px-4 py-3 text-base whitespace-nowrap",
                  "text-white font-semibold hover:opacity-90 transition-opacity"
                )}
              >
                Leave Us a Review
              </a>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
