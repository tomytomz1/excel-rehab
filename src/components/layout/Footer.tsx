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
import { cn } from "@/lib/utils";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
            <p className="text-base text-neutral-400 max-w-xs">
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
                    className="text-neutral-400 hover:text-white text-base transition-colors"
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
              {FIRST_SIX_SERVICES.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="text-neutral-400 hover:text-white text-base transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-base text-neutral-400">
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
        <p>© 2026 {SITE_NAME}. All rights reserved.</p>
        <div className="flex items-center justify-center gap-6">
          <Link href="#" className="hover:text-neutral-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-neutral-400 transition-colors">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
