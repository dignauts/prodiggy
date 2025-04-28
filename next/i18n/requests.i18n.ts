import { getRequestConfig } from 'next-intl/server';

import { LOCALE } from '#da/i18n/constants.i18n';

const locale = LOCALE.ENGLISH;
 
export default getRequestConfig(async () => ({
  locale,
  messages: (await import(`../messages/${locale}.messages.json`)).default
}));
