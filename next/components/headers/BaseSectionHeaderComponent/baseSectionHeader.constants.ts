import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BASE_SECTION_HEADER_COMPONENT_NAME = 'BaseSectionHeaderComponent';

export const BASE_SECTION_HEADER_CLASS_NAME = {
  CHIP: defineClassName(BASE_SECTION_HEADER_COMPONENT_NAME, 'chip'),
  DESCRIPTION: defineClassName(BASE_SECTION_HEADER_COMPONENT_NAME, 'description'),
  ROOT: defineClassName(BASE_SECTION_HEADER_COMPONENT_NAME),
  TITLE: defineClassName(BASE_SECTION_HEADER_COMPONENT_NAME, 'title')
};
