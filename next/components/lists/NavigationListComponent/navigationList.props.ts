import { LinkComponentProps } from '#da/components/main/LinkComponent/link.props';
import { LinkAPI } from '#da/types/api/common.api';

export interface NavigationListComponentProps {
  gap?: number;
  items: LinkAPI[];
  linkComponentProps?: Omit<LinkComponentProps, 'children'>;
}
