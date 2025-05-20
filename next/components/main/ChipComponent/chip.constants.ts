import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const CHIP_COMPONENT_NAME = 'ChipComponent';

export const CHIP_CLASS_NAME = {
  ROOT: defineClassName(CHIP_COMPONENT_NAME),
  WITHOUT_BORDER_RADIUS: defineClassName(CHIP_COMPONENT_NAME, 'withoutBorderRadius')  
};
