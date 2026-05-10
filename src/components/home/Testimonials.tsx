"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PLACEHOLDER_CARDS = [
  {
    quote:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane D.",
    rating: 5,
  },
  {
    quote:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: "John S.",
    rating: 5,
  },
  {
    quote:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    author: "Maria L.",
    rating: 5,
  },
] as const;

export function Testimonials() {
  return (
    <>
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 text-center mb-4 leading-tight">
            Patient Testimonials
          </h2>
          <p className="text-center text-neutral-600 text-base mb-10 leading-relaxed">
            [PLACEHOLDER — Awaiting real patient testimonials]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLACEHOLDER_CARDS.map((card) => (
              <article
                key={card.author}
                className={cn(
                  "rounded-xl bg-neutral-100 p-6 border border-neutral-200",
                  "flex flex-col"
                )}
              >
                <div className="flex gap-1 mb-3" aria-hidden>
                  {Array.from({ length: card.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-neutral-700 flex-1 mb-4">&ldquo;{card.quote}&rdquo;</p>
                <p className="text-base font-medium text-neutral-600">— {card.author}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

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
    </>
  );
}
