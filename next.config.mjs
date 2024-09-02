/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.daisyui.com',
            port: '',
          },        
          {
            protocol: 'https',
            hostname: 'v0.dev',
            port: '',
            pathname: '/api/*/image',
          },
        ],
      },
};

export default nextConfig;