import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const HAMBURGER_BUTTON_COMPONENT_NAME = 'HamburgerButtonComponent';

export const HAMBURGER_BUTTON_CLASS_NAME = {
  INGREDIENT: defineClassName(HAMBURGER_BUTTON_COMPONENT_NAME, 'ingredient'),
  OPEN: defineClassName(HAMBURGER_BUTTON_COMPONENT_NAME, '-open'),
  ROOT: defineClassName(HAMBURGER_BUTTON_COMPONENT_NAME)
};
