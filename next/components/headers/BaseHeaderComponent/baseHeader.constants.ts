import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const BASE_HEADER_COMPONENT_NAME = 'BaseHeaderComponent';

export const BASE_HEADER_CLASS_NAME = {
  CONTAINER: defineClassName(BASE_HEADER_COMPONENT_NAME, 'container'),
  ROOT: defineClassName(BASE_HEADER_COMPONENT_NAME)  
};
