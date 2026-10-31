/**
 * Static-first: this portfolio is a content site with no server features,
 * so the production build exports a plain, host-anywhere bundle.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
