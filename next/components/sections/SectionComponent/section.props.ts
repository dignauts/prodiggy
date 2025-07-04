import { BaseSectionHeaderComponentProps } from '#da/components/headers/BaseSectionHeaderComponent/baseSectionHeader.props';
import { BaseSectionComponentProps } from '#da/components/sections/BaseSectionComponent/baseSection.props';
import { BaseComponentWithChildrenProps } from '#da/types/props/common.props';

export interface SectionComponentProps 
  extends BaseComponentWithChildrenProps, 
  Pick<BaseSectionHeaderComponentProps, 'buttons' | 'chip' | 'description' | 'descriptionVariant' | 'title'>,
  Pick<BaseSectionComponentProps, 'color' | 'containerWidth'> {
  disableMarginBottom?: boolean;
}
