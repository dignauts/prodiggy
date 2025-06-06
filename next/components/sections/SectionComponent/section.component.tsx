import clsx from 'clsx';
import { FC } from 'react';

import BaseSectionHeaderComponent from '#da/components/headers/BaseSectionHeaderComponent';
import BaseSectionComponent from '#da/components/sections/BaseSectionComponent';
import { SECTION_CLASS_NAME } from '#da/components/sections/SectionComponent/section.constants';
import { SectionComponentProps } from '#da/components/sections/SectionComponent/section.props';
import '#da/components/sections/SectionComponent/section.styles.scss';

const SectionComponent: FC<SectionComponentProps> = ({
  buttons, chip, children, className, color, containerWidth, description, descriptionVariant, disableMarginBottom, sx, title
}) => (
  <BaseSectionComponent 
    className={clsx(
      SECTION_CLASS_NAME.ROOT, 
      className
    )}
    color={color}
    containerWidth={containerWidth}
    sx={sx}
  >
    <BaseSectionHeaderComponent 
      buttons={buttons}
      chip={chip}
      className={clsx(
        SECTION_CLASS_NAME.HEADER,
        !disableMarginBottom && SECTION_CLASS_NAME.WITH_MARGIN_BOTTOM
      )}
      description={description} 
      descriptionVariant={descriptionVariant}
      title={title}
    />
    { children }
  </BaseSectionComponent>
);

export default SectionComponent;
