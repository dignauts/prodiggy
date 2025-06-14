'use client';

import { Typography } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ButtonComponent from '#da/components/buttons/ButtonComponent';
import { SUBSCRIPTION_CARD_CLASS_NAME } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.constants';
import { SubscriptionCardComponentProps } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.props';
import CardContainerComponent from '#da/components/containers/CardContainerComponent';
import SubscriptionListComponent from '#da/components/lists/SubscriptionListComponent';
import SubscriptionPriceComponent from '#da/components/main/SubscriptionPriceComponent';

import '#da/components/cards/SubscriptionCardComponent/subscriptionCard.styles.scss';

const SubscriptionCardComponent: FC<SubscriptionCardComponentProps> = ({
  className, borderColor, chipLabel, disableChip, items, name, price, suffix, sx, to
}) => {
  const t = useTranslations();

  return (
    <CardContainerComponent
      borderColor={borderColor}
      chipLabel={chipLabel}
      className={clsx(SUBSCRIPTION_CARD_CLASS_NAME.ROOT, className)}
      disableChip={disableChip}
      sx={sx}
    >
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.5, bounce: 0.45 },
          stiffness: 500
        }}
      >
        <div className={SUBSCRIPTION_CARD_CLASS_NAME.INFORMATION}>
          <Typography 
            className={SUBSCRIPTION_CARD_CLASS_NAME.SUBSCRIPTION_NAME}
            component="h2" 
            variant='h4'
          >
            { name }
          </Typography>
          <SubscriptionPriceComponent 
            className={SUBSCRIPTION_CARD_CLASS_NAME.PRICE}
            price={price}
            suffix={suffix}
          />
          <SubscriptionListComponent items={items} />
        </div>
      </motion.div>
      <div className={SUBSCRIPTION_CARD_CLASS_NAME.FOOTER}>
        <ButtonComponent
          className={SUBSCRIPTION_CARD_CLASS_NAME.BUTTON}
          fullWidth
          isLink
          size='large'
          to={to}
        >
          { t('button.get_started') }
        </ButtonComponent>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.5, bounce: 0.45 },
            stiffness: 500
          }}
        >
          <Typography
            className={SUBSCRIPTION_CARD_CLASS_NAME.NOTICE}
            color='textSecondary'
            textAlign="center"
            variant='p4'
          >
            { t('pricing_section_module.notice') }
          </Typography>
        </motion.div>
      </div>
    </CardContainerComponent>
  );
};

export default SubscriptionCardComponent;
