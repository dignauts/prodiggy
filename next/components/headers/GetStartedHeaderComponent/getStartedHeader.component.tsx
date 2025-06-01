'use client';

import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import ButtonComponent from '#da/components/buttons/ButtonComponent';
import { GET_STARTED_HEADER_CLASS_NAME } from '#da/components/headers/GetStartedHeaderComponent/getStartedHeader.constants';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import '#da/components/headers/GetStartedHeaderComponent/getStartedHeader.styles.scss';

const GetStartedHeaderComponent = () => {
  const t = useTranslations();

  return (
    <Stack
      className={GET_STARTED_HEADER_CLASS_NAME.ROOT} 
      direction="column"
      justifyContent="space-between"
    >
      <div className={GET_STARTED_HEADER_CLASS_NAME.INFORMATION}>
        <Typography
          className={GET_STARTED_HEADER_CLASS_NAME.TITLE}
          component="h2"
          fontWeight={FONT_WEIGHT.REGULAR}
          variant='h2Small'
        >
          { t('get_started_section_module.title') }
        </Typography>
        <Typography className={GET_STARTED_HEADER_CLASS_NAME.DESCRIPTION} variant='p3'>
          { t('get_started_section_module.description') }
        </Typography>
      </div>
      <ButtonComponent fullWidth size='large'>
        { t('button.get_started_for_free') }
      </ButtonComponent>
    </Stack>
  );
};

export default GetStartedHeaderComponent;
