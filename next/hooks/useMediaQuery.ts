import { Breakpoint, useMediaQuery as useMuiMediaQuery, useTheme } from '@mui/material';

interface MediaQueryProps {
  breakpoint: Breakpoint | number;
  type?: 'down' | 'up';
}

export const useMediaQuery = ({ breakpoint, type = 'down' }: MediaQueryProps) => {
  const { breakpoints } = useTheme();
  const isDetected = useMuiMediaQuery(
    type === 'down' ? breakpoints.down(breakpoint) : breakpoints.up(breakpoint)
  );

  return isDetected;
};
