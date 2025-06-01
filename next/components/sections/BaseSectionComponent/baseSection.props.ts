import { ContainerProps } from '@mui/material';

import { BaseComponentWithChildrenProps } from '#da/types/props/common.props';

export interface BaseSectionRootAtomProps {
  color?: 'primary' | 'secondary' | 'tertiary';
}

export interface BaseSectionComponentProps 
  extends BaseComponentWithChildrenProps, BaseSectionRootAtomProps {
  containerWidth?: ContainerProps['maxWidth'];
}
