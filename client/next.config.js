/** @type {import('next').NextConfig} */


const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: 'http://localhost:3000',
    APP_ENV: process.env.REACT_APP_ENV,
    // APP_SERVER_URL: process.env.APP_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*'
      }

    ]
  }
}

module.exports = nextConfig
