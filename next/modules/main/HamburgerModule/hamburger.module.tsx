'use client';

import { Drawer } from '@mui/material';
import clsx from 'clsx';
import { FC, useCallback, useState } from 'react';

import HamburgerButtonComponent from '#da/components/buttons/HamburgerButtonComponent';
import BaseModalHeaderComponent from '#da/components/headers/BaseModalHeaderComponent/baseModalHeader.component';
import ListComponent from '#da/components/lists/ListComponent';
import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import { PRIMARY_NAVIGATION } from '#da/constants/navigation.constants';
import { HAMBURGER_CLASS_NAME } from '#da/modules/main/HamburgerModule/hamburger.constants';
import { BaseComponentProps } from '#da/types/props/common.props';
import '#da/modules/main/HamburgerModule/hamburger.styles.scss';

const HamburgerModule: FC<BaseComponentProps> = ({ className, sx }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const onClose = useCallback(() => setIsEnabled(false), []);
  const onEnable = useCallback(() => setIsEnabled(true), []);

  return (
    <>
      <HamburgerButtonComponent 
        className={clsx(HAMBURGER_CLASS_NAME.BUTTON, className)} 
        enableTooltip 
        isEnabled={isEnabled}
        onEnable={onEnable}
        sx={sx}
      />
      <Drawer
        anchor='top'
        className={HAMBURGER_CLASS_NAME.DRAWER} 
        onClose={onClose}
        open={isEnabled}
      >
        <BaseModalHeaderComponent className={HAMBURGER_CLASS_NAME.HEADER} onClose={onClose}>
          <ProdiggyLogoComponent />
        </BaseModalHeaderComponent>
        <ListComponent 
          className={HAMBURGER_CLASS_NAME.NAVIGATION}
          items={PRIMARY_NAVIGATION}
          showActiveListItem
        />
      </Drawer>
    </>
  );
};

export default HamburgerModule;
