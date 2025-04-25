import { Box, Stack } from '@mui/material';
import { forwardRef } from 'react';

import { NAVIGATION_LIST_COMPONENT_NAME } from '#da/components/lists/NavigationListComponent/navigationList.constants';
import { NavigationListComponentProps } from '#da/components/lists/NavigationListComponent/navigationList.props';

const NavigationListComponent = forwardRef<HTMLUListElement, NavigationListComponentProps>(
  ({ gap, items }, ref) => {
    const x = 0;

    return (
      <Stack
        component="ul"
        gap={gap}
        ref={ref}
      >
        <Box component="li">
          dd
        </Box>
      </Stack>
    );
  });

NavigationListComponent.displayName = NAVIGATION_LIST_COMPONENT_NAME;

export default NavigationListComponent;

