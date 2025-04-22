import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import { theme } from "#da/theme/settings.theme";

const ThemeProviderModule: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
);

export default ThemeProviderModule;
