import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const IMAGE_COMPONENT_NAME = 'ImageComponent';

export const IMAGE_CLASS_NAME = {
  CENTERED: defineClassName(IMAGE_COMPONENT_NAME, 'root--centered'),
  IMAGE: defineClassName(IMAGE_COMPONENT_NAME, 'image'),
  IMAGE_FILLED: defineClassName(IMAGE_COMPONENT_NAME, 'image--filled'),
  ROOT: defineClassName(IMAGE_COMPONENT_NAME)
};
