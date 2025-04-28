'use client';

import { Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';

import ProdiggyLogoComponent from '#da/components/logos/ProdiggyLogoComponent';
import LinkComponent from '#da/components/main/LinkComponent';
import { INTERNAL_ROUTES } from '#da/constants/routing.constants';
import { useMediaQuery } from '#da/hooks/useMediaQuery';
import { LINKED_PRODIGGY_LOGO_CLASS_NAME } from '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.constants';

import '#da/modules/logos/LinkedProdiggyLogoModule/linkedProdiggyLogo.styles.css';

const LinkedProdiggyLogoComponent = () => {
  const t = useTranslations();
  const isMobile = useMediaQuery({ breakpoint: 'sm' });

  return (
    <Tooltip placement={isMobile ? 'bottom' : 'right'} title={t('button.return_to_home')}>
      <LinkComponent className={LINKED_PRODIGGY_LOGO_CLASS_NAME.ROOT} to={INTERNAL_ROUTES.HOME}>
        <ProdiggyLogoComponent />
      </LinkComponent>
    </Tooltip>
  );
};

export default LinkedProdiggyLogoComponent;
