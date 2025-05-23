import { useTranslations } from 'next-intl';

import BaseSectionHeaderComponent from '#da/components/headers/BaseSectionHeaderComponent';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';
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
    </BaseSectionComponent>
  );
};

export default WhyUsSectionModule;
