import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { FeatureCardComponentProps } from '#da/components/cards/FeatureCardComponent/featureCard.props';
import { FEATURE_CARD_HEADER_CLASS_NAME } from '#da/components/headers/FeatureCardHeaderComponent/featureCardHeader.constants';
import ImageComponent from '#da/components/main/ImageComponent';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import '#da/components/headers/FeatureCardHeaderComponent/featureCardHeader.styles.scss';

const FeatureCardHeaderComponent: FC<Omit<FeatureCardComponentProps, 'image'>> = ({
  className, description, icon, sx, title
}) => (
  <Box className={clsx(FEATURE_CARD_HEADER_CLASS_NAME.ROOT, className)} sx={sx}>
    <ImageComponent
      alt=''
      className={FEATURE_CARD_HEADER_CLASS_NAME.ICON}
      height={40}
      src={icon}
      width={40} 
    />
    <Typography 
      className={FEATURE_CARD_HEADER_CLASS_NAME.TITLE} 
      component="h2"
      fontWeight={FONT_WEIGHT.SEMIBOLD}
      variant='h4'
    >
      { title }
    </Typography>
    <Typography className={FEATURE_CARD_HEADER_CLASS_NAME.DESCRIPTION} variant='p2'>
      { description }
    </Typography>
  </Box>
);

export default FeatureCardHeaderComponent;
