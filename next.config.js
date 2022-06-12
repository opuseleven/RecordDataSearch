/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
  }
}

module.exports = nextConfig
