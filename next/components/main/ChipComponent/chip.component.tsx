import { Chip } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import { CHIP_CLASS_NAME } from '#da/components/main/ChipComponent/chip.constants';
import { ChipComponentProps } from '#da/components/main/ChipComponent/chip.props';
import '#da/components/main/ChipComponent/chip.styles.scss';

const ChipComponent: FC<ChipComponentProps> = ({ 
  className, disableBorderRadius, ...props 
}) => (
  <Chip 
    className={clsx(
      CHIP_CLASS_NAME.ROOT,
      disableBorderRadius && CHIP_CLASS_NAME.WITHOUT_BORDER_RADIUS,
      className
    )}
    {...props} 
  />
); 

export default ChipComponent;
