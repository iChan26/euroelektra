/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',          // 🔹 ensures Next.js creates static files
  basePath: '/euroelektra',  // 🔹 makes app work under this subpath
  assetPrefix: '/euroelektra/', // 🔹 ensures assets load correctly
};

module.exports = nextConfig;
