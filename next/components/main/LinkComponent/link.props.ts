import { LinkProps as MuiLinkProps } from '@mui/material';
import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { LinkAPI } from '#da/types/api/common.api';
import { Style } from '#da/types/ui.types';

export interface LinkComponentProps 
  extends Pick<MuiLinkProps, 'fontWeight' | 'variant'>, Omit<LinkProps, 'as' | 'href'>,
  Pick<LinkAPI, 'to'>,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  color?: 'navigation' | 'textSecondary';
  sx?: Style
}

export type LinkRootAtomProps = 
  Omit<LinkComponentProps, 'children' | 'to'> 
  & Pick<MuiLinkProps, 'component'>
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
