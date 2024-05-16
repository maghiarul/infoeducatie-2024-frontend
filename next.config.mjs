/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "s3-alpha.figma.com",
        pathname: "/*/*/*/*",
      },
    ],
  },
};

export default nextConfig;
