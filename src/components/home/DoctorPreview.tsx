"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { DOCTOR } from "@/lib/data/doctor";
import { cn } from "@/lib/utils";

const QUOTE =
  "We are committed to providing the highest quality care to help patients achieve their functional goals. At Excel PM&R, we put the needs of the patient first.";

export function DoctorPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsMobile(!mq.matches);
    const handler = () => setIsMobile(!mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const imageVisible = inView || isMobile;
  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            animate={imageVisible && !reduced ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-square max-w-xl sm:max-w-2xl mx-auto lg:mx-0 rounded-xl overflow-hidden bg-neutral-300 min-h-[280px] w-full"
          >
            {mounted ? (
              <Image
                src="/images/Dr%20Augustus%20P%20Evangelista.jpg"
                alt={`${DOCTOR.name}, ${DOCTOR.degrees.join(", ")}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 672px, 576px"
                priority={false}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <span className="text-neutral-500 text-base">Loading...</span>
              </div>
            )}
          </motion.div>
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 24 }}
            animate={inView && !reduced ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight">
              Meet Dr. Evangelista
            </h2>
            <p className="text-lg font-semibold text-neutral-900">
              {DOCTOR.name}, {DOCTOR.degrees.join(", ")}
            </p>
            <p className="text-neutral-700">{DOCTOR.title}</p>
            <ul className="space-y-1 text-neutral-700">
              {DOCTOR.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-base font-medium text-neutral-600 mb-2">
                Training &amp; Education
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md" aria-label="Training and education">
                {DOCTOR.training.map((institution) => (
                  <div
                    key={institution.name}
                    className="flex flex-col items-center gap-2 rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-700"
                  >
                    <div className="relative w-14 h-14 shrink-0">
                      <Image
                        src={institution.logo}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="56px"
                      />
                    </div>
                    <span className="text-center">{institution.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-neutral-700 pt-2">{QUOTE}</p>
            <div className="pt-4">
              <p className="text-base font-medium text-neutral-600 mb-2">
                Hospital affiliations
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Hospital affiliations">
                {DOCTOR.affiliations.map((aff) => (
                  <li
                    key={aff}
                    className="inline-flex items-center gap-1.5 text-base text-neutral-700"
                  >
                    <Building2 className="h-4 w-4 text-brand-blue shrink-0" aria-hidden />
                    <span>{aff}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center gap-1 mt-6 text-brand-blue font-semibold hover:underline"
              )}
            >
              Learn More About Dr. Evangelista
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
