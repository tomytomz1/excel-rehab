/**
 * Excel PM&R — services from brochure.
 * Icon: lucide-react component name (string) for dynamic use.
 */

export interface Service {
  name: string;
  slug: string;
  icon: string;
  href?: string;
}

export const SERVICES: Service[] = [
  {
    name: "On-Site Physical Therapy",
    slug: "on-site-physical-therapy",
    icon: "Dumbbell",
    href: "/physical-therapy-novi-mi",
  },
  {
    name: "Peripheral Joint Injections",
    slug: "peripheral-joint-injections",
    icon: "Syringe",
  },
  {
    name: "Trigger Point Injections",
    slug: "trigger-point-injections",
    icon: "Target",
  },
  {
    name: "Epidural Steroid Injections",
    slug: "epidural-steroid-injections",
    icon: "Pill",
  },
  {
    name: "Facet Joint Injections",
    slug: "facet-joint-injections",
    icon: "CircleDot",
  },
  {
    name: "Platelet Rich Plasma Injections",
    slug: "platelet-rich-plasma-injections",
    icon: "Droplets",
  },
  {
    name: "Sacroiliac Joint Injections",
    slug: "sacroiliac-joint-injections",
    icon: "Syringe",
  },
  {
    name: "Ultrasound-Guided Injections",
    slug: "ultrasound-guided-injections",
    icon: "ScanSearch",
  },
  {
    name: "Therapeutic Botox",
    slug: "therapeutic-botox",
    icon: "Sparkles",
  },
  {
    name: "Regenerative Medicine",
    slug: "regenerative-medicine",
    icon: "HeartPulse",
  },
  {
    name: "Health, Wellness, Weight Loss",
    slug: "health-wellness-weight-loss",
    icon: "Scale",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
