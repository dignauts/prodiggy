import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

const BlocksIconComponent: FC<SvgIconProps> = ({ 
  fill = 'currentColor', height, width, ...props 
}) => (
  <SvgIcon
    height={height}
    viewBox="0 0 24 24" 
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_3298_1605)">
      <path d="M11.2501 3H3V11.2501H11.2501V3Z" fill={fill} />
      <path d="M19.5 12.75H14.2501C13.4254 12.75 12.75 13.4252 12.75 14.2499V19.5C12.75 20.3249 13.4254 20.9999 14.2501 20.9999H19.5C20.3249 20.9999 21.0001 20.3249 21.0001 19.5V14.2499C21.0001 13.4252 20.3249 12.75 19.5 12.75Z" fill={fill} />
      <path d="M16.8751 3C14.5972 3 12.75 4.84724 12.75 7.12581C12.75 9.40279 14.5972 11.2501 16.8751 11.2501C19.1528 11.2501 21.0001 9.40283 21.0001 7.12581C21.0001 4.84724 19.1528 3 16.8751 3Z" fill={fill} />
      <path d="M7.5 12.75L3 20.9999H12L7.5 12.75Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0_3298_1605">
        <rect
          height="18"
          transform="translate(3 3)"
          width="18" 
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default BlocksIconComponent;
