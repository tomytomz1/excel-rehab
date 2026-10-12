"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SCHEDULING_URL } from "@/lib/constants";

const MEASUREMENT_ID = "G-7RE9VSZZ60";
const PUBLIC_HOSTS = new Set(["www.excel-rehab.com", "excel-rehab.com"]);

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/** Public page views and contact-link clicks; never reads patient forms. */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const previousPage = useRef<string | null>(null);

  useEffect(() => {
    if (!ready || !pathname || !PUBLIC_HOSTS.has(window.location.hostname)) return;

    const analyticsWindow = window as AnalyticsWindow;
    const pageLocation = window.location.origin + pathname;
    if (!analyticsWindow.gtag || previousPage.current === pageLocation) return;

    // Query strings and fragments can contain user-entered values.
    let referrer = previousPage.current ?? "";
    if (!referrer && document.referrer) {
      try {
        const source = new URL(document.referrer);
        referrer = source.origin + source.pathname;
      } catch {
        referrer = "";
      }
    }

    analyticsWindow.gtag("event", "page_view", {
      send_to: MEASUREMENT_ID,
      page_location: pageLocation,
      page_referrer: referrer,
      page_title: document.title,
    });
    previousPage.current = pageLocation;
  }, [pathname, ready]);

  useEffect(() => {
    if (!ready || !PUBLIC_HOSTS.has(window.location.hostname)) return;

    function trackContactLink(event: MouseEvent) {
      if (!PUBLIC_HOSTS.has(window.location.hostname)) return;
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      const href = link?.getAttribute("href");
      const eventName = href?.startsWith("tel:")
        ? "contact_phone_click"
        : href === SCHEDULING_URL
          ? "scheduling_link_click"
          : null;
      if (!eventName) return;

      // Count the action only, without link text, phone values or form contents.
      const analyticsWindow = window as AnalyticsWindow;
      analyticsWindow.gtag?.("event", eventName, {
        send_to: MEASUREMENT_ID,
        page_location: window.location.origin + window.location.pathname,
        page_referrer: "",
        page_title: document.title,
      });
    }

    document.addEventListener("click", trackContactLink);
    return () => document.removeEventListener("click", trackContactLink);
  }, [ready]);

  return (
    <Script
      id="excel-google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onReady={() => {
        if (!PUBLIC_HOSTS.has(window.location.hostname)) return;
        const analyticsWindow = window as AnalyticsWindow;
        analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
        analyticsWindow.gtag = function () {
          // Google tag commands use native Arguments objects, not plain arrays.
          // eslint-disable-next-line prefer-rest-params
          analyticsWindow.dataLayer?.push(arguments);
        };
        analyticsWindow.gtag("js", new Date());
        analyticsWindow.gtag("config", MEASUREMENT_ID, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          page_location: window.location.origin + window.location.pathname,
          page_referrer: "",
        });
        setReady(true);
      }}
    />
  );
}
