const withTM = require("next-transpile-modules")(["gsap"]); // Transpile GSAP

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js config options if needed
};

module.exports = withTM(nextConfig);
