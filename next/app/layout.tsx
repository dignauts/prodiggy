import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import ApolloClientProviderModule from '#da/modules/providers/apolloClientProvider.module';
import CacheProviderModule from '#da/modules/providers/cacheProvider.module';
import '#da/theme/css/globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--prodiggy-font-inter'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--prodiggy-font-plus-jakarta-sans'
});

export const metadata: Metadata = {
  description: "From now on, invoices won't be your problem",
  title: 'Prodiggy'
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={clsx(inter.variable, plusJakartaSans.variable)}>
        <CacheProviderModule>
          <ApolloClientProviderModule>
            <NextIntlClientProvider>
              { children }
            </NextIntlClientProvider>
          </ApolloClientProviderModule>
        </CacheProviderModule>
      </body>
    </html>
  );
};

export default RootLayout;
