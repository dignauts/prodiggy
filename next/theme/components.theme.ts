import { ThemeOptions } from "@mui/material";

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
  }
};
