import React from "react";
import { ButtonContainer } from "./styles";

type propsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
};

export const Button = ({ children, width, onClick }: propsType) => {
  return (
    <ButtonContainer width={width} onClick={onClick}>
      {" "}
      {children}
    </ButtonContainer>
  );
};
