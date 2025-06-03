'use client';

import { Paper, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { MODULE_CARD_CLASS_NAME } from '#da/components/cards/ModuleCardComponent/moduleCard.constants';
import { ModuleCardComponentProps } from '#da/components/cards/ModuleCardComponent/moduleCard.props';
import { useModuleCardIcon } from '#da/components/cards/ModuleCardComponent/useModuleCardIcon';
import { FONT_WEIGHT } from '#da/theme/constants.theme';

import '#da/components/cards/ModuleCardComponent/moduleCard.styles.scss';

const ModuleCardComponent: FC<ModuleCardComponentProps> = ({
  className, description, iconType, sx, title
}) => {
  const IconComponent = useModuleCardIcon(iconType);

  return (
    <Paper className={clsx(MODULE_CARD_CLASS_NAME.ROOT, className)} sx={sx}>
      <div className={MODULE_CARD_CLASS_NAME.ICON}>
        <IconComponent fontSize='large' />
      </div>
      <Typography
        className={MODULE_CARD_CLASS_NAME.TITLE}
        component="h2"
        fontWeight={FONT_WEIGHT.SEMIBOLD}
        variant='h3'
      >
        { title }
      </Typography>
      <Typography 
        className={MODULE_CARD_CLASS_NAME.DESCRIPTION} 
        color='textSecondary'
        variant='p3'
      >
        { description }
      </Typography>
    </Paper>
  );
};

export default ModuleCardComponent;
