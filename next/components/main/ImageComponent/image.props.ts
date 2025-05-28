import { ImageProps } from 'next/image';

export interface ImageComponentProps extends Omit<ImageProps, 'alt' | 'center'> {
  alt?: string;
  centered?: boolean;
  maxWidth?: number | string;
}
