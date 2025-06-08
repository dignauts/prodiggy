import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '#da/types/props/common.props';

export type CardContainerProps = {
  borderColor?: string;
  chipLabel?: string;
  disableChip?: boolean;
}

export type CardContainerStylesProps = Partial<Pick<CardContainerProps, 'borderColor'>>;

export type CardContainerComponentProps =
  BaseComponentProps & CardContainerProps & PropsWithChildren;
