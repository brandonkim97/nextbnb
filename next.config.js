const headers = require('/headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "res.cloudinary.com",
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
