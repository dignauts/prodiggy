'use client';

import Masonry from '@mui/lab/Masonry';
import { useTranslations } from 'next-intl';

import FeatureCardComponent from '#da/components/cards/FeatureCardComponent';
import BaseSectionHeaderComponent from '#da/components/headers/BaseSectionHeaderComponent';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';
import { whyUsCardsFakes } from '#da/fakes/whyUsCards.fakes';
import { WHY_US_SECTION_CLASS_NAME } from '#da/modules/sections/WhyUsSectionModule/whyUsSection.constants';

import '#da/modules/sections/WhyUsSectionModule/whyUsSection.styles.scss';

const WhyUsSectionModule = () => {
  const t = useTranslations();

  return (
    <BaseSectionComponent className={WHY_US_SECTION_CLASS_NAME.ROOT} color='secondary'>
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
            spacing={5}
          >
            {
              whyUsCardsFakes.map((card, index) => (
                <FeatureCardComponent 
                  {...card} 
                  key={`WhyUsSectionModule-FeatureCardComponent-${card.title}-${index}`} 
                />
              ))
            }
          </Masonry>
        )
      }
    </BaseSectionComponent>
  );
};

export default WhyUsSectionModule;
