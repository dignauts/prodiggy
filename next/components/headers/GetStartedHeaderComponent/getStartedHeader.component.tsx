'use client';

import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { motion } from 'motion/react';
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
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
          }}
        >
          <Typography
            className={GET_STARTED_HEADER_CLASS_NAME.TITLE}
            component="h2"
            fontWeight={FONT_WEIGHT.REGULAR}
            variant='h2Small'
          >
            { t('get_started_section_module.title') }
          </Typography>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            scale: { type: 'spring', visualDuration: 0.45, bounce: 0.5 }
          }}
        >
          <Typography className={GET_STARTED_HEADER_CLASS_NAME.DESCRIPTION} variant='p3'>
            { t('get_started_section_module.description') }
          </Typography>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 }
        }}
      >
        <ButtonComponent fullWidth size='large'>
          { t('button.get_started_for_free') }
        </ButtonComponent>
      </motion.div>
    </Stack>
  );
};

export default GetStartedHeaderComponent;
