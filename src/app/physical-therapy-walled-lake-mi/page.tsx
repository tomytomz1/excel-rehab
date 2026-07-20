import { LocalPtPage } from "@/components/locations/LocalPtPage";
import { getLocationBySlug } from "@/lib/data/locations";
import { pageMetadata } from "@/lib/seo";

const location = getLocationBySlug("physical-therapy-walled-lake-mi")!;

export const metadata = pageMetadata({
  path: `/${location.slug}`,
  title: location.title,
  description: location.description,
  image: location.primaryImage.src,
  imageAlt: location.primaryImage.alt,
});

export default function PhysicalTherapyWalledLakePage() {
  return <LocalPtPage location={location} />;
}
