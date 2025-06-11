'use client';

import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';

import { BASE_LIST_ITEM_CLASS_NAME, BASE_LIST_ITEM_COMPONENT_NAME } from '#da/components/items/BaseListItemComponent/baseListItem.constants';
import { BaseListItemComponentProps } from '#da/components/items/BaseListItemComponent/baseListItem.props';
import '#da/components/items/BaseListItemComponent/baseListItem.styles.scss';

const BaseListItemComponent = forwardRef<HTMLLIElement, BaseListItemComponentProps>(({
  children, className, icon: Icon, sx
}, ref) => (
  <Box
    className={clsx(BASE_LIST_ITEM_CLASS_NAME.ROOT, className)} 
    component="li"
    ref={ref} 
    sx={sx}
  >
    {
      Icon && <Icon className={BASE_LIST_ITEM_CLASS_NAME.ICON} fontSize='small' />
    }
    <Typography className={BASE_LIST_ITEM_CLASS_NAME.TEXT} variant='p3'>
      { children }
    </Typography>
  </Box>
));

BaseListItemComponent.displayName = BASE_LIST_ITEM_COMPONENT_NAME;

export default BaseListItemComponent;
