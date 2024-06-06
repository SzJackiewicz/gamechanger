/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

require('dotenv').config()
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['www.datocms-assets.com'],
  },
}