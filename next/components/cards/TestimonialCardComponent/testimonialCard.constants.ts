import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const TESTIMONIAL_CARD_COMPONENT_NAME = 'TestimonialCardComponent';

export const TESTIMONIAL_CARD_CLASS_NAME = {
  MESSAGE: defineClassName(TESTIMONIAL_CARD_COMPONENT_NAME, 'message'),
  RATING: defineClassName(TESTIMONIAL_CARD_COMPONENT_NAME, 'rating'),
  ROOT: defineClassName(TESTIMONIAL_CARD_COMPONENT_NAME),
  USER: defineClassName(TESTIMONIAL_CARD_COMPONENT_NAME, 'user')
};
