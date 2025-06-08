import { paperClasses } from '@mui/material';

import { CARD_CONTAINER_CLASS_NAME } from '#da/components/containers/CardContainerComponent/cardContainer.constants';
import { CardContainerStylesProps } from '#da/components/containers/CardContainerComponent/cardContainer.props';
import { Styles } from '#da/types/ui.types';

export const cardContainerStyles = ({
  borderColor
}: CardContainerStylesProps): Styles<'chip' | 'root'> => ({
  chip: {
    backgroundColor: borderColor
  },
  root: {
    [`&.${paperClasses.root}.${CARD_CONTAINER_CLASS_NAME.ROOT}`]: {
      borderColor
    }
  }
});
