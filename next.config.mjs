const isProd = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // assetPrefix: isProd
  //   ? "https://unpkg.com/@jenkinsci/jenkins-io-components?module"
  //   : undefined,
};

export default nextConfig;
