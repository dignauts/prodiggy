import { ReactNode } from 'react';

import { BaseLinkAPI } from '#da/types/api/common.api';
import { BaseComponentProps } from '#da/types/props/common.props';

export interface NavigationListComponentProps<T extends BaseLinkAPI> extends BaseComponentProps {
  gap?: number;
  items: T[];
  render: (props: T) => ReactNode;
}
