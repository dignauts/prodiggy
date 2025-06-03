'use client';

import { useTranslations } from 'next-intl';

import ModuleCardComponent from '#da/components/cards/ModuleCardComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import { modulesCardsFakes } from '#da/fakes/modulesCards.fakes';
import { MODULES_SECTION_CLASS_NAME } from '#da/modules/sections/ModulesSectionModule/modulesSection.constants';
import '#da/modules/sections/ModulesSectionModule/modulesSection.styles.scss';

const ModulesSectionModule = () => {
  const t = useTranslations();

  return (
    <SectionComponent 
      className={MODULES_SECTION_CLASS_NAME.ROOT} 
      title={t('modules_section_module.title')}
    >
      <div className={MODULES_SECTION_CLASS_NAME.LIST}>
        {
          modulesCardsFakes.map((moduleCard, index) => (
            <ModuleCardComponent
              key={`ModulesSectionModule-ModuleCardComponent-${moduleCard.title}-${index}`}
              {...moduleCard}
            />
          ))
        }
      </div>
    </SectionComponent>
  );
};

export default ModulesSectionModule;
