'use client';

import { Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { SUBSCRIPTION_PRICE_CLASS_NAME } from '#da/components/main/SubscriptionPriceComponent/subscriptionPrice.constants';
import { SubscriptionPriceComponentProps } from '#da/components/main/SubscriptionPriceComponent/subscriptionPrice.props';
import { FONT_WEIGHT } from '#da/theme/constants.theme';

const SubscriptionPriceComponent: FC<SubscriptionPriceComponentProps> = ({
  className, price, suffix, suffixVariant = 'h5', sx, variant = 'price'
}) => (
  <Typography 
    className={clsx(SUBSCRIPTION_PRICE_CLASS_NAME.ROOT, className)} 
    fontWeight={FONT_WEIGHT.SEMIBOLD}
    sx={sx}
    variant={variant}
  >
    { price }
    {
      suffix && (
        <Typography 
          className={SUBSCRIPTION_PRICE_CLASS_NAME.SUFFIX}
          component="span"
          fontWeight="inherit" 
          variant={suffixVariant}
        >
          { suffix }
        </Typography>
      )
    }
  </Typography>
);

export default SubscriptionPriceComponent;
