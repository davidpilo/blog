import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(ctx) {
  const blog = await getCollection('blog');

  return rss({
    title: "David Pilo's Blog",
    description: "David Pilo's blog",
    site: ctx.site,
    items: blog.map(({ data, slug, body }) => ({
      title: data.title,
      pubDate: data.date,
      description: body.substring(0, 130).replace(/\n/, ' '),
      link: `/post/${slug}`
    })),
    customData: `<language>en-us</language>`,
  });
}
