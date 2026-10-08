/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/start-here',
        permanent: true,
      },
      {
        // Renamed Aug 20, 2026. Keeps the demo follow-up email and anything
        // already shared working, and passes ranking through to the new URL.
        source: '/work-with-us',
        destination: '/start-here',
        permanent: true,
      },
      {
        // Oct 8, 2026. The Roots is the foundations track inside The Canopy and is
        // no longer sold on its own. Old links land on the membership page.
        source: '/the-roots',
        destination: '/the-canopy',
        permanent: true,
      },
      {
        // Oct 8, 2026. The Greenhouse name is retired. The Back Office took its place.
        source: '/the-greenhouse',
        destination: '/the-back-office',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
