'use client';

import { Badge, Tooltip } from '@mui/material';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import LinkComponent from '#da/components/main/LinkComponent';
import { ENV } from '#da/constants/env.constants';
import { INTERNAL_ROUTES } from '#da/constants/routing.constants';
import { useMediaQuery } from '#da/hooks/useMediaQuery';
import { LINKED_PRODIGGY_LOGO_CLASS_NAME } from '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.constants';
import { LinkedProdiggyLogoModuleProps } from '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.props';
import '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.styles.scss';

const LinkedProdiggyLogoModule: FC<LinkedProdiggyLogoModuleProps> = ({
  showAppVersion
}) => {
  const t = useTranslations();
  const isMobile = useMediaQuery({ breakpoint: 'sm' });

  return (
    <Tooltip placement={isMobile ? 'bottom' : 'right'} title={t('button.return_to_home')}>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.45 }
        }}
        whileHover={{ 
          scale: 0.9, 
          transition: {
            stiffness: 500,
            type: 'spring'
          } 
        }}
      >
        <Badge
          badgeContent={t('common.app_version', { version: ENV.APP_VERSION })}
          color='error'
          invisible={!showAppVersion}
        >
          <LinkComponent className={LINKED_PRODIGGY_LOGO_CLASS_NAME.ROOT} to={INTERNAL_ROUTES.HOME}>
            <ProdiggyLogoComponent />
          </LinkComponent>
        </Badge>
      </motion.div>
    </Tooltip>
  );
};

export default LinkedProdiggyLogoModule;
