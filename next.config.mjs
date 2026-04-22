/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ADICIONE ESTA LINHA
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necessário para o GitHub Pages
  },
};

export default nextConfig;
