/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

require('dotenv').config();
module.exports = nextConfig

module.exports = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
};