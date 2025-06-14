import { TypographyProps } from '@mui/material';

import { BaseComponentProps } from '#da/types/props/common.props';

export type SubscriptionPriceProps = {
  price: string;
  suffix?: string;
  suffixVariant?: TypographyProps['variant'];
  variant?: TypographyProps['variant'];
}

export type SubscriptionPriceComponentProps = BaseComponentProps & SubscriptionPriceProps;
