"use client";

import { useEffect, useId, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          "timeout-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
          action?: string;
          appearance?: "always" | "execute" | "interaction-only";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

type TurnstileProps = {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  action?: string;
  theme?: "light" | "dark" | "auto";
  className?: string;
};

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit";

/**
 * Cloudflare Turnstile CAPTCHA widget.
 *
 * Renders explicitly via the Turnstile JS API so we can manage lifecycle in React.
 * The verify token must be sent to the server and validated via siteverify.
 */
export function Turnstile({
  siteKey,
  onVerify,
  onExpire,
  onError,
  action,
  theme = "auto",
  className,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const id = useId();

  // Keep latest callbacks in refs so we don't re-render the widget on prop changes.
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    let cancelled = false;

    const tryRender = () => {
      if (cancelled) return;
      const turnstile = window.turnstile;
      if (!turnstile || !containerRef.current) {
        return;
      }
      if (widgetIdRef.current !== null) {
        return;
      }
      try {
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action,
          theme,
          callback: (token: string) => onVerifyRef.current(token),
          "expired-callback": () => onExpireRef.current?.(),
          "error-callback": () => onErrorRef.current?.(),
          "timeout-callback": () => onExpireRef.current?.(),
        });
      } catch {
        onErrorRef.current?.();
      }
    };

    if (window.turnstile) {
      tryRender();
    } else {
      const previous = window.onloadTurnstileCallback;
      window.onloadTurnstileCallback = () => {
        previous?.();
        tryRender();
      };
    }

    return () => {
      cancelled = true;
      const turnstile = window.turnstile;
      const widgetId = widgetIdRef.current;
      if (turnstile && widgetId !== null) {
        try {
          turnstile.remove(widgetId);
        } catch {
          // ignore
        }
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, action, theme]);

  return (
    <>
      <Script src={SCRIPT_SRC} strategy="afterInteractive" async defer />
      <div
        id={`turnstile-${id}`}
        ref={containerRef}
        className={className}
        aria-label="Verification challenge"
      />
    </>
  );
}
