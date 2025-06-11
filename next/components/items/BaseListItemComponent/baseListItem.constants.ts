import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BASE_LIST_ITEM_COMPONENT_NAME = 'BaseListItemComponent';

export const BASE_LIST_ITEM_CLASS_NAME = {
  ICON: defineClassName(BASE_LIST_ITEM_COMPONENT_NAME, 'icon'),
  ROOT: defineClassName(BASE_LIST_ITEM_COMPONENT_NAME),
  TEXT: defineClassName(BASE_LIST_ITEM_COMPONENT_NAME, 'text')
};
