/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    // trailingSlash: true,
    output: 'export',
    // loader: 'default',
  // ignoreBuildErrors: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    images: {
        formats: ['image/avif', 'image/webp'],
      },
    
}

module.exports = nextConfig
