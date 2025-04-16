import type { SxProps } from '@mui/system';

type Props<T extends object> = (SxProps<T> | false | undefined)[];

export const mergeStyles = <T extends object>(...styles: Props<T>): SxProps<T> => (
  styles.reduce<SxProps<T>>((accumulator, sx) => {
    if (sx) {
      return Array.isArray(sx)
        ? { ...accumulator, ...Object.assign({}, ...sx) }
        : { ...accumulator, ...sx };
    }

    return accumulator;
  }, {} as SxProps<T>)
);
