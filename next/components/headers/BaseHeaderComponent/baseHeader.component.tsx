import { Box, Container } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';

import { BASE_HEADER_CLASS_NAME, BASE_HEADER_COMPONENT_NAME } from '#da/components/headers/BaseHeaderComponent/baseHeader.constants';
import { BaseHeaderComponentProps } from '#da/components/headers/BaseHeaderComponent/baseHeader.props';
import LinkedProdiggyLogoModule from '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.module';

import '#da/components/headers/BaseHeaderComponent/baseHeader.styles.scss';

const BaseHeaderComponent = forwardRef<HTMLDivElement, BaseHeaderComponentProps>(({ 
  children, className, sx
}, ref) => (
  <Box
    className={clsx(BASE_HEADER_CLASS_NAME.ROOT, className)} 
    component="header"
    ref={ref}
    sx={sx}
  >
    <Container className={BASE_HEADER_CLASS_NAME.CONTAINER}>
      <LinkedProdiggyLogoModule />
      { children }
    </Container>
  </Box>
));

BaseHeaderComponent.displayName = BASE_HEADER_COMPONENT_NAME;

export default BaseHeaderComponent;
