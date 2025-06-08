'use client';

import { useTranslations } from 'next-intl';

import SubscriptionCardComponent from '#da/components/cards/SubscriptionCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';

const PricingSectionModule = () => {
  const t = useTranslations();

  return (
    <SectionComponent color='tertiary' title={t('pricing_section_module.title')}>
      <SubscriptionCardComponent />
    </SectionComponent>
  );
};

export default PricingSectionModule;
