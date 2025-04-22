import { ThemeOptions } from "@mui/material";

import { responsiveFontSize } from "#da/theme/utils/responsiveFontSize.util";

export const components: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    }
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: '2xl'
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      'fontSizeLarge': {
        fontSize: responsiveFontSize(40, 'rem')
      }
    }
  },
  ProdiggyLogoComponent: {
    'defaultProps': {
      color: 'textPrimary'
    }
  }
};
