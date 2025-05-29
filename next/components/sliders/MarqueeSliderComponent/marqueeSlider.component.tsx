'use client';

import { Box } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';
import Marquee from 'react-fast-marquee';

import { MARQUEE_SLIDER_CLASS_NAME, MARQUEE_SLIDER_COMPONENT_NAME } from '#da/components/sliders/MarqueeSliderComponent/marqueeSlider.constants';
import { MarqueeSliderComponentProps } from '#da/components/sliders/MarqueeSliderComponent/marqueeSlider.props';

const MarqueeSliderComponent = forwardRef<HTMLDivElement, MarqueeSliderComponentProps>(({
  children, 
  className, 
  gradientColor = 'var(--mui-palette-background-default)',
  pauseOnHover,
  sx
}, ref) => (
  <Box
    className={clsx(MARQUEE_SLIDER_CLASS_NAME.ROOT, className)}
    ref={ref}
    sx={sx}
  >
    <Marquee
      autoFill
      className={MARQUEE_SLIDER_CLASS_NAME.MARQUEE} 
      gradient
      gradientColor={gradientColor}
      pauseOnHover={pauseOnHover}
    >
      { children }
    </Marquee>
  </Box>
));

MarqueeSliderComponent.displayName = MARQUEE_SLIDER_COMPONENT_NAME;

export default MarqueeSliderComponent;
