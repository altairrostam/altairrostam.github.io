import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteDefaults } from '@/lib/seoDefaults';

export async function GET(context) {
  const articles = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  return rss({
    title: siteDefaults.rssTitle,
    description: siteDefaults.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/writing/${article.data.permalink}/`,
      categories: article.data.tags,
    })),
  });
}
