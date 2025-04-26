import { Box, Stack } from '@mui/material';
import clsx from 'clsx';
import { forwardRef } from 'react';

import { NAVIGATION_LIST_CLASS_NAME, NAVIGATION_LIST_COMPONENT_NAME } from '#da/components/lists/NavigationListComponent/navigationList.constants';
import { NavigationListComponentProps } from '#da/components/lists/NavigationListComponent/navigationList.props';
import LinkComponent from '#da/components/main/LinkComponent';

const NavigationListComponent = forwardRef<HTMLUListElement, NavigationListComponentProps>(
  ({ gap, items, linkComponentProps }, ref) => (
    <Stack
      className={clsx('prodiggy-list--reset', NAVIGATION_LIST_CLASS_NAME.ROOT)}
      component="ul"
      gap={gap}
      ref={ref}
    >
      {
        items.map((link, index) => (
          <Box
            className={NAVIGATION_LIST_CLASS_NAME.LIST_ITEM}
            component="li"
            key={`NavigationListComponent-${link.name}-${link.to}-${index}`}
          >
            <LinkComponent {...linkComponentProps} to={link.to}>
              { link.name }
            </LinkComponent>
          </Box>
        ))
      }
    </Stack>
  ));

NavigationListComponent.displayName = NAVIGATION_LIST_COMPONENT_NAME;

export default NavigationListComponent;

