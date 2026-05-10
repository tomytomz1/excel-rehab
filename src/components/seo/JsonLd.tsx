/**
 * Renders Schema.org JSON-LD structured data.
 * Pass the schema object from layout or page; no inline schema here.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
