import { BaseComponentProps } from '#da/types/props/common.props';

export type ModuleCardIconType = 'blocks' | 'bolt' | 'shield';

export type ModuleCardProps = {
  description: string;
  iconType: ModuleCardIconType;
  title: string;
}

export type ModuleCardComponentProps = BaseComponentProps & ModuleCardProps;
