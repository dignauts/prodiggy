import { LinkAPI } from '#da/types/api/common.api';
import { BaseComponentProps } from '#da/types/props/common.props';

export interface AnimatedAssociateCardComponentProps extends AssociateCardComponentProps {
  isInView: boolean;
}

export type AssociateCardProps = Omit<LinkAPI, 'isExternal'> & {
  logo: string;
}

export type AssociateCardComponentProps = BaseComponentProps & AssociateCardProps;
