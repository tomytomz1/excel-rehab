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
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  getServiceBySlug,
  SERVICES,
} from "@/lib/data/services";
import { getConditionBySlug } from "@/lib/data/conditions";
import { SERVICE_TO_CONDITIONS } from "@/lib/data/service-condition-mapping";
import { SITE_NAME } from "@/lib/constants";
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

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | " + SITE_NAME };
  return {
    title: `${service.name} | ${SITE_NAME}`,
    description:
      service.description.replace("[PLACEHOLDER] ", "") ||
      `${service.name} at Excel Physical Medicine and Rehab in Novi, MI.`,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const conditionSlugs = SERVICE_TO_CONDITIONS[slug] ?? [];
  const conditions = conditionSlugs
    .map((s) => getConditionBySlug(s))
    .filter(Boolean);

  const Icon = ICON_MAP[service.icon] ?? Dumbbell;

  return (
    <div>
      <InnerPageHero
        title={service.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Icon className="h-12 w-12 text-brand-blue shrink-0" aria-hidden />
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight">
              Overview
            </h2>
          </div>
          <div className="prose prose-neutral max-w-[75ch] text-neutral-700 space-y-4 leading-relaxed">
            <p>
              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
                [PLACEHOLDER]
              </span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4 leading-tight">
            What to Expect
          </h3>
          <p className="text-neutral-700 leading-relaxed">
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
              [PLACEHOLDER]
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {conditions.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4 leading-tight">
                Conditions This Treats
              </h3>
              <div className="flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <Link
                    key={c!.slug}
                    href={`/conditions/${c!.slug}`}
                    className={cn(
                      "inline-flex items-center min-h-[44px] rounded-full bg-neutral-100 px-4 py-2.5 text-base font-medium text-neutral-800",
                      "hover:bg-brand-blue hover:text-white transition-colors",
                      "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                    )}
                  >
                    {c!.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper amount={0} className="py-12 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Ready to learn more? Schedule a consultation with our team.
          </p>
          <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
