/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    disableStaticImages: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
