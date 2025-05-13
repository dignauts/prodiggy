import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const HAMBURGER_MODULE_NAME = 'HamburgerModule';

export const HAMBURGER_CLASS_NAME = {
  BUTTON: defineClassName(HAMBURGER_MODULE_NAME, 'button'),
  DRAWER: defineClassName(HAMBURGER_MODULE_NAME, 'drawer'),
  HEADER: defineClassName(HAMBURGER_MODULE_NAME, 'header'),
  NAVIGATION: defineClassName(HAMBURGER_MODULE_NAME, 'navigation')
};
