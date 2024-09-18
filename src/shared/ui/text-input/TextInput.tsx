import React from "react";
import { TextInputContainer } from "./styles";

type propsType = React.HTMLAttributes<HTMLInputElement> & {
  value: string;
  placeholder?: string;
};

export const TextInput = ({ id, value, placeholder, onChange }: propsType) => {
  return (
    <TextInputContainer
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
