'use client';

import { useInView, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { AnimatedModuleCardComponent } from '#da/components/cards/ModuleCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import { modulesFakes } from '#da/fakes/modules.fakes';
import { MODULES_SECTION_CLASS_NAME } from '#da/modules/sections/ModulesSectionModule/modulesSection.constants';
import '#da/modules/sections/ModulesSectionModule/modulesSection.styles.scss';

const ModulesSectionModule = () => {
  const t = useTranslations();
  const listRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(listRef);

  return (
    <SectionComponent 
      className={MODULES_SECTION_CLASS_NAME.ROOT} 
      title={t('modules_section_module.title')}
    >
      <motion.div 
        animate={isInView ? 'visible' : 'hidden'}
        className={MODULES_SECTION_CLASS_NAME.LIST}
        initial="hidden"
        ref={listRef}
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
          modulesFakes.map((moduleCard, index) => (
            <AnimatedModuleCardComponent
              key={`ModulesSectionModule-ModuleCardComponent-${moduleCard.title}-${index}`}
              {...moduleCard}
            />
          ))
        }
      </motion.div>
    </SectionComponent>
  );
};

export default ModulesSectionModule;
