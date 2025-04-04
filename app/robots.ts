import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      disallow: ["/admin", "/page-privacy-policy/"], // Fixed path
    },
    sitemap: 'https://www.cmtai.in/sitemap.xml',
  };
}