import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

const TickIconComponent: FC<SvgIconProps> = ({
  fill = 'currentColor', ...props
}) => (
  <SvgIcon
    fill="none" 
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_3342_1610)">
      <path
        d="M20.7364 5.65424C20.385 5.30275 19.8151 5.30275 19.4636 5.65424L8.68106 16.4369L4.53642 12.2923C4.18496 11.9408 3.61515 11.9408 3.26362 12.2923C2.91213 12.6437 2.91213 13.2135 3.26362 13.565L8.04466 18.346C8.39601 18.6975 8.96624 18.6972 9.31745 18.346L20.7364 6.92704C21.0879 6.57558 21.0879 6.00574 20.7364 5.65424Z" 
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_3342_1610">
        <rect
          fill="white" 
          height="18"
          transform="translate(3 3)"
          width="18" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default TickIconComponent;
