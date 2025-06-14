'use client';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
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
      <motion.div
        className={clsx(CLOSE_BUTTON_CLASS_NAME.ROOT, className)}
        whileHover={{ 
          scale: 1.2, 
          transition: {
            stiffness: 700,
            type: 'spring'
          } 
        }}
      >
        <IconButton
          className={CLOSE_BUTTON_CLASS_NAME.BUTTON}
          color={color}
          ref={ref}
          size={size}
          {...props}
        >
          <CloseIcon className={CLOSE_BUTTON_CLASS_NAME.ICON} />
        </IconButton>
      </motion.div>
    </Tooltip>
  );
});

CloseButtonComponent.displayName = CLOSE_BUTTON_COMPONENT_NAME;

export default CloseButtonComponent;
