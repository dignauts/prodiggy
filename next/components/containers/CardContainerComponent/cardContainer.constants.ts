import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const CARD_CONTAINER_COMPONENT_NAME = 'CardContainerComponent';

export const CARD_CONTAINER_CLASS_NAME = {
  CHIP: defineClassName(CARD_CONTAINER_COMPONENT_NAME, 'chip'),
  ROOT: defineClassName(CARD_CONTAINER_COMPONENT_NAME)
};
