import type { Metadata } from "next";
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
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SERVICES } from "@/lib/data/services";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Our Services | ${SITE_NAME}`,
  description:
    "Physical therapy, joint injections, epidural steroid injections, PRP, regenerative medicine, therapeutic Botox, and more. Comprehensive PM&R care in Novi, MI.",
};

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
  return <Icon className="h-10 w-10 text-brand-blue shrink-0" aria-hidden />;
}

/** [PLACEHOLDER] 2-3 sentences for hub card description */
const CARD_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export default function ServicesPage() {
  return (
    <div>
      <InnerPageHero
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "group flex flex-col gap-4 p-6 rounded-xl bg-neutral-100/50 border border-neutral-200/80",
                  "hover:border-brand-green hover:shadow-lg transition-all duration-200",
                  "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                )}
              >
                <div className="flex items-start gap-4">
                  <ServiceIcon name={service.icon} />
                  <h2 className="text-2xl font-semibold text-neutral-900 group-hover:text-brand-blue transition-colors leading-tight">
                    {service.name}
                  </h2>
                </div>
                <p className="text-neutral-600 text-base leading-relaxed flex-1">
                  [PLACEHOLDER] {CARD_DESCRIPTION}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-blue font-semibold text-base group-hover:underline">
                  Learn More
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
