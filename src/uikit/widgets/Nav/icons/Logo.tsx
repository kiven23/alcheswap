import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 135 66" {...props}>
      <image width="135" height="66" href="/images/alchemistlogo3.png"/>
    </Svg>
  );
};

export default Logo;