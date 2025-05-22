import { ContainerProps } from '@mui/material';

import { BaseComponentWithChildrenProps } from '#da/types/props/common.props';

export interface BaseSectionComponentProps extends BaseComponentWithChildrenProps {
  containerWidth?: ContainerProps['maxWidth'];
}
