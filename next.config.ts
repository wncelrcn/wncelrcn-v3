import type { NextConfig } from "next";
import path from "node:path";

// Verification launches set VERIFY_DIST_DIR so they do not take the `.next` dev lock.
const distDir = process.env.VERIFY_DIST_DIR ?? ".next";

// A package-lock.json in the home directory would otherwise become the workspace root.
const projectRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  distDir,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
