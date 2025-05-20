import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const SECTION_COMPONENT_NAME = 'SectionComponent';

export const SECTION_CLASS_NAME = {
  HEADER: defineClassName(SECTION_COMPONENT_NAME, 'header'),
  ROOT: defineClassName(SECTION_COMPONENT_NAME)  
};
