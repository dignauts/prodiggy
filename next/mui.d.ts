import '@mui/material';
import { ComponentsOverrides, ComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { PRODIGGY_LOGO_COMPONENT_NAME } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.constants';
import { ProdiggyLogoComponentProps } from './components/logos/ProdiggyLogoComponent/prodiggyLogo.props';
import { LINK_COMPONENT_NAME } from './components/main/LinkComponent/link.constants';
import { LinkComponentProps } from './components/main/LinkComponent/link.props';
import { BASE_SECTION_COMPONENT_NAME } from './components/sections/BaseSectionComponent/baseSection.constants';
import { BaseSectionComponentProps } from './components/sections/BaseSectionComponent/baseSection.props';
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
    [BASE_SECTION_COMPONENT_NAME]?: {
      defaultProps?: ComponentsPropsList['BaseSectionComponent'];
      styleOverrides?: ComponentsOverrides<Theme>['BaseSectionComponent'];
      variants?: ComponentsVariants['BaseSectionComponent'];
    }
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
    [BASE_SECTION_COMPONENT_NAME]: 'container' | 'root';
    [LINK_COMPONENT_NAME]: 'root';
    [PRODIGGY_LOGO_COMPONENT_NAME]: 'logotype' | 'root';
  }

  interface ComponentsPropsList {
    [BASE_SECTION_COMPONENT_NAME]: Partial<BaseSectionComponentProps>;
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
    h2Small: TypographyStyleOptions;
    p2: TypographyStyleOptions;
    p3: TypographyStyleOptions;
    p4: TypographyStyleOptions;
    p5: TypographyStyleOptions;
    price: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    h2Small?: TypographyStyleOptions;
    p2?: TypographyStyleOptions;
    p3?: TypographyStyleOptions;
    p4?: TypographyStyleOptions;
    p5?: TypographyStyleOptions;
    price?: TypographyStyleOptions;
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
    h2Small: true;
    p2: true;
    p3: true;
    p4: true;
    p5: true;
    price: true;
  }
}
