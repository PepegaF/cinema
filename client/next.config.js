/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  env: {
    APP: process.env.URL,
    APP_URL: '/api',
    APP_ENV: process.env.REACT_APP_ENV,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:4200/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `http://localhost:4200/uploads/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
