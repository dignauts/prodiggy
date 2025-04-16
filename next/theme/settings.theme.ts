'use client';

import { createTheme } from "@mui/material";

import { breakpoints } from "#da/theme/breakpoints.theme";
import { components } from "#da/theme/components.theme";

export const theme = createTheme({
  breakpoints,
  components,
  cssVariables: true
});
