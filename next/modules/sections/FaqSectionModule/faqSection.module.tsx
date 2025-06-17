import { Typography } from '@mui/material';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import FaqComponent from '#da/components/main/FaqComponent';
import SectionComponent from '#da/components/sections/SectionComponent';
import { faqFakes } from '#da/fakes/faq.fakes';
import { FAQ_SECTION_CLASS_NAME } from '#da/modules/sections/FaqSectionModule/faqSection.constants';

import '#da/modules/sections/FaqSectionModule/faqSection.styles.scss';

const FaqSectionModule = () => {
  const t = useTranslations();

  return (
    <SectionComponent
      className={FAQ_SECTION_CLASS_NAME.ROOT}
      description={t('faq_section_module.description')}
      title={t('faq_section_module.title')}
    >
      <ul className={clsx('prodiggy-list--reset', FAQ_SECTION_CLASS_NAME.LIST)}>
        {
          faqFakes.length > 0 ? faqFakes.map((faq, index) => (
            <FaqComponent 
              className={FAQ_SECTION_CLASS_NAME.ITEM}
              key={`FaqSectionModule-FaqComponent-${faq.title}-${index}`}
              {...faq}
            />
          )) : (
            <Typography className={FAQ_SECTION_CLASS_NAME.EMPTY_LIST} textAlign="center">
              { t('common.no_results') }
            </Typography>
          )
        }
      </ul>
    </SectionComponent>
  );
};

export default FaqSectionModule;
