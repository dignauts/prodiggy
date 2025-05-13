import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const LIST_COMPONENT_NAME = 'ListComponent';

export const LIST_CLASS_NAME = {
  ACTIVE_LINK: defineClassName(LIST_COMPONENT_NAME, 'link--active'),
  BUTTON: defineClassName(LIST_COMPONENT_NAME, 'button'),
  LINK: defineClassName(LIST_COMPONENT_NAME, 'link'),
  LIST_ITEM: defineClassName(LIST_COMPONENT_NAME, 'listItem'),
  ROOT: defineClassName(LIST_COMPONENT_NAME),
  TEXT: defineClassName(LIST_COMPONENT_NAME, 'text')
};
