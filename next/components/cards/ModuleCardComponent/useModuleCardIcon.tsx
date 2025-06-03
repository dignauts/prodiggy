import { SvgIconProps } from '@mui/material';
import { FC } from 'react';

import { ModuleCardIconType } from '#da/components/cards/ModuleCardComponent/moduleCard.props';
import BlocksIconComponent from '#da/components/icons/blocksIcon.component';
import BoltIconComponent from '#da/components/icons/boltIcon.component';
import ShieldIconComponent from '#da/components/icons/shieldIcon.component';

const icons: Record<ModuleCardIconType, FC<SvgIconProps>> = {
  blocks: BlocksIconComponent,
  bolt: BoltIconComponent,
  shield: ShieldIconComponent
};

export const useModuleCardIcon = (iconType: ModuleCardIconType): FC<SvgIconProps> => (
  icons[iconType] ?? BoltIconComponent
);
