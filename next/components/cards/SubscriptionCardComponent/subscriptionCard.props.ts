import { CardContainerProps } from '#da/components/containers/CardContainerComponent/cardContainer.props';
import { SubscriptionListComponentProps } from '#da/components/lists/SubscriptionListComponent/subscriptionList.props';
import { SubscriptionPriceProps } from '#da/components/main/SubscriptionPriceComponent/subscriptionPrice.props';
import { BaseLinkAPI } from '#da/types/api/common.api';
import { AnimatedComponentProps, BaseComponentProps } from '#da/types/props/common.props';

export type SubscriptionCardProps = 
  Pick<BaseLinkAPI, 'to'> & 
  Pick<SubscriptionPriceProps, 'price' | 'suffix'> &
  CardContainerProps &
  SubscriptionListComponentProps & {
    name: string;
  }

export type SubscriptionCardComponentProps = BaseComponentProps & SubscriptionCardProps;

export type AnimatedSubscriptionCardComponentProps = AnimatedComponentProps & SubscriptionCardComponentProps;
