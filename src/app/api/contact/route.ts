import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening", "No Preference"]),
  reason: z.enum(["New Patient", "Follow-Up", "Second Opinion", "Other"]),
  message: z.string().optional(),
});

const PRIMARY_RECIPIENT = "Kristina@maplemanorrehab.com";
const CC_RECIPIENTS = [
  "ChrisN@maplemanorrehab.com",
  "marcus@maplemanorrehab.com",
  "apetere@gmail.com",
] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid contact form data." }, { status: 400 });
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
