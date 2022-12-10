/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
		loader: "imgix",
		path: "/public",
},
}

module.exports = nextConfig
