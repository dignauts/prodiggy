'use client';

import { Container, useThemeProps } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { BaseSectionRootAtom } from '#da/components/sections/BaseSectionComponent/baseSection.atoms';
import { BASE_SECTION_CLASS_NAME, BASE_SECTION_COMPONENT_NAME } from '#da/components/sections/BaseSectionComponent/baseSection.constants';
import { BaseSectionComponentProps } from '#da/components/sections/BaseSectionComponent/baseSection.props';

const BaseSectionComponent: FC<BaseSectionComponentProps> = (props) => {
  const { children, className, color, containerWidth, sx } = useThemeProps({ 
    props, name: BASE_SECTION_COMPONENT_NAME 
  });

  return (
    <BaseSectionRootAtom 
      className={clsx(BASE_SECTION_CLASS_NAME.ROOT, className)} 
      color={color}
      sx={sx}
    >
      <Container className={BASE_SECTION_CLASS_NAME.CONTAINER} maxWidth={containerWidth}>
        { children }
      </Container>
    </BaseSectionRootAtom>
  );
};

export default BaseSectionComponent;
