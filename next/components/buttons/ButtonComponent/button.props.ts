import { ButtonProps as MuiButtonProps } from '@mui/material';

import { BaseLinkAPI } from '#da/types/api/common.api';

export interface ButtonComponentProps extends MuiButtonProps, Partial<BaseLinkAPI> {
  isLink?: boolean;
}

export type ButtonProps = Pick<ButtonComponentProps,
 'children' | 'color' | 'isLink' | 'isExternal' | 'onClick' | 'size' | 'to' | 'variant'
>;
