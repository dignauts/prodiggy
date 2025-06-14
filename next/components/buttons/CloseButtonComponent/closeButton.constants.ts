import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const CLOSE_BUTTON_COMPONENT_NAME = 'CloseButtonComponent';

export const CLOSE_BUTTON_CLASS_NAME = {
  BUTTON: defineClassName(CLOSE_BUTTON_COMPONENT_NAME, 'button'),
  ICON: defineClassName(CLOSE_BUTTON_COMPONENT_NAME, 'icon'),
  ROOT: defineClassName(CLOSE_BUTTON_COMPONENT_NAME)  
};
