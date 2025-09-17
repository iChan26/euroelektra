/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/euroelektra',   // app runs under this subpath
  assetPrefix: '/euroelektra/', // makes sure static files load correctly
  output: 'standalone', // required for running in Node.js hosting
};

module.exports = nextConfig;
