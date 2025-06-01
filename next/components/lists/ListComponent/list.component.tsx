'use client';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { LIST_CLASS_NAME } from '#da/components/lists/ListComponent/list.constants';
import { ListComponentProps } from '#da/components/lists/ListComponent/list.props';
import LinkComponent from '#da/components/main/LinkComponent';

const ListComponent: FC<ListComponentProps> = ({ className, items, showActiveListItem, sx }) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <List className={clsx(LIST_CLASS_NAME.ROOT, className)} sx={sx}>
      {
        items.map((item, index) => {
          const label = 'i18n' in item ? t(item.i18n) : item.name;

          return (
            <ListItem 
              className={LIST_CLASS_NAME.LIST_ITEM} 
              key={`ListComponent-ListItem-${label}-${item?.to ? 'link' : 'button'}-${index}`}
            >
              <motion.div
                style={{ width: '100%' }}
                whileHover={{ 
                  scale: 0.95, 
                  transition: {
                    stiffness: 500,
                    type: 'spring'
                  } 
                }}
              >
                <ListItemButton
                  className={clsx(
                    item?.to ? LIST_CLASS_NAME.LINK : LIST_CLASS_NAME.BUTTON,
                    showActiveListItem && item?.to === pathname && LIST_CLASS_NAME.ACTIVE_LINK
                  )}
                  component={item?.to ? LinkComponent : 'button'}
                  onClick={item?.onClick}
                  {...item?.to && ({
                    isExternal: item.isExternal,
                    to: item.to
                  })}
                >
                  <ListItemText className={LIST_CLASS_NAME.TEXT} primary={label} />
                </ListItemButton>
              </motion.div>
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default ListComponent;
