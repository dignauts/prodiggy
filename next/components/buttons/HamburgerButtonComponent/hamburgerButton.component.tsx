'use client';

import { Box, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { HAMBURGER_BUTTON_CLASS_NAME, HAMBURGER_BUTTON_COMPONENT_NAME } from '#da/components/buttons/HamburgerButtonComponent/hamburgerButton.constants';
import { HamburgerButtonComponentProps } from '#da/components/buttons/HamburgerButtonComponent/hamburgerButton.props';

import '#da/components/buttons/HamburgerButtonComponent/hamburgerButton.styles.scss';

const defaultLabels: HamburgerButtonComponentProps['labels'] = {
  closed: 'hamburger.close', 
  open: 'hamburger.open'
};

const HamburgerButtonComponent = forwardRef<HTMLButtonElement, HamburgerButtonComponentProps>(({
  className, enableTooltip, labels = defaultLabels, isEnabled, onEnable, sx
}, ref) => {
  const t = useTranslations();

  return (
    <Tooltip disableHoverListener={!enableTooltip} title={t(isEnabled ? labels.closed : labels.open)}>
      <Box
        className={clsx(
          HAMBURGER_BUTTON_CLASS_NAME.ROOT, 
          isEnabled && HAMBURGER_BUTTON_CLASS_NAME.OPEN, 
          className
        )}
        component="button" 
        onClick={onEnable}
        ref={ref}
        sx={sx}
      >
        <div className={HAMBURGER_BUTTON_CLASS_NAME.INGREDIENT} />
      </Box>
    </Tooltip>
  );
});

HamburgerButtonComponent.displayName = HAMBURGER_BUTTON_COMPONENT_NAME;

export default HamburgerButtonComponent;
