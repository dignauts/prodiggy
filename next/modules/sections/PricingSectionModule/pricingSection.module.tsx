'use client';

import { Box } from '@mui/material';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { AnimatedSubscriptionCardComponent } from '#da/components/cards/SubscriptionCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import { subscriptionsFakes } from '#da/fakes/subscriptions.fakes';
import { PRICING_SECTION_CLASS_NAME } from '#da/modules/sections/PricingSectionModule/pricingSection.constants';
import '#da/modules/sections/PricingSectionModule/pricingSection.styles.scss';

const PricingSectionModule = () => {
  const t = useTranslations();
  const listRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(listRef);

  return (
    <SectionComponent 
      className={PRICING_SECTION_CLASS_NAME.ROOT}
      color='tertiary' 
      title={t('pricing_section_module.title')}
    >
      <Box className={PRICING_SECTION_CLASS_NAME.LIST} ref={listRef}>
        {
          subscriptionsFakes.map(
            (subscriptionCard, index) => (
              <AnimatedSubscriptionCardComponent 
                isInView={isInView}
                key={`PricingSectionModule-SubscriptionCardComponent-${subscriptionCard.name}-${index}`}
                {...subscriptionCard}
              />
            )
          )
        }
      </Box>
    </SectionComponent>
  );
};

export default PricingSectionModule;
