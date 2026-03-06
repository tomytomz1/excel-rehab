import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  /** brand-blue or neutral-900 overlay. Default: brand-blue */
  variant?: "brand-blue" | "neutral-900";
  className?: string;
}

/** Brand blue at 85% opacity for overlay */
const BRAND_BLUE_OVERLAY = "rgba(26, 93, 170, 0.85)";
const NEUTRAL_900_OVERLAY = "rgba(26, 26, 46, 0.85)";

/**
 * Compact inner page header: hero background image with overlay, breadcrumb, title.
 * ~200px tall, branded page header (not a full hero).
 */
export function InnerPageHero({
  title,
  breadcrumbs,
  variant = "brand-blue",
  className,
}: InnerPageHeroProps) {
  const overlayColor =
    variant === "brand-blue" ? BRAND_BLUE_OVERLAY : NEUTRAL_900_OVERLAY;

  return (
    <section
      className={cn(
        "relative flex flex-col justify-center py-6 lg:py-8 min-h-[120px] overflow-hidden",
        className
      )}
      aria-label="Page header"
    >
      <Image
        src="/images/hero-medical-bg.jpg"
        alt="Page header background"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <nav aria-label="Breadcrumb" className="mb-2">
          <ol className="flex flex-wrap items-center gap-1.5 text-base text-white/90">
            {breadcrumbs.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-white/70"
                    aria-hidden
                  />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
