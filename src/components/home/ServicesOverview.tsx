"use client";

import Link from "next/link";
import {
  Dumbbell,
  Syringe,
  Target,
  Pill,
  CircleDot,
  Droplets,
  ScanSearch,
  Sparkles,
  HeartPulse,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SERVICES } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Syringe,
  Target,
  Pill,
  CircleDot,
  Droplets,
  ScanSearch,
  Sparkles,
  HeartPulse,
  Scale,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? Dumbbell;
  return <Icon className="h-8 w-8 text-brand-blue shrink-0" aria-hidden />;
}

export function ServicesOverview() {
  return (
    <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 text-center mb-12 leading-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={cn(
                "group flex gap-4 p-5 rounded-xl bg-neutral-100/50 border-l-4 border-transparent",
                "hover:border-brand-green hover:bg-neutral-100 transition-all duration-200"
              )}
            >
              <ServiceIcon name={service.icon} />
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-1 group-hover:text-brand-blue transition-colors leading-tight">
                  {service.name}
                </h3>
                <p className="text-base text-neutral-600 line-clamp-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:underline"
          >
            View All Services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
