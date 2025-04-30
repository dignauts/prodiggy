import { LinkProps as MuiLinkProps } from '@mui/material';
import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

import { LinkAPI } from '#da/types/api/common.api';
import { BaseComponentProps } from '#da/types/props/common.props';

export interface LinkComponentProps 
  extends Pick<MuiLinkProps, 'fontWeight' | 'variant'>, Omit<LinkProps, 'as' | 'href'>,
  Pick<LinkAPI, 'isExternal' | 'to'>,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'>,
  BaseComponentProps {
  children: ReactNode;
  color?: 'navigation' | 'textSecondary';
  isActive?: boolean;
}

export type LinkRootAtomProps = 
  Omit<LinkComponentProps, 'children' | 'to'> 
  & Pick<MuiLinkProps, 'component'>
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
