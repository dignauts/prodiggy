import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const FEATURE_CARD_COMPONENT_NAME = 'FeatureCardComponent';

export const FEATURE_CARD_CLASS_NAME = {
  HEADER: defineClassName(FEATURE_CARD_COMPONENT_NAME, 'header'),
  IMAGE: defineClassName(FEATURE_CARD_COMPONENT_NAME, 'image'),
  ROOT: defineClassName(FEATURE_CARD_COMPONENT_NAME),
  WITH_IMAGE: defineClassName(FEATURE_CARD_COMPONENT_NAME, '-withImage')
};
