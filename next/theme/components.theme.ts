import { ThemeOptions } from '@mui/material';

import { responsiveFontSize } from '#da/theme/utils/responsiveFontSize.util';

export const components: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: 'var(--prodiggy-font-inter)'
      }
    }
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: '2xl'
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        fontSize: responsiveFontSize(40, 'rem')
      }
    }
  },
  LinkComponent: {
    defaultProps: {
      color: 'textSecondary'
    }
  },
  ProdiggyLogoComponent: {
    defaultProps: {
      color: 'textPrimary'
    }
  }
};
