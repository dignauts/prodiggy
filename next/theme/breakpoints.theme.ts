import { BreakpointsOptions } from '@mui/material';

import { BREAKPOINT } from '#da/theme/constants.theme';
import { MediaQuery } from '#da/types/ui.types';

export const breakpoints: BreakpointsOptions = {
  values: {
    '2xl': BREAKPOINT['2XL'],
    lg: BREAKPOINT.LG,
    md: BREAKPOINT.MD,
    sm: BREAKPOINT.SM,
    xl: BREAKPOINT.XL,
    xs: BREAKPOINT.XS
  }
};

/**
 * Create the media query based on provided breakpoint and optional type.
 * @param {number|string} MediaQuery.breakpoint - Defined breakpoint or number.
 * @param {string} [MediaQuery.type='max-width'] - Type of media feature.
 * @param {string} [MediaQuery.type='screen'] - Type of media.
 * @returns {string} Generated media query as string.
 */
export const mediaQuery = ({
  breakpoint, mediaFeature = 'max-width', mediaType = 'screen'
}: MediaQuery) => {
  if (typeof breakpoint === 'number') {
    return `@media ${mediaType} and (${mediaFeature}: ${breakpoint}px)`;
  }

  if (breakpoints.values) {
    return `@media ${mediaType} and (${mediaFeature}: ${breakpoints.values[breakpoint]}px)`;
  }

  console.error(`
    The breakpoint is invalid or does not exist. 
    Check the settings in the "breakpoints.theme.ts" file.
  `);

  return `@media ${mediaType} and (${mediaFeature}: ${BREAKPOINT.XL}px)`;
};
