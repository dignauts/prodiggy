'use client';

import { Paper } from '@mui/material';
import { FC } from 'react';

import { CARD_CONTAINER_CLASS_NAME } from '#da/components/containers/CardContainerComponent/cardContainer.constants';
import { CardContainerComponentProps } from '#da/components/containers/CardContainerComponent/cardContainer.props';
import { cardContainerStyles } from '#da/components/containers/CardContainerComponent/cardContainer.styles';
import ChipComponent from '#da/components/main/ChipComponent';
import { mergeStyles } from '#da/theme/utils/mergeStyles.util';

import '#da/components/containers/CardContainerComponent/cardContainer.styles.scss';

const CardContainerComponent: FC<CardContainerComponentProps> = ({
  borderColor = 'var(--mui-palette-grey-600)', children, chipLabel, className, disableChip, sx
}) => (
  <Paper 
    classes={{ root: CARD_CONTAINER_CLASS_NAME.ROOT }} 
    className={className}
    sx={mergeStyles(cardContainerStyles({ borderColor }).root, sx)}
    variant='elevation'
  >
    {
      !disableChip && chipLabel && (
        <ChipComponent
          className={CARD_CONTAINER_CLASS_NAME.CHIP}
          label={chipLabel}
          size='small'
          sx={cardContainerStyles({ borderColor }).chip}
        />
      )
    }
    { children }
  </Paper>
);

export default CardContainerComponent;
