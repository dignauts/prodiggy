import { ThemeOptions } from '@mui/material';

import { mediaQuery } from '#da/theme/breakpoints.theme';
import { letterSpacing } from '#da/theme/utils/letterSpacing.util';
import { responsiveFontSize } from '#da/theme/utils/responsiveFontSize.util';

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'var(--prodiggy-font-inter)',
  h1: {
    fontFamily: 'var(--prodiggy-font-plus-jakarta-sans)',
    fontSize: responsiveFontSize(48),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '125%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(36)
    },
    [mediaQuery({ breakpoint: 'sm' })]: {
      fontSize: responsiveFontSize(32)
    }
  },
  h2Small: {
    fontFamily: 'var(--prodiggy-font-plus-jakarta-sans)',
    fontSize: responsiveFontSize(32),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '125%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(24)
    }
  },
  h3: {
    fontFamily: 'var(--prodiggy-font-plus-jakarta-sans)',
    fontSize: responsiveFontSize(28),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '125%',
    [mediaQuery({ breakpoint: 'lg' })]: {
      fontSize: responsiveFontSize(24)
    },
    [mediaQuery({ breakpoint: 'sm' })]: {
      fontSize: responsiveFontSize(20)
    }
  },
  h4: {
    fontFamily: 'var(--prodiggy-font-plus-jakarta-sans)',
    fontSize: responsiveFontSize(24),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(20)
    }
  },
  h5: {
    fontSize: responsiveFontSize(20),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%'
  },
  p2: {
    fontSize: responsiveFontSize(18),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '135%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(16)
    }
  },
  p3: {
    fontSize: responsiveFontSize(16),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '135%',
    [mediaQuery({ breakpoint: 'md' })]: {
      fontSize: responsiveFontSize(14)
    }
  },
  p4: {
    fontSize: responsiveFontSize(14),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%'
  },
  p5: {
    fontSize: responsiveFontSize(12),
    letterSpacing: letterSpacing({ percent: -8 }),
    lineHeight: '125%'
  },
  price: {
    fontSize: responsiveFontSize(54),
    letterSpacing: letterSpacing({ percent: -2 }),
    lineHeight: '130%'
  }
};
