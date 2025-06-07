import { BaseComponentProps } from '#da/types/props/common.props';

export type UserProps = {
  avatar?: string;
  role: string;
  username: string;
}

export type UserComponentProps = BaseComponentProps & UserProps;
