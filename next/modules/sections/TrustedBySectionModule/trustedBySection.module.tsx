'use client';

import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { AnimatedAssociateCardComponent } from '#da/components/cards/AssociateCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import MarqueeSliderComponent from '#da/components/sliders/MarqueeSliderComponent/marqueeSlider.component';
import { associatesFakes } from '#da/fakes/associates.fakes';
import { TRUSTED_BY_SECTION_CLASS_NAME } from '#da/modules/sections/TrustedBySectionModule/trustedBySection.constants';

const TrustedBySectionModule = () => {
  const t = useTranslations();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sliderRef);

  return associatesFakes.length > 0 && (
    <SectionComponent 
      className={TRUSTED_BY_SECTION_CLASS_NAME.ROOT}
      description={t('trusted_by_section_module.description')}
      descriptionVariant='h4' 
      title={t('trusted_by_section_module.title')}
    >
      <MarqueeSliderComponent 
        className={TRUSTED_BY_SECTION_CLASS_NAME.SLIDER} 
        pauseOnHover
        ref={sliderRef}
      >
        {
          associatesFakes.map((associate) => (
            <AnimatedAssociateCardComponent
              isInView={isInView}
              key={`TrustedBySectionModule-AssociateCardComponent-${associate.name}`}
              {...associate} />
          ))
        }
      </MarqueeSliderComponent>
    </SectionComponent>
  );
};

export default TrustedBySectionModule;
