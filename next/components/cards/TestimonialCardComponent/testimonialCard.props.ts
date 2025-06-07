import { UserProps } from '#da/components/main/UserComponent/user.props';
import { AnimatedComponentProps, BaseComponentProps } from '#da/types/props/common.props';

export type AnimatedTestimonialCardComponentProps = AnimatedComponentProps & TestimonialCardComponentProps;

export type TestimonialCardProps = UserProps & {
  children?: string;
  rating: number;
}

export type TestimonialCardComponentProps = BaseComponentProps & TestimonialCardProps;
