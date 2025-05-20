import { Box, Container } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { BASE_SECTION_CLASS_NAME } from '#da/components/sections/BaseSectionComponent/baseSection.constants';
import { BaseSectionComponentProps } from '#da/components/sections/BaseSectionComponent/baseSection.props';
import '#da/components/sections/BaseSectionComponent/baseSection.styles.scss';

const BaseSectionComponent: FC<BaseSectionComponentProps> = ({ 
  children,
  className, 
  containerWidth = '2xl',
  sx 
}) => (
  <Box
    className={clsx(BASE_SECTION_CLASS_NAME.ROOT, className)}
    component='section'
    sx={sx}
  >
    <Container className={BASE_SECTION_CLASS_NAME.CONTAINER} maxWidth={containerWidth}>
      { children }
    </Container>
  </Box>
);

export default BaseSectionComponent;
