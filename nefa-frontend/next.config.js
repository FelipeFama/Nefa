/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  register: true,
  scope: "/src",
  sw: "service-worker.js",
});

module.exports = withPWA(nextConfig);
