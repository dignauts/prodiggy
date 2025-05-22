import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { IMAGE_CLASS_NAME } from '#da/components/main/ImageComponent/image.constants';
import { ImageComponentProps } from '#da/components/main/ImageComponent/image.props';
import '#da/components/main/ImageComponent/image.styles.scss';

const ImageComponent: FC<ImageComponentProps> = ({ 
  alt, centered, className, maxWidth, ...props
}) => (
  <div
    className={clsx(
      IMAGE_CLASS_NAME.ROOT,
      centered && IMAGE_CLASS_NAME.CENTERED,
      className
    )} 
    style={{ maxWidth }}
  >
    <Image
      alt={alt || ''}
      className={clsx(
        IMAGE_CLASS_NAME.IMAGE,
        props?.fill && IMAGE_CLASS_NAME.IMAGE_FILLED
      )} 
      {...props}
    />
  </div>
);

export default ImageComponent;
