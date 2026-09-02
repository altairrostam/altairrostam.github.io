import { writingEntries } from "../data/content";

const site = "https://altairrostam.github.io";
const published = writingEntries.filter((entry) => entry.href !== "/writing.html");

function pubDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

export function GET() {
  const latest = published[0];
  const items = published.map((entry) => {
    const url = `${site}${entry.href}`;
    return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate(entry.date)}</pubDate>
      <description>${escapeXml(entry.summary)}</description>
    </item>`;
  }).join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Altair R.</title>
    <link>${site}/</link>
    <description>Writing and notes from Altair R. on software, systems, and engineering practice.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate(latest.date)}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
