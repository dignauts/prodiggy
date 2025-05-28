import { INTERNAL_ROUTES } from '#da/constants/routing.constants';
import { TranslatedLink } from '#da/types/i18n.types';

export const PRIMARY_NAVIGATION: TranslatedLink[] = [
  {
    i18n: 'navigation.home',
    to: INTERNAL_ROUTES.HOME
  }
  // {
  //   i18n: 'navigation.features',
  //   to: INTERNAL_ROUTES.FEATURES
  // },
  // {
  //   i18n: 'navigation.blog',
  //   to: INTERNAL_ROUTES.BLOG
  // },
  // {
  //   i18n: 'navigation.faq',
  //   to: INTERNAL_ROUTES.FAQ
  // },
  // {
  //   i18n: 'navigation.contact',
  //   to: INTERNAL_ROUTES.CONTACT
  // }
];
