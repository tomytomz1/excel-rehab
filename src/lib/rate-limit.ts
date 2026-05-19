/**
 * Lightweight in-process rate limiter.
 *
 * Caveats:
 * - This Map lives in per-instance memory. On serverless platforms (Vercel)
 *   each function instance has its own counter, so this only provides
 *   best-effort throttling. Cloudflare Turnstile and the honeypot do the
 *   real bot/abuse mitigation; this is a small extra brake.
 * - IP detection assumes the platform sets `x-forwarded-for` correctly.
 *   We always read the LEFT-MOST address (the original client) and validate
 *   that it looks like an IP. Attackers can still spoof this header when the
 *   app is not behind a trusted proxy, so do not rely on this for security.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 10_000;

const hitsByIp = new Map<string, number[]>();

const IPV4_RE = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d)$/;
const IPV6_RE = /^[0-9a-f:]+$/i;

function sanitizeIp(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().replace(/^\[|\]$/g, "");
  if (!trimmed) return null;
  if (IPV4_RE.test(trimmed)) return trimmed;
  if (trimmed.includes(":") && IPV6_RE.test(trimmed)) return trimmed.toLowerCase();
  return null;
}

export function getClientIp(request: Request): string {
  // Prefer platform-specific headers when present.
  const candidates = [
    request.headers.get("cf-connecting-ip"),
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for")?.split(",")[0],
  ];
  for (const candidate of candidates) {
    const ip = sanitizeIp(candidate);
    if (ip) return ip;
  }
  return "unknown";
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hitsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hitsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  hitsByIp.set(ip, recent);

  // Naive cap so memory cannot grow unbounded on a long-lived instance.
  if (hitsByIp.size > MAX_TRACKED_IPS) {
    const cutoff = now - WINDOW_MS;
    for (const [key, hits] of hitsByIp) {
      const live = hits.filter((t) => t > cutoff);
      if (live.length === 0) {
        hitsByIp.delete(key);
      } else {
        hitsByIp.set(key, live);
      }
    }
  }

  return false;
}
