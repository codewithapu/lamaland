// const withPWA = require('next-pwa');

// const pwaConfiguration = {
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
//   skipWaiting: true,
// };

// module.exports = withPWA({
//   ...pwaConfiguration,
//   images: {
//     domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
//   },
// });

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  // next config
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  }
});
module.exports = nextConfig;