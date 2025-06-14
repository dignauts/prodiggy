import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { BaseComponentProps } from '#da/types/props/common.props';

export type BaseListItemProps = {
  children: string;
  icon?: FC<SvgIconProps>;
}

export type BaseListItemComponentProps = BaseComponentProps & BaseListItemProps;
