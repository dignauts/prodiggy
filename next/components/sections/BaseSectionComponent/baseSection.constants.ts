import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BASE_SECTION_COMPONENT_NAME = 'BaseSectionComponent';

export const BASE_SECTION_CLASS_NAME = {
  CONTAINER: defineClassName(BASE_SECTION_COMPONENT_NAME, 'container'),
  ROOT: defineClassName(BASE_SECTION_COMPONENT_NAME)  
};
