'use client';

import Masonry from '@mui/lab/Masonry';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import FeatureCardComponent from '#da/components/cards/FeatureCardComponent';
import BaseSectionHeaderComponent from '#da/components/headers/BaseSectionHeaderComponent';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';
import { whyUsCardsFakes } from '#da/fakes/whyUsCards.fakes';
import { WHY_US_SECTION_CLASS_NAME } from '#da/modules/sections/WhyUsSectionModule/whyUsSection.constants';

import '#da/modules/sections/WhyUsSectionModule/whyUsSection.styles.scss';

const WhyUsSectionModule = () => {
  const t = useTranslations();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    margin: '0px 100px -50px 0px'
  });

  return (
    <BaseSectionComponent
      className={WHY_US_SECTION_CLASS_NAME.ROOT}
      color='secondary'
    >
      <BaseSectionHeaderComponent
        className={WHY_US_SECTION_CLASS_NAME.HEADER}
        description={t('why_us_section_module.description')} 
        title={t('why_us_section_module.title')}
      />
      {
        whyUsCardsFakes.length > 0 && (
          <Masonry
            className={WHY_US_SECTION_CLASS_NAME.MASONRY}
            columns={{ sm: 1, md: 2 }} 
            defaultColumns={2}
            defaultSpacing={5}
            ref={sectionRef}
            spacing={5}
          >
            {
              whyUsCardsFakes.map((card, index) => (
                <motion.div
                  animate={isInView ? { opacity: 1, scale: 1 } : undefined} 
                  initial={{ opacity: 0, scale: 0.1 }}
                  key={`WhyUsSectionModule-FeatureCardComponent-${card.title}-${index}`}
                  transition={{
                    duration: 0.45,
                    scale: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }
                  }}
                >
                  <FeatureCardComponent 
                    {...card} 
                  />
                </motion.div>
              ))
            }
          </Masonry>
        )
      }
    </BaseSectionComponent>
  );
};

export default WhyUsSectionModule;
