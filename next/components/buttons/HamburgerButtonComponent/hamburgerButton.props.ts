import { MouseEventHandler } from 'react';

import { Translation } from '#da/types/i18n.types';
import { BaseComponentProps } from '#da/types/props/common.props';

export interface HamburgerButtonComponentProps extends BaseComponentProps {
  enableTooltip?: boolean;
  isEnabled?: boolean;
  labels?: {
    [label in 'closed' | 'open']: Translation;
  };
  onEnable?: MouseEventHandler<HTMLButtonElement>;
}
