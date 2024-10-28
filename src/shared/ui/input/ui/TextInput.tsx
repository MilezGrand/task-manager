import { HTMLAttributes } from "react";
import styled from "styled-components";

type propsType = HTMLAttributes<HTMLInputElement> & {
  value?: string;
};

const TextInput = ({ ...props }: propsType) => {
  return <StyledTextInput {...props} />;
};

const StyledTextInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  height: 38px;
  display: block;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  caret-color: #fc983c;

  &:focus {
    outline: 2px solid #fc983c;
  }
`;

export default TextInput;
