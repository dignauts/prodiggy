import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const PRIMARY_FOOTER_MODULE_NAME = 'PrimaryFooterModule';

export const PRIMARY_FOOTER_CLASS_NAME = {
  ABOUT_US: defineClassName(PRIMARY_FOOTER_MODULE_NAME, 'aboutUs'),
  BOTTOM: defineClassName(PRIMARY_FOOTER_MODULE_NAME, 'bottom'),
  CONTAINER: defineClassName(PRIMARY_FOOTER_MODULE_NAME, 'container'),
  NAVIGATION_BLOCKS: defineClassName(PRIMARY_FOOTER_MODULE_NAME, 'navigationBlocks'),
  ROOT: defineClassName(PRIMARY_FOOTER_MODULE_NAME)  
};
