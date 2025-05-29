import { defineClassName } from '#da/theme/utils/defineClassName.util';

export const MARQUEE_SLIDER_COMPONENT_NAME = 'MarqueeSliderComponent';

export const MARQUEE_SLIDER_CLASS_NAME = {
  MARQUEE: defineClassName(MARQUEE_SLIDER_COMPONENT_NAME, 'marquee'),
  ROOT: defineClassName(MARQUEE_SLIDER_COMPONENT_NAME)  
};
