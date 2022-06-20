/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
  },
  images: {
    domains: ['i.discogs.com']
  }
}

module.exports = nextConfig
