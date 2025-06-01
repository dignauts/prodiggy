'use client';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import NavigationListComponent from '#da/components/lists/NavigationListComponent';
import LinkComponent from '#da/components/main/LinkComponent';
import { PRIMARY_NAVIGATION } from '#da/constants/navigation.constants';
import { PRIMARY_NAVIGATION_LIST_CLASS_NAME } from '#da/modules/lists/PrimaryNavigationListModule/primaryNavigationList.constants';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import { TranslatedLink } from '#da/types/i18n.types';
import { BaseComponentProps } from '#da/types/props/common.props';
import '#da/modules/lists/PrimaryNavigationListModule/primaryNavigationList.styles.scss';

const PrimaryNavigationListModule: FC<Pick<BaseComponentProps, 'className'>> = ({ className }) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.45 }
      }}
    >
      <NavigationListComponent<TranslatedLink> 
        className={clsx(PRIMARY_NAVIGATION_LIST_CLASS_NAME.ROOT, className)} 
        items={PRIMARY_NAVIGATION}
        render={({ isExternal, i18n, to }) => (
          <LinkComponent
            color='navigation'
            fontWeight={FONT_WEIGHT.MEDIUM}
            isActive={pathname === to}
            isExternal={isExternal}
            to={to}
            variant='p4'
          >
            { t(i18n) }
          </LinkComponent>
        )} 
      />
    </motion.div>
  );
};

export default PrimaryNavigationListModule;
