'use client';

import { Drawer, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import { FC, useCallback, useState } from 'react';

import CloseButtonComponent from '#da/components/buttons/CloseButtonComponent/closeButton.component';
import HamburgerButtonComponent from '#da/components/buttons/HamburgerButtonComponent';
import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import { BaseComponentProps } from '#da/types/props/common.props';

const HamburgerModule: FC<BaseComponentProps> = ({ className, sx }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  const onClose = useCallback(() => setIsEnabled(false), []);
  const onEnable = useCallback(() => setIsEnabled(true), []);

  return (
    <>
      <HamburgerButtonComponent 
        className={className} 
        enableTooltip 
        isEnabled={isEnabled}
        onEnable={onEnable}
        sx={sx}
      />
      <Drawer
        anchor='top' onClose={onClose}
        open={isEnabled}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid var(--mui-palette-grey-600)', p: 2 }}
        >
          <ProdiggyLogoComponent />
          <CloseButtonComponent enableTooltip />
        </Stack>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Test" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerModule;
