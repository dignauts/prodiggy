import { LinkAPI } from '#da/types/api/common.api';
import { TranslatedLink } from '#da/types/i18n.types';
import { BaseComponentProps } from '#da/types/props/common.props';

type BaseListItem = {
  onClick?: () => void;
  to?: string;
}

type LocaleListItem = Omit<TranslatedLink, 'to'> & BaseListItem;

type ListItem = Omit<LinkAPI, 'to'> & BaseListItem;

export interface ListComponentProps extends BaseComponentProps {
  items:  Array<LocaleListItem | ListItem>;
  showActiveListItem?: boolean;
}
