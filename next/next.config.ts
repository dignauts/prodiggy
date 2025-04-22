import type { NextConfig } from "next";

import pkg from './package.json';

const nextConfig: NextConfig = {
  env: {
    VERSION: pkg.version
  },
  output: 'export'
};

export default nextConfig;
