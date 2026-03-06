/**
 * Excel PM&R — services (all 11 from plan).
 * Icon: lucide-react component name (string) for dynamic use.
 * Description: [PLACEHOLDER] until client provides real copy.
 */

export interface Service {
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    name: "On-Site Physical Therapy",
    slug: "on-site-physical-therapy",
    icon: "Dumbbell",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Peripheral Joint Injections",
    slug: "peripheral-joint-injections",
    icon: "Syringe",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Trigger Point Injections",
    slug: "trigger-point-injections",
    icon: "Target",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Epidural Steroid Injections",
    slug: "epidural-steroid-injections",
    icon: "Pill",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Facet Joint Injections",
    slug: "facet-joint-injections",
    icon: "CircleDot",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Platelet Rich Plasma Injections",
    slug: "platelet-rich-plasma-injections",
    icon: "Droplets",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Sacroiliac Joint Injections",
    slug: "sacroiliac-joint-injections",
    icon: "Syringe",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Ultrasound-Guided Injections",
    slug: "ultrasound-guided-injections",
    icon: "ScanSearch",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Therapeutic Botox",
    slug: "therapeutic-botox",
    icon: "Sparkles",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Regenerative Medicine",
    slug: "regenerative-medicine",
    icon: "HeartPulse",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
  {
    name: "Health, Wellness, Weight Loss",
    slug: "health-wellness-weight-loss",
    icon: "Scale",
    description:
      "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Service description to be provided by client.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
