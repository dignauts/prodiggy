import { ChipProps, TypographyProps } from '@mui/material';

import { ButtonProps } from '#da/components/buttons/ButtonComponent/button.props';
import { BaseComponentProps } from '#da/types/props/common.props';

export interface BaseSectionHeaderComponentProps extends BaseComponentProps {
  buttons?: ButtonProps[];
  chip?: Pick<ChipProps, 'color' | 'label' | 'size'>;
  description?: string;
  descriptionVariant?: TypographyProps['variant'];
  title: string;
}
