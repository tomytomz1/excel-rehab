/**
 * Submit all published URLs to IndexNow (Bing, Yandex, and other participating
 * engines share one feed). Reads the live sitemap so the URL list always tracks
 * what is actually published.
 *
 * Run AFTER a deploy, once the key file is live at KEY_LOCATION:
 *   npm run indexnow
 *
 * Docs: https://www.bing.com/indexnow/getstarted
 */

const KEY = "7b75486b75144a74880bd81e02cec2bd";
const HOST = "www.excel-rehab.com";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const sitemapRes = await fetch(`${ORIGIN}/sitemap.xml`, {
    headers: { "User-Agent": "excel-rehab-indexnow-script" },
  });
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap.xml: ${sitemapRes.status} ${sitemapRes.statusText}`);
  }

  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter(Boolean);

  if (urlList.length === 0) {
    throw new Error("No <loc> URLs found in sitemap.xml — nothing to submit.");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  console.log(`IndexNow: submitted ${urlList.length} URLs → ${res.status} ${res.statusText}`);
  for (const u of urlList) console.log(`  - ${u}`);

  // 200/202 = accepted. 403 = key file not found/invalid. 422 = URLs don't match host/key.
  if (res.status !== 200 && res.status !== 202) {
    const detail = await res.text().catch(() => "");
    console.error(`IndexNow rejected the request. ${detail}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
