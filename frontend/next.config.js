/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ufmg.br'
			},
			{
				protocol: 'https',
				hostname: 'live.staticflickr.com'
			}
		]
	}
};

module.exports = nextConfig;
