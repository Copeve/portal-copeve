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
			},

			//dev only
			{
				protocol: 'https',
				hostname: 'healvets.org'
			},
			{
				protocol: 'http',
				hostname: 'localhost'
			}
		]
	}
};

module.exports = nextConfig;
