import { Box } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import BaseListItemComponent from '#da/components/items/BaseListItemComponent';
import { BASE_LIST_CLASS_NAME } from '#da/components/lists/BaseListComponent/baseList.constants';
import { BaseListComponentProps } from '#da/components/lists/BaseListComponent/baseList.props';

const BaseListComponent: FC<BaseListComponentProps> = ({
  className, icon, items, sx
}) => (
  <Box
    className={clsx('prodiggy-list--reset', BASE_LIST_CLASS_NAME.ROOT, className)} 
    component="ul"
    sx={sx}
  >
    {
      items.map((item, index) => (
        <BaseListItemComponent
          icon={icon}
          key={`BaseListComponent-BaseListItemComponent-${item.children}-${index}`}
          {...item}
        />
      ))
    }
  </Box>
);

export default BaseListComponent;
