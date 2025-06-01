'use client';

import { Drawer } from '@mui/material';
import { motion } from 'motion/react';
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
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          scale: { type: 'spring', visualDuration: 0.55, bounce: 0.5 }
        }}
      >
        <HamburgerButtonComponent 
          className={HAMBURGER_CLASS_NAME.BUTTON} 
          enableTooltip 
          isEnabled={isEnabled}
          onEnable={onEnable}
          sx={sx}
        />
      </motion.div>
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
