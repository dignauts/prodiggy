import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const FAQ_SECTION_MODULE_NAME = 'FaqSectionModule';

export const FAQ_SECTION_CLASS_NAME = {
  EMPTY_LIST: defineClassName(FAQ_SECTION_MODULE_NAME, 'emptyList'),
  ITEM: defineClassName(FAQ_SECTION_MODULE_NAME, 'item'),
  LIST: defineClassName(FAQ_SECTION_MODULE_NAME, 'list'),
  ROOT: defineClassName(FAQ_SECTION_MODULE_NAME)
};
