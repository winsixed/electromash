const withCritters = require('next-plugin-critters');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withCritters({
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  critters: {
    preload: 'js-lazy',
    pruneSource: true,
  },
});
