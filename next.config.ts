import type { NextConfig } from "next";

// Verification launches set VERIFY_DIST_DIR so they do not take the `.next` dev lock.
const distDir = process.env.VERIFY_DIST_DIR ?? ".next";

const nextConfig: NextConfig = {
  distDir,
};

export default nextConfig;
