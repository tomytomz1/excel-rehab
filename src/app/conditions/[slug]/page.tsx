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

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-6 leading-tight">
            Overview
          </h2>
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
          </div>

          <h3 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4 leading-tight">
            Symptoms
          </h3>
          <p className="text-neutral-700 leading-relaxed">
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
              [PLACEHOLDER]
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {services.length > 0 && (
            <>
              <h3 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4 leading-tight">
                How We Treat This
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <Link
                    key={s!.slug}
                    href={`/services/${s!.slug}`}
                    className="block outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-xl"
                  >
                    <Card className="h-full border-neutral-200 hover:border-brand-green hover:shadow-md transition-all">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-1 leading-tight">
                          {s!.name}
                        </h4>
                        <span className="text-brand-blue font-medium text-base">
                          Learn more →
                        </span>
                      </CardContent>
                    </Card>
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
