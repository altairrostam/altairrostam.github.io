const site = "https://altairrostam.github.io";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/work/", priority: "0.9", changefreq: "monthly" },
  { path: "/resume/", priority: "0.8", changefreq: "monthly" },
  { path: "/writing/", priority: "0.8", changefreq: "weekly" },
  { path: "/about/", priority: "0.7", changefreq: "monthly" },
];

const lastmod = "2026-09-03";

export function GET() {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${site}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
