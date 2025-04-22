import '@mui/material';
import { ComponentsOverrides, ComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';

import { PRODIGGY_LOGO_COMPONENT_NAME } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.constants';
import { ProdiggyLogoComponentProps } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.props';
// import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

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
    [PRODIGGY_LOGO_COMPONENT_NAME]?: {
      defaultProps?: ComponentsPropsList[PRODIGGY_LOGO_COMPONENT_NAME];
      styleOverrides?: ComponentsOverrides<Theme>[PRODIGGY_LOGO_COMPONENT_NAME];
      variants?: ComponentsVariants[PRODIGGY_LOGO_COMPONENT_NAME];
    };
  }

  interface ComponentNameToClassKey {
    [PRODIGGY_LOGO_COMPONENT_NAME]: 'logotype' | 'root';
  }

  interface ComponentsPropsList {
    [PRODIGGY_LOGO_COMPONENT_NAME]: Partial<ProdiggyLogoComponentProps>;
  }

  // interface Palette {
  //   darkGreen: Palette['grey'];
  //   green: Palette['grey'];
  // }

  // interface PaletteOptions {
  //   darkGreen?: PaletteOptions['grey'];
  //   green?: PaletteOptions['grey'];
  // }

  // interface TypographyVariants {
  //   bodyM: TypographyStyleOptions;
  //   bodyXL: TypographyStyleOptions;
  //   bodyXXL: TypographyStyleOptions;
  //   h7: TypographyStyleOptions;
  // }

  // interface TypographyVariantsOptions {
  //   bodyM?: TypographyStyleOptions;
  //   bodyXL?: TypographyStyleOptions;
  //   bodyXXL?: TypographyStyleOptions;
  //   h7?: TypographyStyleOptions;
  // }
}

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     darkGreen: true;
//     green: true;
//   }
// }

declare module '@mui/material/Typography' {
  // interface TypographyPropsVariantOverrides {
  //   bodyM: true;
  //   bodyXL: true;
  //   bodyXXL: true;
  //   h7: true;
  // }
}
