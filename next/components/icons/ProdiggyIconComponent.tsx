import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const ProdiggyIconComponent: FC<SvgIconProps> = ({ fill = 'currentColor', height, width, ...props }) => (
  <SvgIcon 
    height={height}
    viewBox="0 0 24 24" 
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.0302 8.89939C20.0302 12.5023 17.5836 15.5121 12.79 15.6029H10.1324V2.10895H12.5675C17.5069 2.10895 20.0302 4.90433 20.0302 8.89939Z" 
      fill={fill}
    />
    <path 
      d="M10.1324 15.6029V21.891C9.32365 21.8916 8.52268 21.7316 7.77527 21.4202C7.02785 21.1088 6.34863 20.6522 5.77637 20.0763C5.20412 19.5005 4.75004 18.8168 4.44007 18.0641C4.13009 17.3115 3.97029 16.5047 3.96979 15.6898V15.6029H10.1324Z"
      fill={fill}
    />
    <path 
      d="M5.86613 13.6343C6.91346 13.6343 7.76248 12.7789 7.76248 11.7237C7.76248 10.6686 6.91346 9.81315 5.86613 9.81315C4.81881 9.81315 3.96979 10.6686 3.96979 11.7237C3.96979 12.7789 4.81881 13.6343 5.86613 13.6343Z" 
      fill={fill} 
    />
  </SvgIcon>
);

export default ProdiggyIconComponent;
