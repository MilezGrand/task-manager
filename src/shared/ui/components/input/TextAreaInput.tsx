import { HTMLAttributes } from "react";
import styled from "styled-components";

type propsType = HTMLAttributes<HTMLTextAreaElement> & {
  value?: string;
};

const TextAreaInput = ({ ...props }: propsType) => {
  return <StyledTextArea defaultValue={props.value} {...props} />;
};

const StyledTextArea = styled.textarea`
  padding: 8px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 300px;
  display: block;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  caret-color: #fc983c;

  &:focus {
    outline: 2px solid #fc983c;
  }
`;

export default TextAreaInput;
