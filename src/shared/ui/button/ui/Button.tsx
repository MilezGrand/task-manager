import { ButtonHTMLAttributes } from "react";
import { PrimaryButton, SecondaryButton } from "./style";

type propsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "primary",
  ...props
}: propsType) => {
  switch (variant) {
    case "primary":
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
  }
};

export default Button;
