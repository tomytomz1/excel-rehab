import { LocalPtPage } from "@/components/locations/LocalPtPage";
import { getLocationBySlug } from "@/lib/data/locations";
import { pageMetadata } from "@/lib/seo";

const location = getLocationBySlug("physical-therapy-wixom-mi")!;

export const metadata = pageMetadata({
  path: `/${location.slug}`,
  title: location.title,
  description: location.description,
  image: "/images/knee-therapy.jpg",
  imageAlt: location.imageAlt,
});

export default function PhysicalTherapyWixomPage() {
  return <LocalPtPage location={location} />;
}
