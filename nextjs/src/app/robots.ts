import type { MetadataRoute } from 'next'

const SITE = 'https://www.amzilegacyfootballtraining.ch'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/erfolg', '/datenschutz', '/impressum', '/admin', '/api'],
    },
    sitemap: `${SITE}/sitemap.xml`,
  }
}
