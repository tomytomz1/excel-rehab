import Link from "next/link";
import Image from "next/image";
import {
  SITE_NAME,
  SITE_ADDRESS,
  PHONE,
  FAX,
  TAGLINES,
} from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { AREAS_WE_SERVE } from "@/lib/data/locations";
import { cn } from "@/lib/utils";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Accepted Insurances", href: "/patient-resources" },
  { label: "Contact", href: "/contact" },
] as const;

const FIRST_SIX_SERVICES = SERVICES.slice(0, 6);

export function Footer() {
  return (
    <footer
      className={cn(
        "bg-neutral-900 text-white",
        "md:pb-0",
        "pb-[calc(4rem+env(safe-area-inset-bottom,0px))]"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Logo + tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label={`${SITE_NAME} home`}>
              <Image
                src="/images/logo-color.png"
                alt={`${SITE_NAME} logo`}
                width={200}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-base text-neutral-300 max-w-xs">
              {TAGLINES.primary}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-300 hover:text-white text-base transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (first 6) */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {FIRST_SIX_SERVICES.map(({ name, slug, href }) =>
                href ? (
                  <li key={slug}>
                    <Link
                      href={href}
                      className="text-neutral-300 hover:text-white text-base transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ) : (
                  <li key={slug} className="text-neutral-300 text-base">
                    {name}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Areas We Serve */}
          <div>
            <h3 className="font-semibold text-white mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {AREAS_WE_SERVE.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-300 hover:text-white text-base transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-base text-neutral-300">
              <p>{SITE_ADDRESS.full}</p>
              <p>
                <a
                  href={`tel:${PHONE.replace(/\./g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </p>
              <p>Fax: {FAX}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={cn(
          "border-t border-neutral-800 py-6 px-4 sm:px-6 lg:px-8",
          "flex flex-col items-center justify-center gap-3 text-base text-neutral-500 text-center"
        )}
      >
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Information on this website is for general purposes only and is not
          medical advice. For emergencies, call 911. Do not use the contact form
          for urgent medical situations.
        </p>
        <p>© 2026 {SITE_NAME}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/hipaa-notice" className="hover:text-neutral-300 transition-colors">
            HIPAA Notice
          </Link>
          <Link href="/accessibility" className="hover:text-neutral-300 transition-colors">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
