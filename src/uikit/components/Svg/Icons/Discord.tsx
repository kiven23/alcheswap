import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({  ...props }) => {
  return (
    <img src="/images/discord.svg"  alt="Icon" {...props} />
  );
};

export default Icon;
