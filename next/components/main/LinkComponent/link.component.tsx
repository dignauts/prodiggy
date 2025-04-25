'use client';

import { useThemeProps } from '@mui/material';
import Link from 'next/link';
import { forwardRef } from 'react';

import { LinkRootAtom } from '#da/components/main/LinkComponent/link.atoms';
import { LINK_CLASS_NAME, LINK_COMPONENT_NAME } from '#da/components/main/LinkComponent/link.constants';
import { LinkComponentProps } from '#da/components/main/LinkComponent/link.props';

const LinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>((props, ref) => {
  const { children, ...themeProps } = useThemeProps({ props, name: LINK_COMPONENT_NAME });

  return (
    <LinkRootAtom
      className={LINK_CLASS_NAME.ROOT}
      color={themeProps.color}
      component={Link}
      fontWeight={themeProps.fontWeight}
      href={themeProps.to}
      ref={ref}
      underline='none'
      variant={themeProps.variant}
    >
      { children }
    </LinkRootAtom>
  );
});

LinkComponent.displayName = LINK_COMPONENT_NAME;

export default LinkComponent;
