'use client';

import { useThemeProps } from '@mui/material';
import { forwardRef } from 'react';

import ProdiggyIconComponent from '#da/components/icons/prodiggyIcon.component';
import { ProdiggyLogoRootAtom, ProdiggyLogoLogotypeAtom } from '#da/components/logos/ProdiggyLogoComponent/prodiggyLogo.atoms';
import { PRODIGGY_LOGO_CLASS_NAME, PRODIGGY_LOGO_COMPONENT_NAME } from '#da/components/logos/ProdiggyLogoComponent/prodiggyLogo.constants';
import { ProdiggyLogoComponentProps } from '#da/components/logos/ProdiggyLogoComponent/prodiggyLogo.props';
import { COMPANY_NAME } from '#da/constants/common.constants';

const ProdiggyLogoComponent = forwardRef<HTMLDivElement, ProdiggyLogoComponentProps>((props, ref) => {
  const { color, ...themeProps } = useThemeProps({ props, name: PRODIGGY_LOGO_COMPONENT_NAME });

  return (
    <ProdiggyLogoRootAtom
      className={PRODIGGY_LOGO_CLASS_NAME.ROOT} 
      color={color || 'textPrimary'}
      ref={ref}
      {...themeProps}
    >
      <ProdiggyIconComponent className={PRODIGGY_LOGO_CLASS_NAME.LOGOMARK} fontSize="large" />
      <ProdiggyLogoLogotypeAtom
        className={PRODIGGY_LOGO_CLASS_NAME.LOGOTYPE}
        component='h1'
        variant='h4'
      >
        { COMPANY_NAME }
      </ProdiggyLogoLogotypeAtom>
    </ProdiggyLogoRootAtom>
  );
});

ProdiggyLogoComponent.displayName = PRODIGGY_LOGO_COMPONENT_NAME;

export default ProdiggyLogoComponent;
