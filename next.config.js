/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.ufmg.br'
			},
			{
				protocol: 'https',
				hostname: 'live.staticflickr.com'
			}
		]
	}
};

module.exports = nextConfig;
