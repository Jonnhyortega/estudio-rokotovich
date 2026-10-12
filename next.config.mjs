// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inserta el CSS en el HTML: elimina la petición que bloquea el primer pintado
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/do87isqjr/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
  