const headers = require('./headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers,
            }
        ]
    }
}

module.exports = nextConfig
