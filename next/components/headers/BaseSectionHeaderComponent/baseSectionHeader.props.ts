import { ChipProps } from '@mui/material';

import { BaseComponentProps } from '#da/types/props/common.props';

export interface BaseSectionHeaderComponentProps extends BaseComponentProps {
  chip?: Pick<ChipProps, 'color' | 'label' | 'size'>;
  description?: string;
  title: string;
}
