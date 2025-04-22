interface LetterSpacingUtilProps {
  percent: number;
  unit?: 'em';
}

export const letterSpacing = ({ percent, unit = 'em' }: LetterSpacingUtilProps) => {
  const value = percent / 100;

  return `${value}${unit}`;
};
