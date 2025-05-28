import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const FEATURE_CARD_HEADER_COMPONENT_NAME = 'FeatureCardHeaderComponent';

export const FEATURE_CARD_HEADER_CLASS_NAME = {
  DESCRIPTION: defineClassName(FEATURE_CARD_HEADER_COMPONENT_NAME, 'description'),
  ICON: defineClassName(FEATURE_CARD_HEADER_COMPONENT_NAME, 'icon'),
  ROOT: defineClassName(FEATURE_CARD_HEADER_COMPONENT_NAME),
  TITLE: defineClassName(FEATURE_CARD_HEADER_COMPONENT_NAME, 'title')
};
