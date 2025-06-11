import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BUTTON_COMPONENT_NAME = 'ButtonComponent';

export const BUTTON_CLASS_NAME = {
  BUTTON: defineClassName(BUTTON_COMPONENT_NAME, 'button'),
  ROOT: defineClassName(BUTTON_COMPONENT_NAME)  
};
