/**
 * Renders Schema.org JSON-LD structured data.
 *
 * We hand-escape characters that could otherwise break out of the <script>
 * tag (closing tags, U+2028/U+2029 line separators). The site has no
 * user-controlled JSON-LD today, but this keeps it safe if that changes.
 */
function serialize(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}
