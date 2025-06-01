'use client';
import { styled } from '@mui/material';

import { BASE_SECTION_COMPONENT_NAME } from '#da/components/sections/BaseSectionComponent/baseSection.constants';
import { BaseSectionRootAtomProps } from '#da/components/sections/BaseSectionComponent/baseSection.props';
import { mediaQuery } from '#da/theme/breakpoints.theme';

export const BaseSectionRootAtom = styled('section', {
  name: BASE_SECTION_COMPONENT_NAME,
  overridesResolver: (_, styles) => styles.root,
  shouldForwardProp: (prop) => prop !== 'color',
  slot: 'root'
})<BaseSectionRootAtomProps>(({ color }) => ({
  paddingBlock: 100,
  ...(color === 'primary' && {
    backgroundColor: 'var(--mui-palette-background-default)'
  }),
  ...(color === 'secondary' && {
    backgroundColor: 'var(--mui-palette-grey-600)'
  }),
  ...(color === 'tertiary' && {
    backgroundColor: 'var(--mui-palette-grey-700)'
  }),
  [mediaQuery({ breakpoint: 'lg' })]: {
    paddingBlock: 80
  },
  [mediaQuery({ breakpoint: 'md' })]: {
    paddingBlock: 60
  }
}));
