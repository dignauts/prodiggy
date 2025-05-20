'use client';

import { useTranslations } from 'next-intl';

import SectionComponent from '#da/components/sections/SectionComponent/section.component';
import { HERO_SECTION_CLASS_NAME } from '#da/modules/sections/HeroSectionModule/heroSection.constants';

const HeroSectionModule = () => {
  const t = useTranslations();

  return (
    <SectionComponent
      chip={{ label: t('hero_section_module.chip') }} 
      className={HERO_SECTION_CLASS_NAME.ROOT}
      description={t('hero_section_module.description')}
      title={t('hero_section_module.title')}
    >
      Content
    </SectionComponent>
  );
};

export default HeroSectionModule;
