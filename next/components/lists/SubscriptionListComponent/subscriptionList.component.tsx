'use client';

import { FC } from 'react';

import { SUBSCRIPTION_CARD_CLASS_NAME } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.constants';
import TickIconComponent from '#da/components/icons/tickIcon.component';
import BaseListComponent from '#da/components/lists/BaseListComponent';
import { BaseListComponentProps } from '#da/components/lists/BaseListComponent/baseList.props';

const SubscriptionListComponent: FC<Pick<BaseListComponentProps, 'items'>> = ({
  items
}) => (
  <BaseListComponent 
    className={SUBSCRIPTION_CARD_CLASS_NAME.LIST}
    icon={TickIconComponent}
    items={items} 
  />
);

export default SubscriptionListComponent;
