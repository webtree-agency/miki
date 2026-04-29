import type { MetadataRoute } from 'next'

const SITE = 'https://www.amzilegacyfootballtraining.ch'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/fussballcamp`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/indoor-fussball`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/angebot`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/buchen`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE}/agb`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
