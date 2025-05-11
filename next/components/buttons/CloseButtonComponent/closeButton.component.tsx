'use client';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { CLOSE_BUTTON_CLASS_NAME, CLOSE_BUTTON_COMPONENT_NAME } from '#da/components/buttons/CloseButtonComponent/closeButton.constants';
import { CloseButtonComponentProps } from '#da/components/buttons/CloseButtonComponent/closeButton.props';

const CloseButtonComponent = forwardRef<HTMLButtonElement, CloseButtonComponentProps>(({
  className, color = 'error', enableTooltip, size = 'small', ...props 
}, ref) => {
  const t = useTranslations();

  return (
    <Tooltip disableHoverListener={!enableTooltip} title={t('hamburger.close')}>
      <IconButton
        className={clsx(CLOSE_BUTTON_CLASS_NAME.ROOT, className)}
        color={color}
        ref={ref}
        size={size}
        {...props}
      >
        <CloseIcon className={CLOSE_BUTTON_CLASS_NAME.ICON} />
      </IconButton>
    </Tooltip>
  );
});

CloseButtonComponent.displayName = CLOSE_BUTTON_COMPONENT_NAME;

export default CloseButtonComponent;
