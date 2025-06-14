'use client';

import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { forwardRef } from 'react';

import { BASE_LIST_ITEM_CLASS_NAME, BASE_LIST_ITEM_COMPONENT_NAME } from '#da/components/items/BaseListItemComponent/baseListItem.constants';
import { BaseListItemComponentProps } from '#da/components/items/BaseListItemComponent/baseListItem.props';
import '#da/components/items/BaseListItemComponent/baseListItem.styles.scss';

const BaseListItemComponent = forwardRef<HTMLLIElement, BaseListItemComponentProps>(({
  children, className, icon: Icon, sx
}, ref) => (
  <Box
    className={clsx(BASE_LIST_ITEM_CLASS_NAME.ROOT, className)} 
    component="li"
    ref={ref} 
    sx={sx}
  >
    {
      Icon && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.6,
            scale: { type: 'spring', visualDuration: 0.5, bounce: 0.3 }
          }}
        >
          <Icon className={BASE_LIST_ITEM_CLASS_NAME.ICON} fontSize='small' />
        </motion.div>
      )
    }
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
      }}
    >
      <Typography className={BASE_LIST_ITEM_CLASS_NAME.TEXT} variant='p3'>
        { children }
      </Typography>
    </motion.div>
  </Box>
));

BaseListItemComponent.displayName = BASE_LIST_ITEM_COMPONENT_NAME;

export default BaseListItemComponent;
