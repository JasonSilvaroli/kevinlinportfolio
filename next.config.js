/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.wbur.org', 'main.dclmg8kjbfkog.amplifyapp.com/', 'linkevin.com'],
  },
}

module.exports = nextConfig
