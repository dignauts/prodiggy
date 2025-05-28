import { Paper } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { FEATURE_CARD_CLASS_NAME } from '#da/components/cards/FeatureCardComponent/featureCard.constants';
import { FeatureCardComponentProps } from '#da/components/cards/FeatureCardComponent/featureCard.props';
import FeatureCardHeaderComponent from '#da/components/headers/FeatureCardHeaderComponent/featureCardHeader.component';
import ImageComponent from '#da/components/main/ImageComponent';
import '#da/components/cards/FeatureCardComponent/featureCard.styles.scss';

const FeatureCardComponent: FC<FeatureCardComponentProps> = ({
  className, description, icon, image, sx, title
}) => (
  <Paper
    className={clsx(
      FEATURE_CARD_CLASS_NAME.ROOT,
      image && FEATURE_CARD_CLASS_NAME.WITH_IMAGE,
      className
    )}
    sx={sx}
  >
    <FeatureCardHeaderComponent
      className={FEATURE_CARD_CLASS_NAME.HEADER}
      description={description}
      icon={icon}
      title={title} 
    />
    {
      image && (
        <ImageComponent
          className={FEATURE_CARD_CLASS_NAME.IMAGE}
          fill
          maxWidth="100%"
          src={image}
        />
      )
    }
  </Paper>
);

export default FeatureCardComponent;
