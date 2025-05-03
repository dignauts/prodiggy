import '@mui/material';
import { ComponentsOverrides, ComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { PRODIGGY_LOGO_COMPONENT_NAME } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.constants';
import { ProdiggyLogoComponentProps } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.props';
import { LINK_COMPONENT_NAME } from './components/main/LinkComponent/link.constants';
import { LinkComponentProps } from './components/main/LinkComponent/link.props';
import { HamburgerButtonPalette } from './types/mui.types';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    '2xl': true;
  }
  
  interface Components {
    [LINK_COMPONENT_NAME]?: {
      defaultProps?: ComponentsPropsList['LinkComponent'];
      styleOverrides?: ComponentsOverrides<Theme>['LinkComponent'];
      variants?: ComponentsVariants['LinkComponent'];
    };
    [PRODIGGY_LOGO_COMPONENT_NAME]?: {
      defaultProps?: ComponentsPropsList['ProdiggyLogoComponent'];
      styleOverrides?: ComponentsOverrides<Theme>['ProdiggyLogoComponent'];
      variants?: ComponentsVariants['ProdiggyLogoComponent'];
    };
  }

  interface ComponentNameToClassKey {
    [LINK_COMPONENT_NAME]: 'root';
    [PRODIGGY_LOGO_COMPONENT_NAME]: 'logotype' | 'root';
  }

  interface ComponentsPropsList {
    [LINK_COMPONENT_NAME]: Partial<LinkComponentProps>;
    [PRODIGGY_LOGO_COMPONENT_NAME]: Partial<ProdiggyLogoComponentProps>;
  }

  interface Palette {
    hamburgerButton: HamburgerButtonPalette;
    // green: Palette['grey'];
  }

  interface PaletteOptions {
    hamburgerButton?: HamburgerButtonPalette;
    // green?: PaletteOptions['grey'];
  }

  interface TypographyVariants {
    p4: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    p4?: TypographyStyleOptions;
  }
}

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     darkGreen: true;
//     green: true;
//   }
// }

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p4: true;
  }
}
