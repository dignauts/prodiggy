'use client';

import { FC } from 'react';

import { SUBSCRIPTION_CARD_CLASS_NAME } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.constants';
import TickIconComponent from '#da/components/icons/tickIcon.component';
import BaseListComponent from '#da/components/lists/BaseListComponent';
import { transformStringsToChildren } from '#da/components/lists/BaseListComponent/baseList.utils';
import { SubscriptionListComponentProps } from '#da/components/lists/SubscriptionListComponent/subscriptionList.props';

const SubscriptionListComponent: FC<SubscriptionListComponentProps> = ({
  items
}) => items.length > 0 && (
  <BaseListComponent 
    className={SUBSCRIPTION_CARD_CLASS_NAME.LIST}
    icon={TickIconComponent}
    items={transformStringsToChildren(items)} 
  />
);

export default SubscriptionListComponent;
