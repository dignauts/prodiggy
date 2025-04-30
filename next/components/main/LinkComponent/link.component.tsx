'use client';

import { useThemeProps } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';

import { LinkRootAtom } from '#da/components/main/LinkComponent/link.atoms';
import { LINK_CLASS_NAME, LINK_COMPONENT_NAME } from '#da/components/main/LinkComponent/link.constants';
import { LinkComponentProps } from '#da/components/main/LinkComponent/link.props';

const LinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>((props, ref) => {
  const { children, className, color, fontWeight, isExternal, to, variant, ...themeProps } = useThemeProps({ 
    props, name: LINK_COMPONENT_NAME 
  });

  return (
    <LinkRootAtom
      className={clsx(LINK_CLASS_NAME.ROOT, className)}
      color={color}
      component={Link}
      fontWeight={fontWeight}
      href={to}
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      underline='none'
      variant={variant}
      {...themeProps}
    >
      { children }
    </LinkRootAtom>
  );
});

LinkComponent.displayName = LINK_COMPONENT_NAME;

export default LinkComponent;
