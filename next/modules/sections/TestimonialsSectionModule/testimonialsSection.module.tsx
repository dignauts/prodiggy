'use client';

import Masonry from '@mui/lab/Masonry';
import { useInView, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { AnimatedTestimonialCardComponent } from '#da/components/cards/TestimonialCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import { testimonialsFakes } from '#da/fakes/testimonials.fakes';
import { TESTIMONIALS_SECTION_CLASS_NAME } from '#da/modules/sections/TestimonialsSectionModule/testimonialsSection.constants';
import '#da/modules/sections/TestimonialsSectionModule/testimonialsSection.styles.scss';

const TestimonialsSectionModule = () => {
  const t = useTranslations();
  const masonryRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(masonryRef);

  return testimonialsFakes.length > 0 && (
    <SectionComponent 
      className={TESTIMONIALS_SECTION_CLASS_NAME.ROOT}
      color='tertiary'
      containerWidth='lg' 
      title={t('testimonials_section_module.title')}
    >
      <Masonry
        animate={isInView ? 'visible' : 'hidden'}
        className={TESTIMONIALS_SECTION_CLASS_NAME.MASONRY}
        columns={{ xs: 1, sm: 2, lg: 3 }}
        component={motion.div}
        defaultColumns={3}
        initial="hidden"
        ref={masonryRef}
        spacing={2.5}
        variants={{  
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4
            }
          } 
        }}
      >
        {
          testimonialsFakes.map((card, index) => (
            <AnimatedTestimonialCardComponent
              isInView={isInView}
              key={`TestimonialsSectionModule-AnimatedTestimonialCardComponent-${card.username}-${index}`}
              {...card}
            />
          ))
        }
      </Masonry>
    </SectionComponent>
  );
};

export default TestimonialsSectionModule;
