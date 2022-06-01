const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')(['reaflow']);

module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = withTM({
  experimental: {
    esmExternals: 'loose', // second add this experimental flag to the config
  },
});
