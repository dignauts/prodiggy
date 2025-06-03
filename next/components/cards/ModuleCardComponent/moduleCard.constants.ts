import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const MODULE_CARD_COMPONENT_NAME = 'ModuleCardComponent';

export const MODULE_CARD_CLASS_NAME = {
  DESCRIPTION: defineClassName(MODULE_CARD_COMPONENT_NAME, 'description'),
  ICON: defineClassName(MODULE_CARD_COMPONENT_NAME, 'icon'),
  ROOT: defineClassName(MODULE_CARD_COMPONENT_NAME),
  TITLE: defineClassName(MODULE_CARD_COMPONENT_NAME, 'title')
};
