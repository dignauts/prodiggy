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
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: 'var(--mui-palette-grey-500)'
      }
    }
  },  
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeLarge: {
        fontSize: responsiveFontSize(40, 'rem')
      }
    }
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true
    },
    styleOverrides: {
      arrow: {
        color: 'var(--mui-palette-grey-400)'
      },
      tooltip: {
        backgroundColor: 'var(--mui-palette-grey-500)',
        border: '1px solid var(--mui-palette-grey-400)',
        borderRadius: 4,
        color: 'var(--mui-palette-text-primary)'
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
