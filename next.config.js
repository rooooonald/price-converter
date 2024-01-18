/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        domain: "localhost:3000",
      },
      /* development only config options here */
    };
  }

  return {
    eslint: {
      ignoreDuringBuilds: true,
    },
    env: {
      domain: "price-converter.vercel.app",
    },
  };
};

module.exports = nextConfig;
