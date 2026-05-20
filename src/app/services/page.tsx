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
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  path: "/services",
  title: `Our Services | ${SITE_NAME}`,
  description:
    "Physical therapy, joint injections, epidural steroid injections, PRP, regenerative medicine, therapeutic Botox, and more. Comprehensive PM&R care in Novi, MI.",
});

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

export default function ServicesPage() {
  return (
    <div>
      <InnerPageHero
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className={cn(
                  "flex items-start gap-4 p-6 lg:p-8 rounded-xl bg-white",
                  "border border-neutral-200/80 shadow-sm"
                )}
              >
                <ServiceIcon name={service.icon} />
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-tight">
                  {service.name}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
