export default function sitemap() {
  const lastModified = '2026-05-07'
  return [
    {
      url: 'https://www.canopycreativeco.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://www.canopycreativeco.com/services',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.canopycreativeco.com/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.canopycreativeco.com/contact',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.canopycreativeco.com/legal',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
