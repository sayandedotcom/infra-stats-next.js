const isProd = process.env.NODE_ENV === "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // assetPrefix: isProd
  //   ? "https://unpkg.com/@jenkinsci/jenkins-io-components?module"
  //   : "https://unpkg.com/@jenkinsci/jenkins-io-components?module",
};

export default nextConfig;
