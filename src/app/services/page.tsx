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
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SERVICES } from "@/lib/data/services";
import { SERVICE_CONTENT } from "@/lib/data/service-content";
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
        title="Pain Management & Rehabilitation Services in Novi, MI"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-10">
            Non-operative{" "}
            <Link
              href="/pain-management-novi-mi"
              className="text-brand-blue font-semibold hover:underline"
            >
              pain management in Novi
            </Link>
            , rehabilitation and{" "}
            <Link
              href="/auto-accident-work-injury-novi-mi"
              className="text-brand-blue font-semibold hover:underline"
            >
              care for auto accident and work injuries
            </Link>
            , led by a physician board certified in Physical Medicine and
            Rehabilitation and in Pain Medicine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => {
              const cardClass = cn(
                "flex items-start gap-4 p-6 lg:p-8 rounded-xl bg-white",
                "border border-neutral-200/80 shadow-sm"
              );
              const summary =
                SERVICE_CONTENT[service.slug]?.summary ??
                (service.slug === "on-site-physical-therapy"
                  ? "Physical therapy on-site at our Novi office, coordinated with your physician's treatment plan."
                  : undefined);
              const inner = (
                <>
                  <ServiceIcon name={service.icon} />
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-tight">
                      {service.name}
                    </h2>
                    {summary && (
                      <p className="mt-2 text-base text-neutral-600 leading-relaxed">
                        {summary}
                      </p>
                    )}
                    {service.href && (
                      <span className="mt-3 inline-block text-brand-blue font-semibold">
                        Learn more <span aria-hidden>→</span>
                      </span>
                    )}
                  </div>
                </>
              );

              if (service.href) {
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className={cn(cardClass, "transition-shadow hover:shadow-md")}
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <article key={service.slug} className={cardClass}>
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
