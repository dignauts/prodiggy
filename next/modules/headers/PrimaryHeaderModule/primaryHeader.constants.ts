import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const PRIMARY_HEADER_MODULE_NAME = 'PrimaryHeaderModule';

export const PRIMARY_HEADER_CLASS_NAME = {
  HAMBURGER: defineClassName(PRIMARY_HEADER_MODULE_NAME, 'hamburger'),
  PRIMARY_NAVIGATION: defineClassName(PRIMARY_HEADER_MODULE_NAME, 'primaryNavigation'),
  ROOT: defineClassName(PRIMARY_HEADER_MODULE_NAME)  
};
