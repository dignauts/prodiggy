import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { FC, PropsWithChildren } from 'react';

import { COMPANY_NAME } from '#da/constants/common.constants';
import ThemeProviderModule from '#da/modules/providers/themeProvider.module';

const CacheProviderModule: FC<PropsWithChildren> = ({ children }) => (
  <AppRouterCacheProvider options={{ enableCssLayer: true, key: COMPANY_NAME }}>
    <ThemeProviderModule>
      { children }
    </ThemeProviderModule>
  </AppRouterCacheProvider>
);

export default CacheProviderModule;
