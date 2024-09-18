import React from "react";
import { IconContainer } from "./styles";

type propsType = React.HTMLAttributes<HTMLDivElement>;

export const Icon = ({ children, onClick }: propsType) => {
  return <IconContainer onClick={onClick}>{children}</IconContainer>;
};
