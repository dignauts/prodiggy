import clsx from 'clsx';
import { FC } from 'react';

import BaseSectionHeaderComponent from '#da/components/headers/BaseSectionHeaderComponent';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';
import { SECTION_CLASS_NAME } from '#da/components/sections/SectionComponent/section.constants';
import { SectionComponentProps } from '#da/components/sections/SectionComponent/section.props';

const SectionComponent: FC<SectionComponentProps> = ({
  chip, children, className, description, sx, title
}) => (
  <BaseSectionComponent className={clsx(SECTION_CLASS_NAME.ROOT, className)} sx={sx}>
    <BaseSectionHeaderComponent 
      chip={chip}
      className={SECTION_CLASS_NAME.HEADER} 
      description={description}
      title={title}
    />
    { children }
  </BaseSectionComponent>
);

export default SectionComponent;
