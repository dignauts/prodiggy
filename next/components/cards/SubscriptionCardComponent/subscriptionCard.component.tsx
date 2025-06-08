'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { SUBSCRIPTION_CARD_CLASS_NAME } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.constants';
import CardContainerComponent from '#da/components/containers/CardContainerComponent';
import '#da/components/cards/SubscriptionCardComponent/subscriptionCard.styles.scss';
import SubscriptionPriceComponent from '#da/components/main/SubscriptionPriceComponent';

const SubscriptionCardComponent = () => {
  const t = useTranslations();

  return (
    <CardContainerComponent
      borderColor='red' 
      chipLabel='Recommended'
      className={SUBSCRIPTION_CARD_CLASS_NAME.ROOT}
    >
      <Typography 
        className={SUBSCRIPTION_CARD_CLASS_NAME.SUBSCRIPTION_NAME}
        component="h2" 
        variant='h4'
      >
        Subscription name
      </Typography>
      <SubscriptionPriceComponent 
        className={SUBSCRIPTION_CARD_CLASS_NAME.PRICE}
        price='$49'
        suffix='/mo'
      />
    </CardContainerComponent>
  );
};

export default SubscriptionCardComponent;
