/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: '/emergency-plumbing',
        destination: '/emergency',
        permanent: true,
      },
      {
        source: '/recent-projects',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
