import { Paper, Typography } from '@mui/material';
import { FC } from 'react';

import { FeatureCardComponentProps } from '#da/components/cards/FeatureCardComponent/featureCard.props';
import ImageComponent from '#da/components/main/ImageComponent';
import { FONT_WEIGHT } from '#da/theme/constants.theme';

const FeatureCardComponent: FC<FeatureCardComponentProps> = ({
  className, description, icon, image, sx, title
}) => (
  <Paper
    sx={{
      maxWidth: 650
    }}
  >
    <ImageComponent
      alt=''
      height={40}
      src={icon}
      width={40} 
    />
    <Typography
      fontWeight={FONT_WEIGHT.SEMIBOLD} sx={{ mb: 12 / 8 }}
      variant='h4'>{ title }
    </Typography>
    <Typography sx={{ color: 'var(--mui-palette-grey-300)' }} variant='p2'>dsds</Typography>
  </Paper>
);

export default FeatureCardComponent;
