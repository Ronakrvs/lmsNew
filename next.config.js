/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    // trailingSlash: true,
    output: 'export',
    // loader: 'default',
    images: {
        formats: ['image/avif', 'image/webp'],
      },
    
}

module.exports = nextConfig
