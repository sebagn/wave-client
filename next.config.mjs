/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wavealineadores.s3.sa-east-1.amazonaws.com',
            },
        ],
    },
};
export default nextConfig;
