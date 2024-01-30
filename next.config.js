/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	transpilePackages: ["html-to-text"],
};

module.exports = nextConfig;
