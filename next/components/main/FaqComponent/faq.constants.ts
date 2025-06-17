import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const FAQ_COMPONENT_NAME = 'FaqComponent';

export const FAQ_CLASS_NAME = {
  CONTENT: defineClassName(FAQ_COMPONENT_NAME, 'content'),
  HEADER: defineClassName(FAQ_COMPONENT_NAME, 'header'),
  ROOT: defineClassName(FAQ_COMPONENT_NAME),
  TITLE: defineClassName(FAQ_COMPONENT_NAME, 'title')
};
