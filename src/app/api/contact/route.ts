import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().email().max(254),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening", "No Preference"]),
  reason: z.enum(["New Patient", "Follow-Up", "Second Opinion", "Other"]),
  message: z.string().max(2000).optional(),
  // Honeypot: any non-empty value indicates a bot. Validated below, not by schema,
  // so that bots receive a 200 response and don't learn what tripped them.
  website: z.string().max(1000).optional(),
  // Cloudflare Turnstile token from the client widget. Required when configured.
  captchaToken: z.string().min(1).max(2048).optional(),
});

const PRIMARY_RECIPIENT = "Kristina@maplemanorrehab.com";
const CC_RECIPIENTS = [
  "ChrisN@maplemanorrehab.com",
  "marcus@maplemanorrehab.com",
  "apetere@gmail.com",
] as const;

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip && ip !== "unknown") {
    body.append("remoteip", ip);
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5_000);
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  // Require JSON content-type to defuse simple cross-origin form submissions.
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported content type." },
      { status: 415 }
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later or call us directly." },
      { status: 429 }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid contact form data." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots think they succeeded.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!parsed.data.captchaToken) {
      return NextResponse.json(
        { error: "Captcha verification required." },
        { status: 400 }
      );
    }
    const captchaOk = await verifyTurnstile(parsed.data.captchaToken, ip);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Captcha verification failed." },
        { status: 400 }
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Contact form email is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;
  const message = data.message?.trim() || "No message provided.";

  const text = [
    "New Excel PM&R contact form submission",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Preferred Contact Time: ${data.preferredTime}`,
    `Reason for Visit: ${data.reason}`,
    "",
    "Message:",
    message,
    "",
    "HIPAA note: This form is for scheduling inquiries only.",
  ].join("\n");

  const html = `
    <h2>New Excel PM&amp;R contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Preferred Contact Time:</strong> ${escapeHtml(data.preferredTime)}</p>
    <p><strong>Reason for Visit:</strong> ${escapeHtml(data.reason)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p><em>HIPAA note: This form is for scheduling inquiries only.</em></p>
  `;

  const result = await resend.emails.send({
    from,
    to: PRIMARY_RECIPIENT,
    cc: [...CC_RECIPIENTS],
    replyTo: data.email,
    subject: `Excel PM&R Contact Form: ${data.reason}`,
    text,
    html,
  });

  if (result.error) {
    return NextResponse.json({ error: "Email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
