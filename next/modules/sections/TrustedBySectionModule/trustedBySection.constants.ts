import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const TRUSTED_BY_SECTION_MODULE_NAME = 'TrustedBySectionModule';

export const TRUSTED_BY_SECTION_CLASS_NAME = {
  ROOT: defineClassName(TRUSTED_BY_SECTION_MODULE_NAME),
  SLIDER: defineClassName(TRUSTED_BY_SECTION_MODULE_NAME, 'slider')
};
