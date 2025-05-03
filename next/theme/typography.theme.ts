import { ThemeOptions } from '@mui/material';

import { mediaQuery } from '#da/theme/breakpoints.theme';
import { letterSpacing } from '#da/theme/utils/letterSpacing.util';
import { responsiveFontSize } from '#da/theme/utils/responsiveFontSize.util';

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'var(--prodiggy-font-inter)',
  h4: {
    fontFamily: 'var(--prodiggy-font-plus-jakarta-sans)',
    fontSize: responsiveFontSize(24),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(20)
    }
  },
  p4: {
    fontSize: responsiveFontSize(14),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%'
  }
};
