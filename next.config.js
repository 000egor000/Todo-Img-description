/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  images: {
    domains: ['localhost'], // <== Domain name
  },
}

module.exports = nextConfig
