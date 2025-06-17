import { BaseComponentProps } from '#da/types/props/common.props';

export type FaqProps = {
  children: string;
  title: string;
}

export type FaqComponentProps = BaseComponentProps & FaqProps;
