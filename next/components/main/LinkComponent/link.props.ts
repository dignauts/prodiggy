import { LinkProps as MuiLinkProps } from '@mui/material';
import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import { LinkAPI } from '#da/types/api/common.api';

export interface LinkComponentProps 
  extends Pick<MuiLinkProps, 'fontWeight' | 'variant'>, Omit<LinkProps, 'href'>, Pick<LinkAPI, 'to'> {
  children: ReactNode;
  color?: 'navigation' | 'textSecondary';
}

export type LinkRootAtomProps = Omit<LinkComponentProps, 'children' | 'to'> & Pick<MuiLinkProps, 'component'>;
