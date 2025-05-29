import { Box, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { FC } from 'react';

import ButtonComponent from '#da/components/buttons/ButtonComponent';
import { BASE_SECTION_HEADER_CLASS_NAME } from '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.constants';
import { BaseSectionHeaderComponentProps } from '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.props';
import ChipComponent from '#da/components/main/ChipComponent';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.styles.scss';

const BaseSectionHeaderComponent: FC<BaseSectionHeaderComponentProps> = ({
  buttons, chip, className, description, descriptionVariant = 'p2', sx, title
}) => (
  <Box className={clsx(BASE_SECTION_HEADER_CLASS_NAME.ROOT, className)} sx={sx}>
    {
      chip?.label && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
          }}
        >
          <ChipComponent
            className={BASE_SECTION_HEADER_CLASS_NAME.CHIP}
            color={chip?.color || 'default'}
            label={chip.label}
            size={chip?.size || 'medium'}
          />
        </motion.div>
      )
    }
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.2,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
      }}
    >
      <Typography
        className={BASE_SECTION_HEADER_CLASS_NAME.TITLE}
        component="h2" 
        fontWeight={FONT_WEIGHT.REGULAR}
        variant='h1'
      >
        { title }
      </Typography>
    </motion.div>
    {
      description && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            scale: { type: 'spring', visualDuration: 0.45, bounce: 0.5 }
          }}
        >
          <Typography
            className={BASE_SECTION_HEADER_CLASS_NAME.DESCRIPTION}
            color='textSecondary'
            component="h3"
            fontWeight={FONT_WEIGHT.REGULAR}
            variant={descriptionVariant}
          >
            { description }
          </Typography>
        </motion.div>
      )
    }
    {
      buttons && buttons.length > 0 && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 }
          }}
        >
          <Stack
            className={BASE_SECTION_HEADER_CLASS_NAME.BUTTONS}
            direction="row"
            gap={20/8}
            justifyContent="center"
          >
            {
              buttons.map((button, index) => (
                <ButtonComponent 
                  {...button}
                  key={`BaseSectionHeaderComponent-Button-${index}`}
                  size='large'
                />
              ))
            }
          </Stack>
        </motion.div>
      )
    }
  </Box>
);

export default BaseSectionHeaderComponent;
