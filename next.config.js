/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	},
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
			},
			{
				protocol: 'https',
				hostname: 'copeve-backend-f46d9526ce84.herokuapp.com'
			}
		]
	}
};

module.exports = nextConfig;
