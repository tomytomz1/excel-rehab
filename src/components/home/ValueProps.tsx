"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

const BROCHURE_COPY =
  "At Excel PM&R, our goal is to decrease our patients' pain, maximize function, and improve quality of life.";

const CARDS = [
  {
    image: "/images/shoulder-exam.jpg",
    alt: "Doctor examining patient's shoulder",
    title: "Comprehensive Assessment",
    description:
      BROCHURE_COPY +
      " [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/caregiver-patient.jpg",
    alt: "Caregiver with patient",
    title: "Patient-Centered Treatment",
    description:
      BROCHURE_COPY +
      " [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/knee-therapy.jpg",
    alt: "Knee therapy and rehabilitation",
    title: "Functional Recovery",
    description:
      BROCHURE_COPY +
      " [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as const;

function Card({
  image,
  alt,
  title,
  description,
  index,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={inView && !reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.5, 0.8, 0.4, 1],
      }}
      className={cn(
        "rounded-xl bg-white shadow-sm overflow-hidden",
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2 leading-tight">{title}</h3>
        <p className="text-neutral-600 text-base leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}

export function ValueProps() {
  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 text-center mb-12 lg:mb-16 leading-tight">
          Comprehensive Care, One Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <Card key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
