import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const LABELED_LIST_COMPONENT_NAME = 'LabeledListComponent';

export const LABELED_LIST_CLASS_NAME = {
  LIST: defineClassName(LABELED_LIST_COMPONENT_NAME, 'list'),
  ROOT: defineClassName(LABELED_LIST_COMPONENT_NAME),
  TITLE: defineClassName(LABELED_LIST_COMPONENT_NAME, 'title')
};
