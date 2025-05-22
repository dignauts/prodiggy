'use client';

import { useTranslations } from 'next-intl';

import ImageComponent from '#da/components/main/ImageComponent';
import SectionComponent from '#da/components/sections/SectionComponent/section.component';
import { ASSET } from '#da/constants/assets.constants';
import { HERO_SECTION_CLASS_NAME } from '#da/modules/sections/HeroSectionModule/heroSection.constants';
import { useHeroSectionButtons } from '#da/modules/sections/HeroSectionModule/useHeroSectionButtons';

const HeroSectionModule = () => {
  const t = useTranslations();
  const { buttons } = useHeroSectionButtons();

  return (
    <SectionComponent
      buttons={buttons} 
      chip={{ label: t('hero_section_module.chip') }}
      className={HERO_SECTION_CLASS_NAME.ROOT}
      description={t('hero_section_module.description')}
      title={t('hero_section_module.title')}
    >
      <ImageComponent
        centered
        fill
        maxWidth={1168}
        src={ASSET.DASHBOARD}
      />
    </SectionComponent>
  );
};

export default HeroSectionModule;
