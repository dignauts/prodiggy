import { AnimatedComponentProps, BaseComponentProps } from '#da/types/props/common.props';

export type AnimatedFeatureCardComponentProps = AnimatedComponentProps & FeatureCardComponentProps;

export type FeatureCardProps = {
  description: string;
  icon: string;
  image?: string;
  title: string;
}

export type FeatureCardComponentProps = BaseComponentProps & FeatureCardProps;
