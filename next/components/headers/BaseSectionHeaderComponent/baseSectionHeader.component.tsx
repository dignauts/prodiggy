import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { BASE_SECTION_HEADER_CLASS_NAME } from '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.constants';
import { BaseSectionHeaderComponentProps } from '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.props';
import ChipComponent from '#da/components/main/ChipComponent';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.styles.scss';

const BaseSectionHeaderComponent: FC<BaseSectionHeaderComponentProps> = ({
  chip, className, description, sx, title
}) => (
  <Box className={clsx(BASE_SECTION_HEADER_CLASS_NAME.ROOT, className)} sx={sx}>
    {
      chip?.label && (
        <ChipComponent
          className={BASE_SECTION_HEADER_CLASS_NAME.CHIP}
          color={chip?.color || 'default'}
          label={chip.label}
          size={chip?.size || 'medium'}
        />
      )
    }
    <Typography
      className={BASE_SECTION_HEADER_CLASS_NAME.TITLE}
      component="h2" 
      fontWeight={FONT_WEIGHT.REGULAR}
      variant='h1'
    >
      { title }
    </Typography>
    {
      description && (
        <Typography
          className={BASE_SECTION_HEADER_CLASS_NAME.DESCRIPTION}
          color='textSecondary'
          variant='p2'
        >
          { description }
        </Typography>
      )
    }
  </Box>
);

export default BaseSectionHeaderComponent;
