'use client';
import { Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material';

import { LINK_COMPONENT_NAME } from '#da/components/main/LinkComponent/link.constants';
import { LinkRootAtomProps } from '#da/components/main/LinkComponent/link.props';

export const LinkRootAtom = styled(MuiLink, {
  name: LINK_COMPONENT_NAME,
  overridesResolver: (_, styles) => styles.root,
  shouldForwardProp: (prop) => prop !== 'color',
  slot: 'root'
})<LinkRootAtomProps>(({ color }) => ({
  transition: 'color 0.2s ease-in-out',
  ...(color === 'navigation' && {
    color: 'var(--mui-palette-common-white)',
    '&:hover': {
      color: 'var(--mui-palette-primary-400)'
    }
  }),
  ...(color === 'textSecondary' && {
    color: 'var(--mui-palette-text-secondary)',
    '&:hover': {
      color: 'var(--mui-palette-common-white)'
    }
  })
}));
