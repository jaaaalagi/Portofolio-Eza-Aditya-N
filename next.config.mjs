/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    rules: {
      '*.glb': {
        loaders: ['file-loader'],
        as: '*',
      },
      '*.gltf': {
        loaders: ['file-loader'],
        as: '*',
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
