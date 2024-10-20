/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allows all hosts
          port: '', // No specific port
        },
      ],
    },
  };
  
  export default nextConfig;
  