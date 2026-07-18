/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress webpack cache warnings about TypeScript path resolution on Windows
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    }
    return config
  },
}

module.exports = nextConfig
