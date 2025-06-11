'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import ButtonComponent from '#da/components/buttons/ButtonComponent';
import { SUBSCRIPTION_CARD_CLASS_NAME } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.constants';
import CardContainerComponent from '#da/components/containers/CardContainerComponent';
import SubscriptionListComponent from '#da/components/lists/SubscriptionListComponent';
import SubscriptionPriceComponent from '#da/components/main/SubscriptionPriceComponent';
import '#da/components/cards/SubscriptionCardComponent/subscriptionCard.styles.scss';

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
      <SubscriptionListComponent 
        items={[
          {
            children: '1'
          },
          {
            children: '2'
          }
        ]} 
      />
      <ButtonComponent
        className={SUBSCRIPTION_CARD_CLASS_NAME.BUTTON}
        fullWidth
        size='large'
      >
        { t('button.get_started') }
      </ButtonComponent>
      <Typography
        className={SUBSCRIPTION_CARD_CLASS_NAME.NOTICE}
        color='textSecondary'
        textAlign="center"
        variant='p4'
      >
        { t('pricing_section_module.notice') }
      </Typography>
    </CardContainerComponent>
  );
};

export default SubscriptionCardComponent;
