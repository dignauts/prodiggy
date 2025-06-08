import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const SUBSCRIPTION_CARD_COMPONENT_NAME = 'SubscriptionCardComponent';

export const SUBSCRIPTION_CARD_CLASS_NAME = {
  PRICE: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'price'),
  ROOT: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME),
  SUBSCRIPTION_NAME: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'subscriptionName')
};
