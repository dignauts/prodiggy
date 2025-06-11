import { BaseListItemProps } from '#da/components/items/BaseListItemComponent/baseListItem.props';
import { BaseComponentProps } from '#da/types/props/common.props';

export type BaseListProps = Pick<BaseListItemProps, 'icon'> & {
  items: Pick<BaseListItemProps, 'children'>[];
}

export type BaseListComponentProps = BaseComponentProps & BaseListProps;
