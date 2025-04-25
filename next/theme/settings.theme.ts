'use client';

import { createTheme } from '@mui/material';

import { breakpoints } from '#da/theme/breakpoints.theme';
import { components } from '#da/theme/components.theme';
import { darkPalette } from '#da/theme/palettes/dark.palette';
import { typography } from '#da/theme/typography.theme';

export const theme = createTheme({
  breakpoints,
  components,
  cssVariables: true,
  palette: darkPalette,
  typography
});
