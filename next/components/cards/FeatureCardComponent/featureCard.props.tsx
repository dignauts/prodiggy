import { BaseComponentProps } from '#da/types/props/common.props';

export interface AnimatedFeatureCardComponentProps extends FeatureCardComponentProps {
  isInView: boolean;
}

export type FeatureCardProps = {
  description: string;
  icon: string;
  image?: string;
  title: string;
}

export type FeatureCardComponentProps = BaseComponentProps & FeatureCardProps;
