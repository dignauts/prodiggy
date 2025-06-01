import { LinkAPI } from '#da/types/api/common.api';
import { AnimatedComponentProps, BaseComponentProps } from '#da/types/props/common.props';

export type AnimatedAssociateCardComponentProps = AnimatedComponentProps & AssociateCardComponentProps;

export type AssociateCardProps = Omit<LinkAPI, 'isExternal'> & {
  logo: string;
}

export type AssociateCardComponentProps = BaseComponentProps & AssociateCardProps;
