import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const SUBSCRIPTION_PRICE_COMPONENT_NAME = 'SubscriptionPriceComponent';

export const SUBSCRIPTION_PRICE_CLASS_NAME = {
  ROOT: defineClassName(SUBSCRIPTION_PRICE_COMPONENT_NAME),
  SUFFIX: defineClassName(SUBSCRIPTION_PRICE_COMPONENT_NAME, 'suffix')
};
