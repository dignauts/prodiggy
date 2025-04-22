'use client';

import { styled, Typography, TypographyProps } from "@mui/material";

import { PRODIGGY_LOGO_COMPONENT_NAME } from "#da/components/logos/ProdiggyLogoComponent/prodiggyLogo.constants";
import { ProdiggyLogoComponentProps } from "#da/components/logos/ProdiggyLogoComponent/prodiggyLogo.props";
import { FONT_WEIGHT } from "#da/theme/constants.theme";

export const ProdiggyLogoLogotypeAtom = styled(Typography, {
  name: PRODIGGY_LOGO_COMPONENT_NAME,
  overridesResolver: (_, styles) => styles.logotype,
  slot: 'logotype'
})<TypographyProps>(() => ({
  fontWeight: FONT_WEIGHT.SEMIBOLD,
  textTransform: 'capitalize'
}));

export const ProdiggyLogoRootAtom = styled('div', {
  name: PRODIGGY_LOGO_COMPONENT_NAME,
  overridesResolver: (_, styles) => styles.root,
  slot: 'root'
})<ProdiggyLogoComponentProps>(({ color }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: 6,
  maxWidth: 'fit-content',
  ...(color === 'primary' && {
    color: 'var(--mui-palette-primary-main)'
  }),
  ...(color === 'textPrimary' && {
    color: 'var(--mui-palette-text-primary)'
  })
}));

