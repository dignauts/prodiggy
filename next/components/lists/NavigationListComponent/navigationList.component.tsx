'use client';

import { Box, Stack } from '@mui/material';
import clsx from 'clsx';

import { NAVIGATION_LIST_CLASS_NAME } from '#da/components/lists/NavigationListComponent/navigationList.constants';
import { NavigationListComponentProps } from '#da/components/lists/NavigationListComponent/navigationList.props';
import { BaseLinkAPI } from '#da/types/api/common.api';

const NavigationListComponent = <T extends BaseLinkAPI>({
  className, gap, items, render, sx
}: NavigationListComponentProps<T>) => (
  <Stack
    className={clsx('prodiggy-list--reset', NAVIGATION_LIST_CLASS_NAME.ROOT, className)}
    component="ul"
    gap={gap}
    sx={sx}
  >
    {
      items.map((item, index) => (
        <Box
          className={NAVIGATION_LIST_CLASS_NAME.LIST_ITEM}
          component="li"
          key={`NavigationListComponent-${item.to}-${index}`}
        >
          { render(item) }
        </Box>
      ))
    }
  </Stack>
);

export default NavigationListComponent;

