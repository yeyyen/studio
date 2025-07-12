/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    // Exclude studio-master folder
    config.module.rules.push({
      test: /studio-master/,
      use: 'ignore-loader'
    });
    
    return config;
  },
  // Exclude studio-master folder from compilation
  experimental: {
    excludeDefaultMomentLocales: false,
  },
};

module.exports = nextConfig; 