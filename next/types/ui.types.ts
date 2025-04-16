import { Breakpoint, SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

export type InlineStyles<T extends string> = {
  [inlineStyle in T]?: CSSProperties;
};

export interface MediaQuery {
  breakpoint: Breakpoint | number;
  mediaFeature?: 'min-width' | 'max-width';
  mediaType?: 'all' | 'print' | 'screen' | 'speech';
}

export type Styles<T extends string> = {
  [style in T]?: Style;
};

export type Style = SxProps<Theme>;
