import { Style } from '#da/types/ui.types';

export interface BaseComponentProps {
  className?: string;
  sx?: Style;
}

export interface BaseButtonWithTooltipProps {
  enableTooltip?: boolean;
}
