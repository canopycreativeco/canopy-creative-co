/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/work-with-us',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
