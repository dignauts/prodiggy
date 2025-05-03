'use client';

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC, useCallback, useState } from 'react';

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
        <Box
          sx={{ borderBottom: '1px solid var(--mui-palette-grey-600)', p: 2 }}>
          <ProdiggyLogoComponent />
        </Box>
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
