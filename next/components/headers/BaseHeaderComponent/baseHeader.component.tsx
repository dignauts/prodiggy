import { Box, Container } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';

import { BASE_HEADER_CLASS_NAME, BASE_HEADER_COMPONENT_NAME } from '#da/components/headers/BaseHeaderComponent/baseHeader.constant';
import LinkedProdiggyLogoComponent from '#da/components/logos/LinkedProdiggyLogoComponent/linkedProdiggyLogo.component';
import '#da/components/headers/BaseHeaderComponent/baseHeader.styles.css';

const BaseHeaderComponent = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => (
  <Box
    className={BASE_HEADER_CLASS_NAME.ROOT} 
    component="header"
    ref={ref}
  >
    <Container>
      <LinkedProdiggyLogoComponent />
      { children }
    </Container>
  </Box>
));

BaseHeaderComponent.displayName = BASE_HEADER_COMPONENT_NAME;

export default BaseHeaderComponent;
