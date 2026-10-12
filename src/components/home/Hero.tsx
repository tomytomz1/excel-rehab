import Link from "next/link";
import Image from "next/image";
import { TAGLINES, PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

export function Hero() {
  return (
    <section
      className={cn(
        "relative min-h-[55vh] sm:min-h-[70vh] lg:min-h-screen flex flex-col justify-center",
        "bg-neutral-900 overflow-hidden"
      )}
      aria-label="Hero"
    >
      <Image
        src="/images/hero-medical-bg.jpg"
        alt="Medical and rehabilitation care background"
        fill
        className="object-cover"
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl text-left flex flex-col items-start">
          <div
            className="hero-rise text-white text-lg sm:text-xl font-semibold tracking-[0.12em] uppercase mb-5 space-y-2"
            style={{ animationDelay: "0ms" }}
          >
            <p>PATIENT CENTERED</p>
            <p>FUNCTION FOCUSED</p>
            <p>INTERDISCIPLINARY CARE</p>
          </div>
          {/* One H1 that carries both the brand tagline and the primary
              keyword/location ("physical medicine & rehabilitation, Novi").
              The second line keeps the original small-caps styling. */}
          <h1 className="mb-5">
            <span
              className="hero-rise block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 uppercase"
              style={{ animationDelay: "120ms" }}
            >
              {TAGLINES.hero}
            </span>
            <span
              className="hero-rise block text-white/90 text-sm sm:text-base font-medium tracking-[0.18em] uppercase"
              style={{ animationDelay: "240ms" }}
            >
              Physical Medicine &amp; Rehabilitation in Novi, Michigan
            </span>
          </h1>
          <p
            className="hero-rise text-white/90 text-base sm:text-lg font-normal max-w-xl mb-8"
            style={{ animationDelay: "360ms" }}
          >
            Focused on the prevention, diagnosis, and non-operative management
            for patients with disorders associated with disability.
          </p>
          <div
            className="hero-rise flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href={`tel:${PHONE.replace(/\./g, "")}`}
              className={cn(
                "inline-flex items-center justify-center min-h-12 rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-neutral-900",
                "hover:opacity-90 transition-opacity",
                FOCUS_RING
              )}
            >
              CALL NOW
            </a>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center min-h-12 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white",
                "hover:bg-white/10 transition-colors",
                FOCUS_RING
              )}
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
