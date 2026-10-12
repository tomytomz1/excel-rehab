import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { SERVICE_CONTENT } from "@/lib/data/service-content";
import { CONDITION_CONTENT } from "@/lib/data/condition-content";

const PATHS: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  ...Object.keys(SERVICE_CONTENT).map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/physical-therapy-novi-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/physical-therapy-northville-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/physical-therapy-farmington-hills-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/physical-therapy-wixom-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/physical-therapy-walled-lake-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/physical-therapy-commerce-township-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pain-management-novi-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/auto-accident-work-injury-novi-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/conditions", changeFrequency: "monthly", priority: 0.8 },
  ...Object.keys(CONDITION_CONTENT).map((slug) => ({
    path: `/conditions/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/patient-resources", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/hipaa-notice", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
