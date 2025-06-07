import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

const StarIconComponent: FC<SvgIconProps> = ({
  fill = 'currentColor', height, width, ...props
}) => (
  <SvgIcon
    fill="none" 
    height={height}
    viewBox="0 0 24 24" 
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_3312_1611)">
      <path
        d="M22.9427 9.43922C22.7986 8.99374 22.4035 8.67734 21.9361 8.63521L15.5862 8.05864L13.0754 2.18167C12.8902 1.75097 12.4686 1.47217 12.0001 1.47217C11.5316 1.47217 11.11 1.75097 10.9249 2.18268L8.41398 8.05864L2.06317 8.63521C1.59654 8.67835 1.20243 8.99374 1.05757 9.43922C0.912715 9.88469 1.04649 10.3733 1.39948 10.6813L6.19918 14.8907L4.78386 21.1252C4.6803 21.5836 4.85822 22.0574 5.23857 22.3324C5.44301 22.4801 5.6822 22.5553 5.9234 22.5553C6.13137 22.5553 6.33766 22.4992 6.5228 22.3884L12.0001 19.1148L17.4754 22.3884C17.8761 22.6294 18.3811 22.6075 18.7606 22.3324C19.1412 22.0566 19.3189 21.5826 19.2154 21.1252L17.8 14.8907L22.5997 10.6822C22.9527 10.3733 23.0875 9.88553 22.9427 9.43922Z" 
        fill={fill} 
      />
    </g>
    <defs>
      <clipPath id="clip0_3312_1611">
        <rect
          fill="white"
          height="22"
          transform="translate(1 1)"
          width="22"
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default StarIconComponent;
