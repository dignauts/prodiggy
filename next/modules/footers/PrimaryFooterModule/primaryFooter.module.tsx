'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import LabeledListComponent from '#da/components/lists/LabeledListComponent';
import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import { FOOTER_NAVIGATION_BLOCKS } from '#da/constants/footer.constants';
import { PRIMARY_FOOTER_CLASS_NAME } from '#da/modules/footers/PrimaryFooterModule/primaryFooter.constants';
import { Translation } from '#da/types/i18n.types';
import '#da/modules/footers/PrimaryFooterModule/primaryFooter.styles.scss';

const CURRENT_YEAR = new Date().getFullYear();

const PrimaryFooterModule = () => {
  const t = useTranslations();

  return (
    <Box className={PRIMARY_FOOTER_CLASS_NAME.ROOT} component="footer">
      <Container className={PRIMARY_FOOTER_CLASS_NAME.CONTAINER}>
        <div className={PRIMARY_FOOTER_CLASS_NAME.ABOUT_US}>
          <ProdiggyLogoComponent />
          <Typography color='textSecondary'>
            { t('primary_footer_module.about_us') }
          </Typography>
        </div>
        <Stack
          className={PRIMARY_FOOTER_CLASS_NAME.NAVIGATION_BLOCKS}
          direction="row" 
          gap={10}
          justifyContent="end"
        >
          {
            FOOTER_NAVIGATION_BLOCKS.map(({ items, title }, index) => (
              <LabeledListComponent 
                items={items}
                key={`PrimaryFooterModule-LabeledListComponent-${title}-${index}`} 
                title={t(title as Translation)}
              />
            ))
          }
        </Stack>
      </Container>
      <Container className={PRIMARY_FOOTER_CLASS_NAME.BOTTOM}>
        <Typography color='textSecondary' variant='p4'>
          { 
            t('primary_footer_module.copyright', {
              year: CURRENT_YEAR
            }) 
          }
        </Typography>
      </Container>
    </Box>
  );
};

export default PrimaryFooterModule;
