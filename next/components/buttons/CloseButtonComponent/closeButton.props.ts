import { IconButtonProps } from '@mui/material';

import { BaseComponentProps, BaseButtonWithTooltipProps } from '#da/types/props/common.props';

export type CloseButtonComponentProps = 
  BaseComponentProps & BaseButtonWithTooltipProps & Pick<IconButtonProps, 'color' | 'onClick' | 'size'>;
