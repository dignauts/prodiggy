enum MUI_SETTINGS {
  FONT_SIZE = 14,
  HTML_FONT_SIZE = 16
}

type Unit = 'em' | 'rem';

export const responsiveFontSize = (px: number, unit?: Unit) => (
  `${(px / MUI_SETTINGS.HTML_FONT_SIZE) * (MUI_SETTINGS.FONT_SIZE / 14)}${unit || 'em'}`
);
