import { Box, Container } from '@mui/material';

import LabeledListComponent from '#da/components/lists/LabeledListComponent';
import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import { PRIMARY_FOOTER_CLASS_NAME } from '#da/modules/footers/PrimaryFooterModule/primaryFooter.constants';
import '#da/modules/footers/PrimaryFooterModule/primaryFooter.styles.scss';

const PrimaryFooterModule = () => (
  <Box className={PRIMARY_FOOTER_CLASS_NAME.ROOT} component="footer">
    <Container className={PRIMARY_FOOTER_CLASS_NAME.CONTAINER}>
      <ProdiggyLogoComponent />
      <LabeledListComponent 
        items={[
          {
            name: 'Test',
            to: '#'
          }
        ]} 
        title='ddd' 
      />
    </Container>
  </Box>
);

export default PrimaryFooterModule;
