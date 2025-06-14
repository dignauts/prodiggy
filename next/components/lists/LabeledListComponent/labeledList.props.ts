import { NavigationListComponentProps } from '#da/components/lists/NavigationListComponent/navigationList.props';
import { LinkAPI } from '#da/types/api/common.api';

export interface LabeledListComponentProps extends Omit<NavigationListComponentProps<LinkAPI>, 'render'> {
  title: string;
}
