import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const NAVIGATION_LIST_COMPONENT_NAME = 'NavigationListComponent';

export const NAVIGATION_LIST_CLASS_NAME = {
  LIST_ITEM: defineClassName(NAVIGATION_LIST_COMPONENT_NAME, 'listItem'),
  ROOT: defineClassName(NAVIGATION_LIST_COMPONENT_NAME)  
};
