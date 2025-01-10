// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
import { NextConfig } from "next";
import path from "path";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // remove `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  compress: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "https://jiaminglu0716.github.io/mvlg-blog",
  },
  output: "export",
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 100 * 1024 * 1024,
  },
  sassOptions: {
    includePaths: ["./web/styles/"],
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
