/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/lessons",
                permanent: false,
            },
            {
                source: "/lessons",
                destination: "/lessons/6",
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
