/* eslint-disable max-lines */
import { ThemeOptions } from '@mui/material';

import OutlinedStarIconComponent from '#da/components/icons/outlinedStarIcon.component';
import StarIconComponent from '#da/components/icons/starIcon.component';
import { FONT_WEIGHT } from '#da/theme/constants.theme';
import { responsiveFontSize } from '#da/theme/utils/responsiveFontSize.util';

export const components: ThemeOptions['components'] = {
  MuiAccordion: {
    defaultProps: {
      disableGutters: true
    }
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },
    styleOverrides: {
      containedPrimary:{ 
        ':hover': {
          backgroundColor: 'var(--mui-palette-secondary-main)'
        }
      },
      containedSecondary: {
        backgroundColor: 'var(--mui-palette-grey-600)',
        ':hover': {
          backgroundColor: 'var(--mui-palette-secondary-main)'
        }
      },
      containedSizeLarge: {
        padding: 'calc(1.75*var(--mui-spacing)) calc(5*var(--mui-spacing))'
      },
      root: {
        textTransform: 'initial'
      },
      sizeLarge: {
        font: 'var(--mui-font-p4)',
        fontWeight: FONT_WEIGHT.MEDIUM
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: 'var(--mui-palette-grey-600)'
      },
      root: {
        borderRadius: 4
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
        background: 'var(--mui-palette-grey-700)'
      }
    }
  },  
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: 'var(--prodiggy-font-inter)'
      }
    }
  },
  MuiPaper: {
    defaultProps: {
      variant: 'outlined'
    },
    styleOverrides: {
      elevation: {
        backgroundColor: 'var(--mui-palette-grey-600)'
      },
      outlined: {
        backgroundColor: 'var(--mui-palette-grey-500)',
        borderColor: 'var(--mui-palette-grey-400)'
      },
      rounded: {
        borderRadius: 4
      }
    }
  },
  MuiRating: {
    defaultProps: {
      emptyIcon: <OutlinedStarIconComponent fontSize="inherit" />,
      icon: <StarIconComponent fontSize="inherit" />,
      precision: 0.5
    },
    styleOverrides: {
      iconEmpty: {
        color: 'var(--mui-palette-grey-400)'
      },
      iconFilled: {
        color: 'var(--mui-palette-grey-100)'
      },
      root: {
        gap: 'calc(1*var(--mui-spacing))'
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
  MuiTypography: {
    defaultProps: {
      component: 'p'
    }
  },
  BaseSectionComponent: {
    defaultProps: {
      color: 'primary',
      containerWidth: '2xl'
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
