"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE, SITE_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD_PX = 80;

const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD_PX);
  });

  // When drawer opens, focus close button; when it closes, return focus to menu button.
  const prevMobileOpen = useRef(false);
  useEffect(() => {
    if (mobileOpen) {
      closeButtonRef.current?.focus();
    } else if (prevMobileOpen.current) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }
    prevMobileOpen.current = mobileOpen;
  }, [mobileOpen]);

  // Trap focus inside drawer when open (Tab / Shift+Tab).
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return;
    const el = drawerRef.current;
    const focusables = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Homepage: transparent until scrolled 80px, then solid. Inner pages: always solid.
  const isSolid = isHomePage ? scrolled : true;
  const linkClass = isSolid
    ? "text-neutral-900 hover:text-brand-blue"
    : "text-white hover:text-white/90";
  const logoClass = isSolid ? "" : "brightness-0 invert";

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full",
          "flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-16 lg:h-[80px]"
        )}
        initial={false}
        animate={{
          backgroundColor: isSolid ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          boxShadow: isSolid ? "0 4px 6px rgba(0,0,0,0.07)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-1 items-center justify-between max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link
            href="/"
            className={cn("shrink-0", FOCUS_RING)}
            aria-label={`${SITE_NAME} home`}
          >
            <Image
              src="/images/logo-color.png"
              alt={`${SITE_NAME} logo`}
              width={220}
              height={54}
              className={cn(
                "w-40 h-auto object-contain lg:w-[210px]",
                logoClass
              )}
              priority
            />
          </Link>

          {/* Desktop nav center */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center" aria-label="Main">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={cn(
                  "text-base font-medium transition-colors rounded-md py-2 min-h-[44px] flex items-center",
                  linkClass,
                  FOCUS_RING
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center min-h-12 rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity",
                FOCUS_RING
              )}
            >
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              linkClass,
              FOCUS_RING
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <span className="font-semibold text-neutral-900">{SITE_NAME}</span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className={cn(
                    "p-2 rounded-lg text-neutral-600 hover:bg-neutral-100",
                    FOCUS_RING
                  )}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1" aria-label="Main">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={cn(
                      "px-4 py-3 min-h-[44px] flex items-center rounded-lg text-neutral-900 text-base font-medium hover:bg-neutral-100",
                      FOCUS_RING
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 mt-auto border-t border-neutral-100 space-y-3">
                <a
                  href={`tel:${PHONE.replace(/\./g, "")}`}
                  className={cn(
                    "flex items-center justify-center w-full min-h-12 rounded-lg bg-brand-green py-3 text-base font-semibold text-white hover:opacity-90",
                    FOCUS_RING
                  )}
                >
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center justify-center w-full min-h-12 rounded-lg border-2 border-brand-green py-3 text-base font-semibold text-brand-green hover:bg-brand-green/5",
                    FOCUS_RING
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  Schedule Appointment
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
