import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '#da/types/props/common.props';

export interface BaseModalHeaderComponentProps extends BaseComponentProps, PropsWithChildren {
  onClose: () => void;
}
