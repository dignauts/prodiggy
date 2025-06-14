import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const SUBSCRIPTION_CARD_COMPONENT_NAME = 'SubscriptionCardComponent';

export const SUBSCRIPTION_CARD_CLASS_NAME = {
  ANIMATED: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'root--animated'),
  BUTTON: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'button'),
  FOOTER: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'footer'),
  INFORMATION: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'information'),
  LIST: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'list'),
  NOTICE: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'notice'),
  PRICE: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'price'),
  ROOT: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME),
  SUBSCRIPTION_NAME: defineClassName(SUBSCRIPTION_CARD_COMPONENT_NAME, 'subscriptionName')
};
