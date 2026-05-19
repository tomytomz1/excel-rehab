"use client";

import { useCallback, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Turnstile } from "@/components/shared/Turnstile";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  phone: z.string().min(1, "Phone is required").max(50),
  email: z.string().min(1, "Email is required").email("Invalid email").max(254),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening", "No Preference"]),
  reason: z.enum([
    "New Patient",
    "Follow-Up",
    "Second Opinion",
    "Other",
  ]),
  message: z.string().max(2000, "Message must be 2000 characters or less").optional(),
  website: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PREFERRED_TIME_OPTIONS = [
  "Morning",
  "Afternoon",
  "Evening",
  "No Preference",
] as const;

const REASON_OPTIONS = [
  "New Patient",
  "Follow-Up",
  "Second Opinion",
  "Other",
] as const;

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredTime: "No Preference",
      reason: "New Patient",
      website: "",
    },
  });

  const preferredTime = useWatch({
    control,
    name: "preferredTime",
    defaultValue: "No Preference",
  });
  const reason = useWatch({
    control,
    name: "reason",
    defaultValue: "New Patient",
  });

  const handleVerify = useCallback((token: string) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  }, []);

  const handleExpire = useCallback(() => {
    setCaptchaToken(null);
  }, []);

  const handleCaptchaError = useCallback(() => {
    setCaptchaToken(null);
    setCaptchaError("Verification failed. Please try again or call us directly.");
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    if (TURNSTILE_SITE_KEY && !captchaToken) {
      setCaptchaError("Please complete the verification challenge.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      if (response.status === 429) {
        setSubmitError(
          "Too many requests. Please wait a moment, then try again or call us directly."
        );
        return;
      }

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to send your message right now. Please call us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-lg font-semibold text-neutral-900">
          Thank you! We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-base font-medium text-neutral-700">
          Name <span className="text-red-600">*</span>
        </label>
        <Input
          id="name"
          autoComplete="name"
          {...register("name")}
          className={cn(errors.name && "border-red-500")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-base text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-base font-medium text-neutral-700">
          Phone <span className="text-red-600">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className={cn(errors.phone && "border-red-500")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-base text-red-600" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-base font-medium text-neutral-700">
          Email <span className="text-red-600">*</span>
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={cn(errors.email && "border-red-500")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-base text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="preferredTime" className="mb-1.5 block text-base font-medium text-neutral-700">
          Preferred Contact Time
        </label>
        <Select
          value={preferredTime}
          onValueChange={(v) =>
            setValue("preferredTime", v as ContactFormData["preferredTime"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger id="preferredTime" className="w-full">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {PREFERRED_TIME_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="reason" className="mb-1.5 block text-base font-medium text-neutral-700">
          Reason for Visit
        </label>
        <Select
          value={reason}
          onValueChange={(v) =>
            setValue("reason", v as ContactFormData["reason"], {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger id="reason" className="w-full">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {REASON_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-base font-medium text-neutral-700">
          Message <span className="text-neutral-500">(optional)</span>
        </label>
        <Textarea
          id="message"
          rows={4}
          maxLength={2000}
          {...register("message")}
          placeholder="Brief message or questions..."
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          aria-invalid={!!errors.message}
        />
        <p id="message-hint" className="mt-1 text-sm text-neutral-500">
          Do not describe symptoms or diagnoses. Max 2,000 characters.
        </p>
        {errors.message && (
          <p id="message-error" className="mt-1 text-base text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {TURNSTILE_SITE_KEY && (
        <div>
          <Turnstile
            siteKey={TURNSTILE_SITE_KEY}
            action="contact"
            onVerify={handleVerify}
            onExpire={handleExpire}
            onError={handleCaptchaError}
          />
          {captchaError && (
            <p className="mt-2 text-base text-red-600" role="alert">
              {captchaError}
            </p>
          )}
        </div>
      )}

      {submitError && (
        <p className="text-base text-red-600" role="alert">
          {submitError}
        </p>
      )}
      <Button
        type="submit"
        disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !captchaToken)}
        className="w-full bg-brand-green hover:bg-brand-green/90"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
