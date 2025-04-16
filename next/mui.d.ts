import '@mui/material';
// import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    '2xl': true;
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
