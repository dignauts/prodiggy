import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BASE_LIST_COMPONENT_NAME = 'BaseListComponent';

export const BASE_LIST_CLASS_NAME = {
  ITEM: defineClassName(BASE_LIST_COMPONENT_NAME, 'icon'),
  ROOT: defineClassName(BASE_LIST_COMPONENT_NAME)
};
