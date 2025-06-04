'use client';

import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

const BoltIconComponent: FC<SvgIconProps> = ({
  fill = 'currentColor', height, width, ...props
}) => (
  <SvgIcon
    height={height}
    viewBox="0 0 24 24" 
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.1108 3.5624C13.0241 3.56665 12.9444 3.61139 12.8949 3.68269L6.42558 12.9634C6.29551 13.1498 6.42894 13.4056 6.65629 13.4056H11.1321L10.5949 20.1341C10.5739 20.4186 10.9407 20.5501 11.1052 20.3171L17.5745 11.0369C17.7044 10.8507 17.5714 10.5952 17.3443 10.5947H12.868L13.4057 3.86562C13.4192 3.69618 13.2805 3.55358 13.1108 3.5624V3.5624Z" 
      fill={fill} 
    />
  </SvgIcon>
);

export default BoltIconComponent;
