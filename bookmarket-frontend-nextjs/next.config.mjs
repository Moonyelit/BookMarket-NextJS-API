// next.config.mjs
export const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
        },
        {
          protocol: 'https',
          hostname: 'www.gallimard.fr',
        },
        // Ajoute ici d'autres domaines si besoin
      ],
    },
  };
  
  export default nextConfig;
  