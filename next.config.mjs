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
    ]
  },
};

export default nextConfig;
