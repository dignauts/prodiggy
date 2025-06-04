import { ReactNode } from 'react';

import { Style } from '#da/types/ui.types';

export interface AnimatedComponentProps {
  delay?: number;
  isInView?: boolean;
}

export interface BaseComponentProps {
  className?: string;
  sx?: Style;
}

export type BaseComponentWithChildrenProps = BaseComponentProps & {
  children: ReactNode | ReactNode[];
}

export interface BaseButtonWithTooltipProps {
  enableTooltip?: boolean;
}
