'use client';

import { motion } from 'motion/react';
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
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.1 }}
        transition={{
          duration: 0.45,
          scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
        }}
      >
        <ImageComponent
          centered
          fill
          maxWidth={1168}
          priority
          src={ASSET.DASHBOARD}
        />
      </motion.div>
    </SectionComponent>
  );
};

export default HeroSectionModule;
