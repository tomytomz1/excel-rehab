import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getConditionBySlug,
  CONDITIONS,
} from "@/lib/data/conditions";
import { getServiceBySlug } from "@/lib/data/services";
import { CONDITION_TO_SERVICES } from "@/lib/data/service-condition-mapping";
import { SITE_NAME } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return { title: "Condition | " + SITE_NAME };
  return {
    title: `${condition.name} Treatment in Novi, MI | ${SITE_NAME}`,
    description: `${condition.name} treatment at Excel Physical Medicine and Rehab in Novi, MI.`,
  };
}

export default async function ConditionSlugPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) notFound();

  const serviceSlugs = CONDITION_TO_SERVICES[slug] ?? [];
  const services = serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <div>
      <InnerPageHero
        title={condition.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
          { label: condition.name },
        ]}
        variant="brand-blue"
      />

      {services.length > 0 && (
        <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-6 leading-tight">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s!.slug}
                href={`/services/${s!.slug}`}
                className="block outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-xl"
              >
                <Card className="h-full border-neutral-200 hover:border-brand-green hover:shadow-md transition-all">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1 leading-tight">
                      {s!.name}
                    </h3>
                    <span className="text-brand-blue font-medium text-base">
                      Learn more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        </SectionWrapper>
      )}

      <SectionWrapper amount={0} className="py-12 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Schedule an assessment with our team to create a personalized
            treatment plan.
          </p>
          <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90">
            <Link href="/contact">Schedule an Assessment</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
