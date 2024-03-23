/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'ableton-production.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
