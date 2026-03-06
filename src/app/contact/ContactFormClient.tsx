"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening", "No Preference"]),
  reason: z.enum([
    "New Patient",
    "Follow-Up",
    "Second Opinion",
    "Other",
  ]),
  message: z.string().optional(),
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

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredTime: "No Preference",
      reason: "New Patient",
    },
  });

  const preferredTime = watch("preferredTime");
  const reason = watch("reason");

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setSubmitted(true);
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-base font-medium text-neutral-700">
          Name <span className="text-red-600">*</span>
        </label>
        <Input
          id="name"
          {...register("name")}
          className={cn(errors.name && "border-red-500")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-base text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-base font-medium text-neutral-700">
          Phone <span className="text-red-600">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className={cn(errors.phone && "border-red-500")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-base text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-base font-medium text-neutral-700">
          Email <span className="text-red-600">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className={cn(errors.email && "border-red-500")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-base text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="preferredTime" className="mb-1.5 block text-base font-medium text-neutral-700">
          Preferred Contact Time
        </label>
        <Select
          value={preferredTime}
          onValueChange={(v) => setValue("preferredTime", v as ContactFormData["preferredTime"])}
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
          onValueChange={(v) => setValue("reason", v as ContactFormData["reason"])}
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
          {...register("message")}
          placeholder="Brief message or questions..."
        />
      </div>
      <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90">
        Send Message
      </Button>
    </form>
  );
}
