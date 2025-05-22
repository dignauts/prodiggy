import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import pkg from './package.json';

const withNextIntl = createNextIntlPlugin('./i18n/requests.i18n.ts');

const nextConfig: NextConfig = {
  env: {
    VERSION: pkg.version
  },
  images: {
    unoptimized: true
  },
  output: 'export'
};

export default withNextIntl(nextConfig);
