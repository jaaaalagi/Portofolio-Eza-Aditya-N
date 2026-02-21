/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // turbo: {
  //   rules: {
  //     '*.glb': {
  //       loaders: ['file-loader'],
  //       as: '*',
  //     },
  //     '*.gltf': {
  //       loaders: ['file-loader'],
  //       as: '*',
  //     },
  //   },
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;

